import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src', 'content', 'articles');
const publicDirectory = path.join(root, 'public');
const requiredWidths = [400, 800, 1200];
const missing = [];
const invalid = [];

for (const filename of await readdir(articlesDirectory)) {
  if (!filename.endsWith('.md')) continue;
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const image = article.match(/^image:\s*["']([^"']+)["']\s*$/m)?.[1];
  if (!image?.toLowerCase().endsWith('.svg')) continue;

  const webp = image.replace(/\.svg$/i, '.webp');
  for (const width of requiredWidths) {
    const candidate = width === 1200 ? webp : webp.replace(/\.webp$/i, `-${width}.webp`);
    const file = path.join(publicDirectory, candidate.replace(/^\//, ''));
    try {
      await stat(file);
      const metadata = await sharp(file).metadata();
      if (typeof metadata.width !== 'number' || metadata.width < width) {
        invalid.push(`${candidate} (${metadata.width ?? 'sin ancho'}px; mínimo ${width}px)`);
      }
    } catch {
      missing.push(candidate);
    }
  }
}

console.log(`Variantes responsive comprobadas: ${requiredWidths.length} por artículo con ilustración SVG.`);
console.log(`Archivos faltantes: ${missing.length}`);
console.log(`Anchos inválidos: ${invalid.length}`);

if (missing.length || invalid.length) {
  if (missing.length) console.error(`Faltan: ${missing.join(', ')}`);
  if (invalid.length) console.error(`Inválidos: ${invalid.join(', ')}`);
  process.exitCode = 1;
}
