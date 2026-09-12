import { readFile } from 'node:fs/promises';

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

if (!entries.length) errors.push('no se encontraron entradas');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SOURCE_CATALOG válido: ${entries.length} entradas, IDs únicos y URLs HTTPS.`);
}
