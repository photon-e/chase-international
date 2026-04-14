import fs from 'node:fs';
import path from 'node:path';

const sourceStaticDir = path.join(process.cwd(), '.next', 'static');
const targetStaticDir = path.join(process.cwd(), '.next', '_next', 'static');

if (!fs.existsSync(sourceStaticDir)) {
  console.log('[postbuild] .next/static not found, skipping Netlify static asset mirror.');
  process.exit(0);
}

fs.mkdirSync(path.dirname(targetStaticDir), { recursive: true });
fs.cpSync(sourceStaticDir, targetStaticDir, { recursive: true });

console.log('[postbuild] Mirrored .next/static -> .next/_next/static for static file hosts.');
