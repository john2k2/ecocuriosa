import { readFile, readdir } from 'node:fs/promises';

const file = 'docs/editorial/SOURCE_CATALOG.yml';
const source = await readFile(file, 'utf8');
const lines = source.split('\n');
const entries = [];
let current = null;

for (const line of lines) {
  const entry = line.match(/^\s{2}- id:\s*([a-z0-9-]+)\s*$/);
  if (entry) {
    if (current) entries.push(current);
    current = { id: entry[1] };
    continue;
  }
  if (!current) continue;
  const field = line.match(/^\s{4}(authority|domain|evidenceType|url|use):\s*(.+?)\s*$/);
  if (field) current[field[1]] = field[2];
}
if (current) entries.push(current);

const errors = [];
const ids = new Set();
const catalogUrls = new Set(entries.map((entry) => entry.url).filter(Boolean));
for (const entry of entries) {
  if (ids.has(entry.id)) errors.push(`id duplicado: ${entry.id}`);
  ids.add(entry.id);
  for (const field of ['authority', 'domain', 'evidenceType', 'url', 'use']) {
    if (!entry[field]) errors.push(`${entry.id}: falta ${field}`);
  }
  if (entry.url) {
    try {
      const url = new URL(entry.url);
      if (url.protocol !== 'https:') errors.push(`${entry.id}: la URL no usa HTTPS`);
    } catch {
      errors.push(`${entry.id}: URL inválida`);
    }
  }
}

// Every source actually cited by a published article must also be available to
// Luna as a traceable candidate. This is a coverage check, not an approval of
// the citation: the editor still opens the URL and verifies its scope.
const articlesDirectory = 'src/content/articles';
for (const filename of (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md')).sort()) {
  const article = await readFile(`${articlesDirectory}/${filename}`, 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  for (const match of frontmatter.matchAll(/^\s+url:\s*["']?(https?:\/\/[^"'\s]+)["']?\s*$/gm)) {
    if (!catalogUrls.has(match[1])) errors.push(`${filename}: fuente no catalogada: ${match[1]}`);
  }
}

if (!entries.length) errors.push('no se encontraron entradas');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SOURCE_CATALOG válido: ${entries.length} entradas, IDs únicos, URLs HTTPS y cobertura completa de fuentes citadas.`);
}
