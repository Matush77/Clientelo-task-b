"""Inline a site file and the e-mail into a device-showcase page (v12, v13, ...).

The showcase renders the site and the e-mail in iframes via `srcdoc`, so it also works
when the page is viewed as a single file/snapshot. Re-run after editing a source file:

  python -I scripts/inline_v12_preview.py design/previews            # v12
  python -I scripts/inline_v12_preview.py design/previews 13         # v13 (uses v12-email.html)
"""
import json
import re
import sys
from pathlib import Path


def js_string(text):
    # JSON-encode and escape "</" so the payload cannot close the <script> tag early.
    return json.dumps(text).replace("</", "<\\/")


def main(folder, version="12"):
    d = Path(folder)
    site = (d / f"v{version}-site.html").read_text(encoding="utf-8")
    email_file = d / f"v{version}-email.html"
    email = (email_file if email_file.exists() else d / "v12-email.html").read_text(encoding="utf-8")
    show = d / f"v{version}.html"
    page = show.read_text(encoding="utf-8")
    payload = "window.SITE=" + js_string(site) + ";window.EMAIL=" + js_string(email) + ";"
    page, n = re.subn(r'<script id="inline">.*?</script>', lambda m: '<script id="inline">' + payload + "</script>", page, count=1, flags=re.S)
    if n != 1:
        sys.exit(f"inline slot not found in {show.name}")
    show.write_text(page, encoding="utf-8")
    print(f"inlined site ({len(site)} chars) and e-mail ({len(email)} chars) into {show}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "design/previews", sys.argv[2] if len(sys.argv) > 2 else "12")
