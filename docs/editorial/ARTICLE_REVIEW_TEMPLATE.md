# Ficha de revisión editorial — EcoCuriosa

Esta plantilla acompaña a una revisión humana concreta. No se debe completar
con datos inventados ni usar como sustituto de abrir las fuentes, examinar el
activo visual y leer el artículo publicado.

## Identificación

```yaml
slug: ""
url: "https://ecocuriosa.com/"
articleVersion: "commit o fecha del cambio revisado"
reviewerName: "nombre público real"
reviewDate: "AAAA-MM-DD"
decision: pending # pending | correction | approved
```

## 1. Pregunta y respuesta al lector

- [ ] El título responde a una pregunta concreta sin superlativo no demostrado.
- [ ] La descripción tiene entre 80 y 160 caracteres y no promete una certeza que el artículo no pueda sostener.
- [ ] El primer bloque responde en lenguaje claro y conserva el contexto (especie, lugar, fecha o método) cuando es necesario.
- [ ] El texto separa hecho, inferencia e hipótesis; las cautelas no están escondidas solo en la conclusión.

## 2. Matriz de afirmaciones

Registrar las afirmaciones que podrían cambiar la interpretación del lector,
incluidas cifras, fechas, récords, causalidad, salud, conservación y conducta.

| ID | Afirmación exacta | Tipo (`fact`/`inference`/`hypothesis`) | Fuente URL | Lugar en la fuente | Alcance (muestra, especie, fecha, lugar, método) | Límite que se conserva | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 |  |  |  |  |  |  | pending |

Estados permitidos: `verified`, `matized`, `removed`, `pending`. Una fuente
puede respaldar una frase solo si el alcance de la fuente coincide con la
frase. Un DOI, una landing page o una entrada del catálogo no prueba por sí
solo que la afirmación haya sido comprobada.

### Cifras y comparaciones

- [ ] Cada número tiene unidad, población o muestra, fecha y método.
- [ ] Los máximos, promedios y estimaciones no se mezclan.
- [ ] Las cifras calculadas por el equipo indican fórmula, supuestos y fuente de entrada.
- [ ] No se extrapola un individuo, experimento o región a toda la especie o al planeta.

## 3. Fuentes y trazabilidad

- [ ] Se abrió cada URL desde el artículo y se identificó qué afirmación respalda.
- [ ] Hay al menos dos fuentes pertinentes; cuando aplica, una es primaria o institucional.
- [ ] El `publisher`, `evidenceType`, `scope` y, si corresponde, `accessedDate` describen la fuente real.
- [ ] Las referencias de texto y las fuentes estructuradas no se contradicen.
- [ ] Las fuentes inaccesibles por paywall o bloqueo quedan como candidatas, no como evidencia ya verificada.

## 4. Imagen y derechos

- [ ] La imagen representa el tema y no mezcla otra especie, lugar o evento.
- [ ] El `alt` describe lo visible y declara “ilustración” cuando no es una fotografía documental.
- [ ] El crédito, autor, URL de licencia y fecha de obtención están registrados para cualquier activo de terceros.
- [ ] Una imagen generada no se presenta como observación real ni como prueba de conducta.

## 5. Recorrido y políticas

- [ ] Existen entre 2 y 4 enlaces internos pertinentes y todos llevan a la URL canónica.
- [ ] No hay promesas médicas, instrucciones peligrosas ni afirmaciones de conservación sin respaldo.
- [ ] La sección de fuentes y límites es visible antes de marcar la revisión.
- [ ] La publicidad, si está activa, no interrumpe la respuesta ni induce clics.

## Cierre

Solo marcar `approved` cuando todas las casillas estén completas, las
correcciones estén aplicadas y el responsable pueda identificarse públicamente.
Después:

```text
pnpm content:audit -- --strict
pnpm astro check
pnpm build
node scripts/audit-internal-links.mjs
node scripts/audit-source-catalog.mjs
node scripts/audit-llms.mjs
```

Si queda una afirmación pendiente, conservar `decision: pending`, no añadir
`reviewedDate`/`reviewedBy` y devolver el artículo a la cola.
