// Local dev server: serves public/ and routes /api/<name> to api/<name>.js (Vercel-style handlers).
// No Vercel login needed. Without Upstash/Brevo env vars the API uses an in-memory store and a console mailer.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { pathToFileURL } from 'node:url';

// load .env.local if present (simple KEY=VALUE lines)
if (existsSync('.env.local')) {
  for (const line of readFileSync('.env.local', 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*([^#]*?)\s*(#.*)?$/);
    if (m && m[2] && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const PORT = Number(process.env.PORT || 3000);
const ROOT = 'public';
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webp': 'image/webp' };

// minimal Vercel-like req/res helpers
function enhance(req, res, body, url) {
  req.query = Object.fromEntries(url.searchParams);
  req.body = body;
  res.status = code => { res.statusCode = code; return res; };
  res.json = obj => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(obj)); return res; };
  res.send = txt => { res.end(txt); return res; };
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  try {
    if (url.pathname.startsWith('/api/')) {
      const name = url.pathname.slice(5).replace(/[^a-z0-9-]/gi, '');
      const file = join('api', name + '.js');
      if (!existsSync(file)) { res.statusCode = 404; return res.end('not found'); }
      let raw = '';
      for await (const chunk of req) raw += chunk;
      let body = raw;
      try { body = raw ? JSON.parse(raw) : {}; } catch { /* keep text */ }
      enhance(req, res, body, url);
      const mod = await import(pathToFileURL(file).href + '?t=' + Date.now());
      return await mod.default(req, res);
    }
    let path = normalize(join(ROOT, decodeURIComponent(url.pathname)));
    if (!path.startsWith(ROOT)) { res.statusCode = 403; return res.end(); }
    const s = await stat(path).catch(() => null);
    if (s?.isDirectory()) path = join(path, 'index.html');
    else if (!s && existsSync(path + '.html')) path += '.html';   // clean URLs like Vercel
    const data = await readFile(path);
    res.setHeader('Content-Type', TYPES[extname(path)] || 'application/octet-stream');
    res.end(data);
  } catch (e) {
    if (e.code === 'ENOENT') { res.statusCode = 404; return res.end('not found'); }
    console.error(e); res.statusCode = 500; res.end('server error');
  }
}).listen(PORT, () => console.log(`Veenos dev server: http://localhost:${PORT}`));
