import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const distDirectory = path.join(process.cwd(), 'dist');
const htmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(entryPath));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(entryPath);
  }
  return files;
};

const files = await htmlFiles(distDirectory);
const issues = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(distDirectory, file).replaceAll(path.sep, '/');
  // Search Console ownership is a token file, not a page template.
  if (/^google[a-f0-9]+\.html$/i.test(relative)) continue;
  const issue = (message) => issues.push(`${relative}: ${message}`);

  if (!/<nav\b[^>]*aria-label="Navegación principal"/i.test(html)) issue('falta la navegación principal semántica');
  if (!/<button\b[^>]*id="mobile-menu-button"[^>]*aria-expanded="false"[^>]*aria-controls="mobile-menu"/i.test(html)) {
    issue('el botón móvil no expone su estado o relación con el menú');
  }
  if (!/<nav\b[^>]*id="mobile-menu"[^>]*aria-label="Navegación móvil"[^>]*aria-hidden="true"/i.test(html)) {
    issue('el menú móvil no empieza oculto para tecnologías asistivas');
  }
  if (!/\.setAttribute\((?:['"]|`)aria-hidden(?:['"]|`),\s*String\(![A-Za-z_$][\w$]*\)\)/.test(html)) {
    issue('el estado aria-hidden no se sincroniza al abrir/cerrar');
  }
  if (!/\.querySelector\((?:['"]|`)a(?:['"]|`)\)\?\.focus\(\)/.test(html)) {
    issue('el foco no se lleva al primer enlace al abrir el menú');
  }

  const ids = [...html.matchAll(/\bid="([^"]+)"/gi)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) issue(`IDs duplicados: ${duplicateIds.join(', ')}`);
}

console.log(`Auditoría de navegación: ${issues.length ? 'con incidencias' : 'correcta'}`);
const skippedFiles = files.filter((file) => /^google[a-f0-9]+\.html$/i.test(path.relative(distDirectory, file))).length;
console.log(`Páginas HTML comprobadas: ${files.length - skippedFiles}`);
if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
}
