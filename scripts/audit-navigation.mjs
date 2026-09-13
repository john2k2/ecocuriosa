import { readFile } from 'node:fs/promises';

const html = await readFile('dist/index.html', 'utf8');
const issues = [];

const requireMatch = (pattern, message) => {
  if (!pattern.test(html)) issues.push(message);
};

requireMatch(/<nav\b[^>]*aria-label="Navegación principal"/i, 'falta la navegación principal semántica');
requireMatch(/<button\b[^>]*id="mobile-menu-button"[^>]*aria-expanded="false"[^>]*aria-controls="mobile-menu"/i, 'el botón móvil no expone su estado o relación con el menú');
requireMatch(/<nav\b[^>]*id="mobile-menu"[^>]*aria-label="Navegación móvil"[^>]*aria-hidden="true"/i, 'el menú móvil no empieza oculto para tecnologías asistivas');
requireMatch(/\.setAttribute\((?:['"]|`)aria-hidden(?:['"]|`),\s*String\(![A-Za-z_$][\w$]*\)\)/, 'el estado aria-hidden no se sincroniza al abrir/cerrar');
requireMatch(/\.querySelector\((?:['"]|`)a(?:['"]|`)\)\?\.focus\(\)/, 'el foco no se lleva al primer enlace al abrir el menú');

const ids = [...html.matchAll(/\bid="([^"]+)"/gi)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) issues.push(`IDs duplicados: ${duplicateIds.join(', ')}`);

console.log(`Auditoría de navegación: ${issues.length ? 'con incidencias' : 'correcta'}`);
if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
}
