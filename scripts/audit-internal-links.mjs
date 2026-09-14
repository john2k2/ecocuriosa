import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const htmlFiles = [];

async function walk(directory) {
  for (const name of await readdir(directory)) {
    const file = path.join(directory, name);
    const info = await stat(file);
    if (info.isDirectory()) {
      await walk(file);
    } else if (name.endsWith('.html')) {
      htmlFiles.push(file);
    }
  }
}

try {
  await walk(dist);
} catch {
  console.error('No existe dist/. Ejecuta primero el build.');
  process.exitCode = 1;
}

const targets = new Set();
const pageRoutes = new Map();
const indexableRoutes = new Set();

function routeForFile(file) {
  let relative = path.relative(dist, file).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'/index.html'.length)}/`;
  return `/${relative}`;
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const route = routeForFile(file);
  pageRoutes.set(file, route);
  const noindex = /<meta\s+name="robots"[^>]*content="[^"]*noindex/i.test(html);
  const verificationFile = html.includes('google-site-verification:');
  if (!noindex && route !== '/404.html' && !verificationFile) indexableRoutes.add(route);
  for (const [, value] of html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)) {
    const values = value.split(',').map((entry) => entry.trim().split(/\s+/)[0]);
    for (const candidate of values) {
      const target = candidate.split('#')[0].split('?')[0];
      if (target.startsWith('/') && !target.startsWith('//')) targets.add(target);
    }
  }
}

const incoming = new Map([...indexableRoutes].map((route) => [route, new Set()]));
for (const file of htmlFiles) {
  const fromRoute = pageRoutes.get(file);
  const html = await readFile(file, 'utf8');
  for (const [, value] of html.matchAll(/href="([^"]+)"/g)) {
    const target = value.split('#')[0].split('?')[0];
    if (!target.startsWith('/') || target.startsWith('//')) continue;
    const normalized = target === '/' ? '/' : target.endsWith('/') ? target : `${target}/`;
    if (incoming.has(normalized) && normalized !== fromRoute) incoming.get(normalized).add(fromRoute);
  }
}

const orphanRoutes = [...incoming].filter(([, sources]) => sources.size === 0).map(([route]) => route);

const missing = [];
const nonCanonicalRoutes = [];
for (const target of targets) {
  let relative = target.slice(1);
  if (target === '/') relative = 'index.html';
  else if (!path.extname(relative)) {
    if (!relative.endsWith('/')) nonCanonicalRoutes.push(target);
    relative = `${relative.replace(/\/$/, '')}/index.html`;
  }

  try {
    await stat(path.join(dist, relative));
  } catch {
    missing.push(target);
  }
}

console.log(`Enlaces y recursos internos comprobados: ${targets.size}`);
console.log(`Páginas HTML analizadas: ${htmlFiles.length}`);
console.log(`Rutas internas faltantes: ${missing.length}`);
console.log(`Rutas HTML sin barra final: ${nonCanonicalRoutes.length}`);
console.log(`Páginas indexables sin enlaces entrantes: ${orphanRoutes.length}`);

if (missing.length) {
  console.error(`Rutas rotas: ${missing.join(', ')}`);
  process.exitCode = 1;
}
if (nonCanonicalRoutes.length) {
  console.error(`Rutas no canónicas: ${nonCanonicalRoutes.join(', ')}`);
  process.exitCode = 1;
}
if (orphanRoutes.length) {
  console.error(`Páginas huérfanas: ${orphanRoutes.join(', ')}`);
  process.exitCode = 1;
}
