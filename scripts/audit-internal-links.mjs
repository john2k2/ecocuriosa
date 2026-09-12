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
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = value.split('#')[0].split('?')[0];
    if (target.startsWith('/') && !target.startsWith('//')) targets.add(target);
  }
}

const missing = [];
for (const target of targets) {
  let relative = target.slice(1);
  if (target === '/') relative = 'index.html';
  else if (!path.extname(relative)) relative = `${relative.replace(/\/$/, '')}/index.html`;

  try {
    await stat(path.join(dist, relative));
  } catch {
    missing.push(target);
  }
}

console.log(`Enlaces y recursos internos comprobados: ${targets.size}`);
console.log(`Páginas HTML analizadas: ${htmlFiles.length}`);
console.log(`Rutas internas faltantes: ${missing.length}`);

if (missing.length) {
  console.error(`Rutas rotas: ${missing.join(', ')}`);
  process.exitCode = 1;
}
