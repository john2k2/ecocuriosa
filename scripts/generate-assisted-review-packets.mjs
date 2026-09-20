import fs from 'node:fs';
import path from 'node:path';

const articlesDir = path.resolve('src/content/articles');
const outputDir = path.resolve('docs/editorial/reviews');
const packetDate = process.env.REVIEW_PACKET_DATE || new Date().toISOString().slice(0, 10);

function scalar(frontmatter, field) {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*(?:"([^"]*)"|'([^']*)'|([^\\n]+))\\s*$`, 'm'));
  return (match?.[1] ?? match?.[2] ?? match?.[3] ?? '').trim();
}

function sources(frontmatter) {
  const section = frontmatter.split(/\nsources:\s*\n/u)[1]?.split(/\nfeatured:/u)[0] ?? '';
  const normalized = section.startsWith('  - title:') ? `\n${section}` : section;
  return normalized.split(/\n\s{2}-\s+title:\s*/u).slice(1).map((block) => ({
    title: (block.match(/^"([^"]*)"/)?.[1] ?? '').trim(),
    publisher: (block.match(/\n\s+publisher:\s*"([^"]*)"/u)?.[1] ?? '').trim(),
    url: (block.match(/\n\s+url:\s*"([^"]*)"/u)?.[1] ?? '').trim(),
    scope: (block.match(/\n\s+scope:\s*(?:"([^"]*)"|([^\n]+))/u)?.[1] ?? block.match(/\n\s+scope:\s*(?:"([^"]*)"|([^\n]+))/u)?.[2] ?? '').trim(),
  })).filter((source) => source.title && source.url);
}

function candidateClaims(body, sourceList) {
  const paragraphs = body
    .split(/\n\s*\n/u)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph && paragraph !== '---' && !paragraph.startsWith('>') && !paragraph.startsWith('#') && !paragraph.startsWith('|') && !paragraph.startsWith('- ['));
  const claims = paragraphs.slice(0, 4).map((paragraph) => paragraph.replace(/\s+/gu, ' ').slice(0, 260));
  if (claims.length < 2) {
    claims.push(...sourceList.slice(0, 4 - claims.length).map((source) => `La fuente «${source.title}» debe comprobarse contra la afirmación concreta del artículo.`));
  }
  return claims.slice(0, 4);
}

function safeCell(value) {
  return value.replace(/\|/gu, '\\|').replace(/\n/gu, ' ');
}

function buildPacket({ slug, category, title, updatedDate, image, imageAlt, imageCredit, sourceList, claims }) {
  const sourceLines = sourceList.map((source, index) => (
    `${index + 1}. [${source.title}](${source.url}) — ${source.publisher || 'publisher pendiente'}; alcance declarado: ${source.scope || 'pendiente de comprobar al abrir la fuente.'}`
  )).join('\n');
  const claimRows = claims.map((claim, index) => (
    `| C${index + 1} | ${safeCell(claim)} | Abrir la fuente pertinente y localizar el pasaje o dato exacto. | Muestra, especie, lugar, fecha y método pendientes de confirmar. | pending |`
  )).join('\n');
  return `# Paquete de revisión asistida — ${title}\n\n\`\`\`yaml\nslug: ${slug}\nurl: https://ecocuriosa.com/${category}/${slug}/\narticleVersion: "working tree reviewed on ${packetDate}${updatedDate ? `; updatedDate ${updatedDate}` : ''}"\nreviewerName: "Pendiente de confirmación por Equipo Editorial EcoCuriosa"\nreviewDate: ${packetDate}\ndecision: pending\nreviewMode: "contraste asistido; no sustituye aprobación humana"\n\`\`\`\n\n> Este paquete se generó desde el artículo local. No afirma que las fuentes hayan sido abiertas ni que exista aprobación humana.\n\n## Fuentes abiertas\n\n${sourceLines || '- No se encontraron fuentes estructuradas; detener la revisión.'}\n\n## Matriz de afirmaciones\n\n| ID | Afirmación o fragmento a comprobar | Evidencia que falta abrir | Alcance que debe conservarse | Estado |\n| --- | --- | --- | --- | --- |\n${claimRows}\n\n## Imagen, enlaces y políticas\n\n- Recurso declarado: \`${image}\`.\n- Texto alternativo declarado: ${imageAlt || 'pendiente'}.\n- Crédito declarado: ${imageCredit || 'pendiente de confirmación del activo concreto'}.\n- Comprobar que la ilustración no se presente como fotografía o evidencia observacional.\n- Ejecutar los auditores de referencias, enlaces, imágenes y metadatos después de cualquier corrección.\n\n## Pendiente antes de cerrar\n\nUna persona debe abrir cada fuente desde el artículo, leer el texto completo pertinente, revisar la imagen y decidir si cada fila está \`verified\`, \`corrected\`, \`removed\` o sigue \`pending\`. No añadir \`reviewedDate\`/\`reviewedBy\` al artículo ni cambiar \`decision\` en este paquete sin una aprobación editorial real.\n`;
}

function existingPacketFor(slug) {
  return fs.readdirSync(outputDir).some((file) => {
    if (!file.endsWith('.md')) return false;
    const text = fs.readFileSync(path.join(outputDir, file), 'utf8');
    return text.split('\n').some((line) => line.trim() === `slug: ${slug}`);
  });
}

fs.mkdirSync(outputDir, { recursive: true });
const generated = [];
for (const file of fs.readdirSync(articlesDir).filter((name) => name.endsWith('.md')).sort()) {
  const slug = file.replace(/\.md$/u, '');
  const text = fs.readFileSync(path.join(articlesDir, file), 'utf8');
  const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---/u);
  if (!frontmatterMatch) throw new Error(`Frontmatter inválido: ${file}`);
  const frontmatter = frontmatterMatch[1];
  if (scalar(frontmatter, 'reviewedDate') || scalar(frontmatter, 'reviewedBy') || existingPacketFor(slug)) continue;
  const sourceList = sources(frontmatter);
  if (sourceList.length < 2) throw new Error(`Se requieren al menos dos fuentes para preparar ${slug}`);
  const packet = buildPacket({
    slug,
    category: scalar(frontmatter, 'category'),
    title: scalar(frontmatter, 'title'),
    updatedDate: scalar(frontmatter, 'updatedDate'),
    image: scalar(frontmatter, 'image'),
    imageAlt: scalar(frontmatter, 'imageAlt'),
    imageCredit: scalar(frontmatter, 'imageCredit'),
    sourceList,
    claims: candidateClaims(text.slice(frontmatterMatch[0].length), sourceList),
  });
  const output = path.join(outputDir, `${slug}-${packetDate}.md`);
  if (fs.existsSync(output)) throw new Error(`No se sobrescribe un paquete existente: ${output}`);
  fs.writeFileSync(output, packet, 'utf8');
  generated.push(output);
}

console.log(`Paquetes nuevos: ${generated.length}`);
for (const file of generated) console.log(`- ${file}`);
