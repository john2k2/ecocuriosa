# Snapshot de acceso a fuentes — 2026-09-12

## Alcance y lectura correcta

Este registro documenta una comprobación HTTP mediante `GET` de las 97 URLs
de fuentes declaradas en el frontmatter de los 32 artículos de
`src/content/articles`. El resultado observado fue:

| Estado HTTP | URLs | Interpretación operativa |
| --- | ---: | --- |
| `200` | 70 | Respuesta satisfactoria en esa comprobación |
| `203` | 10 | Respuesta no autoritativa o transformada por un intermediario; requiere revisión |
| `403` | 17 | Acceso denegado al cliente automatizado; requiere revisión |
| **Total** | **97** | **No equivale a 97 fuentes editorialmente aprobadas** |

La comprobación de estado no sustituye la revisión de contenido. Un `403` en
una petición automatizada puede deberse a protección anti-bot, límites de
frecuencia, reglas del editor, geolocalización o necesidad de sesión. Un `203`
indica que la respuesta no debe tratarse automáticamente como una copia
autoritativa del recurso solicitado. Ninguno de los dos estados demuestra por
sí solo que la fuente esté rota, sea falsa o no respalde el artículo. Del mismo
modo, un `200` solo confirma que el servidor entregó una respuesta, no que la
afirmación esté correctamente interpretada.

## Actualización de fuentes abiertas — 2026-09-13

La revisión P0/P1 comprobó en una petición directa cuatro registros de texto
completo que respondieron `200` y los integró como enlaces complementarios en
tres artículos. Esta actualización no convierte las fuentes en revisiones
editoriales aprobadas: una persona todavía debe leer cada trabajo y confirmar
la afirmación concreta, la especie, la muestra y el alcance.

| Artículo | Registro abierto | Estado observado | Uso incorporado |
| --- | --- | ---: | --- |
| Tardígrados | [eLife en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC6773438/) | `200` | Dsup en células y ensayos bioquímicos |
| Peces linterna | [Proceedings of the Royal Society B en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC1692851/) | `200` | Sensibilidad a luz roja lejana en *Malacosteus niger* |
| Vuelo de búhos | [Royal Society en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC5206597/) | `200` | Rasgos de alas relacionados con aeroacústica |
| Vuelo de búhos | [Journal of the Royal Society Interface en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC4774958/) | `200` | Variación de serraciones en plumas de vuelo |

Los estados son una fotografía de una fecha concreta: pueden variar según
hora, red, agente de usuario, redirecciones, caché y controles del propio
editor. No se deben cambiar ni eliminar fuentes únicamente por este snapshot.

## Candidatos añadidos en la ronda de autoridad de especies

Estas cuatro URLs no formaban parte todavía de las referencias del contenido
publicado en esa fecha; se comprobaron para que Luna pudiera proponerlas en
briefs de revisión.

| Fuente | Estado HTTP | Tipo | Nota de alcance |
| --- | ---: | --- | --- |
| https://pubmed.ncbi.nlm.nih.gov/35203203/ | `203` | Primaria | PubMed entrega una respuesta de contenido restringido; abrir la ficha para comprobar el experimento de evaluación de amenazas en dos poblaciones. |
| https://pubmed.ncbi.nlm.nih.gov/21411454/ | `203` | Primaria | PubMed entrega una respuesta de contenido restringido; abrir la ficha para comprobar el paradigma de reproducción de llamadas y la edad de las matriarcas. |
| https://www.fisheries.noaa.gov/resource/outreach-materials/giant-manta-ray-and-devil-ray-aerial-survey-id-guide | `200` | Institucional | Guía de identificación para observadores aéreos; no es un censo global. |
| https://www.fisheries.noaa.gov/s3/2024-10/Recovery-Status-Review-for-Giant-Manta-Ray_508.pdf | `200` | Institucional | Revisión de estado de recuperación en el marco estadounidense; no sustituye una evaluación mundial. |

## Comprobación HTTP de la nueva ronda de Luna Max

El 12/09/2026 se consultaron con `GET` las diez URLs añadidas para autoridad,
Discover, medición generativa y procedencia. Las diez devolvieron `200` en esa
red; el resultado solo confirma entrega HTTP y no reemplaza la lectura humana.

