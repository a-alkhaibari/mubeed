import { readdir, readFile, writeFile, mkdir, cp, rm, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { minify as minifyHtml } from 'html-minifier-terser';
import { transform as esbuildTransform } from 'esbuild';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

const excludeTopLevel = new Set([
  'dist',
  'node_modules',
  '.git',
  '.firebase',
  '.claude',
  '.agents',
  'scripts',
  'package.json',
  'package-lock.json',
  'firebase.json',
  '.firebaserc',
  '.gitignore',
  'skills-lock.json',
  'PROJECT.md',
  'CLAUDE.md',
]);

const htmlOpts = {
  collapseWhitespace: true,
  conservativeCollapse: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeEmptyAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true,
  decodeEntities: false,
  sortAttributes: true,
  sortClassName: true,
};

async function copyTree(srcDir, dstDir, isRoot = false) {
  const entries = await readdir(srcDir, { withFileTypes: true });
  for (const e of entries) {
    if (isRoot && excludeTopLevel.has(e.name)) continue;
    if (e.name.startsWith('.')) continue;
    const src = join(srcDir, e.name);
    const dst = join(dstDir, e.name);
    if (e.isDirectory()) {
      await mkdir(dst, { recursive: true });
      await copyTree(src, dst, false);
    } else if (e.isFile()) {
      await cp(src, dst);
    }
  }
}

async function walkFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walkFiles(p)));
    else if (e.isFile()) out.push(p);
  }
  return out;
}

async function fileSize(p) {
  return (await stat(p)).size;
}

console.log('clean dist/');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

console.log('copy tree');
await copyTree(root, dist, true);

console.log('minify');
const files = await walkFiles(dist);
let html = 0, css = 0, js = 0;
let savedBytes = 0;

for (const f of files) {
  const ext = extname(f);
  if (ext === '.html') {
    const src = await readFile(f, 'utf8');
    const out = await minifyHtml(src, htmlOpts);
    savedBytes += Buffer.byteLength(src) - Buffer.byteLength(out);
    await writeFile(f, out);
    html++;
  } else if (ext === '.css') {
    const src = await readFile(f, 'utf8');
    const r = await esbuildTransform(src, { loader: 'css', minify: true });
    savedBytes += Buffer.byteLength(src) - Buffer.byteLength(r.code);
    await writeFile(f, r.code);
    css++;
  } else if (ext === '.js') {
    const src = await readFile(f, 'utf8');
    const r = await esbuildTransform(src, { loader: 'js', minify: true });
    savedBytes += Buffer.byteLength(src) - Buffer.byteLength(r.code);
    await writeFile(f, r.code);
    js++;
  }
}

const kb = (n) => (n / 1024).toFixed(1) + 'KB';
console.log(`done: html=${html} css=${css} js=${js} saved=${kb(savedBytes)}`);
