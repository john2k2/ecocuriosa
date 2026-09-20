# Cola de revisión editorial de contenido

Esta matriz contiene las 31 monografías que todavía no tienen `reviewedDate` y
`reviewedBy`. El artículo del leopardo de las nieves queda fuera porque ya tiene
una revisión registrada. La cola es un control de trabajo: no constituye una
revisión editorial ni prueba que una afirmación haya sido verificada.

El primer lote operativo está en
[`CONTENT_REVIEW_BATCH_P0_2026-09-13.md`](./CONTENT_REVIEW_BATCH_P0_2026-09-13.md):
agrupa nueve artículos P0 y uno P1 con las cifras, límites, fuentes y puentes
de enlazado que una persona debe comprobar primero. Ninguna fila se marca por
anticipado. El [paquete de contraste de ballena azul](./reviews/ballena-azul-2026-09-20.md) reúne evidencia de las dos fuentes y conserva la decisión `pending` hasta la confirmación editorial pública.

También están preparados, en modo asistido y sin aprobación humana, nueve
paquetes: [arrecifes de coral](./reviews/arrecifes-coral-2026-09-20.md),
[ballena azul](./reviews/ballena-azul-2026-09-20.md),
[manta raya gigante](./reviews/manta-raya-gigante-2026-09-20.md),
[pangolín gigante](./reviews/pangolin-gigante-2026-09-20.md),
[elefante](./reviews/memoria-elefante-2026-09-20.md),
[pez linterna](./reviews/pez-linterna-2026-09-20.md),
[tardígrados](./reviews/tardigrados-2026-09-20.md),
[vórtice polar](./reviews/vortice-polar-2026-09-20.md) y
[búhos](./reviews/vuelo-buho-2026-09-20.md). Sus matrices señalan
explícitamente qué fuentes o afirmaciones aún requieren reapertura y
confirmación directa.

Después del lote de fuentes de Search Console se añadieron tres paquetes
asistidos más: [geosmina y petricor](./reviews/geosmina-petricor-2026-09-20.md),
[tiburón de Groenlandia](./reviews/tiburon-groenlandia-2026-09-20.md) y
[pulpo mimo](./reviews/pulpo-mimo-2026-09-20.md). Incorporan las nuevas fuentes
sin marcar ninguna afirmación como verificada.

La segunda tanda también tiene paquetes asistidos, todavía pendientes: [agujeros
azules](./reviews/agujeros-azules-2026-09-20.md), [geodinamo
terrestre](./reviews/geodinamo-terrestre-2026-09-20.md), [adherencia del
geco](./reviews/adherencia-geco-2026-09-20.md), [narval](./reviews/narval-colmillo-2026-09-20.md),
[relámpago del Catatumbo](./reviews/relampago-catatumbo-2026-09-20.md), [rayas
de cebra](./reviews/rayas-cebra-2026-09-20.md), [ronroneo de gatos](./reviews/ronroneo-gatos-2026-09-20.md),
[mar de ardora](./reviews/mar-ardora-2026-09-20.md) y [calamar
gigante](./reviews/calamar-gigante-2026-09-20.md). Con los tres paquetes nuevos
hay **21 paquetes asistidos**, todos con decisión `pending`; ninguno sustituye
la aprobación humana.

Los paquetes de contraste asistido se comprueban con
`pnpm content:assisted-review-audit`: deben incluir matriz de afirmaciones,
fuentes abiertas, límites y decisión `pending`, y el auditor rechaza que
introduzcan `reviewedDate` o `reviewedBy` como si fueran una aprobación humana.

## Instrucciones de uso

- Para cada artículo, copiar [`ARTICLE_REVIEW_TEMPLATE.md`](./ARTICLE_REVIEW_TEMPLATE.md) y conservar la ficha fuera de los datos sensibles del repositorio o enlazarla desde el cambio de revisión.
- Cada fila debe revisarse contra las fuentes enlazadas en el frontmatter y en
  la sección **Referencias** del artículo. Abrir las fuentes y contrastar las
  afirmaciones concretas, cifras, fechas y límites antes de marcar la casilla.
- `[ ]` significa pendiente. Marcar `[x]` solo después de comprobar ese punto
  en la revisión actual y dejar una nota o corrección trazable en el artículo
  cuando corresponda.
- `editor responsable` debe ser el nombre público real de quien realizó la
  revisión. `fecha real` debe ser la fecha efectiva en formato `AAAA-MM-DD`;
  nunca se rellenan estos campos por anticipado ni se inventan credenciales.
- Mantener `decisión: pendiente` hasta terminar los controles. Usar
  `corrección` si queda algún defecto; usar `aprobado` únicamente cuando todas
  las casillas estén completas, las fuentes respalden el texto, la imagen y su
  licencia estén comprobadas y el responsable haya dado su aprobación.
- Al aprobar una monografía, registrar en su frontmatter únicamente la fecha
  real y el responsable real (`reviewedDate` y `reviewedBy`) y volver a ejecutar
  `pnpm content:audit -- --strict`, `pnpm build` y `pnpm astro check`.

## Orden de revisión recomendado

La prioridad combina riesgo de cifras, conservación/salud/clima, desajuste de especie y potencial de confianza. No autoriza a marcar ninguna fila por anticipado.