| Fuente | Estado |
| --- | ---: |
| [Google AI features](https://developers.google.com/search/docs/appearance/ai-features) | `200` |
| [Google Preferred sources](https://developers.google.com/search/docs/appearance/preferred-sources) | `200` |
| [Google Discover Core Update](https://developers.google.com/search/blog/2026/02/discover-core-update) | `200` |
| [Google Search generative AI reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) | `200` |
| [Google ranking systems guide](https://developers.google.com/search/docs/appearance/ranking-systems-guide) | `200` |
| [Crossref research-integrity metadata](https://www.crossref.org/publications/guide-metadata-research-integrity/) | `200` |
| [Crossref data/software citation](https://www.crossref.org/documentation/schema-library/markup-guide-metadata-segments/data-citation/) | `200` |
| [DataCite Metadata Schema](https://schema.datacite.org/) | `200` |
| [ROR Registry](https://ror.org/registry/) | `200` |
| [ICMJE authors and contributors](https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html) | `200` |

## Comprobación oficial de descubrimiento y medición — 2026-09-14

La búsqueda dirigida para ampliar el plan de Bing/IndexNow y la lectura de
caídas de tráfico comprobó estas cinco URLs con `GET`; las cinco respondieron
`200` en esta red. Es una comprobación de entrega, no una prueba de cuenta
verificada, rastreo, indexación ni ranking.

| Fuente | Estado |
| --- | ---: |
| [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a) | `200` |
| [IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby) | `200` |
| [Opciones de envío de URL de Bing](https://www.bing.com/webmasters/help/url-submission-62f2860b) | `200` |
| [Directivas robots de Bing](https://www.bing.com/webmasters/help/robots-meta-tags-and-attributes-that-bing-supports-5198d240) | `200` |
| [Depuración de caídas de tráfico de Google](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) | `200` |

## Comprobación manual selectiva en navegador

El mismo día se abrieron tres registros alternativos para las fuentes que
podían quedar ocultas por una respuesta automatizada `403`. Esta comprobación
no sustituye la lectura humana completa del artículo, pero confirma que existe
una ficha institucional navegable y deja documentado su alcance inicial:

| Clúster | Registro abierto | Evidencia visible | Decisión provisional |
| --- | --- | --- | --- |
| Geodinamo | [Earth, Planets and Space / Springer Nature](https://doi.org/10.1186/s40623-025-02307-5) | El texto explica la inversión de flujos superficiales del núcleo con observaciones geomagnéticas y *priors* de geodinamo, y explicita la naturaleza subdeterminada del problema. | Candidata para un brief sobre medición vs. inferencia; no es una cita aprobada del artículo existente. |
| Pulpo mimo | [CMFRI Digital Repository](https://eprints.cmfri.org.in/14674/) | El registro muestra título, autores, año, resumen y dos ejemplares del mar Arábigo identificados con COI; el PDF completo está restringido. | Alternativa de acceso para verificar identidad y alcance; mantener muestra y localidad en cualquier redacción. |
| Geosmina | [University of Warwick Research Archive Portal](https://wrap.warwick.ac.uk/id/eprint/135205/) | El registro muestra el artículo, DOI, resumen y experimentos de campo/antena con *Folsomia candida* y compuestos de *Streptomyces*. | Alternativa abierta para un brief sobre ecología química; no extrapolar a todo el petricor humano. |

Las tres URLs están también en `SOURCE_CATALOG.yml` como entradas separadas.
Se mantienen en estado `candidate` hasta que una persona responsable lea el
texto completo y, si corresponde, las cite con `accessedDate`, alcance y
revisión editorial registrada.

## Las 17 URLs que devolvieron `403`

Se conservan agrupadas por artículo para que la revisión pueda comprobar la
relación entre cada afirmación, su fuente y su alcance.

### Agujeros azules

Artículo: `agujeros-azules-oceano-sinkholes-formacion-geologica`

- USGS — <https://www.usgs.gov/publications/gulf-mexico-blue-hole-harbors-high-levels-novel-microbial-lineages>
- DOI — <https://doi.org/10.1002/dep2.70021>

### Calamar gigante

Artículo: `calamar-gigante-architeuthis-dux-bioluminiscencia`

- Smithsonian National Museum of Natural History — <https://naturalhistory.si.edu/explore/giant-squid>

### Calentamiento estratosférico repentino

Artículo: `calentamiento-estratosferico-repentino-vortice-polar`

- DOI — <https://doi.org/10.1029/2020RG000708>

### Camaleón pantera

Artículo: `camaleon-pantera-fisica-cambio-color-nanocristales`

- Muséum national d’Histoire naturelle — <https://www.mnhn.fr/en/the-panther-chameleon>

### Campo magnético terrestre

Artículo: `como-funciona-el-campo-magnetico-de-la-tierra-geodinamo`

- USGS — <https://www.usgs.gov/programs/geomagnetism/introduction-geomagnetism>

### Geco y adherencia

Artículo: `geco-adherencia-van-der-waals-fuerzas-microscopicas`

- Proceedings of the National Academy of Sciences (DOI) — <https://doi.org/10.1073/pnas.192252799>

### Mar de ardora

Artículo: `mar-de-ardora-bioluminiscencia-noctiluca-scintillans`

- Smithsonian National Museum of Natural History — <https://naturalhistory.si.edu/research/botany/research/dinoflagellates/harmful-marine-dinoflagellate-taxa>

### Pangolín gigante

Artículo: `pangolin-gigante-armadura-queratina-amenazas`

- CITES — <https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-38.pdf>

### Piedras rodantes de Racetrack Playa

Artículo: `piedras-rodantes-playa-valle-de-la-muerte-racetrack`

- USGS — <https://www.usgs.gov/publications/terrain-analysis-racetrack-basin-and-sliding-rocks-death-valley>

### Ronroneo de los gatos

Artículo: `por-que-los-gatos-ronronean-frecuencia-sanacion-osea`

- Wiley / DOI — <https://doi.org/10.1111/j.1469-7998.1991.tb04749.x>

### Olor a tierra mojada

Artículo: `por-que-el-olor-a-tierra-mojada-petricor-geosmina`

- American Chemical Society — <https://pubs.acs.org/doi/10.1021/acs.jafc.4c01515>

### Pulpo mimo

Artículo: `pulpo-mimo-thaumoctopus-mimetismo-15-especies`

- American Museum of Natural History — <https://www.amnh.org/explore/news-blogs/mimic-octopus-behavior>
- ScienceDirect — <https://www.sciencedirect.com/science/article/pii/S0959438824000382>

### Relámpago del Catatumbo

Artículo: `relampago-del-catatumbo-tormenta-eterna-venezuela`

- DOI — <https://doi.org/10.1029/2025JD044030>

### Tiburón de Groenlandia

Artículo: `tiburon-de-groenlandia-vertebrado-mas-longevo`

- Proceedings of the National Academy of Sciences (DOI) — <https://doi.org/10.1073/pnas.2601272123>

### Vuelo silencioso del búho

Artículo: `vuelo-silencioso-buho-real-aerodinamica`

- Annual Reviews — <https://www.annualreviews.org/doi/10.1146/annurev-fluid-010518-040436>

## Fuente añadida durante la revisión de peces linterna

La fuente adicional incorporada el 12/09/2026 para el artículo de peces
linterna devolvió `203` en una petición automatizada. Se conserva como
candidata hasta abrir la ficha en un navegador normal:

- *Enhanced retinal longwave sensitivity using a chlorophyll-derived photosensitiser in Malacosteus niger* — PubMed — <https://pubmed.ncbi.nlm.nih.gov/10492812/>

## Procedimiento de revisión manual

Para cada URL marcada `403` (y, por prudencia, para las `203`) el editor debe
abrir el enlace en un navegador normal, sin asumir que el resultado de la
petición automatizada representa la experiencia de una persona:

1. Abrir la URL y registrar si carga, redirige a una ficha equivalente o pide
   acceso institucional.
2. Confirmar el título, autores o institución responsable, fecha o versión y
   tipo de publicación. En un DOI, seguir la redirección y comprobar la página
   del editor o el repositorio asociado.
3. Contrastar las afirmaciones concretas del artículo: cifras, especie,
   región, método, población, periodo y grado de certeza. Anotar el alcance
   que la fuente realmente permite, sin extrapolarlo.
4. Comprobar que la URL de la fuente sigue enlazada desde el cuerpo del
   artículo y que la referencia describe correctamente lo que se consultó.
5. Si la fuente no puede abrirse o no respalda la afirmación, buscar una
   alternativa accesible y equivalente (por ejemplo, repositorio institucional
   o texto completo legítimo), comprobarla con los mismos pasos y conservarla
   como alternativa documentada. No sustituir una fuente por una página que
   solo repita la afirmación.
6. Registrar el resultado, la fecha real y la decisión: `confirmada`,
   `confirmada con límite`, `alternativa necesaria` o `pendiente`. Solo una
   persona que haya realizado la comprobación puede completar los campos de
   revisión editorial del artículo.

Una respuesta `200`, `203` o `403` no autoriza por sí sola a aprobar, eliminar,
duplicar o automatizar una cita. Luna puede usar este snapshot para priorizar
la apertura manual, pero no debe convertir el estado HTTP en una conclusión
editorial ni publicar un artículo sin la revisión humana requerida.
