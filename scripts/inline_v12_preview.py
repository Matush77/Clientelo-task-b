"""Inline design/previews/v12-site.html and v12-email.html into v12.html.

The device showcase (v12.html) renders the site and the e-mail in iframes via `srcdoc`,
so it also works when the page is viewed as a single file/snapshot. Re-run after editing
either source file:

  python -I scripts/inline_v12_preview.py design/previews
"""
import json
import re
import sys
from pathlib import Path


def js_string(text):
    # JSON-encode and escape "</" so the payload cannot close the <script> tag early.
    return json.dumps(text).replace("</", "<\\/")


def main(folder):
    d = Path(folder)
    site = (d / "v12-site.html").read_text(encoding="utf-8")
    email = (d / "v12-email.html").read_text(encoding="utf-8")
    show = d / "v12.html"
    page = show.read_text(encoding="utf-8")
    payload = "window.SITE=" + js_string(site) + ";window.EMAIL=" + js_string(email) + ";"
    page, n = re.subn(r'<script id="inline">.*?</script>', lambda m: '<script id="inline">' + payload + "</script>", page, count=1, flags=re.S)
    if n != 1:
        sys.exit("inline slot not found in v12.html")
    show.write_text(page, encoding="utf-8")
    print(f"inlined site ({len(site)} chars) and e-mail ({len(email)} chars) into {show}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "design/previews")
