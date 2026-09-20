import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('docs/editorial/reviews');
const files = fs.existsSync(root)
  ? fs.readdirSync(root).filter((name) => name.endsWith('.md')).sort()
  : [];

const failures = [];
const packets = [];

for (const file of files) {
  const fullPath = path.join(root, file);
  const text = fs.readFileSync(fullPath, 'utf8');
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/u)?.[1]
    ?? text.match(/```yaml\n([\s\S]*?)\n```/u)?.[1]
    ?? '';
  const required = [
    ['decision: pending', 'debe conservar decision: pending'],
    ['reviewMode:', 'debe declarar reviewMode'],
    ['## Fuentes abiertas', 'debe listar fuentes abiertas'],
    ['## Matriz de afirmaciones', 'debe incluir una matriz de afirmaciones'],
    ['## Pendiente antes de cerrar', 'debe mantener un cierre pendiente'],
  ];

  for (const [marker, message] of required) {
    if (!text.includes(marker)) failures.push(`${file}: ${message}`);
  }

  if (!/reviewMode:[^\n]*(asistid|no sustituye|pending)/iu.test(frontmatter)) {
    failures.push(`${file}: reviewMode no declara que la ficha es asistida`);
  }
  if (/^decision:\s*(approved|correction)\s*$/imu.test(frontmatter)) {
    failures.push(`${file}: una ficha asistida no puede tener decisión cerrada`);
  }
  if (/^reviewedBy:\s*(?!Pendiente|pending)[^\n]+/imu.test(frontmatter)) {
    failures.push(`${file}: no puede introducir reviewedBy real en una ficha asistida`);
  }
  if (/^reviewedDate:/imu.test(frontmatter)) {
    failures.push(`${file}: no puede introducir reviewedDate en una ficha asistida`);
  }

  const claimRows = (text.match(/^\| C\d+\s+\|/gimu) ?? []).length;
  if (claimRows === 0) failures.push(`${file}: la matriz no contiene afirmaciones C1...`);
  packets.push({ file, claimRows });
}

console.log(`Paquetes de revisión asistida: ${packets.length}`);
for (const packet of packets) console.log(`- ${packet.file}: ${packet.claimRows} afirmaciones`);

if (failures.length) {
  console.error('Problemas de seguridad en paquetes asistidos:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log('Todos conservan pending y no declaran aprobación humana.');
}
