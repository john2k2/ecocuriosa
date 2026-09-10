import { access, readdir, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src/content/articles');
const strict = process.argv.includes('--strict');
const json = process.argv.includes('--json');
const filenames = (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md')).sort();
const missingSources = [];
const missingReview = [];
const missingImages = [];
const boilerplateConclusions = [];
const emptyReferenceLists = [];
const sharedConclusion = 'El análisis científico de este fenómeno evidencia la importancia del método empírico';

for (const filename of filenames) {
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const image = frontmatter.match(/^image:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1];
  const hasSources = /^sources:\s*\n\s+-\s+title:/m.test(frontmatter);
  const hasReview = /^reviewedDate:/m.test(frontmatter) && /^reviewedBy:/m.test(frontmatter);

  if (!hasSources) missingSources.push(filename);
  if (!hasReview) missingReview.push(filename);
  if (article.includes(sharedConclusion)) boilerplateConclusions.push(filename);
  if (/### Referencias y Literatura Científica Consultada\s*\n\s*$/m.test(article)) {
    emptyReferenceLists.push(filename);
  }

  if (!image) {
    missingImages.push(`${filename} (sin imagen)`);
  } else {
    try {
      await access(path.join(root, 'public', image), constants.R_OK);
    } catch {
      missingImages.push(`${filename} (${image})`);
    }
  }
}

const report = [
  `Artículos auditados: ${filenames.length}`,
  `Con fuentes verificables: ${filenames.length - missingSources.length}/${filenames.length}`,
  `Con revisión editorial: ${filenames.length - missingReview.length}/${filenames.length}`,
  `Imágenes faltantes: ${missingImages.length}`,
  `Conclusiones repetidas: ${boilerplateConclusions.length}`,
  `Secciones de referencias vacías: ${emptyReferenceLists.length}`,
];

const findings = {
  articlesAudited: filenames.length,
  sourcedArticles: filenames.length - missingSources.length,
  reviewedArticles: filenames.length - missingReview.length,
  missingImages,
  missingSources,
  missingReview,
  boilerplateConclusions,
  emptyReferenceLists,
};

if (json) {
  console.log(JSON.stringify(findings, null, 2));
} else {
  console.log(report.join('\n'));
  if (missingSources.length) console.log(`Pendientes de fuentes: ${missingSources.join(', ')}`);
  if (missingReview.length) console.log(`Pendientes de revisión: ${missingReview.join(', ')}`);
  if (boilerplateConclusions.length) console.log(`Conclusiones repetidas: ${boilerplateConclusions.join(', ')}`);
  if (emptyReferenceLists.length) console.log(`Referencias vacías: ${emptyReferenceLists.join(', ')}`);
  if (missingImages.length) console.error(`Referencias de imagen rotas: ${missingImages.join(', ')}`);
}

if (missingImages.length || (strict && (
  missingSources.length ||
  missingReview.length ||
  boilerplateConclusions.length ||
  emptyReferenceLists.length
))) {
  process.exitCode = 1;
}
