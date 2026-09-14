import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src', 'content', 'articles');
const missing = [];
const missingAccessedDate = [];
const reviewedWithoutAccessedDate = [];
let sourceCount = 0;
let sourcesWithAccessedDate = 0;

for (const filename of (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md')).sort()) {
  const contents = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = contents.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const lines = frontmatter.split('\n');
  const sourcesIndex = lines.findIndex((line) => /^sources:\s*$/.test(line));
  if (sourcesIndex === -1) continue;
  const hasReviewedDate = /^reviewedDate:/m.test(frontmatter);
  const hasReviewedBy = /^reviewedBy:/m.test(frontmatter);
  const isReviewed = hasReviewedDate && hasReviewedBy;

  let inSources = true;
  let current = null;
  const finish = () => {
    if (!current) return;
    sourceCount += 1;
    for (const field of ['publisher', 'url', 'evidenceType', 'scope']) {
      if (!current[field]) missing.push(`${filename}: fuente ${current.title || '(sin título)'} sin ${field}`);
    }
    if (current.accessedDate) {
      sourcesWithAccessedDate += 1;
    } else {
      missingAccessedDate.push(`${filename}: ${current.title || '(sin título)'}`);
      if (isReviewed) reviewedWithoutAccessedDate.push(`${filename}: ${current.title || '(sin título)'}`);
    }
    current = null;
  };

  for (let index = sourcesIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];
    // A top-level frontmatter key marks the end of the sources array.
    if (line && !line.startsWith(' ') && !line.startsWith('\t')) {
      inSources = false;
    }
    if (!inSources) break;

    const title = line.match(/^\s+-\s+title:\s*["']?(.+?)["']?\s*$/);
    if (title) {
      finish();
      current = { title: title[1].trim() };
      continue;
    }
    const field = line.match(/^\s{4}(publisher|url|evidenceType|scope|accessedDate):\s*["']?(.+?)["']?\s*$/);
    if (field && current) current[field[1]] = field[2].trim();
  }
  finish();
}

console.log(`Fuentes comprobadas: ${sourceCount}`);
console.log(`Fuentes con metadatos de alcance y evidencia: ${sourceCount - missing.length}/${sourceCount}`);
console.log(`Fuentes con fecha de acceso: ${sourcesWithAccessedDate}/${sourceCount}`);
console.log(`Fuentes sin fecha de acceso: ${missingAccessedDate.length}`);
console.log(`Revisiones con fecha de acceso completa: ${reviewedWithoutAccessedDate.length ? 'no' : 'sí'}`);
console.log(`Metadatos incompletos: ${missing.length}`);
if (missing.length) {
  console.error(missing.join('\n'));
  process.exitCode = 1;
}
if (reviewedWithoutAccessedDate.length) {
  console.error(`Fuentes sin fecha de acceso en artículos revisados:\n${reviewedWithoutAccessedDate.join('\n')}`);
  process.exitCode = 1;
}
