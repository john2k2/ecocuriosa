import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src', 'content', 'articles');
const filenames = (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md')).sort();
const missing = [];
let sourceCount = 0;
let linkedCount = 0;

for (const filename of filenames) {
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const body = article.slice(article.indexOf('---', 4) + 3);
  const urls = [...frontmatter.matchAll(/^\s+url:\s*["'](https:\/\/[^"']+)["']\s*$/gm)].map(([, url]) => url.trim());

  for (const url of urls) {
    sourceCount += 1;
    if (body.includes(`](${url})`)) {
      linkedCount += 1;
    } else {
      missing.push(`${filename}: ${url}`);
    }
  }
}

console.log(`Artículos comprobados: ${filenames.length}`);
console.log(`Fuentes del frontmatter: ${sourceCount}`);
console.log(`Fuentes enlazadas exactamente en el cuerpo: ${linkedCount}`);
console.log(`Fuentes sin enlace corporal: ${missing.length}`);

if (missing.length) {
  console.error(missing.join('\n'));
  process.exitCode = 1;
}
