"""Render Claude Code session transcripts (JSONL) as readable Markdown in ai-log/.

Usage:
  python -I scripts/export_ai_log.py <transcript.jsonl>     # manual
  python -I scripts/export_ai_log.py < hook-input.json      # from a Stop/SubagentStop hook

Writes ai-log/<date>_session-<id>.md for the main conversation and
ai-log/<date>_session-<id>_agents/<agent>.md for every subagent. Thinking
blocks are omitted; long tool inputs/results are truncated.
"""
import json
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "ai-log"

TOOL_INPUT_LIMIT = 4000
TOOL_RESULT_LIMIT = 1200
EMAIL_RE = re.compile(r"[\w.+-]+@gmail\.com")
SYSTEM_REMINDER_RE = re.compile(r"<system-reminder>.*?</system-reminder>", re.S)


def clean(text):
    text = SYSTEM_REMINDER_RE.sub("", text)
    return EMAIL_RE.sub("[email]", text).strip()


def cut(text, limit):
    text = clean(text)
    if len(text) <= limit:
        return text
    return text[:limit] + f"\n… [truncated, {len(text) - limit} more chars]"


def fence(text):
    ticks = "````" if "```" in text else "```"
    return f"{ticks}\n{text}\n{ticks}"


def render_tool_use(block):
    name = block.get("name", "?")
    inp = block.get("input") or {}
    if name == "Agent":
        head = f"**→ Agent** ({inp.get('subagent_type', 'general-purpose')}, model: {inp.get('model', 'inherit')}) — {inp.get('description', '')}"
        return head + "\n\n" + fence(cut(inp.get("prompt", ""), TOOL_INPUT_LIMIT))
    if name in ("Write",):
        body = cut(inp.get("content", ""), TOOL_INPUT_LIMIT)
        return f"**→ Write** `{inp.get('file_path', '')}`\n\n" + fence(body)
    if name == "Edit":
        return f"**→ Edit** `{inp.get('file_path', '')}`\n\n" + fence(
            cut(f"- {inp.get('old_string', '')}\n+ {inp.get('new_string', '')}", TOOL_INPUT_LIMIT)
        )
    if name in ("Bash", "PowerShell"):
        desc = inp.get("description", "")
        return f"**→ {name}** — {desc}\n\n" + fence(cut(inp.get("command", ""), TOOL_INPUT_LIMIT))
    if name == "Read":
        return f"**→ Read** `{inp.get('file_path', '')}`"
    if name == "WebSearch":
        return f"**→ WebSearch** `{inp.get('query', '')}`"
    if name == "WebFetch":
        return f"**→ WebFetch** {inp.get('url', '')}" + (
            f"\n\n> prompt: {cut(inp.get('prompt', ''), 400)}" if inp.get("prompt") else ""
        )
    return f"**→ {name}**\n\n" + fence(cut(json.dumps(inp, ensure_ascii=False, indent=1), 1500))


def result_text(block):
    content = block.get("content")
    if isinstance(content, str):
        return content
    parts = []
    for c in content or []:
        if c.get("type") == "text":
            parts.append(c.get("text", ""))
        else:
            parts.append(f"[{c.get('type')}]")
    return "\n".join(parts)


def render(jsonl_path, title):
    lines = [f"# {title}", ""]
    for raw in Path(jsonl_path).read_text(encoding="utf-8").splitlines():
        try:
            entry = json.loads(raw)
        except json.JSONDecodeError:
            continue
        kind = entry.get("type")
        msg = entry.get("message") or {}
        content = msg.get("content")
        stamp = (entry.get("timestamp") or "")[:19].replace("T", " ")

        if kind == "user":
            if entry.get("isMeta"):
                text = content if isinstance(content, str) else result_text({"content": content})
                first = clean(text).splitlines()[0] if clean(text) else ""
                lines += [f"*[context injected: {first[:120]}]*", ""]
                continue
            if isinstance(content, str):
                text = clean(content)
                if text:
                    lines += [f"## 👤 User · {stamp}", "", text, ""]
                continue
            for block in content or []:
                if block.get("type") == "tool_result":
                    text = cut(result_text(block), TOOL_RESULT_LIMIT)
                    if text:
                        lines += ["<details><summary>result</summary>", "", fence(text), "", "</details>", ""]
                elif block.get("type") == "text":
                    text = clean(block.get("text", ""))
                    if text:
                        lines += [f"## 👤 User · {stamp}", "", text, ""]
        elif kind == "assistant":
            for block in content or []:
                if block.get("type") == "text" and block.get("text", "").strip():
                    lines += [f"### 🤖 Claude · {stamp}", "", clean(block["text"]), ""]
                elif block.get("type") == "tool_use":
                    lines += [render_tool_use(block), ""]
    return "\n".join(lines)


def export(transcript):
    transcript = Path(transcript)
    session = transcript.stem
    date = datetime.fromtimestamp(transcript.stat().st_mtime).strftime("%Y-%m-%d")
    base = f"{date}_session-{session[:8]}"
    OUT.mkdir(exist_ok=True)
    (OUT / f"{base}.md").write_text(
        render(transcript, f"Claude Code session {session[:8]} — main conversation"), encoding="utf-8"
    )
    sub_dir = transcript.with_suffix("") / "subagents"
    if sub_dir.is_dir():
        agents_out = OUT / f"{base}_agents"
        agents_out.mkdir(exist_ok=True)
        for sub in sorted(sub_dir.glob("*.jsonl")):
            meta_path = sub.with_suffix(".meta.json")
            meta = json.loads(meta_path.read_text(encoding="utf-8")) if meta_path.exists() else {}
            desc = meta.get("description", sub.stem)
            slug = re.sub(r"[^a-z0-9]+", "-", desc.lower()).strip("-") or sub.stem
            title = f"Subagent: {desc} ({meta.get('agentType', '?')}, model: {meta.get('model', '?')})"
            (agents_out / f"{slug}.md").write_text(render(sub, title), encoding="utf-8")


def main():
    if len(sys.argv) > 1:
        export(sys.argv[1])
        return
    data = json.loads(sys.stdin.read() or "{}")
    path = data.get("transcript_path")
    if not path:
        return
    path = Path(path)
    # SubagentStop passes the subagent's transcript; export the parent session instead.
    if path.parent.name == "subagents":
        path = path.parent.parent.with_suffix(".jsonl")
    if path.exists():
        export(path)


if __name__ == "__main__":
    main()
