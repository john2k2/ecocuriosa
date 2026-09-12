import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src/content/articles');
const distDirectory = path.join(root, 'dist');

try {
  await stat(distDirectory);
} catch {
  console.error('No existe dist/. Ejecuta primero el build.');
  process.exitCode = 1;
}

const filenames = (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md')).sort();
const missingRoutes = [];
const missingSources = [];
let renderedSources = 0;

for (const filename of filenames) {
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const category = frontmatter.match(/^category:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]?.trim();
  const slug = filename.replace(/\.md$/, '');
  const sourceUrls = [...frontmatter.matchAll(/^\s+url:\s*["'](https:\/\/[^"']+)["']\s*$/gm)].map(([, url]) => url.trim());
  if (!category || sourceUrls.length === 0) {
    missingSources.push(`${filename} (frontmatter incompleto)`);
    continue;
  }

  const htmlPath = path.join(distDirectory, category, slug, 'index.html');
  let html;
  try {
    html = (await readFile(htmlPath, 'utf8')).replaceAll('&amp;', '&');
  } catch {
    missingRoutes.push(`${category}/${slug}/`);
    continue;
  }

  const absent = sourceUrls.filter((url) => !html.includes(url));
  if (absent.length) {
    missingSources.push(`${filename} (${absent.length} URL(s) no renderizadas)`);
  } else {
    renderedSources += sourceUrls.length;
  }
}

console.log(`Artículos comprobados en dist: ${filenames.length}`);
console.log(`Fuentes del frontmatter renderizadas como enlaces: ${renderedSources}`);
console.log(`Rutas de artículos ausentes: ${missingRoutes.length}`);
console.log(`Fuentes no visibles en el HTML generado: ${missingSources.length}`);

if (missingRoutes.length) console.error(`Rutas ausentes: ${missingRoutes.join(', ')}`);
if (missingSources.length) console.error(`Fuentes no renderizadas: ${missingSources.join(', ')}`);
if (missingRoutes.length || missingSources.length) process.exitCode = 1;