1. **Primera tanda (alto riesgo):** `ballena-azul-fisiologia-gigante-cardiovascular`, `manta-raya-gigante-inteligencia-cerebro-peces`, `memoria-elefante-africano-estructura-cerebral`, `pangolin-gigante-armadura-queratina-amenazas`, `arrecifes-de-coral-simbiosis-zooxantelas-blanqueamiento`, `calentamiento-estratosferico-repentino-vortice-polar`, `vuelo-silencioso-buho-real-aerodinamica`, `oso-tardigrado-criptobiosis-supervivencia-espacio` y `pez-abrecaminos-bioluminiscencia-pez-linterna`.
2. **Segunda tanda (cifras y alcance):** `agujeros-azules-oceano-sinkholes-formacion-geologica`, `como-funciona-el-campo-magnetico-de-la-tierra-geodinamo`, `geco-adherencia-van-der-waals-fuerzas-microscopicas`, `narval-unicornio-marino-colmillo-sensorial`, `relampago-del-catatumbo-tormenta-eterna-venezuela`, `por-que-las-cebras-tienen-rayas-termoregulacion-moscas`, `por-que-los-gatos-ronronean-frecuencia-sanacion-osea`, `mar-de-ardora-bioluminiscencia-noctiluca-scintillans` y `calamar-gigante-architeuthis-dux-bioluminiscencia`.
3. **Tercera tanda (método y contexto):** `nubes-mastodonticas-mammatus-gravedad-humedad`, `geiseres-hidrotermales-mecanismo-erupcion-presion`, `auroras-boreales-viento-solar-magnetosfera`, `camaleon-pantera-fisica-cambio-color-nanocristales`, `como-recuerdan-las-plantas-invierno-epigenetica-vernalizacion`, `por-que-el-olor-a-tierra-mojada-petricor-geosmina`, `pulpo-mimo-thaumoctopus-mimetismo-15-especies`, `piedras-rodantes-playa-valle-de-la-muerte-racetrack` y `por-que-el-cielo-es-azul-dispersion-rayleigh`.
4. **Cierre:** `axolote-mexicano-regeneracion-tejidos-celulas-madre`, `por-que-es-contagioso-el-bostezo-neuronas-espejo`, `por-que-el-agua-hierve-a-menor-temperatura-montana` y `tiburon-de-groenlandia-vertebrado-mas-longevo`, comprobando que las cautelas y cifras fechadas hayan quedado visibles.

## Matriz de control

| Slug | Categoría | Fuentes abiertas | Afirmaciones/cifras contrastadas | Imagen/licencia revisada | Enlaces internos | Editor responsable | Fecha real | Decisión |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `agujeros-azules-oceano-sinkholes-formacion-geologica` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `arrecifes-de-coral-simbiosis-zooxantelas-blanqueamiento` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `auroras-boreales-viento-solar-magnetosfera` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `axolote-mexicano-regeneracion-tejidos-celulas-madre` | `fauna-fascinante` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `ballena-azul-fisiologia-gigante-cardiovascular` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `calamar-gigante-architeuthis-dux-bioluminiscencia` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `calentamiento-estratosferico-repentino-vortice-polar` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `camaleon-pantera-fisica-cambio-color-nanocristales` | `fauna-fascinante` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `como-funciona-el-campo-magnetico-de-la-tierra-geodinamo` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `como-recuerdan-las-plantas-invierno-epigenetica-vernalizacion` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `geco-adherencia-van-der-waals-fuerzas-microscopicas` | `fauna-fascinante` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `geiseres-hidrotermales-mecanismo-erupcion-presion` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `manta-raya-gigante-inteligencia-cerebro-peces` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `mar-de-ardora-bioluminiscencia-noctiluca-scintillans` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `memoria-elefante-africano-estructura-cerebral` | `fauna-fascinante` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `narval-unicornio-marino-colmillo-sensorial` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `nubes-mastodonticas-mammatus-gravedad-humedad` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `oso-tardigrado-criptobiosis-supervivencia-espacio` | `fauna-fascinante` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `pangolin-gigante-armadura-queratina-amenazas` | `fauna-fascinante` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `pez-abrecaminos-bioluminiscencia-pez-linterna` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `piedras-rodantes-playa-valle-de-la-muerte-racetrack` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `por-que-el-agua-hierve-a-menor-temperatura-montana` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `por-que-el-cielo-es-azul-dispersion-rayleigh` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `por-que-el-olor-a-tierra-mojada-petricor-geosmina` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `por-que-es-contagioso-el-bostezo-neuronas-espejo` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `por-que-las-cebras-tienen-rayas-termoregulacion-moscas` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `por-que-los-gatos-ronronean-frecuencia-sanacion-osea` | `ciencia-curiosa` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `pulpo-mimo-thaumoctopus-mimetismo-15-especies` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `relampago-del-catatumbo-tormenta-eterna-venezuela` | `fenomenos-naturales` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `tiburon-de-groenlandia-vertebrado-mas-longevo` | `especies-marinas` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |
| `vuelo-silencioso-buho-real-aerodinamica` | `fauna-fascinante` | [ ] | [ ] | [ ] | [ ] | — | — | `pendiente` |

## Criterio de cierre

La cola se considera completa cuando las 31 filas tienen evidencia y decisión
registradas, y el auditor estricto pasa sin omitir fuentes, imágenes,
conclusiones originales ni revisiones reales. La ausencia de errores de build no
reemplaza la comprobación editorial humana.
