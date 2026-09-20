import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const distDirectory = path.join(process.cwd(), 'dist');
const htmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(entryPath));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(entryPath);
  }
  return files;
};

const files = await htmlFiles(distDirectory);
const issues = [];
let imageCount = 0;
let namedCount = 0;
let decorativeCount = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(distDirectory, file).replaceAll(path.sep, '/');
  if (/^google[a-f0-9]+\.html$/i.test(relative)) continue;

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    imageCount += 1;
    const element = match[0];
    const alt = element.match(/\balt="([^"]*)"/i);
    const isDecorative = /\b(?:role="presentation"|aria-hidden="true")/i.test(element);
    if (!alt) {
      issues.push(`${relative}: imagen sin atributo alt`);
      continue;
    }
    if (alt[1].trim()) {
      namedCount += 1;
      continue;
    }
    if (isDecorative) decorativeCount += 1;
    else issues.push(`${relative}: imagen con alt vacío sin marcado decorativo`);
  }
}

console.log(`Imágenes HTML comprobadas: ${imageCount}`);
console.log(`Imágenes con nombre accesible no vacío: ${namedCount}`);
console.log(`Imágenes decorativas marcadas: ${decorativeCount}`);
console.log(`Incidencias de nombre accesible: ${issues.length}`);
if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
}
