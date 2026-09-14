import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const directory = path.join(root, 'public', 'images', 'articles');
const widths = [400, 800];

for (const filename of await readdir(directory)) {
  if (!filename.endsWith('.webp') || /-(400|800)\.webp$/i.test(filename)) continue;

  const source = path.join(directory, filename);
  const basename = filename.replace(/\.webp$/i, '');
  for (const width of widths) {
    const destination = path.join(directory, `${basename}-${width}.webp`);
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(destination);
  }
}

console.log(`Variantes responsive generadas: ${widths.length} por imagen WebP original.`);
