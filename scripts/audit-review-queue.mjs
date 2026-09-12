import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src/content/articles');
const reportPath = path.join(root, 'docs/editorial/CONTENT_REVIEW_PRECHECK_2026-09-12.md');
const writeReport = process.argv.includes('--write');
const json = process.argv.includes('--json');

// This is an ordering and completeness aid. It never marks an article as
// reviewed and deliberately cannot replace a person opening the sources.
const priorityGroups = [
  {
    priority: 1,
    label: 'alto riesgo',
    slugs: [
      'ballena-azul-fisiologia-gigante-cardiovascular',
      'manta-raya-gigante-inteligencia-cerebro-peces',
      'memoria-elefante-africano-estructura-cerebral',
      'pangolin-gigante-armadura-queratina-amenazas',
      'arrecifes-de-coral-simbiosis-zooxantelas-blanqueamiento',
      'calentamiento-estratosferico-repentino-vortice-polar',
      'vuelo-silencioso-buho-real-aerodinamica',
      'oso-tardigrado-criptobiosis-supervivencia-espacio',
      'pez-abrecaminos-bioluminiscencia-pez-linterna',
    ],
  },
  {
    priority: 2,
    label: 'cifras y alcance',
    slugs: [
      'agujeros-azules-oceano-sinkholes-formacion-geologica',
      'como-funciona-el-campo-magnetico-de-la-tierra-geodinamo',
      'geco-adherencia-van-der-waals-fuerzas-microscopicas',
      'narval-unicornio-marino-colmillo-sensorial',
      'relampago-del-catatumbo-tormenta-eterna-venezuela',
      'por-que-las-cebras-tienen-rayas-termoregulacion-moscas',
      'por-que-los-gatos-ronronean-frecuencia-sanacion-osea',
      'mar-de-ardora-bioluminiscencia-noctiluca-scintillans',
      'calamar-gigante-architeuthis-dux-bioluminiscencia',
    ],
  },
  {
    priority: 3,
    label: 'método y contexto',
    slugs: [
      'nubes-mastodonticas-mammatus-gravedad-humedad',
      'geiseres-hidrotermales-mecanismo-erupcion-presion',
      'auroras-boreales-viento-solar-magnetosfera',
      'camaleon-pantera-fisica-cambio-color-nanocristales',
      'como-recuerdan-las-plantas-invierno-epigenetica-vernalizacion',
      'por-que-el-olor-a-tierra-mojada-petricor-geosmina',
      'pulpo-mimo-thaumoctopus-mimetismo-15-especies',
      'piedras-rodantes-playa-valle-de-la-muerte-racetrack',
      'por-que-el-cielo-es-azul-dispersion-rayleigh',
    ],
  },
  {
    priority: 4,
    label: 'cierre',
    slugs: [
      'axolote-mexicano-regeneracion-tejidos-celulas-madre',
      'por-que-es-contagioso-el-bostezo-neuronas-espejo',
      'por-que-el-agua-hierve-a-menor-temperatura-montana',
      'tiburon-de-groenlandia-vertebrado-mas-longevo',
    ],
  },
];

const priorityBySlug = new Map(
  priorityGroups.flatMap(({ priority, label, slugs }) => slugs.map((slug, order) => [slug, { priority, label, order }])),
);

const signalRules = [
  { key: 'cifras', label: 'cifras/medidas', pattern: /\b\d+(?:[.,]\d+)?\s*(?:%|°C|°F|km|m|cm|mm|kg|g|Hz|dB|años?|latidos?|especies?|millones?|miles?)\b/iu },
  { key: 'absolutos', label: 'absolutos o récords', pattern: /\b(?:siempre|nunca|únic[oa]|definitiv[oa]|sin duda|el más|la más|récord|demuestra que|imposible)\b/iu },
  { key: 'salud', label: 'salud o sanación', pattern: /\b(?:cura|curar|tratamiento|terapia|sanación|medicinal|clínic[oa]|sana|repara huesos)\b/iu },
  { key: 'conservacion', label: 'conservación o amenaza', pattern: /\b(?:amenazad[oa]|extinción|tráfico|captura|población|conservación|blanqueamiento)\b/iu },
];

function scalar(frontmatter, key) {
  return frontmatter.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)["']?\\s*$`, 'm'))?.[1]?.trim() ?? '';
}

function sourceBlocks(frontmatter) {
  return [...frontmatter.matchAll(/^\s+-\s+title:\s*["']?(.+?)["']?\s*\n\s+publisher:\s*["']?(.+?)["']?\s*\n\s+url:\s*["']?(.+?)["']?\s*$/gm)].map(([, title, publisher, url]) => ({ title, publisher, url }));
}

