# Triage de afirmaciones editoriales — 2026-09-12

Este documento conserva la revisión de riesgo hecha sobre los artículos que tenían cifras, récords o explicaciones demasiado absolutas. Las correcciones de texto ya aplicadas son conservadoras; el editor humano todavía debe abrir cada fuente, comprobar el contexto y registrar la cita final antes de marcar el artículo como revisado.

## Correcciones aplicadas

| Artículo | Riesgo detectado | Tratamiento aplicado | Fuente candidata |
| --- | --- | --- | --- |
| `agujeros-azules-oceano-sinkholes-formacion-geologica` | Récord mundial de profundidad/ancho | Se quitaron los superlativos y se dejó cada medida como dato del sitio; se añadió Taam Ja' como control de actualidad | [Frontiers in Marine Science](https://doi.org/10.3389/fmars.2024.1387235) |
| `como-funciona-el-campo-magnetico-de-la-tierra-geodinamo` | 10–20% y “pocos milenios” como valores universales | Se explica que intensidad, duración y geometría varían entre transiciones | [NASA Science](https://science.nasa.gov/science-research/earth-science/flip-flop-why-variations-in-earths-magnetic-field-arent-causing-todays-climate-change/) |
| `geco-adherencia-van-der-waals-fuerzas-microscopicas` | “Idéntica potencia” en vacío/helio | Se conserva el resultado experimental y se añaden condiciones que limitan la magnitud medida | [PNAS](https://doi.org/10.1073/pnas.192252799) |
| `oso-tardigrado-criptobiosis-supervivencia-espacio` | Dsup y “mil veces” extrapolados a todo el animal | Se limita la afirmación a expresión experimental en células y se niega una protección universal | [eLife](https://doi.org/10.7554/eLife.47682) |
| `pez-abrecaminos-bioluminiscencia-pez-linterna` | 550 millones de toneladas, código de barras y mayor migración | Se eliminan el total mundial fijo y el récord; se explican variación regional y dependencia de especie | [PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC4728495/) |
| `por-que-las-cebras-tienen-rayas-termoregulacion-moscas` | Patrón “absolutamente irrepetible” | Se describe variación útil para identificar individuos sin prometer unicidad matemática | [PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC6776349/) |
| `por-que-es-contagioso-el-bostezo-neuronas-espejo` | Cercanía emocional “con fidelidad” | Se deja como asociación dependiente de muestra y contexto, no como diagnóstico | [PLOS ONE](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0028472) |
| `narval-unicornio-marino-colmillo-sensorial` | 15% y uno de cada 500 sin muestra | Se reemplazan por minoría y rareza; cualquier cifra debe atribuirse a una muestra concreta | [Anatomical Record](https://anatomypubs.onlinelibrary.wiley.com/doi/full/10.1002/ar.22886) |
| `relampago-del-catatumbo-tormenta-eterna-venezuela` | Temperatura, distancia audible y “faro” como absolutos | Se explican las dependencias atmosféricas y se trata “Faro de Maracaibo” como apodo histórico | [NOAA Central Library](https://repository.library.noaa.gov/view/noaa/52453) |
| `axolote-mexicano-regeneracion-tejidos-celulas-madre` | Densidad actual presentada como cifra única | Se exige fecha, zona y método para cualquier densidad silvestre | [PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC6669047/) |

## Pendientes antes de marcar `reviewedDate`/`reviewedBy`

1. Abrir la fuente primaria o institucional y comprobar que respalda exactamente la frase, no solo el tema general.
2. Añadir la cita concreta al frontmatter `sources` si la fuente pasa esa comprobación.
3. Revisar tablas, pies de imagen y FAQ por cifras que hayan quedado fuera del párrafo corregido.
4. Registrar la fecha y el nombre de la persona que hizo la revisión; no usar el nombre del modelo como autor o revisor.
5. Ejecutar `pnpm content:audit -- --json` y conservar cero `missingSources`, `invalidSources` e `insufficientSources`.

La biblioteca y el catálogo de fuentes son insumos de investigación para Luna Max; no autorizan a inventar citas, resultados, licencias, autorías o aprobación editorial.
