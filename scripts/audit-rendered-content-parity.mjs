import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distDirectory = path.join(root, 'dist');

// Keep the sample small and representative. It intentionally covers the
// templates that can expose a rendering/indexability regression rather than
// claiming that ten routes prove every production route is indexed.
const routes = [
  { path: 'index.html', label: 'home', kind: 'home' },
  { path: 'fauna-fascinante/index.html', label: 'category-fauna', kind: 'category' },
  { path: 'especies-marinas/ballena-azul-fisiologia-gigante-cardiovascular/index.html', label: 'article-ballena', kind: 'article' },
  { path: 'metodologia-editorial/index.html', label: 'methodology', kind: 'legal' },
  { path: 'sobre-nosotros/index.html', label: 'about', kind: 'about' },
  { path: 'contacto/index.html', label: 'contact', kind: 'legal' },
  { path: 'politica-de-privacidad/index.html', label: 'privacy', kind: 'legal' },
  { path: 'politica-de-cookies/index.html', label: 'cookies', kind: 'legal' },
  { path: 'aviso-legal/index.html', label: 'legal-notice', kind: 'legal' },
  { path: 'correcciones/index.html', label: 'corrections', kind: 'legal' },
];

const issues = [];
const checks = [];

function addIssue(route, message) {
  issues.push(`${route.label} (${route.path}): ${message}`);
}

function has(html, pattern) {
  return pattern.test(html);
}

for (const route of routes) {
  const file = path.join(distDirectory, route.path);
  const issueCountBefore = issues.length;
  try {
    await access(file);
  } catch {
    addIssue(route, 'falta el HTML generado');
    continue;
  }

  const html = await readFile(file, 'utf8');
  const bodyText = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!has(html, /<html\b[^>]*\blang=["']es["']/i)) addIssue(route, 'falta lang="es"');
  if (!has(html, /<title>[^<]+<\/title>/i)) addIssue(route, 'falta title renderizado');
  if (!has(html, /<h1\b[^>]*>\s*[^<][\s\S]*?<\/h1>/i)) addIssue(route, 'falta H1 renderizado');
  if (!has(html, /<main\b[^>]*\bid=["']main["']/i)) addIssue(route, 'falta main#main');
  if (bodyText.length < 220) addIssue(route, `texto renderizado demasiado corto (${bodyText.length} caracteres)`);
  if (!has(html, /<a\b[^>]*href=["']\/[^"]*["']/i)) addIssue(route, 'falta enlace interno rastreable');
  if (!has(html, /<link\b[^>]*rel=["']canonical["']/i)) addIssue(route, 'falta canonical renderizado');
  if (!has(html, /<script\b[^>]*type=["']application\/ld\+json["']/i)) addIssue(route, 'falta JSON-LD renderizado');

  if (route.kind === 'article') {
    if (!has(html, /<article\b/i)) addIssue(route, 'falta elemento article');
    if (!has(html, /Fuentes (?:para consultar|y revisión)/i)) addIssue(route, 'falta bloque visible de fuentes');
    if (!has(html, /Estado editorial/i)) addIssue(route, 'falta estado editorial visible');
  }
  if (route.kind === 'category' && !has(html, /Monografías|Documentos|Explorar/i)) {
    addIssue(route, 'falta contenido de categoría');
  }

  checks.push({ label: route.label, passed: issues.length === issueCountBefore });
}

const passedRoutes = checks.filter((check) => check.passed).length;
console.log(`Paridad HTML/DOM esencial: ${passedRoutes}/${routes.length} rutas sin incidencias`);
console.log(`Rutas representativas auditadas: ${routes.length}`);
console.log(`Problemas de paridad: ${issues.length}`);
if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
}