function countMarkdownLinks(text, pattern) {
  return [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].filter(([, href]) => pattern.test(href)).length;
}

function makeActions({ sources, inlineEvidenceLinks, internalLinks, signals, imageCredit, imageLicense, imageCreator, imageLicensePage }) {
  const actions = [
    'Abrir cada fuente y comprobar afirmaciones, cifras, fechas y límites en contexto.',
    'Registrar la persona real, la fecha efectiva y la decisión en la ficha de revisión.',
  ];
  if (sources < 2) actions.push('Añadir una segunda fuente primaria o institucional antes de aprobar.');
  if (inlineEvidenceLinks === 0) actions.push('Añadir al menos una cita enlazada junto a la afirmación nuclear; la lista final por sí sola no basta.');
  if (signals.includes('cifras') || signals.includes('absolutos')) actions.push('Revisar cada número o superlativo con alcance, muestra, fecha y una cautela visible.');
  if (signals.includes('salud')) actions.push('Eliminar promesas de salud o convertirlas en una descripción limitada de la evidencia.');
  if (signals.includes('conservacion')) actions.push('Separar estado de conservación, población y amenazas por lugar, especie y fecha.');
  if (internalLinks === 0) actions.push('Comprobar si hay una relación editorial útil para enlazar a otra página propia, sin forzar enlaces.');
  const original = /\b(?:original|propia|generada\s+para)\b.*\bEcoCuriosa\b/i.test(imageCredit);
  if (!original && (!/^https:\/\//.test(imageLicense) || !imageCreator || !/^https:\/\//.test(imageLicensePage))) {
    actions.push('Verificar creador, licencia y página de licencia de la imagen antes de aprobar.');
  }
  return actions;
}

const filenames = (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md')).sort();
const records = [];

for (const filename of filenames) {
  const slug = filename.slice(0, -3);
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const body = article.slice(article.indexOf('---', 4) + 3);
  const sources = sourceBlocks(frontmatter);
  const inlineBody = body.split(/### Referencias y Literatura Científica Consultada/i)[0];
  const inlineEvidenceLinks = countMarkdownLinks(inlineBody, /^https:\/\//i);
  const internalLinks = countMarkdownLinks(body, /^\//);
  const signals = signalRules.filter(({ pattern }) => pattern.test(body)).map(({ key }) => key);
  const priority = priorityBySlug.get(slug) ?? { priority: 5, label: 'fuera de la cola', order: 0 };
  const reviewed = Boolean(scalar(frontmatter, 'reviewedDate') && scalar(frontmatter, 'reviewedBy'));
  const imageCredit = scalar(frontmatter, 'imageCredit');
  const imageLicense = scalar(frontmatter, 'imageLicense');
  const imageCreator = scalar(frontmatter, 'imageCreator');
  const imageLicensePage = scalar(frontmatter, 'imageLicensePage');
  records.push({
    slug,
    title: scalar(frontmatter, 'title'),
    category: scalar(frontmatter, 'category'),
    reviewed,
    priority: priority.priority,
    priorityLabel: priority.label,
    sources: sources.length,
    inlineEvidenceLinks,
    internalLinks,
    signals,
    imageCredit: Boolean(imageCredit),
    imageRightsComplete: /\b(?:original|propia|generada\s+para)\b.*\bEcoCuriosa\b/i.test(imageCredit)
      || (/^https:\/\//.test(imageLicense) && imageCreator && /^https:\/\//.test(imageLicensePage)),
    actions: makeActions({ sources: sources.length, inlineEvidenceLinks, internalLinks, signals, imageCredit, imageLicense, imageCreator, imageLicensePage }),
  });
}

const pending = records.filter((record) => !record.reviewed).sort((a, b) => a.priority - b.priority || a.slug.localeCompare(b.slug));
const expectedPending = new Set(priorityBySlug.keys());
const unexpectedPending = pending.filter(({ slug }) => !expectedPending.has(slug)).map(({ slug }) => slug);
const missingFromQueue = [...expectedPending].filter((slug) => !pending.some((record) => record.slug === slug));
const reviewedSlugs = records.filter((record) => record.reviewed).map(({ slug }) => slug);
const summary = {
  articlesAudited: records.length,
  pendingReviews: pending.length,
  reviewedArticles: reviewedSlugs.length,
  queueExpected: expectedPending.size,
  unexpectedPending,
  missingFromQueue,
  priorityCounts: Object.fromEntries([1, 2, 3, 4, 5].map((priority) => [priority, pending.filter((record) => record.priority === priority).length])),
  pendingWithInlineEvidence: pending.filter(({ inlineEvidenceLinks }) => inlineEvidenceLinks > 0).length,
  pendingWithCompleteImageRights: pending.filter(({ imageRightsComplete }) => imageRightsComplete).length,
  pendingWithSignals: pending.filter(({ signals }) => signals.length > 0).length,
};

if (json) {
  console.log(JSON.stringify({ summary, pending }, null, 2));
} else {
  const lines = [
    `Cola editorial auditada: ${summary.pendingReviews} pendientes / ${summary.articlesAudited} artículos`,
    `Revisiones registradas: ${summary.reviewedArticles}`,
    `Evidencia enlazada dentro del cuerpo: ${summary.pendingWithInlineEvidence}/${summary.pendingReviews}`,
    `Derechos de imagen completos o declarados originales: ${summary.pendingWithCompleteImageRights}/${summary.pendingReviews}`,
    `Artículos con señales de riesgo para lectura humana: ${summary.pendingWithSignals}/${summary.pendingReviews}`,
    `Orden: ${summary.priorityCounts[1]} alto riesgo, ${summary.priorityCounts[2]} cifras/alcance, ${summary.priorityCounts[3]} método/contexto, ${summary.priorityCounts[4]} cierre`,
  ];
  console.log(lines.join('\n'));
}

if (writeReport) {
  const report = [
    '# Prechequeo de la cola editorial',
    '',
    `Generado desde el repositorio el 2026-09-12. Hay **${summary.pendingReviews} revisiones pendientes** de ${summary.articlesAudited} artículos; este documento ordena señales estáticas y acciones sugeridas, pero no registra una aprobación humana.`,
    '',
    '## Resumen',
    '',
    `- Revisiones registradas: ${summary.reviewedArticles}/${summary.articlesAudited}.`,
    `- Evidencia enlazada dentro del cuerpo: ${summary.pendingWithInlineEvidence}/${summary.pendingReviews} pendientes.`,
    `- Derechos de imagen completos o declarados originales: ${summary.pendingWithCompleteImageRights}/${summary.pendingReviews} pendientes.`,
    `- Artículos con señales de riesgo que requieren lectura humana: ${summary.pendingWithSignals}/${summary.pendingReviews}.`,
    `- Orden de trabajo: ${summary.priorityCounts[1]} de alto riesgo, ${summary.priorityCounts[2]} de cifras/alcance, ${summary.priorityCounts[3]} de método/contexto y ${summary.priorityCounts[4]} de cierre.`,
    '',
    '## Cómo usarlo',
    '',
    '1. Abrir las fuentes y revisar la afirmación concreta, incluida su muestra, fecha, especie, lugar y limitación.',
    '2. Corregir el artículo si el alcance no coincide; añadir la cita enlazada junto a la afirmación nuclear.',
    '3. Comprobar la ilustración y su procedencia; no marcar una licencia por inferencia.',
    '4. Registrar nombre real, fecha real y decisión en `ARTICLE_REVIEW_TEMPLATE.md`; después ejecutar la auditoría estricta y el build.',
    '',
    '| Prioridad | Artículo | Fuentes | Citas en cuerpo | Enlaces propios | Señales | Imagen/derechos | Acción inmediata |',
    '| ---: | --- | ---: | ---: | ---: | --- | --- | --- |',
    ...pending.map((record) => {
      const signals = record.signals.length ? record.signals.map((key) => signalRules.find((rule) => rule.key === key).label).join(', ') : '—';
      const image = record.imageRightsComplete ? 'completa/original' : (record.imageCredit ? 'crédito, falta comprobar' : 'sin crédito');
      const firstAction = record.actions[2] ?? record.actions[0];
      return `| ${record.priority} · ${record.priorityLabel} | [\`${record.slug}\`](../../src/content/articles/${record.slug}.md) | ${record.sources} | ${record.inlineEvidenceLinks} | ${record.internalLinks} | ${signals} | ${image} | ${firstAction} |`;
    }),
    '',
    '## Límites',
    '',
    'Este prechequeo no abre ni valida fuentes externas, no demuestra exactitud científica, no sustituye la revisión humana y no cambia `reviewedDate`, `reviewedBy` ni el estado de publicación. Las métricas privadas de Search Console y Cloudflare se revisan aparte.',
    '',
  ].join('\n');
  await writeFile(reportPath, report);
  console.log(`Informe escrito en ${path.relative(root, reportPath)}`);
}

if (unexpectedPending.length || missingFromQueue.length || pending.length !== expectedPending.size) {
  console.error(`La cola no coincide: pendientes=${pending.length}, esperados=${expectedPending.size}, fuera=${unexpectedPending.join(', ') || 'ninguno'}, faltantes=${missingFromQueue.join(', ') || 'ninguno'}`);
  process.exitCode = 1;
}
