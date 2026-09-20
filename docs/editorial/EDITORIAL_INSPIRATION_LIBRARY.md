# Biblioteca de inspiración editorial y fuentes primarias

**Versión:** 20 de septiembre de 2026
**Propósito:** convertir investigación pública y confiable en briefs originales para EcoCuriosa, sin copiar artículos ni publicar automáticamente.

Esta biblioteca no es una cola de publicaciones ni una bibliografía universal. Cada ficha es una **oportunidad de investigación**: antes de redactar, el editor debe abrir la fuente, comprobar su fecha y alcance, localizar el estudio o conjunto de datos que respalda cada afirmación y registrar las URLs concretas en el frontmatter del artículo.

El catálogo legible por automatizaciones está en [`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml). Sus entradas son candidatas y no deben copiarse automáticamente al campo `sources`.

## Cómo usarla

1. Luna Max propone como máximo cinco oportunidades y las ordena con datos reales de Search Console, no con volumen de palabras clave inventado.
2. El editor elige una sola pregunta, comprueba las fuentes y decide qué aportación propia habrá: un diagrama, una comparación, un mapa, una explicación paso a paso o una entrevista atribuida.
3. Se redacta una respuesta breve con alcance y límite de evidencia; las hipótesis permanecen etiquetadas como hipótesis.
4. No se completa `reviewedDate` ni `reviewedBy` hasta que una persona responsable haya revisado el texto, las fuentes y la imagen.

## Fuentes de referencia para descubrir temas

| Fuente primaria o institucional | Qué permite investigar | Señal de calidad que aporta | URL directa |
| --- | --- | --- | --- |
| NOAA Ocean Exploration — bioluminiscencia | Luz producida por organismos, funciones posibles y preguntas todavía abiertas | Programa científico público; distingue hechos de incertidumbres | https://oceanexplorer.noaa.gov/ocean-fact/bioluminescence/ |
| NOAA Ocean Exploration — luz en el océano | Zonas fótica, crepuscular y afótica, sensibilidad visual y transferencia de alimento | Explicación con rangos de profundidad y contexto oceanográfico | https://oceanexplorer.noaa.gov/ocean-fact/light-distributed/ |
| NOAA Ocean Exploration — zona crepuscular | Adaptaciones y exploración de la zona mesopelágica | Bitácora de expedición con observaciones y autoría | https://oceanexplorer.noaa.gov/expedition-feature/okeanos-ex1903-logs-july6/ |
| NASA Earth Observatory — Life on Earth | Vegetación, ciclos de carbono, agua, fauna y cambios observados por satélite | Archivo de observación de la Tierra con responsables identificables | https://science.nasa.gov/earth/earth-observatory/topics/life-on-earth/ |
| NASA Science — auroras | Viento solar, magnetosfera, colores y ciencia ciudadana | Explica mecanismo, misión y límites de observación | https://science.nasa.gov/sun/auroras/ |
| NASA Science — viento solar | Partículas, reconexión magnética, auroras y efectos tecnológicos | Fuente institucional para física Sol-Tierra | https://science.nasa.gov/sun/what-is-the-solar-wind/ |
| NASA Science — magnetosfera | Escudo magnético, cinturones de Van Allen y clima espacial | Conecta fenómeno visible con riesgo tecnológico sin alarmismo | https://science.nasa.gov/science-research/earth-science/earths-magnetosphere-protecting-our-planet-from-harmful-space-energy/ |
| USGS — temas de peligros naturales | Sismos, volcanes, deslizamientos, tsunamis, sumideros y geomagnetismo | Catálogo oficial de datos, métodos y riesgos | https://www.usgs.gov/mission-areas/natural-hazards/science/science-topics |
| USGS — ciencia del agua | Monitoreo, ecosistemas acuáticos, sequías y calidad del agua | Datos y métodos de una agencia geológica pública | https://www.usgs.gov/mission-areas/water-resources/science/ |
| NASA Earth Observatory — archivo de biodiversidad | Cambios de hábitat, floraciones algales y fauna vistos desde el espacio | Permite explicar método de observación, no solo el resultado | https://science.nasa.gov/earth/earth-observatory/topics/life-on-earth/ |
| IUCN Red List | Estado de conservación, distribución, amenazas y nivel de incertidumbre | Registro global especializado; obliga a citar la evaluación de cada taxón | https://nrl.iucnredlist.org/ |
| PubMed Central — regeneración animal | Comparación entre hidras, planarias, peces, salamandras y mamíferos | Revisión científica de mecanismos y límites; no promete aplicaciones médicas | https://pmc.ncbi.nlm.nih.gov/articles/PMC11072743/ |
| PubMed Central — base celular de la regeneración | Progenitores, blastema y diferencias entre especies | Revisión académica con referencias rastreables | https://pmc.ncbi.nlm.nih.gov/articles/PMC3139400/ |
| PubMed Central — pérdida de regeneración | Por qué la regeneración cambia entre linajes y tejidos | Presenta incertidumbres evolutivas y límites del modelo animal | https://pmc.ncbi.nlm.nih.gov/articles/PMC10922877/ |
| Smithsonian Open Access | Colecciones, especímenes y recursos visuales reutilizables | Metadatos y condiciones de uso consultables por activo | https://www.si.edu/openaccess |
| NASA Brand Center — imágenes y medios | Reglas para usar material de NASA y diferenciar marca, crédito y licencia | Política institucional de uso, no una licencia universal | https://www.nasa.gov/nasa-brand-center/images-and-media/ |
| Creative Commons — guía para periodistas | Atribución, enlace a licencia y registro de procedencia | Guía de la organización que mantiene las licencias CC | https://creativecommons.org/wp-content/uploads/2023/05/AJournalistsGuideToCreativeCommons2023_1.0.pdf |
| Creative Commons — deed CC BY 4.0 | Condiciones concretas de atribución, enlace y cambios | Texto legal legible; comprobar siempre la licencia del activo real | https://creativecommons.org/licenses/by/4.0/ |
| Cloudflare Web Analytics | Métricas de usuarios reales y privacidad de la medición | Documentación del proveedor; útil para interpretar LCP, INP y CLS sin confundir laboratorio con RUM | https://developers.cloudflare.com/web-analytics/about/ |
| Cloudflare Pages — `_headers` | Cómo aplicar cabeceras personalizadas a respuestas estáticas | Permite comprobar precedencia y límites antes de cambiar seguridad o caché | https://developers.cloudflare.com/pages/configuration/headers/ |
| Cloudflare Cache-Control | Diferencia entre caché de navegador (`max-age`) y caché de borde (`s-maxage`) | Ayuda a mejorar entrega sin convertir HTML con consentimiento o anuncios en una caché indiscriminada | https://developers.cloudflare.com/cache/concepts/cache-control/ |

## Políticas que deben acompañar cada brief

| Tema | Fuente oficial | Aplicación en EcoCuriosa |
| --- | --- | --- |
| Contenido útil y autoría | [Google: contenido útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=es) | Respuesta propia, autoría visible, experiencia o análisis demostrable |
| IA generativa | [Google: IA generativa](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) | Luna asiste; la persona comprueba exactitud, calidad y valor añadido |
| Abuso de contenido escalado | [Políticas de spam de Google](https://developers.google.com/search/docs/essentials/spam-policies) | No crear muchas páginas para manipular Search; cada brief debe aportar una respuesta y un trabajo original comprobable |
| Contenido replicado o de bajo valor | [Política de contenido replicado](https://support.google.com/publisherpolicies/answer/11190248?hl=es) y [contenido sin valor editorial](https://support.google.com/publisherpolicies/answer/11112688?hl=es) | No publicar reescrituras automáticas ni páginas creadas solo para anuncios |
| Autor en datos estructurados | [Article](https://developers.google.com/search/docs/appearance/structured-data/article?hl=es) y [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page?hl=es) | Usar `Person`/`Organization` real, visible y enlazado a su perfil |
| Datos estructurados honestos | [Directrices de datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=es) | El JSON-LD debe describir contenido visible; no garantiza rich results |
| FAQ | [Cambios de FAQ de Google](https://developers.google.com/search/blog/2023/08/howto-faq-changes) | Mantener FAQ solo cuando ayuda al lector; no prometer un resultado enriquecido |
| Derechos de imágenes | [Metadatos de licencia](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata), [IPTC](https://iptc.org/news/iptc-publishes-metadata-guidance-for-ai-generated-synthetic-media/) y [C2PA](https://spec.c2pa.org/specifications/specifications/2.4/specs/ContentCredentials.html) | Guardar creador, licencia, crédito y procedencia; etiquetar imágenes sintéticas |
| Rendimiento y privacidad de analítica | [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/about/) y [Core Web Vitals](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/) | Medir usuarios reales; no confundir una prueba puntual con datos de audiencia |

### Fuentes operativas verificadas para el ciclo de publicación

Estas páginas no sustituyen la revisión del artículo: fijan cómo comprobar indexación, rendimiento, consentimiento y medición antes de escalar la producción.

| Control | Fuente oficial | Decisión operativa |
| --- | --- | --- |
| Rastreo e indexación | [Guía de rastreo e indexación](https://developers.google.com/search/docs/crawling-indexing) y [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) | Diagnosticar acceso y rastreo por separado; robots.txt no garantiza desindexación |
| URL concreta | [Inspección de URL](https://support.google.com/webmasters/answer/9012289?hl=es) | Guardar la URL, canonica declarada y estado observado; no inferir indexación desde un HTTP 200 |
| Duplicados | [Consolidar URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) | Preferir una URL canónica y señales coherentes antes de crear variantes |
| Velocidad | [Web Vitals](https://web.dev/articles/vitals), [optimizar LCP](https://web.dev/articles/optimize-lcp) y [optimizar CLS](https://web.dev/articles/optimize-cls) | Medir P75 de usuarios reales y corregir la plantilla antes de añadir scripts o anuncios |
| Anuncios | [Anuncios automáticos](https://support.google.com/adsense/answer/9261307?hl=es) y [ubicación de anuncios](https://support.google.com/adsense/answer/1346295?hl=es) | Configurar solo después de aprobación y retirar ubicaciones que confundan o interrumpan la lectura |
| Consentimiento | [Gestión de mensajes CMP](https://support.google.com/adsense/answer/7670013?hl=es) y [TCF de IAB](https://support.google.com/adsense/answer/9804260?hl=es) | Mantener un mensaje certificado para EEE, Reino Unido y Suiza; comprobar el comportamiento sin consentimiento |
| Medición | [Informe de rendimiento](https://support.google.com/webmasters/answer/7576553?hl=es) y [dimensiones y límites](https://support.google.com/webmasters/answer/17011259?hl=es) | Priorizar consultas, páginas, país y dispositivo reales; no inventar volumen ni mezclar periodos incomparables |
| Discover | [Requisitos y buenas prácticas de Discover](https://developers.google.com/search/docs/appearance/google-discover) | Preparar titulares no sensacionalistas e imágenes relevantes; elegibilidad no garantiza impresiones |
| News (condicional) | [Descubrimiento en Google News](https://support.google.com/news/publisher-center/answer/9606634?hl=es) | No crear un sitemap de News mientras el sitio sea una enciclopedia evergreen; reconsiderarlo solo si se publican reportajes actuales |
| Auditoría de autoridad | [Search Quality Rater Guidelines](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf) | Usar como marco de confianza y responsabilidad del sitio, no como fórmula del algoritmo ni promesa de ranking |
| Perfil de pagos | [Perfil de pagos de AdSense](https://support.google.com/adsense/answer/7363450?hl=es) y [pasos para recibir pagos](https://support.google.com/adsense/answer/1709858?hl=es) | El titular completa personalmente nombre legal, país, dirección, impuestos y beneficiario; Luna no accede ni modifica la cuenta |
| Dirección y PIN | [Dirección de pagos válida](https://support.google.com/adsense/answer/13863682?hl=es) y [verificación por PIN](https://support.google.com/adsense/answer/157667?hl=es) | Usar una dirección real donde pueda recibirse correo; guardar la tarea como pendiente hasta que AdSense la solicite |
| Retenciones | [Causas de retención de pagos](https://support.google.com/adsense/answer/1714364?hl=es) | Revisar alertas de impuestos, identidad, dirección, método de pago y políticas antes de esperar ingresos |
| Histórico de Search Console | [Exportación masiva](https://support.google.com/webmasters/answer/12918484?hl=es) y [exportación de informes](https://support.google.com/webmasters/answer/12919797?hl=es) | Empezar con CSV/Sheets; BigQuery es opcional y puede generar costes, nunca un requisito de AdSense |
| Enlaces y autoridad | [Informe de enlaces](https://support.google.com/webmasters/answer/9049606?hl=es) | Revisar enlaces internos y menciones externas como muestra; no tratarlo como inventario completo de backlinks |

## Banco inicial de oportunidades

Las siguientes ideas son **briefs candidatos**, no artículos aprobados. Las consultas son hipótesis de intención que deben validarse en Search Console antes de priorizar.

| Prioridad inicial | Pregunta editorial diferenciada | Categoría | Evidencia de partida | Aportación propia obligatoria | Riesgo a controlar |
| --- | --- | --- | --- | --- | --- |
| Alta | ¿Qué funciones puede tener la bioluminiscencia y qué sigue sin saberse? | Especies marinas | NOAA bioluminiscencia + un estudio primario específico por especie | Diagrama enzima/sustrato y tabla función–evidencia–incertidumbre | No convertir una hipótesis adaptativa en función demostrada |
| Alta | ¿Qué cambia entre la zona fótica, crepuscular y afótica? | Especies marinas | NOAA luz oceánica + datos de profundidad de una expedición | Corte vertical del océano con unidades y fuentes | No tratar límites de profundidad como fronteras idénticas en todos los océanos |
| Alta | ¿Cómo estudian los satélites una floración algal sin “ver” cada alga? | Ciencia curiosa | NASA Earth Observatory + datos ambientales institucionales | Flujo método → señal → validación en campo | No atribuir causalidad a una imagen satelital aislada |
| Alta | ¿Por qué una aurora es una señal de clima espacial? | Fenómenos naturales | NASA auroras + viento solar + magnetosfera | Diagrama Sol–magnetosfera–atmósfera y glosario | Separar belleza visual de riesgos tecnológicos reales |
| Alta | ¿Qué puede y qué no puede regenerar un animal? | Fauna fascinante | Revisiones PMC sobre regeneración | Matriz por especie, tejido y evidencia | No presentar regeneración animal como terapia humana |
| Media | ¿Por qué la regeneración cambia entre linajes? | Ciencia curiosa | Revisión PMC sobre pérdida/evolución de regeneración | Árbol comparativo con límites y preguntas abiertas | Distinguir hipótesis evolutiva de consenso |
| Media | ¿Cómo se investiga un sumidero, un deslizamiento o un volcán? | Fenómenos naturales | USGS temas de peligros | Checklist visual de observación, medición y aviso | No dar instrucciones de seguridad sin organismo local |
| Media | ¿Qué mide realmente una estación de agua? | Ciencia curiosa | USGS ciencia del agua | Infografía de caudal, calidad y ecosistema | No extrapolar un punto de medición a toda una cuenca |
| Media | ¿Cómo se decide si una especie está amenazada? | Fauna fascinante | Evaluación concreta de IUCN por taxón | Lectura guiada de distribución, tendencia y amenazas | Citar la evaluación vigente, no una categoría recordada |
| Media | ¿Qué hay de científico en explorar la zona crepuscular? | Especies marinas | NOAA bitácora mesopelágica + fuente académica | Diario de expedición que separe observación e interpretación | No usar lenguaje de “mundo alienígena” como afirmación biológica |
| Baja | ¿Cómo se convierte una colección de museo en una historia visual? | Ciencia curiosa | Smithsonian Open Access + ficha de espécimen | Ficha de procedencia, licencia y contexto | Registrar licencia del activo concreto, no solo del portal |
| Baja | ¿Qué significa realmente “imagen de NASA”? | Metodología editorial | NASA Brand Center + licencia del activo | Ejemplo de crédito correcto/incorrecto | No asumir que todo lo alojado en NASA es libre de cualquier uso |

## Banco de oportunidades recientes (12 de septiembre de 2026)

Estas oportunidades se incorporan desde fuentes institucionales recientes. La fecha y el alcance son parte del brief: no se deben convertir en cifras permanentes ni en titulares universales. Cada propuesta necesita una consulta real de Search Console y una comprobación de las fuentes antes de pasar a redacción.

| Prioridad | Pregunta editorial people-first | Fuentes candidatas | Aportación propia | Límite que debe quedar visible |
| --- | --- | --- | --- | --- |
| Alta | ¿Qué riesgos tienen los moluscos de fuentes hidrotermales y por qué importa protegerlos? | [IUCN, 2026](https://iucn.org/press-release/202607/desert-frog-deep-sea-molluscs-remarkable-species-risk-iucn-red-list) | Mapa de hábitat, amenaza y decisión de conservación | Alcance limitado a los taxones evaluados; no extrapolar a toda la vida marina |
| Alta | ¿Qué está ocurriendo con los peces de agua dulce europeos? | [IUCN, 2026](https://iucn.org/press-release/202604/almost-half-european-freshwater-fishes-risk-extinction-new-iucn-red-list) | Tabla que traduzca categoría, distribución y amenaza para comunidades ribereñas | Es una evaluación regional, no un censo mundial |
| Alta | ¿Cómo puede una búsqueda de secuencias ayudar a encontrar biodiversidad? | [GBIF, búsqueda de secuencias](https://www.gbif.org/news/1RGAh9ay47GsvleOhDC9js/from-base-pairs-to-binomials-is-sequence-search-now-available-on-gbiforg/) | Diagrama pares de bases → coincidencia → identificación taxonómica | Similitud de secuencia no demuestra por sí sola identidad o distribución |
| Alta | ¿Qué promete el eDNA marino y qué sigue en desarrollo? | [Programa GBIF 2026](https://docs.gbif.org/2026-work-programme/en/gbif-work-programme-2026.en.pdf) | Flujo de muestreo, metabarcoding y validación en campo | Es un programa de trabajo; no presentarlo como resultado global concluido |
| Alta | ¿Qué significa realmente un episodio mundial de blanqueamiento coralino? | [NOAA, actualización](https://www.nesdis.noaa.gov/news/worlds-fourth-mass-coral-bleaching-event-likely-ended-2025) · [informe técnico](https://www.coralreefwatch.noaa.gov/satellite/research/coral_bleaching_report.php) | Gráfico estrés térmico → blanqueamiento → recuperación o mortalidad | Área afectada no equivale a porcentaje de coral muerto; conservar la incertidumbre |
| Alta | ¿Cómo afectan las olas de calor marinas a pesca, acuicultura y fauna? | [NOAA PSL](https://psl.noaa.gov/marine-heatwaves/) · [contenido de calor](https://oceanwatch.noaa.gov/cwn/product-families/ocean-heat-content.html) | Comparación de una anomalía con su profundidad y duración | Diferenciar observación de pronóstico experimental y respetar el alcance vertical |
| Alta | ¿Cómo “ve” PACE el color vivo del océano? | [NASA PACE](https://science.nasa.gov/mission/pace/) · [actualización de campo](https://science.nasa.gov/blogs/notes-from-the-field/2026/07/07/keeping-pace-with-ocean-change/) | Método señal espectral → hipótesis → validación con muestras | La teledetección observa principalmente superficie; no confirma toxicidad por sí sola |
| Media | ¿Cómo se traduce El Niño en señales medibles desde el espacio? | [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/el-nino-is-underway/) | Mapa regional de probabilidades y efectos cotidianos | No atribuir cada evento meteorológico a El Niño |
| Media | ¿Cómo se estudian lluvias extremas y deslizamientos sin prometer un balance final? | [USGS, amenazas de deslizamiento](https://www.usgs.gov/programs/landslide-hazards/science/2026-hurricane-lala-landslide-hazards) | Lectura guiada de mapa de amenaza, erosión y sedimentación | El informe es preliminar y puede cambiar |
| Media | ¿Qué vuelve excepcional a una nevada amplia en el Atacama? | [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/rare-widespread-snow-in-the-atacama-desert/) | Comparación Landsat/MODIS y efectos en agua, rutas y observatorios | “Raro” no significa “sin precedentes” ni prueba causal de cambio climático |
| Media | ¿Cómo leer un informe semanal de actividad volcánica? | [Smithsonian/USGS](https://volcano.si.edu/reports_weekly.cfm) | Glosario visual de alerta, ceniza, lava y aviación | Es un reporte preliminar, no una predicción de erupción |
| Media | ¿Qué puede revelar un radar sobre un terremoto? | [NASA NISAR](https://science.nasa.gov/earth/earth-observatory/where-venezuelas-earthquakes-shifted-the-ground/) | Antes/después de interferometría y protocolo de inspección | Desplazamiento del terreno no equivale a mapa completo de daños |
| Media | ¿Qué son las nubes pirocumulonimbo y por qué importan? | [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/chasing-fire-clouds-in-utah/) | Esquema incendio → convección → humo y exposición | No convertir un caso de investigación en pronóstico local |
| Baja | ¿Cómo se detecta una floración algal desde un satélite y una muestra de agua? | [NASA/USGS/NPS](https://science.nasa.gov/earth/earth-observatory/examining-algal-blooms-in-blue-mesa/) | Cadena imagen → muestra → decisión de salud pública | El caso corresponde a un embalse y periodo concretos; no generalizar |
| Alta | ¿Qué puede medir un ECG colocado en una ballena azul libre? | [PNAS / PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC6911174/) | Diagrama de etiqueta, profundidad y ritmo; separar individuo, inmersión y especie | Un solo macho no define el rango normal de todas las ballenas |
| Alta | ¿Por qué la memoria de una matriarca no se resume en “memoria infinita”? | [Frontiers in Aging Neuroscience](https://pmc.ncbi.nlm.nih.gov/articles/PMC9261397/) · [estudio celular](https://pmc.ncbi.nlm.nih.gov/articles/PMC4053853/) | Comparación entre experiencia social, distribución neuronal y límites de inferencia | No convertir una conducta observada en una medida universal de inteligencia |
| Alta | ¿Qué sabemos realmente de la manta raya gigante? | [NOAA Fisheries](https://www.fisheries.noaa.gov/species/giant-manta-ray) | Mapa de tamaño, profundidad, población desconocida y amenazas | Los máximos de la ficha no son promedios; el estado de población cambia con nuevos datos |
| Alta | ¿Cómo se documenta el tráfico internacional de pangolines? | [TRAFFIC/IUCN SSC](https://www.traffic.org/publications/reports/the-global-trafficking-of-pangolines/) · [CITES](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-038.pdf) | Línea temporal de decomisos, rutas y marco legal | Los decomisos son una muestra del comercio, no un censo de animales extraídos |
| Alta | ¿Cómo se mide un evento global de blanqueamiento coralino? | [NOAA Coral Reef Watch](https://www.coralreefwatch.noaa.gov/satellite/research/coral_bleaching_report.php) | Gráfico DHW → alerta → observación de campo → recuperación o mortalidad | Área con estrés térmico no equivale a porcentaje de coral muerto |
| Alta | ¿Qué puede y qué no puede predecir un calentamiento estratosférico? | [NOAA Climate.gov](https://prod-01-asg-www-climate.woc.noaa.gov/news-features/understanding-climate/understanding-arctic-polar-vortex) · [revisión especializada](https://doi.org/10.1029/2020RG000708) | Línea temporal estratosfera → chorro → tiempo de superficie | Una perturbación no garantiza una ola de frío local; los modelos y la variabilidad importan |
| Alta | ¿Qué significa que un tardígrado sobreviva al vacío espacial? | [Current Biology](https://doi.org/10.1016/j.cub.2008.06.048) · [eLife](https://doi.org/10.7554/eLife.47682) | Matriz especie × estado seco × vacío/UV × recuperación; separar organismo y células | Diez días de exposición y una proteína celular no equivalen a invulnerabilidad |
| Media | ¿Cómo se estudia el vuelo silencioso sin mezclar especies? | [Journal of Anatomy](https://pmc.ncbi.nlm.nih.gov/articles/PMC3162239/) · [Annual Review](https://www.annualreviews.org/doi/10.1146/annurev-fluid-010518-040436) | Lámina anotada de serraciones, flecos y plumón con especie y método | La evidencia detallada se concentra en *Tyto alba* y no fija un porcentaje para todos los búhos |

### Fuentes focalizadas incorporadas en la revisión de septiembre

Estas fuentes se añadieron al catálogo para que Luna pueda proponer briefs con un alcance verificable. La inclusión no significa que el artículo esté aprobado ni que cada cifra de la fuente sea transferible a otra especie o lugar.

| Tema | Fuente primaria o institucional | Pregunta que permite investigar | Límite que debe conservarse |
| --- | --- | --- | --- |
| Agujeros azules | [NOAA Ocean Exploration](https://oceanexplorer.noaa.gov/expedition/20blue-holes/) · [USGS microbiología](https://www.usgs.gov/publications/gulf-mexico-blue-hole-harbors-high-levels-novel-microbial-lineages) | ¿Cómo se comparan un sumidero kárstico, su estratificación y sus comunidades microbianas? | Los datos son de sitios concretos del Golfo; no describen todos los agujeros azules |
| Mammatus | [NWS](https://forecast.weather.gov/glossary.php?word=MAMMATUS) · [WMO Cloud Atlas](https://cloudatlas.wmo.int/es/clouds-supplementary-features-and-genera-most-frequently-occur-table.html) · [NASA](https://science.nasa.gov/blogs/notes-from-the-field/2013/05/30/multi-wavelength-view-of-mammatus/) | ¿Qué es una mammatus y qué información meteorológica no puede dar una fotografía? | No es un predictor aislado de tornado, granizo o turbulencia |
| Calamar gigante | [PubMed/Royal Society B](https://pubmed.ncbi.nlm.nih.gov/16321779/) · [Smithsonian](https://naturalhistory.si.edu/explore/giant-squid) | ¿Qué cambia cuando un animal raro se estudia vivo, en vídeo y en un museo? | Una observación y un ejemplar no definen conducta ni tamaño poblacional |
| Géiseres | [NPS: sistemas hidrotermales](https://www.nps.gov/yell/learn/nature/hydrothermal-systems.htm) · [manifestaciones](https://www.nps.gov/yell/learn/nature/hydrothermal-features.htm) | ¿Cómo interactúan calor, agua y conductos para producir una erupción? | Las cifras e intervalos deben atribuirse a Yellowstone o a la medición concreta |

#### Briefs candidatos derivados

| Prioridad | Pregunta editorial | Aportación propia obligatoria | Criterio de salida |
| --- | --- | --- | --- |
| Alta | ¿Por qué un agujero azul no es solo un “pozo sin fondo”? | Corte geológico con agua, sedimento, gradiente y método de muestreo | Cada capa indica sitio, fecha y fuente; no hay cronología planetaria implícita |
| Alta | ¿Qué puede decir una mammatus y qué no? | Tarjeta de lectura: forma → observación → aviso oficial | El titular no anuncia tornado ni severidad automática |
| Alta | ¿Cómo se convirtió el calamar gigante de mito en registro científico? | Línea temporal museo → cebo → vídeo → incertidumbre | Cada tamaño o conducta conserva el tipo de evidencia y su límite |
| Alta | ¿Qué ocurre dentro de un géiser antes de que lo veamos? | Diagrama de recarga, presión, burbujas y expulsión | No se publican alturas, litros o temperaturas sin medición del géiser |

| Alta | ¿Cómo distinguir un pronóstico auroral de una fotografía espectacular? | [NASA aurora G1, 2026](https://science.nasa.gov/earth/earth-observatory/northern-glow-spans-iceland-and-canada/) · [NASA auroras](https://science.nasa.gov/sun/auroras/) | Ficha fecha–sensor–tormenta–visibilidad local | Un evento observado no predice la visibilidad de otra noche o ciudad |
| Alta | ¿Qué significa realmente que florezca *Noctiluca*? | [Smithsonian](https://naturalhistory.si.edu/research/botany/research/dinoflagellates/harmful-marine-dinoflagellate-taxa) · [NOAA](https://repository.library.noaa.gov/view/noaa/59779) | Cadena organismo → floración → luz → muestra de agua | Diferenciar especie, región, color y riesgo sanitario; no generalizar un caso |
| Alta | ¿Qué parte del ronroneo se explica por la laringe? | [Current Biology](https://doi.org/10.1016/j.cub.2023.09.014) · [Wiley](https://doi.org/10.1111/j.1469-7998.1991.tb04749.x) | Corte laríngeo con frecuencia, muestra y condiciones | Frecuencia no es terapia ni diagnóstico emocional |
| Alta | ¿Qué observó realmente el experimento de Racetrack Playa? | [NPS](https://www.nps.gov/deva/planyourvisit/the-racetrack.htm) · [PLOS ONE](https://doi.org/10.1371/journal.pone.0105948) | Mapa de roca, hielo, viento, GPS y límite de observación | No decir que todas las rocas ni todos los surcos están explicados |

### Fuentes focalizadas de Luna Max — segunda tanda

Estas propuestas convierten la investigación de Luna en briefs concretos. Cada una requiere validar la consulta real en Search Console, abrir las fuentes y aportar un activo original antes de redactar.

| Prioridad | Pregunta people-first | Fuentes candidatas | Aportación propia | Límite obligatorio |
| --- | --- | --- | --- | --- |
| Alta | ¿Por qué blanquear no significa automáticamente morir? | [NOAA](https://oceanservice.noaa.gov/facts/coral_bleach.html?os=i) · [Nature](https://doi.org/10.1038/nature21707) | Diagrama estrés térmico → pérdida de simbiontes → recuperación o mortalidad | No usar umbral ni porcentaje global sin fecha y método |
| Alta | ¿Cómo funciona la Tierra como generador magnético? | [USGS](https://www.usgs.gov/programs/geomagnetism/introduction-geomagnetism) · [Nature Reviews](https://doi.org/10.1038/s43017-022-00264-1) | Corte del núcleo y tabla de mecanismos propuestos | No anunciar una inversión inminente ni atribuirle extinciones |
| Alta | ¿Por qué el petricor no es solo geosmina? | [Nature Communications](https://doi.org/10.1038/ncomms7083) · [Nature Chemical Biology](https://doi.org/10.1038/nchembio.2007.29) | Cadena gota → aerosol → molécula → percepción | No extrapolar un experimento de laboratorio a toda lluvia |
| Alta | ¿Por qué el agua hierve antes pero cocina más lento en altura? | [NPS](https://www.nps.gov/cany/planyourvisit/waterpurification.htm) · [USDA](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/high-altitude-cooking) | Comparación presión–temperatura–tiempo y olla a presión | No prometer eliminación de contaminantes químicos |
| Alta | ¿Qué condiciones alimentan el relámpago del Catatumbo? | [JGR](https://doi.org/10.1029/2025JD044030) · [JASTP](https://doi.org/10.1016/j.jastp.2012.01.013) | Mapa lago–brisas–relieve–convección con periodo | No usar “nunca se detiene” ni récords sin métrica |
| Alta | ¿Es el colmillo del narval un diente sensorial? | [NOAA Fisheries](https://www.fisheries.noaa.gov/species/narwhal) · [Anatomical Record](https://doi.org/10.1002/ar.22886) | Corte del colmillo con funciones confirmadas e hipótesis | No llamarlo cuerno ni generalizar una población |
| Media | ¿Qué función pueden tener las rayas de una cebra? | [Smithsonian](https://nationalzoo.si.edu/animals/grevys-zebra) · [Royal Society Open Science](https://doi.org/10.1098/rsos.140452) | Separar especies y comparar hipótesis con evidencia | No declarar una causa única ni mezclar estatus de conservación |
| Media | ¿Cómo se observa el mimetismo dinámico del pulpo mimo? | [Smithsonian Ocean](https://ocean.si.edu/ocean-life/invertebrates/how-octopuses-and-squids-change-color) · [Royal Society B](https://doi.org/10.1098/rspb.2001.1708) | Secuencia de postura, contexto y nivel de certeza | No inferir intención humana ni un catálogo fijo de modelos |
| Alta | ¿Qué recuerda un tejido durante la regeneración del ajolote? | [Nature](https://doi.org/10.1038/nature08152) · [Springer](https://doi.org/10.1007/s11252-025-01700-y) | Contraste laboratorio–humedal de Xochimilco | No prometer regeneración humana ni cifras silvestres sin censo |
| Alta | ¿Qué mide un ECG en una ballena azul libre? | [NOAA Fisheries](https://www.fisheries.noaa.gov/species/blue-whale) · [Biology Letters](https://doi.org/10.1098/rsbl.2003.0132) | Diagrama de etiqueta, inmersión y área de alimentación | Un individuo o sitio no define toda la especie |
| Alta | ¿Qué significa que un tardígrado tolere radiación? | [NASA Cell Science-04](https://science.nasa.gov/biological-physical/investigations/cell-science-04/) · [Science](https://doi.org/10.1126/science.adl0799) | Matriz especie × estado × estrés × recuperación | No convertir una especie o ensayo celular en inmortalidad |
| Media | ¿Por qué no existe un único “elefante africano” en la conservación? | [IUCN](https://iucn.org/news/species/202103/african-elephant-species-now-endangered-and-critically-endangered-iucn-red-list) · [Current Biology](https://doi.org/10.1016/j.cub.2023.09.007) | Comparación bosque/sabana y anatomía de trompa | No usar datos de elefante asiático como población africana |
| Media | ¿Cómo localiza presas un búho y qué parte del ala reduce ruido? | [Cornell Lab](https://www.allaboutbirds.org/guide/Barn_Owl) · [Biological Journal](https://doi.org/10.1093/biolinnean/blab138) | Lámina cara–oído–pluma con especie y método | No afirmar silencio total ni mezclar taxonomías |

### Fuentes nuevas para ampliar la biblioteca — 12 de septiembre

Estas entradas complementan las fichas existentes con datos primarios o institucionales. Son insumos para futuros briefs, no citas automáticas ni artículos listos para publicar.

| Tema | Fuente añadida | Uso editorial | Límite obligatorio |
| --- | --- | --- | --- |
| Agujeros azules | [USGS: mediciones radioanalíticas en estructuras kársticas submarinas](https://www.usgs.gov/data/radioanalytical-measurements-samples-submarine-karstic-carbonate-features-along-west-florida) | Comparar radón, radio y estratificación en Amberjack y Green Banana | Datos regionales y de muestras; no generalizar a todos los agujeros azules |
| Nubes mammatus | [NOAA/NWS Glossary](https://forecast.weather.gov/glossary.php?word=mammatus) | Definir la formación y explicar por qué una foto no predice severidad | La mammatus puede acompañar tormentas no severas; no es predictor aislado |
| Fuentes hidrotermales | [NOAA Ocean Exploration](https://oceanexplorer.noaa.gov/education/hydrothermal-vents-volcanoes/) · [campos de la Dorsal Central India](https://repository.library.noaa.gov/view/noaa/32606) | Diagrama agua–calor–química y comparación de un descubrimiento real | Mantener separados mecanismo general, región, taxones y fecha de muestreo |
| Clima espacial | [NASA: efectos de tormentas solares](https://science.nasa.gov/blogs/science-news/2026/07/15/new-nasa-study-says-possibly-no-limit-to-solar-storm-effects/) | Explicar qué significa una hipótesis sobre límites de respuesta magnetosférica | Resultado provisional; no convertirlo en pronóstico de una tormenta extrema |

### Fuentes nuevas para la siguiente tanda de investigación — 12 de septiembre

Luna Max añadió doce fuentes no duplicadas para reforzar las piezas con más deuda de evidencia. Son candidatas de investigación: requieren abrir la ficha, comprobar la relación afirmación → fuente y conservar el alcance antes de citarlas.

Las comprobaciones HTTP de esta tanda devolvieron acceso directo en PubMed Central, PubMed, PLOS y NOAA; algunas landing pages de DOI, USGS, Wiley, Oxford Academic, la American Meteorological Society y ScienceDirect pueden responder 403 o pedir navegador/institución. Eso es una limitación de acceso automatizado, no una validación editorial ni un motivo para inventar una cita.

| Tema | Fuente candidata | Brief people-first | Límite obligatorio |
| --- | --- | --- | --- |
| Manta raya | [Cranial endothermy in mobulid rays](https://pubmed.ncbi.nlm.nih.gov/39434239/) | ¿Cómo puede mantenerse caliente el cerebro de una manta en aguas frías? | Mecanismo propuesto; no prueba cognición ni rendimiento en libertad |
| Manta raya | [Effect of diver presence on juvenile manta ray behavior](https://doi.org/10.3390/drones9110781) | ¿Qué cambia en la conducta de juveniles cuando se acercan buceadores? | Nursery, juveniles y muestra concreta; no generalizar a toda la especie |
| Elefantes | [Long-term social memory for zoo keepers](https://doi.org/10.1002/zoo.21871) | ¿Qué significa realmente que un elefante “no olvide”? | Dos animales en cautividad y respuesta indicativa; no memoria ilimitada |
| Elefantes | [Building an Elephant Brain Database](https://pmc.ncbi.nlm.nih.gov/articles/PMC11693083/) | ¿Qué puede medir una base de cerebros de elefante y qué no? | 23 especímenes y MRI post mortem; no prueba directa de inteligencia |
| Pangolines | [Pangolin genomes and conservation resources](https://doi.org/10.1093/molbev/msad190) | ¿Por qué la diversidad genética importa además de contar individuos? | Inferencias dependientes del muestreo; no censo poblacional actual |
| Pangolines | [Chromosome-level assemblies and inbreeding](https://pubmed.ncbi.nlm.nih.gov/39947250/) | ¿Cómo puede el ADN orientar rescates sin mezclar poblaciones? | Individuos y poblaciones analizadas no cubren todo el rango |
| Peces linterna | [Variation in lanternfish photophore structure](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0310976) | ¿Por qué no existe un único “órgano linterna” en el océano profundo? | Anatomía comparativa; la función conductual requiere observación directa |
| Géiseres | [First instrumentally detected hydrothermal explosion in Yellowstone](https://www.usgs.gov/publications/first-instrumentally-detected-hydrothermal-explosion-yellowstone-national-park) | ¿Qué diferencia una explosión hidrotermal de una erupción? | Evento localizado; no predice todos los géiseres ni actividad volcánica futura |
| Respiraderos hidrotermales | [Microbial sulfate reduction along Arctic mid-ocean ridges](https://repository.library.noaa.gov/view/noaa/61171) | ¿Cómo se sostiene vida microbiana sin luz solar? | Dorsales árticas y sedimentos concretos; no extrapolar a todos los respiraderos |
| Nubes mammatus | [Mammatus as a response to cloud-base radiative heating](https://journals.ametsoc.org/view/journals/atsc/67/12/2010jas3513.1.xml) | ¿Por qué una nube mammatus no tiene una sola explicación? | Modelización idealizada; combinar con evaporación y descenso de hidrometeoros |
| Auroras | [GOLD observations of the 2024 Gannon superstorm](https://repository.library.noaa.gov/view/noaa/68704) | ¿Qué revela una tormenta G5 sobre la termosfera? | Un evento extremo; no describe cualquier aurora ordinaria |
| Calamar gigante | [Unobtrusive camera platforms for large deep-sea squid](https://www.sciencedirect.com/science/article/pii/S0967063721000777) | ¿Cómo observar un calamar gigante sin perseguirlo? | Avistamientos oportunistas y tamaños parciales; no récord universal |

### Fuentes de derechos y transparencia añadidas

Para cada nueva ficha, el editor debe consultar la licencia del activo concreto y documentar autor, institución, URL, fecha de descarga, cambios y crédito. Estas fuentes sirven como guía, no como permiso automático:

- [Wikimedia Commons: reutilización](https://commons.wikimedia.org/wiki/Commons%3AREUSE) y [línea de crédito](https://commons.wikimedia.org/wiki/Commons%3ACredit_line).
- [NASA: imágenes y medios](https://www.nasa.gov/nasa-brand-center/images-and-media/), con excepciones de terceros, personas, logos y respaldo comercial.
- [NOAA: preguntas sobre imágenes](https://oceanservice.noaa.gov/about/faq.html) y [USGS: derechos y créditos](https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits).
- [Google News: transparencia](https://support.google.com/news/publisher-center/answer/6204050?hl=es) y [buenas prácticas de artículos](https://support.google.com/news/publisher-center/answer/9607104?hl=es).
- [NISO CRediT](https://credit.niso.org/) para separar investigación, escritura, análisis, visualización y revisión; [COPE](https://publicationethics.org/files/COPE_Principles_of_Transparency_Poster_0.pdf) para transparencia de autoría y correcciones.

## Formato mínimo de un brief derivado

```yaml
status: research
workingTitle: "..."
readerQuestion: "..."
searchIntent: informational
sourceCandidates:
  - url: "https://..."
    institution: "..."
    evidenceType: primary|review|dataset|institutional
    supports: "Afirmación exacta que podría respaldar"
    checkedBy: null
    checkedDate: null
originalContribution: "Diagrama, comparación, dato propio o experiencia atribuida"
imagePlan: "original-illustration|licensed-photo|commissioned-photo"
uncertainties: []
internalLinks: []
humanApproval: pending
```

## Reglas de seguridad editorial

- Una página general sirve para descubrir temas; la cita del artículo debe enlazar el estudio, registro o ficha concreta que respalda la frase.
- Las fuentes de IA, agregadores, resultados de búsqueda y redes sociales no son evidencia editorial.
- Una referencia no valida automáticamente todo el párrafo: el editor conserva la relación afirmación → fuente → alcance.
- Para salud, conservación, récords, clima actual o seguridad, se exige lenguaje prudente y revisión humana reciente.
- Una ilustración generada puede explicar un proceso; no se presenta como fotografía de una especie, lugar o evento real.
- La automatización prepara opciones y borradores locales. No inventa autores, revisiones, licencias, resultados ni citas, y nunca publica sin aprobación explícita.

## Registro de mantenimiento

| Fecha | Cambio | Responsable | Evidencia |
| --- | --- | --- | --- |
| 2026-09-12 | Se incorporaron fuentes primarias/institucionales, catálogo de 387 entradas, 93 briefs/oportunidades candidatos, tres registros abiertos comprobados en navegador y guías de licencia/transparencia | Equipo Editorial EcoCuriosa | URLs enlazadas en esta biblioteca; validar cada ficha antes de citar |
| 2026-09-12 | Se añadieron 18 fuentes candidatas de Luna Max y seis briefs nuevos: cuatro actualizaciones de clúster y dos guías de utilidad pública | Equipo Editorial EcoCuriosa | Registros y límites en `SOURCE_CATALOG.yml`; validar cada ficha antes de citar |

### Oportunidades derivadas de consultas reales de Search Console — 12 de septiembre

Estas fichas nacen de impresiones observadas (no de volumen estimado). Siguen en estado `candidate`: Luna puede preparar un brief local, pero una persona debe abrir las fuentes, fijar el alcance y aprobar cualquier publicación.

| Consulta observada | Brief people-first | Fuentes candidatas del catálogo | Aportación original e imagen | Riesgo / siguiente comprobación |
| --- | --- | --- | --- | --- |
| `geodinamo`, `geodinamo terrestre` | ¿Cómo se mide un campo generado a miles de kilómetros de profundidad? | `noaa-geomag-models`, `esa-swarm-mission`, `esa-core-flow-space`, `esa-south-atlantic-weak-spot` | Corte original de la Tierra + mapa de variación; ilustración propia | Separar modelo, medición y predicción; validar fechas y región |
| `pulpo mimo` | ¿Qué se observó realmente del pulpo mimo y cómo se describió su especie? | `thaumoctopus-mimicus-original-description`, `thaumoctopus-mimicus-mozambique-2024`, `worms-thaumoctopus` | Secuencia original de postura/color; no usar foto ajena sin licencia | No fijar “15 especies” ni atribuir intención humana; abrir la descripción taxonómica |
| `architeuthis dux`, `architeuthis` | ¿Qué revelan los picos y los isótopos del calamar gigante? | `giant-squid-isotopes-pmc1559839`, `giant-squid-size-pmc4304853` | Escala de evidencia museo → vídeo → pico → isótopos | Distinguir longitud medida, estimada y masa; comprobar muestras |
| `relámpago de Catatumbo` | ¿Cómo se diferencian récord satelital, frecuencia y mecanismo local? | `nasa-global-lightning-activity`, `nasa-lightning-capital-trmm` | Mapa Lago–Catatumbo con sensor, período y unidad | No decir “tormenta eterna”; no mezclar sensores ni períodos |
| `geosmina`, `petricor` | ¿Qué parte del olor procede de geosmina y qué parte de la lluvia? | `noaa-rain-voc-pulse`, `pubmed-geosmin-isolation`, `nature-petrichor-1964` | Diagrama gota → aerosol → molécula; ilustración química original | Petricor no equivale a un compuesto; validar el contexto experimental |
| `pangolín gigante` | ¿Qué cuentan las madrigueras y el genoma sobre una especie poco observada? | `pangolin-shared-burrows-pmc7323177`, `pangolin-genome-pmc10551234` | Esquema de madriguera + armadura original | No generalizar datos de una especie; completar evaluación IUCN manualmente |
| `tiburón de Groenlandia` | Más allá del récord de edad: ¿qué sabemos de distribución, hábitat y visión? | `coeswic-greenland-shark-2025`, `greenland-shark-life-stages-pmc12206561`, `greenland-shark-vision-pmc12770505` | Diagrama de cristalino, profundidad y telemetría | No presentar 392 ± 120 años como edad exacta; comprobar jurisdicción/fecha |
| `león de las nieves` | ¿León o leopardo de las nieves? Resolver la búsqueda sin perpetuar el nombre incorrecto | `snow-leopard-phylogeography-2024`, `snow-leopard-iucn-species-pdf`, `snow-leopard-un-observance` | Infografía de pelaje, patas, cola y altitud | La entidad principal es el leopardo; verificar PDF IUCN en navegador |
| `geosmina` (variante) | ¿Por qué el olor de lluvia cambia según suelo y microorganismos? | `noaa-rain-voc-pulse`, `pubmed-geosmin-isolation` | Comparación de suelo seco/mojado; ilustración, no “foto científica” | No prometer una única causa ni extrapolar laboratorio a toda lluvia |

### Actualización de evidencia de Luna Max — 12 de septiembre

Luna contrastó las consultas anteriores con fuentes nuevas y no duplicadas. Estas siete oportunidades mantienen el mismo estado `candidate`, pero ahora tienen mejores fuentes para un brief y un activo original; ninguna se publica ni se marca como revisada automáticamente.

| Prioridad | Consulta y ángulo | Fuentes nuevas del catálogo | Aportación propia recomendada | Límite de evidencia |
| --- | --- | --- | --- | --- |
| Muy alta | `geodinamo`: ¿qué ondas y flujos se pueden inferir del núcleo? | `pnas-core-magnetocoriolis-waves-pmc9060525`, `esa-swarm-magnetic-waves` | Corte del núcleo + mapa temporal de señales | Son inferencias de modelos y magnetómetros; no observación directa ni predicción de inversión |
| Muy alta | `pulpo mimo`: ¿qué parte es color, postura y control neural? | `cephalopod-neural-camouflage-cub-2023`, `cephalopod-dynamic-skin-behaviors-2024`, `cephalopod-chromatophore-color-pmc6397165` | Secuencia de postura/color con especies y condiciones | La mayoría de estudios son de cefalópodos en general, no de *T. mimicus* |
| Muy alta | `tiburón de Groenlandia`: ¿qué aporta el primer genoma al récord de edad? | `greenland-shark-genome-pnas-2026`, `greenland-shark-genome-pubmed-42154556`, `tokyo-greenland-shark-genome-2026`, `noaa-greenland-shark-longevity` | Diagrama genoma–datación con incertidumbre | Genes candidatos no prueban causalidad ni una receta antienvejecimiento |
| Alta | `león de las nieves`: ¿cómo se adaptan el leopardo y su hábitat? | `snow-leopard-high-altitude-evolution-2025`, `snow-leopard-territorial-marking-baltistan`, `snow-leopard-ladakh-population-plos-2025` | Infografía de adaptación, cámaras y altitud | Cada estudio tiene región y muestra propias; no generalizar a toda la especie |
| Alta | `pangolín gigante`: ¿cómo se detecta una especie casi invisible? | `giant-pangolin-kenya-range-extension`, `giant-pangolin-senegal-rediscovery-kent`, `giant-pangolin-congo-population-structure-2024` | Mapa de cámaras, madrigueras y genética | Registros puntuales no equivalen a población estable ni rango global |
| Alta | `relámpago de Catatumbo`: ¿qué cambia al medir récord, densidad y frecuencia? | `nasa-bams-lightning-hotspots`, `nasa-earthdata-maracaibo-beacon`, `luz-catatumbo-electroatmospheric-model` | Mapa lago–relieve–sensor con unidad y periodo | No decir “tormenta eterna”; el modelo de LUZ es una hipótesis contextual |
| Muy alta | `geosmina`/`petricor`: ¿cómo llega una molécula al receptor OR11A1? | `geosmin-or11a1-acs-2024`, `geosmin-or11a1-pmc11261619`, `leibniz-geosmin-receptor-2024`, `geosmin-chaohu-sediments-2025` | Cadena suelo/lluvia → aerosol → receptor, separando in vitro y campo | OR11A1 no explica todo el petricor; Chaohu es un lago concreto |

### Fuentes nuevas para la siguiente tanda de revisión — 12 de septiembre

La segunda consulta de Luna añadió diez fuentes no duplicadas para reforzar piezas existentes. Son candidatas de investigación, no citas aprobadas: la persona editora debe abrirlas, comprobar el texto y decidir si el alcance encaja antes de copiarlas al frontmatter.

| Clúster | Fuente candidata | Uso acotado y límite |
| --- | --- | --- |
| Axolote | [PLOS ONE: movimiento de axolotes criados en Xochimilco](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314257) · [UNAM: refugios y conservación de Xochimilco](https://www.dgcs.unam.mx/boletin/bdboletin/2025_865.html) | Supervivencia/movimiento en dos sitios y contexto de conservación; no es un censo de la población silvestre. |
| Cebras | [PLOS ONE: tábanos alrededor de cebras y caballos](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210831) · [Scientific Reports: repelencia a corta distancia](https://www.nature.com/articles/s41598-022-22333-7) | Apoya la hipótesis de aterrizaje de moscas bajo condiciones concretas; no demuestra una causa evolutiva única. |
| Tardígrados | [Current Biology: reparación de ADN tras radiación](https://doi.org/10.1016/j.cub.2024.03.019) · [Organisms Diversity & Evolution: gradiente de criptobiosis](https://doi.org/10.1007/s13127-024-00660-z) | Distingue especie, estado y ambiente; no convierte ensayos de laboratorio en invulnerabilidad espacial. |
| Ballena azul | [PNAS/PubMed: dinámica cardíaca de rorcuales](https://pubmed.ncbi.nlm.nih.gov/42507932/) | Biologging durante alimentación en una muestra mixta; no fija una frecuencia cardíaca universal para la ballena azul. |
| Narval | [Frontiers in Marine Science: uso del colmillo](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2025.1518605/full) | Observaciones con drones en una región; “juego” e intención son inferencias, no hechos universales. |
| Corales | [NOAA: supervivencia tras blanqueamiento en Hawái](https://www.fisheries.noaa.gov/resource/peer-reviewed-research/survivorship-and-growth-corals-hawaii-two-years-post-bleaching) · [NOAA/AOML: amenazas al coral](https://www.aoml.noaa.gov/threats-to-coral/) | Seguimiento de 2.150 colonias y contexto fisiológico; conservar taxones, profundidad, duración y umbral regional. |

### Fuentes nuevas de Luna Max para la revisión prioritaria — 12 de septiembre

Estas catorce fuentes amplían la investigación de las fichas con más riesgo de sobreafirmación. Son candidatas: antes de citar, la persona editora debe abrir el texto, enlazar cada afirmación con su evidencia y registrar el alcance en el brief.

| Tema | Fuente candidata | Pregunta people-first | Límite obligatorio |
| --- | --- | --- | --- |
| Ajolote | [Proteínas clave para regeneración (UAM)](https://produccion.siia.unam.mx/Publicaciones/ProdCientif/PublicacionFrw.aspx?id=659557&scopus=0) · [Presiones en Xochimilco (UNAM)](https://www.dgcs.unam.mx/boletin/bdboletin/2024_787.html) | ¿Qué señales aparecen durante la regeneración y qué amenaza al ajolote silvestre? | Transcriptómica y contexto local; asociaciones no son terapia, y un pronóstico no es un censo actual. |
| Ballena azul | [Escalado de frecuencia cardíaca en cetáceos](https://pmc.ncbi.nlm.nih.gov/articles/PMC8200651/) | ¿Qué puede y qué no puede medir un registro cardíaco de una ballena? | Comparación fisiológica con contexto cautivo; no fija un valor universal para la especie. |
| Corales | [Firmas proteicas de resiliencia](https://www.nature.com/articles/s43247-025-02167-7) · [Recuperación y acidificación](https://www.nature.com/articles/s43247-024-01672-5) | ¿Por qué algunos corales se recuperan de un estrés térmico y otros no? | Ensayos de Hawái con especies y periodos concretos; no extrapolar a todos los arrecifes. |
| Tiburón de Groenlandia | [Resiliencia frente al envejecimiento cardíaco](https://pubmed.ncbi.nlm.nih.gov/42024652/) | ¿Qué significa “resistir el envejecimiento” en un tiburón? | Marcadores cardíacos no son datación de edad ni receta de longevidad. |
| Pangolines | [Secuenciación para focos de tráfico](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003762) · [Propuesta regulatoria estadounidense](https://www.govinfo.gov/content/pkg/FR-2025-06-17/pdf/FR-2025-06-17.pdf) | ¿Cómo ayuda el ADN a detectar tráfico y qué cambia una norma? | Muestra, especies, rutas y jurisdicción limitadas; no es un censo mundial ni asesoría legal. |
| Búho real | [Plumas y supresión de ruido](https://www.sciencedirect.com/science/article/abs/pii/S1672652911601091) · [Serraciones del borde de ataque](https://pubmed.ncbi.nlm.nih.gov/38569525/) | ¿Qué parte del vuelo silencioso se ha medido de verdad? | Resultados de laboratorio y modelos; no afirmar silencio total ni mezclar *Bubo bubo* con otras especies. |
| Tardígrados | [Temperatura y ultraestructura celular](https://www.nature.com/articles/s41598-024-55295-z) · [Oxidación de cisteína en tun](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0295062) | ¿Qué estado y qué especie explican una tolerancia concreta? | El mecanismo depende de especie, estado y protocolo; no equivale a invulnerabilidad espacial. |
| Peces linterna | [Fotóforos y especiación](https://pubmed.ncbi.nlm.nih.gov/24771948/) · [Fotóforos orientados al ojo](https://nsuworks.nova.edu/occ_facarticles/1077/) | ¿Cómo produce luz un pez profundo y qué función se ha observado? | Anatomía y muestras de estomiiformes; la conducta no se generaliza a todos los peces linterna. |

### Fuentes abiertas verificadas en vivo — 12 de septiembre

En esta comprobación se abrió el registro del repositorio o el artículo en un
navegador normal. El resultado confirma la identidad y el alcance descrito,
pero no convierte automáticamente estas pistas en citas de una monografía:
la persona editora aún debe leer el texto completo, enlazar la afirmación
concreta y registrar la revisión.

| Clúster | Fuente abierta | Qué se pudo confirmar | Límite para el brief |
| --- | --- | --- | --- |
| Geodinamo | [Earth, Planets and Space / Springer Nature](https://doi.org/10.1186/s40623-025-02307-5) | El artículo compara modelos de flujo superficial del núcleo invertidos desde campos candidatos IGRF-14 y documenta el uso de observaciones geomagnéticas y *priors* de geodinamo. | Es un problema inverso subdeterminado; no presentar el flujo como observación directa ni como predicción de inversión. |
| Pulpo mimo | [Registro del repositorio digital de CMFRI](https://eprints.cmfri.org.in/14674/) | El resumen identifica el primer registro en el mar Arábigo: dos ejemplares frente a Kerala, a 15 m, con apoyo genético mediante COI. | El PDF completo requiere registro; mantener la muestra de dos ejemplares y una localidad. |
| Geosmina | [Accepted manuscript en el repositorio de Warwick](https://wrap.warwick.ac.uk/id/eprint/135205/) | El resumen informa experimentos de campo y respuestas antenales de *Folsomia candida* frente a geosmina/2-MIB producidos por *Streptomyces*. | No extrapolar la interacción a todas las especies, bacterias o experiencias humanas de petricor. |

La consulta de esta tanda devolvió además fuentes secundarias y resultados de
búsqueda que no se incorporan al catálogo por no aportar evidencia primaria o
institucional suficiente. Las tres fuentes seleccionadas quedaron registradas
con identificadores propios en `SOURCE_CATALOG.yml` para que Luna pueda
proponerlas sin perder el enlace abierto y el límite de alcance.

### Controles oficiales para IA, imágenes y AdSense — 12 de septiembre

| Área | Fuente oficial | Aplicación en EcoCuriosa |
| --- | --- | --- |
| IA y calidad | [Guía de Google sobre contenido generado con IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) | Luna puede investigar y estructurar; cada publicación necesita precisión, valor añadido y revisión humana. |
| Imágenes | [Buenas prácticas de imágenes en Google Search](https://developers.google.com/search/docs/appearance/google-images) | Mantener URL estable, `alt` descriptivo, contexto editorial y una página indexable; no confundir una ilustración con una fotografía documental. |
| AdSense | [Qué hacer si el sitio aún no está listo](https://support.google.com/adsense/answer/12176698?hl=es) | Separar la presencia del código de la evaluación de contenido único, experiencia y navegación; no activar slots inventados. |
| Snippets | [Preguntas frecuentes sobre la apariencia en Search](https://developers.google.com/search/help/site-appearance-faq) | Revisar títulos y descripciones para que respondan a la consulta sin prometer un resultado enriquecido. |
| Title links | [Buenas prácticas para títulos en Search](https://developers.google.com/search/docs/appearance/title-link) | Mantener títulos descriptivos y concisos; evitar texto repetido, relleno y keyword stuffing. |

### Fuentes nuevas para medición, apariencia e imágenes — 12 de septiembre

Estas referencias completan el circuito entre descubrimiento, experiencia real y procedencia visual. Se incorporan como documentación de trabajo; ninguna habilita por sí sola una promesa de indexación, rich result o tráfico.

| Área | Fuente oficial | Uso en el plan | Límite |
| --- | --- | --- | --- |
| Inspección de URL | [Search Console API: `index.inspect`](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect?hl=es-419) | Automatizar lecturas autenticadas de estado, canonical, rastreo, sitemap y resultados enriquecidos de URLs prioritarias | Requiere OAuth del titular; informa la versión del índice, no reemplaza una prueba de URL en vivo |
| Core Web Vitals de campo | [Chrome UX Report API](https://developer.chrome.com/docs/crux/api?hl=en) | Consultar LCP, INP y CLS agregados por origen o URL cuando el sitio cumpla la elegibilidad de CrUX | Media móvil de 28 días y umbral de usuarios; ausencia de datos no significa que el sitio esté roto |
| Apariencia de marca | [Favicon en Search](https://developers.google.com/search/docs/appearance/favicon-in-search) y [nombres de sitio](https://developers.google.com/search/docs/appearance/site-names) | Mantener favicon estable y nombre EcoCuriosa consistente en HTML, WebSite y portada | Google decide la presentación final y no garantiza mostrar el favicon o el nombre preferido |
| Procedencia visual | [Schema.org `ImageObject`](https://schema.org/ImageObject) | Inspirar campos de creador, crédito, licencia y página para adquirir licencia en futuros activos | Vocabulario descriptivo; no sustituye el permiso real del activo |

### Fuentes nuevas para SEO técnico, accesibilidad y monetización — 12 de septiembre

Esta tanda de Luna cubre controles operativos que no sustituyen las métricas autenticadas ni la revisión editorial. Se usarán para diseñar pruebas reproducibles y no para prometer posiciones, aprobación o conformidad automática.

| Área | Fuente oficial | Uso en EcoCuriosa | Límite |
| --- | --- | --- | --- |
| Herramientas SEO | [Google: SEO de terceros](https://developers.google.com/search/docs/fundamentals/third-party-seo) | Etiquetar estimaciones externas y priorizar Search Console para decisiones | Ninguna herramienta garantiza rankings |
| Enlaces | [Google: enlaces rastreables](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) | Auditar enlaces contextuales, texto descriptivo y páginas huérfanas | No hay número mágico de enlaces |
| JavaScript | [Google: fundamentos de JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | Comparar HTML fuente/renderizado, canonical, contenido y estados HTTP | Otros bots pueden no ejecutar JS y el render puede demorarse |
| Carga diferida | [Google: contenido lazy-loaded](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) | Mantener portada y contenido iniciales visibles y rastreables | Se debe validar en HTML renderizado/URL Inspection |
| Experiencia | [Google: experiencia de página](https://developers.google.com/search/docs/appearance/page-experience) | Matriz móvil antes/después de anuncios con CWV, legibilidad y densidad | No es una señal única ni garantiza posición |
| Snippets | [Google: controlar snippets](https://developers.google.com/search/docs/appearance/snippet) | Mejorar descripciones únicas según intención sin fechas artificiales | Google puede reescribir el texto |
| Responsive | [web.dev: responsive design](https://web.dev/articles/responsive-web-design-basics) | Probar reflow, overflow, imágenes y breakpoints entre 320 y 1440 px | No sustituye auditoría de accesibilidad ni datos de campo |
| Accesibilidad | [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Objetivo AA para alt, teclado, foco, contraste, reflow y touch | Requiere evaluación humana además de automatizada |
| Redirects | [Cloudflare Pages: redirects](https://developers.cloudflare.com/pages/configuration/redirects/) | Validar host canónico, 301/308 y un solo salto | `_redirects` no cubre rutas servidas por Functions |
| Compresión | [Cloudflare: content compression](https://developers.cloudflare.com/speed/optimization/content/compression/) | Comprobar Content-Encoding, MIME y tamaño servido por ruta | Algoritmo depende de navegador, plan y configuración |
| ads.txt | [Google AdSense: rastreabilidad de ads.txt](https://support.google.com/adsense/answer/7679060?hl=es) | Verificar raíz, robots, 200, formato e HTTP/HTTPS después de aprobación | Cambios tardan; no implica aprobación |
| Transparencia | [Schema.org: publishingPrinciples](https://schema.org/publishingPrinciples) | Vincular JSON-LD con la metodología editorial visible | Vocabulario descriptivo, no garantía de rich result |

### Fuentes nuevas para autoría, procedencia y control de calidad — 12 de septiembre

Luna identificó estas referencias para reforzar la confianza sin fabricar credenciales. Son patrones de implementación: la persona responsable debe decidir si el sitio realmente tiene autor, DOI, política de correcciones o un caso de fact-check antes de publicarlos.

| Área | Fuente oficial | Aplicación posible | Límite |
| --- | --- | --- | --- |
| Autoría | [ORCID: cómo mostrar un iD](https://info.orcid.org/documentation/integration-guide/orcid-id-display-guidelines/) | Añadir un ORCID solo para una persona que lo haya autenticado y autorizado | Identidad no equivale a pericia; nunca inventar IDs |
| Metadatos | [Crossref: elementos requeridos y recomendados](https://www.crossref.org/documentation/schema-library/required-recommended-elements/) | Preparar un contrato de contribuyentes, roles, fechas, referencias y versiones si se adopta DOI | Está orientado a depósitos Crossref, no es requisito SEO |
| Fact-check | [Google: ClaimReview](https://developers.google.com/search/docs/appearance/structured-data/factcheck) | Crear una ficha separada para verificaciones reales, con claim, evidencia y correcciones | Google está retirando ClaimReview de Search; no usarlo en explicadores comunes |
| Procedencia | [W3C PROV-O](https://www.w3.org/TR/prov-o/) | Registrar fuente, actividad editorial, agente, versión y derivación en un manifiesto auditable | Estándar de interoperabilidad, no señal de ranking |
| Anotaciones | [W3C Web Annotation](https://www.w3.org/TR/annotation-model/) | Enlazar una afirmación o párrafo con su pasaje de fuente cuando exista la infraestructura | No define transporte ni garantiza indexación |
| Correcciones | [Crossmark](https://www.crossref.org/documentation/crossmark/participating-in-crossmark) | Inspirar historial de actualizaciones, correcciones y retiros | Requiere DOI/membresía; patrón condicional para EcoCuriosa |
| Glosario | [Schema.org DefinedTerm](https://schema.org/DefinedTerm) | Crear definiciones visibles y mantenidas de términos científicos | Vocabulario nuevo; no garantiza rich result |
| Calidad de anuncios | [Límites de publicación de anuncios](https://support.google.com/adsense/answer/9437976?hl=es) | Monitorizar anomalías de tráfico y detener escalado si hay una limitación | No ofrece umbrales ni plazos garantizados |
| HTML | [Google: metadatos de página válidos](https://developers.google.com/search/docs/crawling-indexing/valid-page-metadata) | Preflight para evitar que un elemento inválido invalide title, canonical o JSON-LD posteriores | Mejora legibilidad técnica, no autoridad editorial |
| Rastreo | [Google: errores de rastreo](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors) | Verificar estados, soft 404, cadenas de redirección y render de páginas de confianza | Rastreo no equivale a indexación ni ranking |

### Nueva ronda de Luna Max: autoridad, Discover y procedencia — 12 de septiembre

Estas diez referencias completan los huecos de autoridad y medición sin prometer posiciones. Se mantienen como inspiración hasta que una persona confirme que el caso aplica a una publicación concreta.

| Área | Fuente oficial | Aplicación posible | Límite |
| --- | --- | --- | --- |
| IA en Search | [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | Priorizar HTML visible, enlaces, imágenes, experiencia y datos coherentes; no crear un “marcado para IA” inventado | No garantiza rastreo, indexación ni aparición en AI Overviews |
| Fuente preferida | [Google: Preferred sources](https://developers.google.com/search/docs/appearance/preferred-sources) | Probar un deeplink voluntario para que un lector añada el dominio completo como fuente preferida | Depende de la disponibilidad de la función y de la elección del usuario |
| Discover | [Google: actualización principal de Discover de febrero de 2026](https://developers.google.com/search/blog/2026/02/discover-core-update) | Briefs originales, útiles y oportunos, con titulares descriptivos e imágenes relevantes | Es un anuncio de actualización, no una fórmula de ranking |
| Medición IA | [Google: informes de rendimiento de Search generative AI](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) | Registrar impresiones por URL, país, dispositivo y fecha cuando el informe aparezca en la propiedad | Mide visibilidad, no calidad ni causalidad |
| Sistemas de ranking | [Google: guía de sistemas de ranking](https://developers.google.com/search/docs/appearance/ranking-systems-guide) | Sustituir una puntuación única por auditorías por página y clúster temático | No es una lista determinista ni exhaustiva |
| Integridad | [Crossref/DataCite: metadatos para integridad de investigación](https://www.crossref.org/publications/guide-metadata-research-integrity/) | Checklist de roles, afiliación, versiones, correcciones, referencias y responsable | Orientado a registros académicos; adaptar a divulgación web |
| Datos y software | [Crossref: citación de datos y software](https://www.crossref.org/documentation/schema-library/markup-guide-metadata-segments/data-citation/) | Exigir identificadores persistentes y relaciones visibles cuando un artículo use datos o código | El depósito Crossref/DOI es condicional |
| Datasets | [DataCite Metadata Schema 4.7](https://schema.datacite.org/) | Modelar creador, versión, licencia y relaciones de datasets o material suplementario | Estándar de metadatos, no señal SEO directa |
| Afiliaciones | [ROR Registry](https://ror.org/registry/) | Normalizar instituciones verificadas en perfiles y futuras fichas académicas | Un ID institucional no prueba pericia personal |
| Autoría | [ICMJE: autores y colaboradores](https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html) | Separar autor humano, roles, aprobación final y responsabilidad; declarar asistencia de IA | Recomendación editorial para publicaciones médicas, no obligación universal |

### Nueva tanda de investigación dirigida de Luna Max — 12 de septiembre

Estas fuentes amplían los cinco clústeres con señales de Search Console. Se
guardan como candidatas de inspiración en `SOURCE_CATALOG.yml`; la persona
editora debe abrir el texto y validar cada afirmación antes de convertirlas en
referencias de una monografía.

| Clúster | Pregunta people-first | Fuentes candidatas | Aportación visual / límite |
| --- | --- | --- | --- |
| Geodinamo | ¿Qué parte del flujo del núcleo se observa y qué parte se infiere? | `geodynamo-priors-core-flows-2025`, `geodynamo-transient-dynamics-2023`, `geodynamo-mantle-heterogeneity-2026` | Corte núcleo–manto con capas de incertidumbre; no es observación directa ni predicción de inversión. |
| Geosmina y petricor | ¿Por qué la misma molécula puede atraer o repeler según el organismo? | `geosmin-collembola-streptomyces-2020`, `geosmin-warning-chemical-2022`, `geosmin-chemical-ecology-review-2023` | Mapa organismo–señal–respuesta; los experimentos son de especies y cepas concretas, no una explicación universal del petricor. |
| Tiburón de Groenlandia | ¿Qué sabemos de reproducción y transcriptoma además del récord de edad? | `greenland-shark-spermatogenesis-2024`, `greenland-shark-line-elements-2023` | Línea de vida y flujo RNA→hipótesis; no convertir asociaciones en mecanismos de longevidad. |
| Pulpo mimo | ¿Cómo separar rango geográfico, mimetismo observado e intención? | `mimic-octopus-facultative-mimicry-2010`, `mimic-octopus-arabian-sea-range-2020`, `cephalopod-predator-avoidance-review-2022` | Mapa de registros y secuencia de postura; dos ejemplares o una revisión comparativa no prueban un repertorio fijo. |
| Relámpago del Catatumbo | ¿Cómo cambian el “récord” y la frecuencia cuando cambia el sensor? | `catatumbo-lis-climatology-2026`, `catatumbo-lightning-datasets-2026`, `catatumbo-seasonal-prediction-2016` | Mapa con sensor, periodo y unidad; muestreo orbital y correlaciones no equivalen a observación continua ni causa única. |

### Fuentes nuevas para autoridad de especies y aprendizaje social — 12 de septiembre

Esta tanda añade fuentes primarias e institucionales comprobadas en vivo para
reforzar dos piezas de mayor riesgo. Se conservan como inspiración hasta que
una persona abra cada fuente, confirme la correspondencia con el texto y
registre la revisión; no autorizan por sí solas una publicación ni una fecha de
revisión.

| Clúster | Pregunta people-first | Fuentes candidatas | Aportación propia / límite |
| --- | --- | --- | --- |
| Elefantes | ¿Cómo cambia la evaluación de una amenaza cuando una manada pierde experiencia social? | `elephant-social-disruption-threat-assessment-2022`, `elephant-matriarch-leadership-2011` | Línea de tiempo de población y reproducción de llamadas; separar aprendizaje social, memoria y conducta defensiva, y no extrapolar entre poblaciones. |
| Manta raya gigante | ¿Cómo se identifica una manta en un censo aéreo y qué significa realmente “recuperación”? | `manta-aerial-survey-identification-noaa-2025`, `manta-recovery-status-review-noaa-2024` | Diagrama observador → rasgos → registro y una caja de alcance; el material de NOAA sirve para identificación y revisión estadounidense, no para afirmar un censo mundial. |

**Comprobación de acceso:** las cuatro URLs nuevas devolvieron 200 o 203
(respuesta de PubMed con contenido restringido) en la captura del 12/09/2026;
las dos fuentes de PubMed requieren abrir la ficha o el artículo para verificar
el contexto experimental. El registro detallado queda en
`SOURCE_ACCESS_SNAPSHOT_2026-09-12.md`.

Luna Max convirtió estas dos oportunidades en briefs locales estructurados y
borradores de trabajo: [`elephant-social-knowledge.json`](drafts/elephant-social-knowledge.json)
y [`manta-survey-recovery.json`](drafts/manta-survey-recovery.json). Sus Markdown
generados, junto con las ilustraciones SVG, siguen fuera de `src/content/articles`;
requieren comprobación humana, autoría real, procedencia visual y aprobación antes
de entrar en la biblioteca publicada.

### Tanda de Luna Max para subir las puntuaciones — 12 de septiembre

La búsqueda dirigida a las brechas de SEO, medición, móvil, accesibilidad,
E‑E‑A‑T y AdSense añadió once fuentes candidatas nuevas al catálogo. No se han
marcado como verificadas ni se han convertido en citas de artículos publicados.

| Clúster | Fuentes candidatas | Aplicación people-first / límite |
| --- | --- | --- |
| SEO e indexación | `google-search-essentials-overview`, `search-console-performance-common-tasks`, `google-search-rigorous-testing` | Ledger de URLs, hipótesis de CTR y comparaciones fechadas; una recomendación no demuestra indexación ni causalidad. |
| Campo y rendimiento | `chrome-crux-overview` | Comparar Lighthouse, CrUX y RUM; declarar la ausencia de datos o elegibilidad en lugar de inferir P75. |
| Móvil y navegación | `w3c-mobile-accessibility`, `w3c-apg-disclosure-navigation`, `w3c-apg-accessible-names`, `webdev-main-navigation` | Matriz con tacto, teclado, reflow, foco y lector de pantalla; los ejemplos no sustituyen pruebas reales. |
| AdSense y confianza | `adsense-publisher-policies-overview`, `google-publisher-unreliable-harmful-claims`, `adsense-add-new-site` | Separar estado de cuenta, políticas, calidad editorial y código; no afirmar aprobación por tener el sitio preparado. |

Acciones priorizadas para el siguiente ciclo:

1. **P0 — ledger de indexación y CTR:** registrar las 32 URLs con sitemap,
   canonical, robots/noindex, estado de inspección y una hipótesis por página
   con impresiones y CTR. Salida: comparación fechada y discrepancias explicadas.
2. **P1 — campo y móvil:** comprobar si existe señal CrUX y probar portada,
   categoría, artículo y menú en 320/375/390 px con teclado, tacto y lector de
   pantalla. Salida: matriz de dispositivos y ausencia de foco perdido,
   overflow o contenido bloqueado.
3. **P1 — revisión humana:** cerrar las 31 fichas pendientes con autoría real,
   fecha verdadera, afirmación→fuente, alcance, límite y procedencia visual.
   Salida: 32/32 revisiones registradas; Luna no puede crear esos datos.
4. **P2 — AdSense:** comprobar Site/Policy Center y consentimiento cuando el
   estado de la cuenta lo permita; mantener slots vacíos hasta aprobación. Salida:
   estado privado registrado por el titular y prueba de navegación sin anuncios.

Tres briefs que pueden automatizarse como borradores, nunca como publicación:

| Brief | Aportación original | Puerta humana |
| --- | --- | --- |
| ¿Qué mide una Lighthouse 99 y qué todavía no sabemos? | Tabla laboratorio → CrUX → RUM con campos pendientes y muestra explícita | Verificar fecha, elegibilidad y métricas antes de afirmar experiencia real |
| Navegar con un pulgar, teclado o lector de pantalla: por qué un menú no es un *menu* | Checklist visual del patrón disclosure y su comportamiento | Probar con dispositivos y tecnología asistiva; no declarar conformidad solo por el patrón |
| Del dato curioso al titular responsable | Matriz de afirmación, fuente, alcance, riesgo y redacción prudente | Revisar cada fuente y retirar claims no respaldados antes de cualquier anuncio |

Las URLs, alcance y límites de esta tanda están documentados en
`SOURCE_CATALOG.yml`; las fichas continúan en estado candidato hasta que una
persona abra cada fuente y decida si aporta valor a una pieza concreta.

### Tanda de Luna Max para gobernanza E‑E‑A‑T — 12 de septiembre

Para resolver la brecha de autoridad editorial, Luna propuso cinco controles
institucionales adicionales. Se usan como inspiración adaptable para divulgación
web, no como si EcoCuriosa fuera una revista académica ni como garantía de
AdSense.

| Área | Fuente oficial | Aplicación posible | Límite |
| --- | --- | --- | --- |
| Buenas prácticas en español | [Editorial CSIC: guía de buenas prácticas](https://revistas.csic.es/public/guia_buenas_practicas_csic.pdf) | Responsabilidad de autor, atribución original, procedencia de imágenes, financiación y correcciones | Orientada a edición académica; adaptar sin atribuir respaldo del CSIC |
| Método y referencias | [ICMJE: preparación de manuscritos](https://icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html) | Explicar cómo se localizaron, seleccionaron y sintetizaron fuentes; declarar límites | Guía para revistas médicas; no es requisito SEO |
| Correcciones y versiones | [ICMJE: correcciones y control de versiones](https://icmje.org/recommendations/browse/publishing-and-editorial-issues/corrections-and-version-control.html) | Aviso visible, fecha, resumen del cambio y enlace a la versión vigente | El modelo completo de retractación es proporcional a revistas, no a cada artículo web |
| Conflictos | [ICMJE: responsabilidades y conflictos de interés](https://icmje.org/recommendations/browse/roles-and-responsibilities/author-responsibilities--conflicts-of-interest.html) | Declarar patrocinios, afiliados, afiliaciones y separación entre publicidad y conclusiones | Declarar un conflicto no elimina por sí solo el sesgo |
| Gobernanza | [COPE: Core Practices](https://publicationethics.org/files/editable-bean/COPE_Core_Practices_0.pdf) | Canal de quejas/correcciones, roles, apelaciones y revisión posterior a publicar | Marco de publicaciones académicas; no es señal de ranking ni política de AdSense |

Acciones derivadas:

1. Mantener la firma colectiva solo mientras la página de equipo identifique a la
   organización y las personas reales que investigan, editan y revisan; nunca
   convertir a Luna en autora o revisora.
2. Registrar, para cada revisión humana, la versión, fecha real, afirmaciones
   comprobadas, fuente, alcance, limitación, imagen y decisión; publicar un
   aviso breve cuando exista una corrección.
3. Añadir un bloque público de independencia editorial y conflictos únicamente
   cuando haya patrocinios, afiliados o relaciones que declarar; no inventar una
   ausencia de conflicto.

### Tanda de Luna Max: actualización de clústeres con fuentes primarias — 12 de septiembre de 2026

Esta ronda parte de las consultas que ya tienen impresiones en Search Console.
La decisión es actualizar primero la URL existente: no se crean páginas nuevas
para variantes ortográficas o titulares equivalentes. Las fuentes son
candidatas hasta que una persona abra el registro, compruebe el texto y decida
si la evidencia cambia la pieza publicada.

| Clúster y URL existente | Fuentes candidatas | Ángulo people-first | Visual / guardrail |
| --- | --- | --- | --- |
| Geosmina y petricor — `/ciencia-curiosa/por-que-el-olor-a-tierra-mojada-petricor-geosmina/` | `geosmin-earth-scent-csiro-2023`, `geosmin-soil-spme-chemosphere-2021` | Seguir el recorrido suelo seco → lluvia o perturbación → mezcla de volátiles → percepción; no reducir el petricor a una sola molécula. | Diagrama de trayecto suelo–aire; separar medición de laboratorio/campo y experiencia humana. |
| Tiburón de Groenlandia — `/especies-marinas/tiburon-de-groenlandia-vertebrado-mas-longevo/` | `greenland-shark-nordmore-grid-ices-2025` | Conectar longevidad y vulnerabilidad: madurez tardía no significa resistencia a la captura incidental. | Línea de vida con caja de incertidumbre; no usar conducta en una rejilla como conducta natural general. |
| Geodinamo — `/ciencia-curiosa/como-funciona-el-campo-magnetico-de-la-tierra-geodinamo/` | `geodynamo-100ky-simulations-epsl-2024`, `geodynamo-palaeoflow-epsl-2025` | Explicar la cadena medición → modelo → inferencia → límite para que el lector sepa qué parte del núcleo no observamos directamente. | Corte del núcleo con capas de evidencia; etiquetar simulación y reconstrucción indirecta. |
| Pulpo mimo — `/especies-marinas/pulpo-mimo-thaumoctopus-mimetismo-15-especies/` | `octopus-arm-flexibility-scirep-2025`, `octopus-chemosensory-plumes-plos-2025` | Reemplazar la lista viral por color, postura y señales sensoriales; distinguir flexibilidad observada de intención consciente. | Secuencia de postura con leyenda; no trasladar resultados de *O. vulgaris* o *O. rubescens* a *T. mimicus*. |
| Leopardo de las nieves — `/fauna-fascinante/leopardo-de-las-nieves-adaptaciones-frio-extremo/` | `snow-leopard-bhutan-connectivity-gecco-2025`, `snow-leopard-genome-genome-biology-2025` | Resolver la entidad “león de las nieves” como leopardo de las nieves y separar adaptación, conectividad y diversidad genética. | Mapa regional + nota de muestreo; no convertir una región o genoma en censo mundial. |
| Pangolín gigante — `/fauna-fascinante/pangolin-gigante-armadura-queratina-amenazas/` | `giant-pangolin-burrow-detection-oryx-2023`, `pangolin-community-knowledge-aje-2025` | Mostrar cómo se combinan madrigueras, cámaras y conocimiento comunitario sin confundir detectabilidad con abundancia. | Flujo de monitoreo; marcar por separado evidencia de presencia, percepción local y población. |
| Relámpago del Catatumbo — `/fenomenos-naturales/relampago-del-catatumbo-tormenta-eterna-venezuela/` | `nasa-earth-lightning-svs-2024` | Comparar récord, densidad y frecuencia indicando sensor, producto y periodo; retirar la idea literal de “tormenta eterna”. | Gráfico con unidad, ventana temporal y sensor; no mezclar promedios orbitales con observación continua. |

Los doce registros se incorporan al catálogo para que Luna pueda proponer
actualizaciones trazables. No autorizan por sí solos una nueva fecha, una cita
en el artículo ni la publicación de un borrador. La imagen preferida para esta
ronda es un diagrama original; una fotografía real solo entra con licencia,
autor y crédito comprobables.

### Seis oportunidades de Luna Max para el siguiente ciclo — 12 de septiembre de 2026

Esta ronda usa las consultas y clústeres ya observados. Son briefs de trabajo,
no artículos listos para publicar: una persona debe abrir cada fuente, comprobar
el alcance y decidir qué cambia en la pieza.

| Prioridad | Pregunta y acción | Título/ángulo original | Fuentes candidatas y límites |
| --- | --- | --- | --- |
| P1 | Actualizar geodinamo: ¿qué mide una brújula y qué se infiere del núcleo? | **Geodinamo terrestre: qué mide una brújula y qué ocurre en el núcleo**. Corte núcleo–corteza–magnetosfera que separe observación, modelo WMM y anomalía local. | `wmm2025-ncei-model`, `wmm2025-technical-report-noaa`, `geomagnetism-faq-ncei`; el WMM es un modelo de navegación y no observa directamente el flujo del núcleo ni predice una inversión. |
| P1 | Actualizar geosmina/petricor: ¿por qué una molécula puede atraer o alertar según el organismo? | **Geosmina: el olor de la lluvia que puede atraer a unos animales y alertar a otros**. Recorrido suelo–microorganismo–aire–percepción, separando geosmina de 2-MIB. | `geosmin-aedes-oviposition-2020`, `geosmin-cyanobacteria-geoa-2020`, `mib-ticks-fungal-cues-2024`; los resultados son de especies, cepas y compuestos concretos, no una explicación universal del petricor. |
| P1 | Actualizar pulpo mimo: ¿cómo distinguir mimetismo observado, rango e intención? | **Pulpo mimo: camuflaje, postura y evidencia de campo**. Canales separados de color, textura, postura y locomoción, con escala observación → patrón → interpretación. | `cephalopod-camouflage-engineered-optics-2025`, `scientific-diving-cephalopod-review-2025`, `abdopus-body-patterns-social-2025`; revisiones comparativas y otra especie no prueban un repertorio fijo de *T. mimicus*. |
| P1 | Actualizar Catatumbo: ¿cómo cambian récord y frecuencia cuando cambia el sensor? | **Catatumbo: el reloj nocturno de una tormenta entre lago, relieve y atmósfera**. Reloj de 24 horas con sensor, periodo, unidad y ventana temporal. | `nwsa-mcs-tracking-2024`, `maracaibo-tropical-lakes-lightning-2017`, `goes-u-glm-databook-2024`; cobertura regional, comparaciones exploratorias y límites instrumentales no equivalen a tormenta eterna ni causa única. |
| P2 | Crear guía de utilidad amplia: ¿qué es una ola de calor marina y cómo se mide? | **Olas de calor marinas: cuándo el océano entra en una anomalía extrema**. Temperatura diaria frente a percentil local, duración y profundidad. | `marine-heatwaves-global-review-2024`, `marine-heatwaves-global-index-2024`, `copernicus-barents-mhw-index-2024`; una climatología o reanálisis del mar de Barents no describe Chile ni una medición actual por sí sola. |
| P2 | Crear guía de servicio público: ¿detectar microplásticos en agua demuestra riesgo? | **Microplásticos en el agua: qué se ha medido y qué todavía no sabemos**. Embudo partícula detectada → exposición → peligro → riesgo, con tamaño y método visibles. | `who-nano-microplastics-health-2022`, `spanish-bottled-water-microplastics-2024`, `global-tap-water-microplastics-2024`; detección, exposición y daño no son equivalentes y los métodos limitan comparaciones. |

#### Puertas editoriales de esta ronda

1. Elegir una sola pregunta por actualización y conservar la URL existente cuando
   resuelva la misma intención; no crear variantes para capturar consultas.
2. Añadir una caja visible de “qué respalda / qué no respalda” y la procedencia de
   cualquier diagrama o imagen original.
3. Mantener `reviewedDate` y `reviewedBy` vacíos hasta que una persona responsable
   compruebe texto, fuentes, imágenes y límites. Luna Max puede preparar un borrador,
   nunca certificarlo ni publicarlo.

### Búsqueda de brechas de Luna Max: indexación, móvil y monetización — 12 de septiembre de 2026

Luna contrastó las brechas operativas con veinte referencias oficiales. Solo cinco
URLs no estaban en el catálogo y se añadieron como candidatas: `google-sitemaps-overview`,
`adsense-ad-placement-policies`, `adsense-cmp-requirements`,
`search-console-page-indexing` y `cloudflare-speed-observatory`. Las otras quince
ya estaban registradas; no se cuentan dos veces. Esta tanda deja ocho oportunidades
de trabajo (la biblioteca pasa de 99 a 107), todas pendientes de decisión humana.

| Prioridad | Pregunta/acción | Medición de salida | Fuente(s) candidatas y límite |
| --- | --- | --- | --- |
| P0 | ¿Qué 32 páginas publicadas están descubiertas, indexadas o excluidas y por qué? Mantener los 99 briefs fuera del índice. | Ledger por URL con sitemap, canonical, robots/noindex, inspección y GSC impressions/clicks/CTR/position. | `google-technical-requirements`, `google-sitemaps-overview`, `search-console-page-indexing`; sitemap o HTTP 200 no garantizan indexación. |
| P1 | ¿Qué imagen y titular ayudan a una pieza de Discover sin clickbait? | Discover impressions/clicks/CTR por URL y comprobación de imagen representativa ≥1200 px, `max-image-preview:large` y carga estable. | `google-discover-guidance`, `google-image-seo`; Discover no es predecible. |
| P1 | ¿Coinciden la firma visible, el JSON-LD y el perfil de una persona real? | Cobertura/paridad de `author.url`, perfil y entidad; no añadir credenciales no verificadas. | `google-article-schema`, `google-profile-page-schema`; un marcado correcto no prueba experiencia. |
| P1 | ¿Qué cambios sustantivos merecen una fecha de actualización? | Registro de versión, motivo, fuente y comparación GSC pre/post; no modificar `lastmod` por rutina. | `icmje-corrections-version-control`, `google-search-rigorous-testing`; correlación no demuestra causalidad. |
| P1 | ¿El menú y la lectura funcionan con pulgar, teclado, zoom y lector de pantalla? | Matriz 320/375/390/768/1440 px: foco, reflow, contraste ≥4.5:1, objetivos ≥24×24 y ausencia de overflow/interstitials. | `w3c-mobile-accessibility`, `w3c-apg-disclosure-navigation`, `webdev-main-navigation`; requiere prueba real con dispositivos y tecnología asistiva. |
| P2 | ¿Dónde colocar anuncios después de que haya valor editorial? | Solo tras aprobación: matriz desktop/móvil, etiquetas y CLS/RUM antes/después; nunca en drafts/noindex. | `adsense-ad-placement-policies`, `adsense-publisher-policies-overview`; no predice aprobación ni RPM. |
| P1 | ¿Cada afirmación de ciencia, mito o salud muestra evidencia y límites? | Ficha afirmación → fuente primaria → alcance → incertidumbre → corrección/contacto. | `google-publisher-unreliable-harmful-claims`, `google-quality-rater-guidelines`; una fuente no convierte una hipótesis en hecho. |
| P1 | ¿El enlazado interno forma un grafo útil sin páginas casi duplicadas? | Hubs por categoría, destinos con contexto, huérfanas y discrepancias canonical registradas. | `google-sitemaps-overview`, `google-canonicalization`; enlaces ayudan al descubrimiento, no garantizan ranking. |

Estas ocho filas se incorporan al plan, no a la publicación. Luna puede preparar
briefs locales y tablas de medición; no puede marcar revisiones humanas, autoría,
licencias, resultados de Search Console ni aprobación de AdSense.

### Tanda de Luna Max: autoridad verificable y distribución responsable — 13 de septiembre de 2026

Esta ronda separa tres cosas que suelen confundirse: una guía de gobernanza, una
oportunidad de distribución y una mención que realmente puede medirse. Las
fuentes nuevas se conservan como candidatas en `SOURCE_CATALOG.yml` y no
convierten a EcoCuriosa en revista académica ni garantizan un enlace.

| Prioridad | Pregunta/acción | Salida medible | Fuentes candidatas y límite |
| --- | --- | --- | --- |
| P1 | ¿Qué controles de autoría, revisión, licencia y correcciones puede adoptar una enciclopedia web? | Checklist público de responsabilidad, procedencia visual y correcciones; sin solicitar una indexación académica impropia | `doaj-application-guide`, `latindex-catalogo-2-methodology`, `scielo-admission-criteria`, `road-issn-directory`; son marcos para revistas/recursos académicos, no certificaciones de EcoCuriosa |
| P1 | ¿Qué colaboración regional aportaría valor aunque no incluyera un enlace? | Pitch firmado, respuesta editorial y formato entregado (lámina, explicación o dato) | `scidev-work-with-us`, `the-conversation-editorial-guidelines`; requieren autoría/afiliación o aceptación editorial real |
| P1 | ¿Puede una institución elegible distribuir una noticia o recurso? | Registro de institución responsable, fecha, URL y atribución | `eurekalert-release-guidelines`, `alphagalileo-posting-policy`; moderación y elegibilidad; el pago de envío no compra ranking |
| P2 | ¿Qué recurso educativo merece distribución con licencia explícita? | Guía descargable con objetivos, licencia y atribución; reutilización documentada | OER Commons y MERLOT; son opciones educativas, no directorios de backlinks |
| P1 | ¿Qué menciones de marca son reales y cuáles son solo ruido? | Dominio, URL, contexto, enlace y clasificación independiente/propia | `google-alerts-help`, junto con Search Console; las alertas tienen cobertura incompleta y requieren verificación manual |
| P1 | ¿Qué temas muestran interés relativo antes de redactar? | Comparación Trends 0–100 y consultas GSC, sin inventar volumen | `google-trends-faq`; no es encuesta ni volumen absoluto |
| P1 | ¿Qué colaboración genera visitas de calidad? | UTM aprobado + sesiones referidas, segunda página y retorno | `google-analytics-url-builders`, `google-search-console-ga-guide`; GSC y Analytics tienen definiciones distintas |
| P2 | ¿Cuándo conviene News y cuándo no? | Decisión documentada por tipo de contenido y fecha de publicación | `google-news-sitemap`, `google-news-ranking`; News sitemap es para artículos de los últimos dos días y no garantiza inclusión |

La primera acción no es abrir perfiles o pagar envíos: es cerrar las 31
revisiones humanas pendientes y seleccionar una colaboración que aporte una
contribución original. Luna puede preparar el pitch y el formato como borrador
local; la persona responsable debe comprobar las fuentes, autoría, licencia y
publicación antes de cualquier contacto externo.

### Fuentes abiertas incorporadas en la revisión P0/P1 — 13 de septiembre de 2026

Esta ronda priorizó copias de texto completo de estudios primarios para que el
editor y el lector puedan seguir la evidencia sin depender de una página de
resumen o de una respuesta automatizada. Las cuatro URLs están registradas en
`SOURCE_CATALOG.yml` y enlazadas desde sus artículos; siguen requiriendo la
lectura y aprobación humana de la afirmación exacta.

| Artículo | Fuente abierta | Pregunta people-first para una futura actualización | Límite que debe conservarse |
| --- | --- | --- | --- |
| Tardígrados | [eLife en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC6773438/) | ¿Qué protege Dsup en células y qué no demuestra sobre un animal completo? | Ensayos celulares y bioquímicos; no invulnerabilidad ni terapia |
| Peces linterna | [Royal Society B en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC1692851/) | ¿Cómo se relacionan emisión rojo lejano y sensibilidad retinal en *Malacosteus niger*? | Un taxón especializado; no generalizar a todos los peces abisales |
| Búhos | [Features of owl wings en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC5206597/) | ¿Qué rasgos del ala se asocian con reducción del ruido bajo condiciones concretas? | Evidencia de alas y modelos; no silencio absoluto ni todas las especies |
| Búhos | [Serraciones de plumas en PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC4774958/) | ¿Qué cambia entre plumas y cómo se evita trasladar decibelios entre especies? | Variación morfológica; no prueba una reducción fija en vuelo real |

La imagen recomendada para estos briefs es un diagrama original que separe
observación, modelo e inferencia. Luna puede preparar el esquema y el texto
alternativo, pero no debe presentar una ilustración sintética como fotografía ni
registrar una revisión humana que no haya ocurrido.

### Fuentes oficiales nuevas para el plan de descubrimiento y medición — 14 de septiembre de 2026

Esta ronda completa el plan con documentación oficial de Bing Webmaster Tools
y una guía metodológica de Google Search Central. Se usan para diseñar el flujo
de publicación y medición, no como garantía de indexación, citas de Copilot,
Discover, tráfico o ingresos.

| Fuente | Uso práctico en EcoCuriosa | Límite / siguiente paso |
| --- | --- | --- |
| [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a) | Revisar que cada URL tenga un tema único, HTML visible, enlaces rastreables, canonical y sitemap coherentes para Bing Search y Copilot. | No sustituye la revisión de Google ni demuestra inclusión en Bing; comprobar después en una cuenta Bing verificada. |
| [IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby) | Diseñar una notificación controlada cuando una URL se publique, actualice o retire, conservando un ledger de URL y fecha. | El envío no equivale a rastreo o indexación; no activar credenciales ni automatización sin una cuenta verificada y una prueba de una sola URL. |
| [Opciones de envío de URL de Bing](https://www.bing.com/webmasters/help/url-submission-62f2860b) | Elegir IndexNow y sitemap para cambios reales; evitar envíos masivos de variantes. | El sitemap sigue siendo necesario; no usar envíos para compensar contenido sin revisión. |
| [Directivas robots de Bing](https://www.bing.com/webmasters/help/robots-meta-tags-and-attributes-that-bing-supports-5198d240) | Auditar `noindex`, `nosnippet` y `noarchive` antes de impedir que una pieza sea elegible para búsqueda o grounding. | Robots controla acceso/uso, no garantiza indexación; probar el HTML servido y no bloquear el rastreo de páginas que deben evaluarse. |
| [Depuración de caídas de tráfico de Google](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) | Crear comparaciones fechadas por consulta, página, país, dispositivo y tipo de búsqueda antes de cambiar títulos o abrir nuevas URLs. | La guía no aporta datos de EcoCuriosa; la muestra actual de 179 impresiones sigue siendo exploratoria. |

#### Briefs derivados para Luna Max (solo investigación local)

1. **Ledger de publicación:** ante cada cambio sustantivo, registrar URL
   canónica, `lastmod`, motivo, revisión humana y notificación IndexNow (si se
   habilita). No publicar ni enviar nada automáticamente.
2. **Matriz de elegibilidad para Copilot/Discover:** comprobar HTML visible,
   entidad, fuente, imagen representativa ≥1200 px, canonical y sitemap; la
   salida debe ser un diagnóstico con incertidumbres, no una puntuación de
   visibilidad.
3. **Experimento CTR:** elegir una sola URL con impresiones, cambiar solo
   título o extracto, fijar una ventana de al menos 28 días y comparar la misma
   segmentación en Search Console. Revertir si la precisión o la utilidad cae.

Las cinco fuentes están registradas con IDs únicos en
`docs/editorial/SOURCE_CATALOG.yml`; siguen siendo referencias de plan hasta
que el editor las abra, las aplique a una afirmación concreta y cierre la
revisión humana del artículo.

### Fuentes oficiales nuevas para consentimiento y medición responsable — 14 de septiembre de 2026

Esta ronda añade documentación operativa que evita mezclar cumplimiento de
consentimiento, entrega de anuncios y audiencia. Son referencias para el plan y
no autorizan a activar etiquetas, cambiar el perfil de AdSense ni guardar datos
personales en el repositorio.

| Fuente | Aplicación en EcoCuriosa | Límite / siguiente paso |
| --- | --- | --- |
| [Consent mode de Google](https://developers.google.com/tag-platform/security/guides/consent) | Diseñar estados `ad_storage`, `analytics_storage`, `ad_user_data` y `ad_personalization` cuando exista una CMP y una propiedad de Analytics; documentar aceptar, rechazar y retirar consentimiento. | La guía es técnica, no asesoría legal; probar la CMP certificada antes de cargar anuncios o Analytics. |
| [Preguntas frecuentes de ads.txt de AdSense](https://support.google.com/adsense/answer/9785052?hl=es) | Verificar que `ads.txt` esté en la raíz, responda `200` y contenga el publisher ID correcto antes de activar unidades reales. | Un archivo correcto solo autoriza vendedores; no prueba aprobación, tráfico ni ingresos. |
| [Dimensiones de Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/data-metrics/dimensions/) | Separar país, dispositivo, ruta, referer, navegador y sistema operativo en el tablero de rendimiento y comparar con Search Console. | Son métricas agregadas de Web Analytics; las solicitudes de borde incluyen bots y recursos y no deben llamarse visitantes únicos. |

#### Briefs derivados para Luna Max (investigación local)

1. **Matriz de consentimiento:** crear una tabla de estados por región y etiqueta
   (Cloudflare, Analytics y AdSense), con evidencia de cada prueba y sin activar
   una etiqueta que no tenga una decisión registrada.
2. **Auditoría de `ads.txt`:** comprobar raíz, HTTPS, redirects y publisher ID
   cuando AdSense entregue el dato definitivo; guardar solo el resultado
   agregado y la fecha.
3. **Embudo de medición:** comparar impresiones/clics de Search Console con
   rutas, referers y dispositivos de Cloudflare; separar bots, recursos y
   redirecciones antes de hablar de audiencia.

Las tres fuentes permanecen como candidatas hasta que una persona responsable
verifique la configuración real y apruebe cualquier cambio de privacidad o
monetización.

### Fuentes de Luna Max para autoridad, auditoría y monetización responsable — 14 de septiembre de 2026

La búsqueda de brechas identificó doce referencias nuevas. Se incorporan como
inspiración y controles operativos; ninguna convierte a EcoCuriosa en una
revista científica, certifica una autoría ni garantiza tráfico o aprobación de
AdSense.

| Área | Fuente | Aplicación propuesta | Límite |
| --- | --- | --- | --- |
| Autoría e IA | [ICMJE: uso de IA en publicaciones](https://www.icmje.org/recommendations/browse/artificial-intelligence/) | Política pública que separe herramienta, autor humano, verificación y responsabilidad final. | No atribuir autoría ni revisión a Luna. |
| Correcciones | [COPE: directrices de retractación](https://members.publicationethics.org/sites/default/files/retraction-guidelines-cope.pdf) | Crear `/correcciones/` con avisos visibles, motivo, fecha y relación con la versión corregida. | Corregir no es retractar; cada caso requiere criterio editorial. |
| Ciencia abierta | [UNESCO: Recommendation on Open Science](https://www.unesco.org/en/legal-affairs/recommendation-open-science) | Reforzar transparencia, reproducibilidad, atribución, conflictos y acceso responsable. | Es una recomendación internacional, no una certificación del sitio. |
| Rastreo | [Códigos HTTP y crawlers de Google](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes) | Añadir al ledger estados 2xx, 301/308, 4xx y 5xx y su interpretación. | HTTP 200 no garantiza indexación. |
| Actualizaciones | [Solicitar recrawl en Google](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) | Flujo para una URL actualizada: revisión → sitemap/inspección → resultado fechado. | Hay cuotas y el recrawl no garantiza inclusión. |
| Bing | [Site Scan](https://www.bing.com/webmasters/help/site-scan-623520c9) y [URL Inspection](https://www.bing.com/webmasters/help/URL-Inspection-55a30305) | Verificar el dominio y comparar problemas técnicos e indexación con Search Console. | Requiere cuenta Bing del titular; no activar credenciales en el repositorio. |
| Rendimiento | [Cloudflare Observatory](https://developers.cloudflare.com/speed/observatory/dashboard/) | Separar P75 real, origen, errores y pruebas sintéticas en el tablero mensual. | Declarar “sin datos” si la muestra de campo no existe. |
| Demanda | [Google Trends para Search](https://developers.google.com/search/docs/monitor-debug/trends-start) | Cruzar interés relativo LAC con consultas reales antes de crear un brief. | Trends es 0–100 relativo, no volumen ni encuesta. |
| Tráfico válido | [Evitar tráfico no válido en AdSense](https://support.google.com/adsense/answer/1112983?hl=es) | Checklist de distribución segura; bloquear compra de tráfico, intercambios y clics automatizados. | El editor responde por sus fuentes y debe vigilar cada canal. |
| Visibilidad publicitaria | [Recomendaciones de visibilidad de AdSense](https://support.google.com/adsense/answer/6219980?hl=es) | Tras aprobar: una unidad después de la respuesta inicial y otra al final, con viewability y CLS antes/después. | No usar la referencia para prometer RPM ni activar anuncios antes de aprobación. |
| Adquisición | [Cómo adquirir tráfico para un sitio](https://support.google.com/adsense/answer/1348722?hl=es) | Priorizar SEO, colaboraciones reales, newsletter y redes con UTM; detener servicios de volumen artificial. | Promoción legítima no garantiza posicionamiento. |

#### Briefs de trabajo para Luna Max

1. **Página de responsabilidad y correcciones:** preparar un borrador local de
   `/correcciones/` y enlazarlo desde metodología, contacto y pie de página;
   publicar solo después de revisión del titular.
2. **Ledger HTTP e indexación:** registrar URL canónica, estado HTTP, sitemap,
   inspección Google/Bing, fecha del cambio y resultado, sin enviar recrawls en
   lote.
3. **Matriz de tráfico seguro:** clasificar cada canal como orgánico,
   colaboración, red social o sospechoso; conservar UTM y decisiones agregadas,
   nunca datos personales.
4. **Control post-aprobación:** comparar viewability, CLS y CWV antes/después de
   cada unidad publicitaria y retirar ubicaciones que degraden la lectura.

Todas las referencias quedan pendientes de apertura y aplicación por una
persona responsable. Luna puede preparar tablas y borradores locales, pero no
marca revisiones, no publica y no activa cuentas o etiquetas.

### Briefs de alto potencial para la siguiente tanda — 14 de septiembre de 2026

Estas oportunidades convierten las últimas referencias oficiales del catálogo
en preguntas concretas. No son artículos ni autorizan una publicación: cada
fila necesita una consulta real de Search Console, una fuente abierta por el
editor y una contribución propia que no sea una reescritura.

| Prioridad | Pregunta people-first | Fuentes candidatas | Aportación propia obligatoria | Métrica y límite |
| --- | --- | --- | --- | --- |
| P0 | ¿Cómo saber si una página científica está realmente actualizada? | `google-publication-dates`, `google-get-on-google` | Línea de tiempo visible que separe publicado, actualizado y revisado, con un ejemplo de cambio trazable | CTR y consultas de páginas actualizadas; no inventar frescura ni prometer mejor posición |
| P0 | ¿Qué hace que una comparación de especies sea una buena reseña? | `google-reviews-system` + `pubmed-dynamic-mimic-octopus` u otra fuente primaria del taxón | Matriz de criterios, método, muestra y límites; separar evidencia de valoración | Clics en la consulta objetivo y correcciones recibidas; no presentar la guía como fórmula de ranking |
| P0 | ¿Por qué Lighthouse y la experiencia de usuarios no siempre coinciden? | `google-pagespeed-insights-about`, `crux-methodology` | Gráfico laboratorio vs. P75 de campo y explicación de elegibilidad CrUX | LCP/INP/CLS de laboratorio y RUM por separado; declarar “sin datos” cuando corresponda |
| P0 | ¿Qué se puede automatizar al medir rendimiento sin publicar contenido? | `google-pagespeed-insights-api` | Especificación de una medición móvil/escritorio para portada, categoría y artículo, con registro de fecha | Tendencia de P75 y regresiones por commit; no usar pruebas sintéticas como audiencia |
| P0 | ¿Qué significa consentir anuncios y medición en una web científica? | `google-consent-mode-overview`, `adsense-ad-tech-partners` | Tabla aceptar/rechazar/gestionar por región y etiqueta, revisada con la CMP real | Cobertura de consentimiento y errores de implementación; no activar proveedores sin decisión documentada |
| P1 | ¿Qué cambia entre anuncios personalizados, limitados y sin personalización? | `adsense-ad-serving-settings` | Diagrama de estados y checklist de prueba antes/después de aprobación | RPM, viewability y CLS solo tras aprobación; no prometer ingresos |
| P1 | ¿Cómo llega una explicación científica a Google sin comprar tráfico? | `google-get-on-google` | Recorrido HTML → enlace → sitemap → inspección de URL, con fallos y recuperación | URLs rastreadas/indexadas y consultas reales; HTTP 200 no equivale a indexación |
| P1 | ¿Cuándo una historia natural es noticia y cuándo es una guía evergreen? | `google-news-other-platforms`, `google-news-auto-generated-pages` | Árbol de decisión por fecha, novedad, autoría y valor para el lector | Impresiones de News/Discover si aparecen; no crear contenido noticioso artificial |
| P1 | ¿Cómo evitar que una republicación destruya la original? | `google-news-content-blocking` | Checklist de atribución, canonical/noindex y control de copias; ejemplo hipotético etiquetado | Menciones atribuibles y tráfico referido; no usar reescrituras con sinónimos ni comprar enlaces |
| P1 | ¿Qué pregunta nueva nace de una observación del calamar gigante? | `large-deep-sea-squid-platforms-2021`, `noaa-large-deep-sea-squid-platforms-repository`, `google-reviews-system` | Mapa de método de cámara, profundidad, sesgo de muestreo y lo que no se observó | Impresiones para `architeuthis dux`; tamaños deben conservar si son estimaciones parciales |
| P1 | ¿Cómo separar modelo, observación e inferencia en la geodinamo? | `nasa-gsfc-geodynamo-research`, `google-publication-dates` | Diagrama reproducible de datos satelitales, modelo del núcleo y predicción | CTR de `geodinamo`; no convertir una simulación en observación directa |
| P1 | ¿Por qué el petricor no es una molécula única? | `pmc-geosmin-biosynthesis-3013058`, `pubmed-geosmin-warning-chemical`, `google-reviews-system` | Esquema geosmina–aerosol–percepción con límites por suelo, lluvia y organismo | Consultas `geosmina` y tiempo de lectura; no presentar un mecanismo probado para cada lluvia |

#### Contrato de automatización para estos briefs

Luna Max solo puede devolver un JSON local con `briefId`, pregunta, fuentes
exactas, alcance, límites, propuesta de imagen y estado
`humanApproval: pending`/`publish: false`. El editor debe abrir las fuentes,
comprobar la afirmación concreta, elegir una imagen original o con licencia
documentada y registrar la decisión antes de tocar `src/content/articles`.
Una alerta de Search Console o un resultado de PageSpeed puede priorizar una
fila, pero nunca puede marcarla como revisada ni generar una promesa de tráfico
o monetización.

### Fuentes primarias recientes para actualizar artículos con impresiones — 14 de septiembre de 2026

Luna Max verificó estas referencias adicionales para las páginas que ya tienen
señales de demanda. Se registran como candidatos de actualización, no como
citas automáticas. Los tamaños de muestra, regiones y condiciones deben quedar
visibles en cualquier borrador.

| Orden | Artículo | Fuente candidata | Aporte editorial posible | Límite que debe mostrarse |
| ---: | --- | --- | --- | --- |
| 1 | Arrecifes de coral | `science-florida-acropora-functional-extinction-2025`, `usgs-florida-acropora-functional-extinction-2025` | Separar estrés térmico, blanqueamiento, mortalidad y extinción funcional regional con datos de Florida | Dos especies y una región; evento de 2023; no extrapolar porcentajes al arrecife mundial |
| 2 | Calamar gigante | `micropub-giant-squid-reproduction-2025`, `noaa-large-deep-sea-squid-platforms-repository` | Añadir una sección sobre observaciones reproductivas y métodos de cámara sin perturbación | Varamiento/moribundez o encuentros oportunistas; n pequeño; no describir apareamiento normal |
| 3 | Tiburón de Groenlandia | `aging-cell-greenland-shark-heart-2026` | Contrastar longevidad con histología cardíaca y presentar resiliencia como hipótesis | Seis muestras post mortem; no rendimiento cardíaco directo ni mecanismo anti-envejecimiento humano |
| 4 | Geodinamo terrestre | `aps-geodynamo-buoyancy-regimes-2025`, `nasa-gsfc-geodynamo-research` | Explicar que los regímenes de flotabilidad cambian la convección y los campos simulados | Son simulaciones y dependen del régimen; no predicen una inversión inminente |
| 5 | Geosmina y petricor | `microbial-ecology-geosmin-trophic-signal-2025`, `pmc-microbial-ecology-geosmin-trophic-signal-2025` | Separar la señal trófica en protistas de la percepción humana del olor | Tres protistas en laboratorio; no universalizar a suelos, lluvia, animales o personas |
| 6 | Ballena azul | `plos-blue-whale-acoustic-foraging-2025` | Relacionar acústica pasiva, isótopos y condiciones de forraje como indicador ecológico | California Current y 2015–2021; proxies que no equivalen a abundancia ni conducta universal |
| 7 | Mantarraya gigante | `boem-giant-manta-habitat-2023` | Crear un mapa de hábitat y movimiento con encuestas aéreas, satélite y acústica | Sureste de EE. UU.; cinco animales con etiqueta acústica; no inferir inteligencia o población global |

Para estas siete actualizaciones, el primer párrafo debe responder la pregunta
en 40–80 palabras, el segundo debe indicar método/muestra y la sección final
debe separar lo observado de la inferencia. El editor abre cada DOI o PDF,
comprueba el activo visual y registra `accessedDate`; Luna solo prepara el
brief local con `humanApproval: pending` y `publish: false`.

### Fuentes nuevas de Luna Max para autoridad, medición y actualización científica — 14 de septiembre de 2026

Esta tanda contiene once URLs canónicas que no estaban en el catálogo. Se
incorporan como inspiración y controles de proceso; antes de citarlas en un
artículo hay que abrirlas, comprobar la afirmación concreta y registrar el
alcance real.

| Área | Fuente | Brief o mejora que permite | Límite que debe conservarse |
| --- | --- | --- | --- |
| E‑E‑A‑T | [Google: la experiencia añade una «E»](https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t) | Checklist «quién, cómo y por qué»: autoría visible, proceso y aportación propia | Marco conceptual de 2022; no es factor de ranking ni garantía |
| Autoría | [Nature: Authorship](https://www.nature.com/nature/editorial-policies/authorship) | Separar autoría sustantiva, contribuciones y responsabilidad final; nunca atribuir autoría a Luna | Política de revistas; adaptar proporcionalmente al sitio |
| Correcciones | [Nature: Correction and Retraction Policy](https://www.nature.com/nature-portfolio/editorial-policies/correction-and-retraction-policy) | Diferenciar corrección, adenda, aviso, expresión de preocupación y retractación en `/correcciones/` | No inventar DOI, Crossmark ni infraestructura de revista |
| Conflictos | [Nature: Competing interests](https://www.nature.com/nature/editorial-policies/competing-interests) | Declarar patrocinios, afiliaciones y enlaces comerciales cuando existan | Umbrales dependen del caso; no sustituye asesoría legal |
| Search Console | [Recomendaciones de Search Console](https://developers.google.com/search/blog/2024/08/search-console-recommendations) | Revisar mensualmente recomendaciones de indexación, sitemap, datos estructurados y tendencias | Función gradual; registrar evidencia antes de aplicar cambios |
| Search Console | [Informe de Insights](https://support.google.com/webmasters/answer/16308503?hl=es) | Priorizar páginas y consultas principales, al alza o a la baja | Puede ocultar datos pequeños; disponibilidad y clasificación variables |
| Search Console | [Filtros y comparaciones avanzadas](https://support.google.com/webmasters/answer/17011165?hl=es) | Comparar periodos por consulta, URL, país y dispositivo sin crear variantes canibalizadoras | Una hipótesis por vez; datos anonimizados pueden aparecer truncados |
| Search Console | [Definiciones de impresiones, posición y clics](https://support.google.com/webmasters/answer/7042828?hl=es) | Añadir definiciones al snapshot para no llamar «audiencia» a una impresión | Métricas agregadas; no prueban causalidad ni sesiones |
| Taxonomía | [WoRMS: *Architeuthis dux*](https://www.marinespecies.org/aphia.php?id=342218&p=taxdetails) | Ficha de nombre aceptado, AphiaID y sinónimos para la consulta del calamar | No demuestra tamaño, abundancia ni distribución actual |
| Geodinamo | [NASA GSFC: Research Page — Geodynamo](https://science.gsfc.nasa.gov/earth/geodesy/researchareas/136/) | Diagrama reproducible que separa observación, modelo e inferencia del flujo del núcleo | Página de investigación, no dataset ni pronóstico |
| Tiburón de Groenlandia | [Nature Communications: sistema visual](https://www.nature.com/articles/s41467-025-67429-6) | Actualizar la pieza con bastones, opsinas y adaptación a poca luz; conservar localidad y muestra | Individuos de Disko (2020–2024); expresión génica no demuestra antienvejecimiento |

#### Plan de uso con Luna Max

1. Convertir las cuatro primeras fuentes en un brief de responsabilidad,
   autoría, conflictos y correcciones para revisión del titular.
2. Usar las cuatro de Search Console en un ledger mensual: periodo, consulta,
   URL, país, dispositivo, hipótesis, cambio único y resultado.
3. Derivar solo actualizaciones de páginas existentes para *Architeuthis dux*,
   geodinamo y tiburón de Groenlandia; no abrir una URL nueva hasta comprobar
   que la pregunta no está resuelta.
4. Mantener `humanApproval: pending`, `publish: false`, fuentes candidatas y
   procedencia de imagen hasta la revisión humana.

### Fuentes nuevas para elevar puntuación técnica, móvil y transparencia — 20 de septiembre de 2026

Luna Max comparó estas URLs con el catálogo y no encontró duplicados en su
forma canónica. Se incorporan como material de inspiración y preflight; una
entrada no se convierte automáticamente en una cita de artículo.

| Área | Fuente | Aplicación concreta en EcoCuriosa | Límite |
| --- | --- | --- | --- |
| LCP responsive | [Preload de imágenes responsive](https://web.dev/articles/preload-responsive-images) | Probar `imagesrcset`, `imagesizes` y `fetchpriority` solo para imágenes LCP difíciles de descubrir; guardar waterfall, bytes y LCP | No demuestra CWV de campo ni autoriza precargar todas las imágenes |
| Fondos móviles | [Fondos CSS según viewport](https://web.dev/articles/optimize-css-background-images-with-media-queries) | Auditar 480/768/1440 px y convertir a `img/srcset` cuando el fondo sea contenido principal | El porcentaje del tutorial pertenece a su demo, no a nuestro sitio |
| Baseline de laboratorio | [Lighthouse de Chrome DevTools](https://developer.chrome.com/docs/devtools/lighthouse/) | Guardar un JSON por release para portada, categoría, artículo y legal con el mismo perfil móvil | Máquina y red influyen; no es P75 de campo |
| Accesibilidad | [Puntuación de accesibilidad Lighthouse](https://developer.chrome.com/docs/lighthouse/accessibility/scoring/) | Priorizar nombres, ARIA, alt, labels y contraste; complementar con teclado y lector de pantalla | No es certificación WCAG |
| Contraste | [WCAG 2.2 — contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Revisar tokens, texto sobre imágenes y foco con 4,5:1/3:1 sin redondear ratios | El criterio tiene excepciones y no cubre toda la accesibilidad |
| Redirects | [Redirects y Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects) | Inventariar 301/308, eliminar cadenas y separar 404/410 de cambios permanentes | Redirect es una señal, no garantía de indexación |
| `<head>` | [Meta tags compatibles](https://developers.google.com/search/docs/crawling-indexing/special-tags) | Escanear robots, viewport, descripción, nosnippet y X-Robots-Tag en HTML final | `keywords`, `lang` y meta inyectada no sustituyen contenido/indexación |
| JSON-LD | [Datos estructurados generados con JavaScript](https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript) | Probar URLs renderizadas en Rich Results Test y verificar coincidencia con contenido visible | Elegibilidad no garantiza rich result |
| AdSense | [Guía de ads.txt](https://support.google.com/adsense/answer/12171612) | Preflight de raíz, HTTP 200, formato y propagación; conservar publisher ID solo en el canal autorizado | No prueba aprobación, inventario ni ingresos |
| IA editorial | [Orientación de Google sobre contenido generado por IA](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content) | Mantener valor original, autoría, revisión, fuentes, límites y divulgación cuando el lector la necesite | No es factor de ranking ni permiso para escalar volumen |
| Transparencia | [Fuentes detrás de Google News](https://developers.google.com/search/blog/2021/06/google-news-sources) | Auditar byline/bio, fechas, misión, personal, contacto y propiedad/financiación | No implica elegibilidad para News |
| Search y AI | [Checklist para experiencias de IA en Search](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search) | Crear un preflight común: 200, indexable, contenido único, JSON-LD coherente, imagen útil y experiencia móvil | Las experiencias cambian y no garantizan citación o tráfico |
| Identidad pública | [Search profiles y badge](https://developers.google.com/search/docs/appearance/search-profiles) | Evaluar una identidad pública verificable y un enlace de perfil solo si el titular reclama realmente la cuenta y autoriza el handle | No crear perfiles, seguidores o señales de autoridad ficticias; el badge no garantiza Discover ni ranking |

#### Tres briefs derivados

1. **La imagen hero que hace lenta una página móvil:** comparar imagen
   descubrible, fondo CSS y preload responsive con waterfall, bytes y LCP de
   laboratorio; separar siempre la medición de campo.
2. **De una URL Astro a Google:** explicar redirects, `robots`, meta tags y
   JSON-LD renderizado con una matriz reproducible de HTML, URL Inspection y
   Rich Results Test.
3. **Quién, cómo y por qué en una explicación asistida por IA:** aplicar
   byline, bio, metodología, fuentes primarias, límites, revisión humana y
   correcciones visibles a una ficha existente, sin presentar Luna como autora.

#### Contrato de automatización

Luna puede investigar, proponer el brief y generar un borrador local. No puede
marcar revisión humana, inventar credenciales, publicar citas sin abrir la
fuente, copiar imágenes protegidas ni convertir una métrica de laboratorio en
una afirmación de audiencia. Se mantienen `humanApproval: pending` y
`publish: false` hasta que una persona revise y publique.

### Fuentes nuevas para E‑E‑A‑T, reproducibilidad y responsabilidad — 20 de septiembre de 2026

La búsqueda de Luna Max comparó el catálogo vigente y excluyó URLs que ya
estaban cubiertas. Estas doce fuentes nuevas se incorporan como material de
investigación y controles internos; no son citas automáticas ni suben la
puntuación por sí solas.

| Área | Fuente | Aplicación concreta en EcoCuriosa | Límite |
| --- | --- | --- | --- |
| Autoridad temática | [News topic authority](https://developers.google.com/search/blog/2023/05/understanding-news-topic-authority) | Elegir dos o tres áreas estrechas, medir piezas originales, fuentes primarias y enlaces internos por área | Explicación de un sistema para consultas noticiosas; no es fórmula de ranking |
| Metadatos de fuentes | [Crossref metadata best practices](https://www.crossref.org/documentation/principles-practices/best-practices) | Registrar autores, fechas, licencias, referencias, versiones y relaciones en la ficha interna de cada fuente | Crossref describe registros DOI; no convertir EcoCuriosa en revista ni inventar DOIs |
| Validación DOI | [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/) | Comparar automáticamente DOI, título, autores, año, ORCID/ROR, licencia y actualizaciones antes de citar | Resolver el endpoint actual en ejecución; un DOI válido no prueba la conclusión |
| Mantenimiento | [Maintaining Crossref metadata](https://www.crossref.org/documentation/register-maintain-records/maintaining-your-metadata/) | Revisar mensualmente enlaces, versiones, retiros y correcciones de fuentes | Orientado a miembros Crossref; aquí es un patrón de trazabilidad |
| Cobertura | [Crossref Participation Reports](https://www.crossref.org/documentation/reports/participation-reports) | Crear un scorecard propio de referencias, autoría, ORCID, afiliación, financiación, licencia y estado editorial | Las métricas Crossref no son comparables directamente con el sitio |
| Correcciones | [COPE Retraction Guidelines](https://publicationethics.org/sites/default/files/retraction-guidelines-cope.pdf) | Separar corrección menor, actualización, expresión de preocupación y retiro; enlazar la versión original | Guía para publicaciones científicas; no usar lenguaje de retractación sin motivo real |
| Autoría | [ORCID: collecting and sharing IDs](https://info.orcid.org/documentation/collecting-and-sharing-orcid-ids/) | Aceptar ORCID solo autenticado y autorizado por una persona real; reflejarlo de forma consistente | ORCID identifica a una persona, no demuestra experiencia o revisión |
| Datasets | [DataCite metadata](https://support.datacite.org/docs/metadata-1) | Manifestar creators, contributors, ORCID, afiliación, financiación, versión, tipo y licencia de un dataset | DataCite está pensado para objetos con DOI; adaptarlo sin crear uno propio |
| Reproducibilidad | [DataCite Commons works](https://support.datacite.org/docs/works-in-datacite-commons) | Guardar exportación JSON/XML/RIS y relaciones de cada DOI de datos usado | Relaciones o descargas no validan la calidad científica |
| Calidad GBIF | [GBIF data quality recommendations](https://techdocs.gbif.org/en/data-publishing/data-quality-recommendations) | Mostrar dataset, identificadores, taxonomía, ubicación, completitud y problemas relevantes | La calidad depende del publicador y de la pregunta concreta |
| Adecuación GBIF | [GBIF fit-for-purpose data](https://docs.gbif.org/course-data-use/en/fit-for-purpose-data.html) | Separar exactitud, precisión, sesgo y adecuación; explicar qué permite y qué no una consulta | No convertir ocurrencias en abundancia o tendencia poblacional |
| PubMed | [PubMed disclaimer](https://pubmed.ncbi.nlm.nih.gov/disclaimer/) | Mostrar tipo de publicación, PMID/DOI, revisión por pares cuando esté verificada, retractaciones y límites | Estar indexado en PubMed no es un sello de calidad ni consejo médico |

#### Medición antes/después

La rúbrica E‑E‑A‑T (44 inicial; 56 tras los controles de procedencia y
trazabilidad) es interna, no una puntuación de Google. La línea base actual es
32 artículos con fuentes, 1/32 con revisión real y 31 pendientes. Para evitar
subir el número sin subir la calidad, cada revisión debe registrar:

- `review_receipt_coverage`: fichas con evidencia de revisión real / 32;
- `truthful_author_coverage`: fichas con autoría humana verificable y bio enlazada cuando corresponde;
- `source_integrity_rate`: DOI/PMID/GBIF que resuelve y coincide en título, autoría y fecha;
- `claim_traceability`: afirmaciones auditadas con fuente primaria/oficial y límite explícito;
- `reproducibility_coverage`: artículos de datos con dataset, versión, filtros, fecha, licencia y limitaciones;
- `correction_sla`: días entre un error confirmado y la actualización visible;
- `transparency_surface`: páginas de misión, metodología, correcciones, contacto, propiedad/financiación y uso de IA con HTTP 200 y contenido real.

Comparar ventanas de 28 y 56 días en Search Console por artículo, consulta,
dispositivo y país. Impresiones, clics, CTR y posición son señales observadas,
no prueba causal de que una política editorial cambió el ranking, ni de que
AdSense esté aprobado.

#### Cinco briefs editoriales seguros

1. **¿Qué permite afirmar un registro de GBIF sobre una especie local?**
   Identificar dataset, consulta, filtros, fecha, flags y sesgo de muestreo;
   no llamar censo a una lista de ocurrencias.
2. **Reproducir una consulta de biodiversidad desde cero.** Conservar
   identificador, versión/exportación, parámetros, licencia y pasos para
   repetirla; separar el resultado de cualquier inferencia poblacional.
3. **Cómo verificamos una afirmación científica en EcoCuriosa.** Explicar la
   jerarquía de fuentes, validación DOI/PMID/GBIF, autoría, revisión humana,
   asistencia de IA y correcciones, usando solo roles reales.
4. **Qué es un artículo de PubMed y qué no garantiza.** Distinguir índice,
   estudio, revisión, preprint y retractación; no ofrecer diagnóstico ni
   consejo médico.
5. **Cómo corregimos un artículo cuando aparece nueva evidencia.** Basarlo en
   una corrección real con antes/después, fecha, motivo, fuente y alcance; si
   aún no existe una corrección, etiquetarlo como guía de proceso.

La automatización puede preparar estos briefs y validar metadatos, pero solo una
persona puede abrir la fuente, comprobar la afirmación, autorizar su identidad
y marcar `reviewedDate`/`reviewedBy`.

### Fuentes nuevas para la puntuación máxima de indexación, CMP, campo y accesibilidad — 20 de septiembre de 2026

La segunda búsqueda de Luna Max comparó el catálogo histórico de 569 URLs y
excluyó las fuentes ya presentes. Estas doce entradas son candidatas de proceso: se
incorporan para inspirar controles y nuevas editoriales, no como citas
automáticas ni como prueba de aprobación de AdSense.

El snapshot histórico de esa ronda contenía **592 entradas**; el catálogo
actual, después de las ampliaciones temáticas, contiene **605 entradas**.

| Área | Fuente | Aplicación concreta en EcoCuriosa | Límite |
| --- | --- | --- | --- |
| HTML renderizado | [Corregir problemas de JavaScript para Search](https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript) | Crear una matriz de 10 rutas con HTML renderizado, DOM, recursos, consola y paridad de título/cuerpo/enlaces/schema | Un resultado correcto de la herramienta no garantiza indexación, ranking ni otros crawlers |
| Inventario URL | [Crawl Budget Management](https://developers.google.com/crawling/docs/crawl-budget) | Auditar semanalmente sitemap, URLs canónicas/no canónicas, soft-404, 404/410, cadenas de redirect y `lastmod` | La guía está pensada sobre todo para sitios grandes y cambiantes; no atribuir ranking a “crawl budget” |
| CMP | [About Privacy & messaging](https://support.google.com/adsense/answer/10924669) | Especificar regiones, finalidades, proveedores, opt-out, revocación, enlaces de privacidad y eventos medibles antes de activar anuncios | Herramienta de cuenta; no demuestra cumplimiento legal local ni aprobación |
| CMP / TCF | [Troubleshooting IAB EU TCF v2.3](https://support.google.com/adsense/answer/9999955) | Probar TC string, CMP ID/GVL, Google como vendor, reconsentimiento y bloqueo previo de tags en EEE, Reino Unido y Suiza | No sustituye asesoría legal ni debe aplicarse fuera de las regiones relevantes sin validar el caso |
| Cobertura del mensaje | [Maximize message coverage](https://support.google.com/adsense/answer/18189118) | Registrar si la función aparece en la cuenta y medir cobertura/errores de mensajes estándar o limitados | Función gradual; más cobertura no equivale a aprobación ni ingresos |
| Lab vs. campo | [Why lab and field data can be different](https://web.dev/articles/lab-and-field-data-differences) | Separar Lighthouse, CrUX y RUM en cada snapshot con periodo, dispositivo, red, muestra y versión | Ninguno sustituye al otro; sin volumen suficiente no hay CWV de campo |
| RUM | [Best practices for measuring Web Vitals in the field](https://web.dev/articles/vitals-field-measurement-best-practices) | Preparar un tablero p75 de LCP/INP/CLS por ruta, dispositivo, país y despliegue; cargar beacons de forma asíncrona y respetuosa con privacidad | La instrumentación puede alterar rendimiento y requiere consentimiento/muestra |
| Umbrales CWV | [How Core Web Vitals thresholds were defined](https://web.dev/articles/defining-core-web-vitals-thresholds) | Usar LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1 como criterios internos de p75, siempre separados de ranking | Son criterios de experiencia, no garantía de posicionamiento ni sustituto de campo |
| Toques accidentales | [WCAG 2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | Probar botones, menú y overlays con activación cancelable, reversión o undo en móvil | Guía explicativa; no es certificación WCAG completa |
| Arrastre | [WCAG 2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) | Si se añade un carrusel, mapa o widget de arrastre, ofrecer alternativa de un solo puntero | Solo aplica a interacciones que EcoCuriosa implemente |
| Autoría | [Trustworthiness of an ORCID record](https://info.orcid.org/interpreting-the-trustworthiness-of-an-orcid-record/) | Medir autoría autenticada y procedencia de obras, no solo presencia de un ORCID; enlazarlo únicamente con autorización real | ORCID desambigua identidad; no demuestra expertise ni revisión humana |
| Correcciones bibliográficas | [Errata, retractions and linked citations in PubMed](https://www.nlm.nih.gov/bsd/policy/errata.html) | Comprobar estado de cada PMID/DOI y registrar errata, retractación o expresión de preocupación en el ledger de fuentes | PubMed no respalda ni evalúa la calidad de cada artículo |
| Estado de la investigación | [Crossmark](https://www.crossref.org/pdfs/about-crossmark.pdf) | Registrar si una fuente DOI tiene corrección, retractación, actualización, licencia u otra señal de contexto editorial antes de usarla como respaldo | Crossmark depende de que el editor de la fuente participe y mantenga sus metadatos; no es una certificación de calidad |
| Metadatos de fuentes | [How to manage your metadata with Crossref](https://www.crossref.org/pdfs/how-to-manage-your-metadata-with-crossref-sep2-2020.pdf) | Comparar título, autores, fecha, DOI, ORCID, licencia y referencias entre la ficha EcoCuriosa y el registro Crossref | Una coincidencia de metadatos no prueba que la conclusión científica sea correcta |
| Correcciones PubMed | [XML Help for PubMed Data Providers](https://www.ncbi.nlm.nih.gov/books/NBK3828/pdf/Bookshelf_NBK3828.pdf) | Resolver relaciones `erratum`, `retraction`, `update` y `ExpressionOfConcernFor` cuando una fuente use PMID o DOI | Es documentación técnica de proveedores; no sustituye leer el artículo ni sus avisos editoriales |

#### Artefactos de puntuación derivados

1. **Matriz de renderizado:** `rendered_content_parity = rutas cuyo DOM
   contiene título, cuerpo, enlaces y datos estructurados esenciales / rutas
   auditadas`; objetivo inicial 100 % en la muestra de diez rutas.
2. **Matriz de CMP:** `consent_signal_success = pruebas con señal válida,
   revocación y bloqueo previo de tags / pruebas ejecutadas`; conservar logs
   antes/después sin guardar datos personales en el repositorio.
3. **Matriz de campo:** guardar p75, tamaño de muestra, periodo, ruta,
   dispositivo y commit para LCP/INP/CLS; Lighthouse permanece como diagnóstico
   de laboratorio.
4. **Matriz táctil:** porcentaje de controles cancelables y porcentaje de
   widgets con alternativa sin arrastre, probado en Safari iOS, Chrome Android
   y teclado.
5. **Matriz bibliográfica:** porcentaje de fuentes con PMID/DOI resuelto,
   coincidencia de título/autoría/fecha y estado de corrección comprobado.

#### Tres briefs adicionales para Luna Max

1. **De Astro al DOM que ve Google:** comparar HTML estático, DOM renderizado,
   consola y datos estructurados en portada, categoría, artículo, metodología y
   legal; conservar capturas de la fecha y no afirmar indexación por una prueba.
2. **Consentimiento verificable antes del primer anuncio:** preparar pruebas
   regionales con consentimiento, rechazo, gestión y revocación; no cargar tags
   reales hasta que AdSense/CMP estén autorizados y el titular apruebe la prueba.
3. **¿La fuente fue corregida o retirada?:** consultar PMID/DOI, registrar el
   estado bibliográfico y producir una nota de actualización sin reescribir la
   conclusión si la evidencia no cambió.

La automatización puede preparar estas matrices, pero no puede inventar un
TC-string, autor, ORCID, estado bibliográfico, métrica de campo ni aprobación de
AdSense. `humanApproval: pending` y `publish: false` se mantienen hasta la
revisión y decisión de una persona.

### Fuentes nuevas de Luna Max para autoría, versiones y aporte original — 20 de septiembre de 2026

La ronda siguiente comparó el catálogo vigente antes de esta ampliación y no
repitió las URLs anteriores. Se incorporan como patrones de control editorial;
no convierten a EcoCuriosa en una revista indexada ni autorizan a inventar
autores, roles, ORCID, guías de reporte o DOI.

| Área | Fuente | Aplicación concreta en EcoCuriosa | Límite |
| --- | --- | --- | --- |
| IA y aporte original | [A new resource for optimizing for generative AI in Google Search](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing) | Añadir al brief `uniqueContribution`, `firstHandEvidence` y `notCommodity`, con una prueba de valor que no sea una reescritura | Es una actualización oficial fechada, no un factor de ranking independiente ni garantía de AI Overviews |
| Autoría autenticada | [ORCID Integration Best Practices](https://info.orcid.org/documentation/integration-best-practices/) | Usar ORCID solo mediante autenticación y conservar consentimiento, fecha de verificación y enlace público si existe una persona real | ORCID identifica y conecta obras; no demuestra experiencia, revisión por pares ni independencia |
| Roles editoriales | [Contributor Roles — CRediT](https://credit.niso.org/contributor-roles/) | Registrar roles de investigación, redacción, visualización y revisión solo cuando cada persona pueda confirmarlos | Taxonomía voluntaria; no decide quién es autor ni prueba una revisión científica externa |
| Reporte transparente | [EQUATOR Reporting Guidelines](https://www.equator-network.org/reporting-guidelines/) | En artículos que resuman investigación aplicable, guardar `reportingGuideline` o `not-applicable` y los ítems comprobados | Se orienta principalmente a investigación biomédica; completar una checklist no demuestra veracidad |
| Datos FAIR | [The FAIR Guiding Principles](https://www.gofair.foundation/fair-principles) | Para datasets, registrar identificador persistente, `retrieved_at`, licencia, formato, procedencia y relaciones | FAIR describe encontrabilidad y reutilización, no autoridad ni exactitud |
| Versiones | [DataCite Related Identifiers](https://support.datacite.org/docs/connecting-versions-with-related-identifiers) | En correcciones y actualizaciones, enlazar `IsNewVersionOf`, `Obsoletes` u otra relación explícita, sin crear DOI propios | Describe metadatos DOI; no obliga a acuñar DOI ni crea señal de Google |
| Política editorial | [Journal Selection for MEDLINE](https://www.nlm.nih.gov/medline/medline_journal_selection.html) | Tomar como inspiración un registro público de políticas, conflictos, financiación, revisión y reproducibilidad | Son criterios de selección de MEDLINE, no una aprobación ni un baremo para EcoCuriosa |
| Integridad bibliográfica | [PubMed User Guide](https://pubmed.ncbi.nlm.nih.gov/help/) | Crear un `reference integrity log` con PMID/DOI, fecha, estado de corrección/retractación/COI y acción tomada | PubMed solo muestra lo que recibe del editor/PMC; ausencia de una marca no demuestra ausencia de conflicto |

#### Campos adicionales para los briefs de Luna Max

- `uniqueContribution`: qué explicación, comparación, diagrama o dato propio añade el artículo.
- `firstHandEvidence`: evidencia de primera mano o `not-applicable` cuando sea divulgación basada en fuentes.
- `notCommodity`: por qué no es una página intercambiable o una variación de palabras clave.
- `authorRoles`: roles CRediT/ORCID únicamente con identidad y consentimiento verificables.
- `reportingGuideline`: ID de guía EQUATOR o `not-applicable`, nunca una lista inventada.
- `referenceIntegrityLog`: estado PMID/DOI, fecha de consulta, correcciones y decisión del editor.

Estos campos deben bloquear el borrador si están vacíos en una pieza de alto
riesgo, pero no deben marcar una revisión ni publicar por sí solos.

### Fuentes primarias temáticas adicionales — 20 de septiembre de 2026

Se añadieron tres registros no duplicados para reforzar artículos que todavía
requieren revisión humana. Son pistas de investigación y no citas automáticas:

| Clúster | Fuente | Uso editorial posible | Límite que debe conservarse |
| --- | --- | --- | --- |
| Rayas de cebras | [Zebras of all stripes repel biting flies at close range](https://pmc.ncbi.nlm.nih.gov/articles/PMC9633588/) | Comparar pelajes de cebra e impala en experimentos de campo y explicar que el efecto observado fue de repulsión a corta distancia | El experimento no resuelve toda la evolución del patrón ni prueba termorregulación; conservar especies, pelajes y distancia del ensayo |
| Narval | [Sensory ability in the narwhal tooth organ system](https://pubmed.ncbi.nlm.nih.gov/24639076/) | Describir la evidencia anatómica de sensibilidad del colmillo mediante túbulos dentinarios y conexión nerviosa | Evidencia anatómica no equivale a demostrar una función ecológica universal ni una “antena” consciente |
| Axolote | [A tissue-mapped axolotl de novo transcriptome enables identification of limb regeneration factors](https://pmc.ncbi.nlm.nih.gov/articles/PMC5419050/) | Presentar el transcriptoma y genes enriquecidos en blastema como recurso para estudiar regeneración | Un recurso molecular no explica por sí solo todo el mecanismo ni autoriza promesas de regeneración humana |

La primera ampliación temática intermedia dejó el catálogo en **595 entradas**;
la tanda de Luna que sigue lo lleva a 605. Antes de usar una
de estas fuentes, abrir el registro, comprobar autores, fecha, muestra, licencia
o estado bibliográfico y registrar la afirmación exacta que respalda.

### Búsqueda temática de Luna Max — diez candidatas primarias adicionales

La búsqueda enfocada comparó las URLs contra el catálogo vigente y devolvió diez
fuentes no duplicadas. Se agregan como inspiración para briefs, no como
validación editorial ni permiso de publicación:

| Clúster | Fuente | Brief o afirmación posible | Acceso/licencia | Límite de evidencia |
| --- | --- | --- | --- | --- |
| Axolote | [Nature Communications — retinoic acid breakdown](https://www.nature.com/articles/s41467-025-59497-5) | Papel experimental de CYP26B1 en identidad proximodistal durante regeneración | Open Access; revisar licencia de figuras | Modelo de axolote; no regeneración humana |
| Leopardo de las nieves | [PLOS ONE — spatial variation in population density](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250900) | Densidad espacial, hábitat y presión humana en Spiti | CC BY; datos Dryad enlazados | Paisaje y periodo concretos; no extrapolar a toda la especie |
| Pangolín | [IUCN — reporting gaps](https://iucn.org/press-release/202508/lack-data-and-reporting-gaps-hamper-global-efforts-protect-pangolins) | Vacíos de datos poblacionales y reporte de las ocho especies | Página pública institucional; enlazar sin copiar materiales | Resumen oficial, no censo ni evaluación taxonómica específica |
| Manta de arrecife | [PLOS ONE — movement and residency](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0344615) | Residencia y plasticidad conductual de diez mantas con seguimiento satelital | CC BY; datos en artículo/suplemento | Samarai Islands y dos periodos monzónicos |
| Narval | [Frontiers — hunting by the stroke](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2020.596469/full) | Inmersiones profundas y señales acústicas de forrajeo en 13 individuos | CC BY | Región y muestra etiquetada; buzz no equivale a captura observada |
| *Noctiluca* | [Frontiers — sexual reproduction in dinoflagellates](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2021.704398/full) | Relación experimental entre disponibilidad de presas y reproducción sexual | CC BY | Cultivo de laboratorio; no explicar todas las floraciones naturales |
| Geodinamo | [AGU — scaling of strong-field spherical dynamos](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2025GL118078) | Simulaciones y balances de fuerzas en dínamos esféricos | Open Access; confirmar licencia del artículo | Parámetros idealizados, no medición directa del núcleo |
| Geosmina | [Water Research — cyanotoxins and taste/odor compounds](https://doi.org/10.1016/j.watres.2024.121357) | Factores ambientales de geosmina en algas bentónicas y ríos alterados | Acceso abierto según metadatos; comprobar PDF | Ríos y algas concretos, no explicación total del petricor |
| Gecko | [Scientific Reports — surface chemistry of toe pads](https://pmc.ncbi.nlm.nih.gov/articles/PMC4200409/) | Efecto de química superficial y humectación en adhesión | PMC; revisar CC BY-NC-ND antes de reutilizar | Mudas y superficies de laboratorio; no todos los geckos |
| Coral | [Scientific Reports — coral restoration and reef accretion](https://pmc.ncbi.nlm.nih.gov/articles/PMC12322247/) | Restauración de *Acropora cervicornis* y acreción en Florida | CC BY; datos USGS enlazados | Transectos locales; no éxito global de restauración |

Con esta tanda, el catálogo verificable queda en **605 entradas**. Antes de
convertir cualquiera en fuente de publicación hay que abrir el texto completo,
registrar DOI/PMID o identificador, fecha de consulta, licencia, muestra,
ubicación y una frase explícita de lo que no debe afirmarse.

### Búsqueda amplia de Luna Max — lote de inspiración científica — 20 de septiembre de 2026

Luna comparó las URLs contra el catálogo vigente y devolvió veintidós fuentes
verificadas para lectura/abstract y siete candidatas que requieren apertura
manual. Se incorporan como insumos para briefs; ninguna marca una revisión
humana ni autoriza copiar texto, figuras o imágenes.

| ID | Tema y fuente | Qué permite investigar | Límite obligatorio |
| --- | --- | --- | --- |
| `ec-smithsonian-giant-squid-overview` | [Smithsonian: giant squid](https://ocean.si.edu/ocean-life/invertebrates/giant-squid) | Anatomía, ojos, brazos, tentáculos y evidencia por varamientos | Síntesis divulgativa; máximos no equivalen a un animal vivo observado |
| `ec-pubmed-giant-squid-eyes-22425154` | [PubMed: ojos del calamar](https://pubmed.ncbi.nlm.nih.gov/22425154/) | Modelo óptico de detección de cachalotes a profundidad | Hipótesis modelada, no conducta evasiva observada |
| `ec-pubmed-giant-squid-optic-lobe-28791156` | [PubMed: lóbulo óptico](https://pubmed.ncbi.nlm.nih.gov/28791156/) | MRI y relación ojo-cerebro en un macho | Un ejemplar; no generalizar inteligencia |
| `ec-pubmed-axolotl-mandible-39206627` | [PubMed: mandíbula de axolote](https://pubmed.ncbi.nlm.nih.gov/39206627/) | Regeneración mandibular experimental y fases moleculares | Modelo animal; no terapia humana |
| `ec-nasa-great-blue-hole-147158` | [NASA: Great Blue Hole](https://science.nasa.gov/earth/earth-observatory/lighthouse-reef-and-the-great-blue-hole-147158/) | Geología, dimensiones y formación sumergida | Observación orbital y síntesis; no datación directa presentada |
| `ec-usgs-yellowstone-hydrothermal-2018` | [USGS/YVO: sistema hidrotermal](https://www.usgs.gov/observatories/yvo/news/yellowstones-active-hydrothermal-system-whats-hot-water) | Recarga, reservorio, ebullición y conductos de géiseres | Yellowstone; no mecanismo universal idéntico |
| `ec-nasa-exoplanet-characterization` | [NASA: caracterizar exoplanetas](https://science.nasa.gov/exoplanets/how-we-find-and-characterize/) | Velocidad radial, tránsitos, microlente y espectroscopía | Detectar moléculas no demuestra vida |
| `ec-noaa-hydrothermal-vents-factsheet` | [NOAA: ventilas hidrotermales](https://oceanexplorer.noaa.gov/fact-sheet/hydrothermal-vents-fact-sheet/) | Presión, fluidos calientes, chimeneas y quimiosíntesis | Rangos educativos; no toda ventila comparte valores |
| `ec-noaa-seeps-vs-vents` | [NOAA: filtraciones y ventilas](https://oceanexplorer.noaa.gov/ocean-fact/seeps-vents/) | Contrastar filtraciones frías y ventilas volcánicas | Resumen institucional; no estudio de una comunidad específica |
| `ec-wmo-global-climate-2025` | [WMO: clima global 2025](https://public.wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025) | Indicadores globales, incertidumbre y contexto anual | No atribuye por sí solo un evento local |
| `ec-pubmed-cat-purring-37794583` | [PubMed: ronroneo](https://pubmed.ncbi.nlm.nih.gov/37794583/) | Oscilaciones de ocho laringes de gatos extirpadas | No prueba que todo gato vivo ronronee igual |
| `ec-pubmed-gecko-electrostatic-25008078` | [PubMed: adhesión electrostática del gecko](https://pubmed.ncbi.nlm.nih.gov/25008078/) | Contrastar electrificación por contacto con Van der Waals/capilaridad | Materiales y protocolo concretos |
| `ec-pubmed-yawn-bonobo-25165630` | [PubMed: bostezo y vínculo social](https://pubmed.ncbi.nlm.nih.gov/25165630/) | Comparar humanos y bonobos sin convertir una medida en empatía | Diseño naturalista y conductual |
| `ec-pubmed-interspecific-yawn-35892558` | [PubMed: bostezo interespecífico](https://pubmed.ncbi.nlm.nih.gov/35892558/) | Estímulos de peces, anfibios, reptiles, aves y mamíferos | Muestra online y autoinforme |
| `ec-pubmed-maternal-flc-32958896` | [PubMed: FLC materno](https://pubmed.ncbi.nlm.nih.gov/32958896/) | Transmisión epigenética de vernalización en *Arabidopsis* | Una especie y un locus |
| `ec-pubmed-heat-devernalization-25648822` | [PubMed: calor y FLC](https://pubmed.ncbi.nlm.nih.gov/25648822/) | Cómo temperatura y fase estabilizadora alteran H3K27me3 | Protocolo y genotipo específicos |
| `ec-nasa-crepuscular-rays-150090` | [NASA: rayos crepusculares](https://science.nasa.gov/earth/earth-observatory/crepuscular-rays-and-light-scattering-150090/) | Dispersión de Rayleigh, aerosoles y perspectiva | Revisar la discrepancia de fechas de la página |
| `ec-noaa-deep-ocean` | [NOAA: océano profundo](https://oceanexplorer.noaa.gov/ocean-fact/deep-ocean/) | Luz, profundidad y temperatura aproximada | Umbrales dependientes de claridad y región |
| `ec-noaa-escanaba-hydrothermal-2022` | [NOAA: Escanaba Trough](https://oceanexplorer.noaa.gov/expedition-feature/22escanaba-features-hydrothermal-systems/) | Circulación y precipitación mineral en un sitio real | No extrapolar a todas las ventilas |
| `ec-usgs-hydrothermal-features-diagram` | [USGS: diagrama hidrotermal](https://www.usgs.gov/media/images/hydrothermal-features) | Inspirar un diagrama propio de reservorio y conducto | Aunque declara dominio público, no reutilizar automáticamente el activo |
| `ec-pubmed-flc-temperature-network-30503646` | [PubMed: red térmica FLC](https://pubmed.ncbi.nlm.nih.gov/30503646/) | Integración temporal de temperatura y datos de campo | Modelo, especies y sitios concretos |
| `ec-nasa-moon-water-ices` | [NASA: agua e hielo lunar](https://science.nasa.gov/moon/moon-water-and-ices/) | Separar hielo en sombra permanente de moléculas superficiales | No implica agua líquida ni origen resuelto |

#### Candidatas que exigen apertura manual

| ID | Fuente | Uso posible | Motivo para mantener `pending` |
| --- | --- | --- | --- |
| `ec-usgs-geysers-gip` | [USGS: géiseres](https://pubs.usgs.gov/gip/volc/geysers.html) | Infiltración, calentamiento y erupción | Acceso restringido y página antigua |
| `ec-gbif-giant-pangolin-taxonomy` | [GBIF: pangolín gigante](https://www.gbif.org/taxon/DTCTY) | Nombre aceptado y sinónimo | Registro agregado; no dieta ni conducta |
| `ec-gbif-giant-manta-taxonomy` | [GBIF: manta gigante](https://www.gbif.org/taxon/73N5T) | *Mobula birostris* y sinónimos | No sustituye datos poblacionales o legales |
| `ec-gbif-noctiluca-taxonomy` | [GBIF: *Noctiluca*](https://www.gbif.org/species/8063862) | Clasificación y sinónimos | No abundancia, toxicidad ni floración |
| `ec-gbif-giant-squid-taxonomy` | [GBIF: *Architeuthis*](https://www.gbif.org/taxon/G9SK) | Nombres taxonómicos | No tamaño ni comportamiento |
| `ec-iucn-giant-pangolin-assessment-2019` | [IUCN: evaluación del pangolín](https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T12762A123584478.en) | Estado de conservación y versión de evaluación | DOI no accesible durante la ronda; abrir manualmente |
| `ec-pubmed-flc-cis-memory-25955967` | [PubMed: memoria FLC en cis](https://pubmed.ncbi.nlm.nih.gov/25955967/) | Contrastar memoria epigenética en cis | Registro vacío en la ronda; no citar aún |

El catálogo actualizado pasa de 634 a **661 entradas** después de este lote.
El auditor debe confirmar IDs, URLs HTTPS y ausencia de duplicados antes de
utilizar una fuente en un artículo. Para cada brief, Luna debe devolver una
afirmación concreta, su alcance, la limitación y el plan de imagen; el editor
debe abrir la fuente y conservar `humanApproval: pending` hasta aprobarla.

### Búsqueda dirigida de Luna Max — cierre de brechas P0/P1 — 20 de septiembre de 2026

Una segunda búsqueda amplia priorizó artículos que ya existen pero todavía
necesitan separar mejor conducta, muestra, escala temporal y causalidad. Se
incorporaron **27 candidatas no duplicadas** al catálogo (`SOURCE_CATALOG.yml`),
como insumos de briefs y no como citas verificadas. Las cinco líneas de mayor
impacto son:

| Prioridad | Línea editorial | Fuentes candidatas | Brief original posible | Límite que debe quedar visible |
| --- | --- | --- | --- | --- |
| P0 | Manta gigante | [Marine Biology, ocupación acústica](https://link.springer.com/article/10.1007/s00227-023-04278-1), [Frontiers, estaciones de limpieza](https://www.frontiersin.org/journals/fish-science/articles/10.3389/frish.2024.1432244/full), [genómica poblacional en PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11789554/) | Qué pueden demostrar los transmisores sobre residencia, conectividad y uso estacional | Regiones y muestras concretas; genómica no demuestra autoconciencia |
| P0 | Pangolín gigante | [cámaras en Dja](https://journals.sagepub.com/doi/10.1177/1940082917749224), [redescubrimiento en Senegal](https://onlinelibrary.wiley.com/doi/abs/10.1111/aje.13279) | Redescubrir no es contar: qué puede y qué no puede inferir una cámara-trampa | Detecciones localizadas; no densidad ni tendencia mundial |
| P0 | Coral y blanqueamiento | [reconstrucción térmica de Nature](https://doi.org/10.1038/s41586-024-07672-x), [462 colonias en One Tree Reef](https://aslopubs.onlinelibrary.wiley.com/doi/10.1002/lol2.10456), [ortomosaicos de JCU](https://researchonline.jcu.edu.au/88636/) | Blanqueamiento, mortalidad y recuperación como estados distintos medidos a escalas distintas | Gran Barrera, One Tree y Lizard Island no representan todos los arrecifes |
| P1 | Axolote y regeneración | [VEGF](https://pubmed.ncbi.nlm.nih.gov/40480306/), [senescencia/Wnt](https://pubmed.ncbi.nlm.nih.gov/37879337/), [mTOR](https://pubmed.ncbi.nlm.nih.gov/37495694/) | Tres mecanismos experimentales, no una cura ni una promesa humana | Modelo de axolote y tejidos concretos; no extrapolar a medicina |
| P1 | Tardígrados | [tolerancia térmica](https://pubmed.ncbi.nlm.nih.gov/39229830/), [hipoxia](https://pubmed.ncbi.nlm.nih.gov/37731547/), [anhidrobiosis](https://pubmed.ncbi.nlm.nih.gov/36630322/) | Matriz especie × estado × estrés para sustituir “sobrevive a todo” | Laboratorio, pocas especies y duraciones concretas |

También quedan catalogadas fuentes para ballena azul, narval, búhos, Catatumbo y
geodinamo. La tabla completa conserva el alcance, la limitación y el tipo de
evidencia en el catálogo. Los registros de acceso parcial, abstracts o datasets
requieren apertura manual antes de citar; el lote no modifica artículos ni
marca `reviewedDate`/`reviewedBy`.

### Búsqueda dirigida de Luna Max — memoria, SSW, linternas, búhos y tardígrados — 20 de septiembre de 2026

Esta ronda añade **19 candidatas no duplicadas** a `SOURCE_CATALOG.yml` (680
entradas). Se conservan como material para briefs y nuevas editoriales; no se
han convertido automáticamente en citas publicadas.

| Clúster | Fuentes candidatas | Brief original sugerido | Límite que debe quedar visible |
| --- | --- | --- | --- |
| Memoria del elefante | [memoria de cuidadores](https://pubmed.ncbi.nlm.nih.gov/39373273/), [memoria olfativa](https://pubmed.ncbi.nlm.nih.gov/36830466/), [olor e identidad grupal](https://www.nature.com/articles/s41598-022-20920-2), [revisión crítica](https://pubmed.ncbi.nlm.nih.gov/39438402/) | “Memoria observable frente al mito de que el elefante nunca olvida” | Experimentos pequeños o cautivos; interés y respuesta no demuestran memoria episódica. |
| Calentamiento estratosférico | [Aeolus/MLS/ERA5](https://wcd.copernicus.org/articles/2/1283/2021/), [42 inviernos de ERA5](https://acp.copernicus.org/articles/23/1259/2023/acp-23-1259-2023.html), [impacto superficial limitado](https://www.nature.com/articles/s41467-022-28836-1), [SSW de 2023](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL109682) | “Un SSW se mide arriba; el tiempo de superficie no es automático” | Un episodio o modelo no equivale a un pronóstico local; confirmar licencia CC BY en gráficos. |
| Peces linterna | [variación de fotóforos](https://pubmed.ncbi.nlm.nih.gov/39536017/), [reflector de guanina](https://pubmed.ncbi.nlm.nih.gov/31706576/), [luciferasas candidatas](https://pubmed.ncbi.nlm.nih.gov/36197650/), [BioProject RNA-seq](https://www.ncbi.nlm.nih.gov/bioproject/887952) | “La luz del pez linterna no es un código universal” | Anatomía o candidatos bioquímicos no prueban función ecológica para todos los mictófidos. |
| Vuelo de búhos | [terciopelo dorsal](https://pubmed.ncbi.nlm.nih.gov/32525524/), [flujo de *Ninox boobook*](https://pubmed.ncbi.nlm.nih.gov/33793685/), [desgaste de serraciones](https://pubmed.ncbi.nlm.nih.gov/34029885/) | “Vuelo silencioso: fricción, turbulencia y desgaste de plumas” | No transferir *Tyto* o *Ninox* a *Bubo bubo*; no afirmar silencio literal. |
| Tardígrados | [sHSP](https://www.nature.com/articles/s42003-023-04512-y), [estados por imagen](https://www.nature.com/articles/s41598-024-61374-y), [multi-ómica de radiación](https://pubmed.ncbi.nlm.nih.gov/39446960/), [recuperación](https://pubmed.ncbi.nlm.nih.gov/38434295/) | “La resistencia depende de especie, estado y duración del estrés” | Modelos y cultivos concretos; no existe una coraza universal ni aplicación clínica lista. |

La licencia de una página abierta no autoriza reutilizar sus figuras. Luna solo
puede generar un brief con `publish: false` y `humanApproval: pending`; la
persona revisora debe abrir el texto completo, confirmar DOI/PMID, método,
alcance y licencia del activo antes de citar o producir una imagen.

### Búsqueda dirigida de Luna Max — segunda tanda de artículos — 20 de septiembre de 2026

Esta ronda añade **24 candidatas no duplicadas** al catálogo, que pasa a 709
entradas. Se eligieron para corregir afirmaciones absolutas y completar los
nueve artículos de la tanda de cifras y alcance. Son insumos de investigación,
no aprobación editorial ni permiso para reutilizar figuras.

| Clúster | Fuentes candidatas incorporadas | Brief que puede inspirar | Límite obligatorio |
| --- | --- | --- | --- |
| Agujeros azules | [metagenómica de Sansha Yongle](https://doi.org/10.1038/s41598-020-62411-2), [hidroquímica y quimioclina](https://doi.org/10.1016/j.scitotenv.2018.08.333), [MAGs de Maldivas](https://doi.org/10.1111/1758-2229.13315) | “No todos los agujeros azules tienen la misma química” | Sitio, profundidad, sensor y fecha; zonas anóxicas solo cuando la campaña las midió. |
| Geodinamo | [once años de Swarm](https://doi.org/10.1016/j.pepi.2025.107447), [giros, chorros y ondas](https://www.nature.com/articles/s43017-023-00425-w), [flujos 3D](https://www.sciencedirect.com/science/article/pii/S0031920125001529) | “Los satélites miden el campo; el flujo profundo se infiere” | Inversión/modelo no equivale a observar el hierro líquido ni a predecir un colapso. |
| Geco | [fosfolípidos en huellas](https://doi.org/10.1098/rsif.2011.0370), [interacciones ácido-base](https://doi.org/10.1126/sciadv.abd9410), [anatomía del tobillo](https://doi.org/10.1111/joa.13511) | “Van der Waals es parte de un sistema adhesivo más complejo” | Especie, superficie y protocolo; no universalizar a toda almohadilla o aplicación médica. |
| Narval | [ecología del colmillo](https://doi.org/10.1016/j.cub.2021.02.018), [edad por capas](https://doi.org/10.1111/mms.12623), [selección sexual](https://doi.org/10.1098/rsbl.2019.0950) | “Un colmillo, varias hipótesis y proxies medibles” | Diez colmillos o 245 machos no representan todos los narvales ni resuelven una función única. |
| Catatumbo | [observaciones GLM](https://doi.org/10.1029/2018GL081052), [contexto histórico regional](https://doi.org/10.18257/raccefyn.980) | “Hotspot persistente no significa tormenta eterna” | Sensor, período, definición de flash y ubicación; evitar noches o cifras fijas universales. |
| Cebras | [percepción térmica de tábanos](https://doi.org/10.1038/s41598-022-14619-7) y la [revisión de las tres especies](https://doi.org/10.1111/brv.70063) | “La disuasión de moscas tiene apoyo, pero no explica todo el patrón” | Objetivos artificiales y revisión no prueban termorregulación global ni una causa única. |
| Ronroneo | [vocalizaciones en 74 gatos](https://doi.org/10.3390/ani9110878), [revisión de comunicación vocal](https://doi.org/10.4142/jvs.2020.21.e18) | “El ronroneo depende del contexto” | No convertir frecuencia en felicidad universal, diagnóstico o terapia ósea. |
| *Noctiluca* | [bloom costero de Chennai](https://doi.org/10.1016/j.oceano.2022.06.005), [cinética óptica](https://doi.org/10.1364/OE.400257), [oxígeno y coral](https://doi.org/10.1038/s41598-020-79152-x) | “Brillo, abundancia y riesgo ecológico son variables distintas” | Evento y calibración regional; no identificar especie solo por una fotografía o color. |
| Calamar gigante | [BioProject del genoma](https://www.ncbi.nlm.nih.gov/bioproject/534469), [genoma draft](https://doi.org/10.1093/gigascience/giz152), [evolución genómica de cefalópodos](https://doi.org/10.1038/s41467-022-29748-w), [cerebro y nicho](https://doi.org/10.3389/fnana.2020.565109) | “Lo genómico no sustituye observar conducta en el océano profundo” | Ensamblajes y comparaciones no demuestran bioluminiscencia, tamaño máximo ni conducta. |

Cada candidato conserva alcance, limitación y tipo de evidencia en
[`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml). El siguiente paso es abrir las
fuentes durante la revisión humana y convertir solo las afirmaciones aprobadas
en citas de artículo. Los briefs de Luna deben conservar `publish: false` y
`humanApproval: pending`.

### Oportunidades observadas en Search Console — 20 de septiembre de 2026

El snapshot autenticado de Search Console registra **635 impresiones, 3 clics,
CTR de 0,5 % y posición media 13,4** en los últimos tres meses visibles. Las
consultas con más impresiones no se convierten automáticamente en audiencia ni
en una orden de publicar; sirven para formular briefs que respondan mejor a la
intención real:

| Señal | Artículo o línea a priorizar | Acción editorial segura | Métrica a revisar |
| --- | --- | --- | --- |
| `architeuthis dux` — 71 impresiones | [Calamar gigante](../../src/content/articles/calamar-gigante-architeuthis-dux-bioluminiscencia.md) | Reforzar título, resumen inicial y un recuadro que separe observación, genoma e inferencia; conservar límites de tamaño y bioluminiscencia | Impresiones, CTR y posición de la URL en 28 días |
| `geodinamo` — 44 impresiones y 1 clic | [Geodinamo terrestre](../../src/content/articles/como-funciona-el-campo-magnetico-de-la-tierra-geodinamo.md) | Añadir una respuesta breve sobre qué mide un satélite y qué se infiere mediante modelos, enlazando la fuente institucional ya catalogada | CTR de la consulta y consultas relacionadas |
| `pulpo mimo` — 15 impresiones | [Pulpo mimo](../../src/content/articles/pulpo-mimo-thaumoctopus-mimetismo-15-especies.md) | Hacer visible en el primer bloque que el repertorio observado no prueba intención humana; mantener la muestra del estudio original | Impresiones, CTR y consultas de cola larga |
| `geosmina y petricor` — 4 impresiones | [Petricor y geosmina](../../src/content/articles/por-que-el-olor-a-tierra-mojada-petricor-geosmina.md) | Separar con claridad geosmina, aerosoles de lluvia y evidencia de laboratorio; no ampliar una fuente de una especie a la experiencia humana completa | Impresiones y posición por intención informativa |

Estas acciones son mejoras de claridad y alineación, no manipulación de
consultas. Cualquier redacción nueva debe pasar la revisión humana y el control
de fuentes antes de publicarse. La evidencia numérica y sus límites están en
[`SEARCH_CONSOLE_SNAPSHOT_2026-09-20.md`](./SEARCH_CONSOLE_SNAPSHOT_2026-09-20.md).

### Búsqueda web primaria — lote de brechas E‑E‑A‑T — 20 de septiembre de 2026

Se incorporaron nueve candidatas nuevas después de cruzar las URLs contra el
catálogo vigente. Son materiales para briefs y contraste editorial, no citas
aprobadas: antes de usarlas hay que abrir el texto completo, comprobar método,
muestra, fecha, licencia y la frase concreta que respaldan.

| Clúster | Fuente | Inspiración posible | Límite que debe permanecer visible |
| --- | --- | --- | --- |
| Coral | [Heatwaves and Coral-Recovery Database](https://pmc.ncbi.nlm.nih.gov/articles/PMC11009248/) | Comparar recuperación después de olas de calor en 12.266 sitios y explicar por qué “recuperación” depende de escala, profundidad y serie temporal | Base compilada con 29.205 registros; no es un pronóstico universal ni una observación nueva en cada arrecife |
| Coral | [Divergent bleaching and recovery trajectories](https://pmc.ncbi.nlm.nih.gov/articles/PMC10756270/) | Narrar cómo dos especies de Hawái siguieron trayectorias distintas tras tres olas de calor | Dos especies, un sistema y una serie de nueve años; no representa todos los corales |
| Coral | [Genotypic and physiological responses to subsequent heat stress](https://pmc.ncbi.nlm.nih.gov/articles/PMC10719612/) | Explicar memoria ecológica y resistencia sin confundirla con inmunidad al calor | La respuesta depende del genotipo, especie y protocolo; no elimina mortalidad ni extrapola a todos los arrecifes |
| Manta raya | [Spatial connectivity of reef manta rays in Raja Ampat](https://pmc.ncbi.nlm.nih.gov/articles/PMC11004681/) | Crear un diagrama de nodos, receptores y corredores de movimiento a partir de telemetría acústica | 72 individuos, 34 receptores y una región concreta; no demuestra conectividad mundial ni inteligencia |
| Pangolín | [Camera-trap placement and white-bellied pangolin detection](https://pmc.ncbi.nlm.nih.gov/articles/PMC10172612/) | Mostrar que el diseño de muestreo cambia la probabilidad de detectar una especie semiarborícola | Es *Phataginus tricuspis*, no pangolín gigante; detectabilidad no equivale a abundancia |
| Pangolín | [Temminck’s pangolins and body-temperature regulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC10465008/) | Comparar termorregulación, alimento y ambiente sin convertir una adaptación en regla de todas las especies | Especie y entorno semiárido específicos; no sustituye una fuente de *Smutsia gigantea* |
| Axolote | [Allometry in limb regeneration](https://pubmed.ncbi.nlm.nih.gov/39344771/) | Visualizar cómo escala el blastema y cómo se relacionan Shh y Fgf8 durante la regeneración | Modelo experimental; no demuestra regeneración humana ni una receta clínica |
| Axolote | [Evolutionarily divergent mTOR remodels the translatome](https://pubmed.ncbi.nlm.nih.gov/37495694/) | Explicar traducción rápida y mTORC1 como mecanismo experimental de respuesta a lesión | Tejido, especie y manipulación concretos; no equivale a tratamiento humano |
| Axolote | [Censo de ajolote en Xochimilco — UNAM](https://www.dgcs.unam.mx/boletin/bdboletin/2024_847.html) | Vincular regeneración con conservación de hábitat y métodos de censo actuales | Es un comunicado institucional; las cifras deben contrastarse con el informe técnico y su fecha |

Los nueve registros tienen IDs únicos en [`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml)
y elevan el catálogo a **718 candidatas**. Luna puede usarlos para generar
briefs, pero debe conservar `humanApproval: pending` y `publish: false`; ninguna
fuente nueva marca `reviewedDate` o `reviewedBy`.

### Búsqueda de Luna Max — segunda capa de fuentes para los mismos cinco clústeres — 20 de septiembre de 2026

Luna Max hizo un segundo cruce exacto contra el catálogo y entregó quince
candidatas no duplicadas. Se incorporan para ampliar los futuros briefs, pero
no sustituyen la lectura humana ni autorizan reutilizar figuras o fotografías.

| Clúster | Fuentes candidatas | Ángulo editorial posible | Límite que debe conservarse |
| --- | --- | --- | --- |
| Coral | [Symbiont starvation and symbiosis stability](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2022.979563/full); [heterotrophic nitrogen assimilation](https://doi.org/10.1128/mbio.01601-22); [colorful coral bleaching](https://doi.org/10.1016/j.cub.2020.04.055) | Explicar nutrientes, simbiosis, nitrógeno y fluorescencia como mecanismos distintos | Experimentos de laboratorio y asociaciones concretas; fluorescencia no equivale a recuperación y no generalizar a todos los corales |
| Manta raya | [Conectividad en el mar Rojo](https://onlinelibrary.wiley.com/doi/full/10.1002/aqc.3883); [inmersiones profundas](https://doi.org/10.3389/fmars.2025.1630451); [movimiento y forrajeo en Aotearoa](https://doi.org/10.1098/rsos.250838) | Separar fotoidentificación, telemetría y conducta de forrajeo antes de hablar de inteligencia | Datos oportunistas o regionales; la función de una inmersión puede ser inferida y no demuestra cognición |
| Pangolín gigante | [Modelado de hábitat en Camerún](https://doi.org/10.1016/j.gecco.2023.e02395); [escamas y actividad antimicrobiana](https://pmc.ncbi.nlm.nih.gov/articles/PMC11472485/); [armadura y propiedades mecánicas](https://doi.org/10.1016/j.actbio.2016.05.028) | Conectar madrigueras, hábitat y arquitectura de escamas sin convertirlo en un mito medicinal | Región, especie y ensayo concretos; evidencia in vitro no es eficacia clínica; algunas licencias requieren verificación |
| Tardígrado | [Ecología de la anhidrobiosis](https://doi.org/10.1111/1365-2656.14031); [supervivencia y daño de ADN](https://doi.org/10.1242/jeb.033266); [aparato alimentario comparado](https://doi.org/10.4081/jlimnol.2013.s1.e4) | Sustituir “sobrevive a todo” por una matriz especie × estado × estrés y una anatomía alimentaria comparada | Taxones, humedades, temperaturas y duraciones específicas; proxies ambientales no prueban causalidad universal |
| Axolote | [Atlas multi-especie de desarrollo/regeneración](https://doi.org/10.1038/s41467-023-41944-w); [rastreo de linajes](https://elifesciences.org/articles/25726); [blastema, nervios y BMP2](https://doi.org/10.1371/journal.pone.0123186) | Mostrar que la regeneración combina linajes, señales nerviosas y contexto tisular, no una masa universal de células madre | Transcriptómica, edición mosaico y cultivos ex vivo tienen alcances distintos; no implican regeneración humana |

En esa ronda, el catálogo quedó en **733 candidatas**. Las 15 nuevas conservan `pending` y
solo pueden pasar a un artículo después de comprobar DOI/PMID, texto completo,
método, muestra, licencia, afirmación respaldada y límite. La herramienta de
Luna no puede cerrar `reviewedDate`, `reviewedBy`, `humanApproval` ni
`publish`.

### Búsqueda dirigida de Luna Max — oportunidades con impresiones — 20 de septiembre de 2026

Esta ronda añade quince candidatas nuevas para seis URLs que ya reciben señales
de Search Console. El objetivo es mejorar las piezas existentes antes de abrir
otra URL; son fuentes de inspiración y contraste, no revisiones humanas cerradas.

| Tema | Fuentes candidatas | Editorial que pueden inspirar | Límite obligatorio |
| --- | --- | --- | --- |
| Geosmina/petricor | [Streptomyces en reservorios](https://doi.org/10.1016/j.watres.2018.08.014); [biosíntesis detallada](https://doi.org/10.1002/cbic.202300101) | Recorrido suelo → microorganismo → compuesto volátil → aerosol, separando geosmina de la mezcla del petricor | Dos reservorios y ruta bioquímica; no es una explicación de toda lluvia ni de la percepción humana |
| Tiburón de Groenlandia | [Tasa metabólica](https://doi.org/10.1038/s41598-020-76371-0); [hemoglobinas](https://doi.org/10.1371/journal.pone.0186181); [sistema visual](https://doi.org/10.1038/s41467-025-67429-6) | Recuadro “qué aporta el metabolismo, la sangre y la visión al récord de edad” | Cuatro tiburones, bioquímica y ejemplares/tejidos limitados; genes o tasas bajas no prueban antienvejecimiento |
| Geodinamo | [Pronóstico de variación secular](https://doi.org/10.1186/s40623-020-01193-3); [modelos físicos](https://doi.org/10.1093/gji/ggad229); [67 simulaciones](https://doi.org/10.1016/j.epsl.2022.117752) | Diagrama medición → inversión → simulación → predicción, con incertidumbre visible | El núcleo no se observa directamente; una simulación no predice una inversión inminente |
| Pulpo mimo | [Avistamientos en Mozambique](https://doi.org/10.1017/S175526721200125X); [background matching en otros pulpos](https://doi.org/10.1371/journal.pone.0037579) | Separar rango observado, postura, color y comparación entre cefalópodos | Dos avistamientos y otra especie experimental no prueban intención ni un repertorio universal de 15 modelos |
| Leopardo de las nieves | [Telemetría GPS en Kangchenjunga](https://doi.org/10.1002/inc3.70008); [dieta por metabarcoding](https://doi.org/10.3389/fevo.2021.783546); [evolución de alta montaña](https://doi.org/10.1126/sciadv.adp5243) | Mapa de movimiento y dieta que conecte pendientes, presas y conflicto ganadero | n=4 para GPS, región concreta para dieta y modelos/fósiles para evolución; no generalizar a toda la especie |
| Catatumbo | [Climatología LIS/OTD](https://doi.org/10.1029/2020JD033885); [producto GLM](https://doi.org/10.1029/2019JD031054) | Comparar récord, densidad y frecuencia indicando sensor, unidad, periodo y resolución | Una métrica satelital no es conteo terrestre; evitar “tormenta eterna” y valores fijos sin ventana temporal |

La línea de trabajo recomendada es actualizar primero estas seis páginas, medir
CTR y posición durante 28 días y solo después decidir si hace falta una pieza
nueva. Cada candidato conserva sus limitaciones en [`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml);
los briefs derivados deben seguir con `humanApproval: pending` y
`publish: false`.

### Refuerzo de la oportunidad `architeuthis dux` — 20 de septiembre de 2026

La página del calamar gigante, que concentra la mayor cantidad de impresiones
del snapshot, recibió dos fuentes primarias ya catalogadas: [las plataformas de
cámara sin perturbación de NOAA](https://repository.library.noaa.gov/view/noaa/59467)
y el análisis abierto de [variación de tamaño en gigantes marinos](https://pmc.ncbi.nlm.nih.gov/articles/PMC4304853/).
El ángulo editorial resultante separa encuentros oportunistas, longitud del
manto, longitud total y máximos confirmados. No convierte una filmación o una
tabla alométrica en una conducta universal; el paquete de revisión mantiene
ocho afirmaciones `pending` y `publish: false`.

### Banco ampliado de Luna Max — datasets, conservación y automatización segura — 20 de septiembre de 2026

Luna Max realizó una búsqueda dirigida y separó las fuentes que pueden sostener
afirmaciones publicables (`P0`) de las que sirven como contexto o control
operativo (`P1`). Las URLs se incorporaron también a [`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml)
con alcance y límites explícitos. Siguen siendo candidatas: antes de citarlas,
una persona debe abrir la ficha, comprobar versión, fecha, método, licencia y la
frase exacta que respalda.

| Prioridad | Fuente | Editorial que habilita | Límite obligatorio |
| --- | --- | --- | --- |
| P0 | [GBIF — *Ambystoma mexicanum*](https://www.gbif.org/species/217108868) | Taxonomía, sinónimos y ocurrencias registradas para una ficha de especie | No es censo ni evaluación de amenaza; cada dataset tiene su propia licencia y atribución |
| P0 | [IUCN Red List — *Ambystoma mexicanum*](https://www.iucnredlist.org/species/1095/53947343) | Estatus formal de conservación, distribución histórica y amenazas | La evaluación es de 2019/2020; conservar fecha y no presentarla como abundancia actual de 2026; puede requerir apertura manual |
| P1 | [Revista Digital Universitaria — conservación del ajolote](https://www.revista.unam.mx/2019v20n1/el-mitico-monstruo-del-lago-la-conservacion-del-ajolote-de-xochimilco/) | Neotenia, endemismo y estrategias de conservación en contexto universitario | Divulgación institucional, no evaluación poblacional ni estudio primario de regeneración |
| P0 | [CONANP — PACE *Ambystoma*](https://www.gob.mx/conanp/documentos/programa-de-accion-para-la-conservacion-de-especies-pace-ambystoma-ambystoma-spp) | Acciones públicas de conservación y marco institucional mexicano | Alcance de género; no convertirlo en una cifra de *A. mexicanum* |
| P0 | [NASA Earth Observatory — temperatura global de 2024](https://earthobservatory.nasa.gov/images/153806/2024-was-the-warmest-year-on-reco) | Explicar qué significa un récord global y comparar conjuntos de datos | Análisis global, no medición local; revisar créditos de imágenes |
| P0 | [NASA Earth Science Data](https://science.nasa.gov/earth/data/) | Encontrar el dataset original detrás de una visualización de clima, agua, hielo u océanos | Citar colección, versión y fecha; no usar solo la página de entrada como evidencia numérica |
| P0 | [NOAA — indicadores de acidificación oceánica](https://oceanacidification.noaa.gov/oa-indicators-explained/) | Separar pCO₂, pH y saturación de aragonita en un artículo marino | Indicadores y rutas de observación no describen automáticamente todos los hábitats |
| P0 | [NOAA/NCEI — indicadores superficiales de acidificación](https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/synthesis/surface-oa-indicators.html) | Comparar observación, modelo, escenario y proyección mediante datos documentados | Es superficie y depende de versión/escenario; no mezclar con una observación local |
| P0 | [USGS ShakeMap](https://earthquake.usgs.gov/data/shakemap/) | Crear explicaciones de intensidad sísmica estimada y de lectura de mapas | Es una estimación de movimiento, no una fotografía de daños ni una magnitud por sí sola |
| P1 | [NASA — ciencia del eclipse total de 2024](https://science.nasa.gov/eclipses/future-eclipses/eclipse-2024/eclipse-2024-science/) | Convertir experimentos de eclipses y ciencia ciudadana en una editorial visual | Para eventos futuros hay que consultar efemérides actualizadas y comprobar créditos |
| P0 | [Políticas del programa AdSense](https://support.google.com/adsense/answer/48182?hl=en) | Checklist de tráfico válido, clics, diseño de anuncios y responsabilidad del editor | Es política viva, no aprobación; revisar la cuenta y versión vigente antes de actuar |
| P1 | [Schema.org — `Article`](https://schema.org/Article) | Diseñar entidades de autor, imagen, fechas, sección y licencia | Es vocabulario; para Google prevalece Search Central y el marcado debe representar lo visible |
| P0 | [OpenAI — controles de datos por endpoint](https://platform.openai.com/docs/models/default-usage-policies-by-endpoint) | Decidir qué texto, fuentes y métricas puede recibir Luna Max y con qué controles | Retención y elegibilidad dependen del endpoint y la organización; no enviar secretos ni datos personales |
| P0 | [OpenAI — gestión segura de claves API](https://help.openai.com/en/articles/5008148) | Diseñar claves por proyecto, límites de gasto, rotación y trazabilidad | Complementar con gestor de secretos, permisos mínimos y revisión de logs |

#### Plan de uso con Luna Max

1. **Descubrimiento semanal:** tomar como máximo cinco oportunidades de Search
   Console y cruzarlas con el catálogo; priorizar actualizar páginas con
   impresiones antes de abrir URLs nuevas.
2. **Brief verificable:** Luna entrega `briefId`, pregunta, 2–6 fuentes, tipo
   (`primary`, `institutional` o `documentation`), fecha de acceso, alcance,
   límites, idea visual y consulta observada. La salida queda local con
   `publish: false` y `humanApproval: pending`.
3. **Preflight automático:** comprobar HTTPS, IDs únicos, coincidencia URL ↔
   catálogo, fuente primaria/institucional pertinente, licencia/procedencia
   visual y ausencia de datos bancarios, claves o PII.
4. **Revisión humana:** abrir el texto completo, verificar afirmación → pasaje,
   especie/lugar/muestra/fecha, corregir el borrador y aprobar o descartar.
   Solo esta etapa puede añadir `reviewedDate` y `reviewedBy`.
5. **Publicación y aprendizaje:** después de `astro check`, build, enlaces,
   metadatos, imagen y móvil, publicar como máximo una pieza aprobada por
   semana. Medir 28 días de CTR, clics, impresiones, sesiones y CWV sin
   atribuir causalidad a una sola fuente.

#### Criterios de detención

- Pausar si una fuente devuelve 403, tiene una licencia ambigua, contradice el
  claim o solo ofrece un resumen sin método verificable.
- Pausar si Luna propone un autor, fecha, cifra, experiencia, licencia,
  `reviewedBy` o resultado de Search Console que no esté en una fuente o en una
  cuenta autenticada.
- Pausar si la imagen es de terceros sin creador, licencia y página de licencia;
  preferir SVG/WebP original de EcoCuriosa cuando el argumento no necesita una
  fotografía documental.
- Pausar la monetización si el CMP, el perfil de pagos, `ads.txt` o la cuenta
  de AdSense no coinciden con la configuración real. Las fuentes de Google son
  controles de cumplimiento, no una predicción de aprobación.

El lote añade 14 URLs no duplicadas al catálogo. No modifica artículos
publicados ni marca revisiones humanas; su valor es mejorar la selección de
temas, el control de evidencia y la seguridad de la futura automatización.

### Banco técnico de Luna Max — campo, móvil, accesibilidad y automatización — 20 de septiembre de 2026

La segunda búsqueda dirigida de Luna excluyó documentos ya presentes o
equivalentes en el catálogo y añadió **14 URLs nuevas**. Este lote sirve para
subir las áreas de SEO técnico, experiencia móvil, accesibilidad, medición y
seguridad del pipeline. No convierte una auditoría de laboratorio en datos de
usuarios reales y no autoriza publicación automática.

| Prioridad | Fuente | Decisión que habilita | Límite obligatorio |
| --- | --- | --- | --- |
| P0 | [TTFB de Google/web.dev](https://web.dev/articles/optimize-ttfb) | Medir el tiempo hasta el primer byte como diagnóstico previo a FCP/LCP | 0,8 s es una guía; no es Core Web Vital ni garantía de ranking |
| P0 | [Responsive images](https://web.dev/articles/responsive-images) | Mantener `srcset`, `sizes`, `picture`, `alt` y formatos adaptados al viewport | Hay costes de memoria y decodificación; conservar originales y verificar la imagen entregada |
| P0 | [WCAG 2.2 — teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | Probar menú, enlaces, formularios y controles dinámicos sin ratón | Es guía de comprensión; no basta para declarar conformidad WCAG completa |
| P0 | [WCAG 2.2 — contenido no textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | Exigir `alt` equivalente y ocultar imágenes decorativas | Gráficos complejos y CAPTCHA necesitan revisión específica |
| P0 | [WCAG 2.2 — idioma de la página](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | Mantener `lang="es"` y marcar cambios de idioma | Cubre nivel A, no todos los problemas multilingües |
| P1 | [WCAG 2.2 — encabezados y etiquetas](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | Revisar headings, labels y CTA descriptivos para lectores y citabilidad | No sustituye la prueba de semántica HTML/ARIA |
| P0 | [Informe Core Web Vitals de Search Console](https://support.google.com/webmasters/answer/9205520?hl=en) | Priorizar LCP, INP y CLS por grupos de URLs con datos de campo | Solo hay datos para URLs indexadas con volumen suficiente |
| P0 | [Inspección de URL de Search Console](https://support.google.com/webmasters/answer/12482179?hl=en) | Comprobar rastreo, canonical, noindex, HTTPS y schema antes de solicitar rastreo | «Está en Google» no garantiza ranking ni aparición para una consulta |
| P0 | [Cloudflare Cache Analytics](https://developers.cloudflare.com/cache/performance-review/cache-analytics/) | Separar HIT, MISS, origen y expiración antes de ampliar caché | Disponibilidad y retención dependen del plan; requests no equivalen a audiencia |
| P0 | [Cloudflare Cache Rules](https://developers.cloudflare.com/cache/how-to/cache-rules/) | Definir TTL por host/path/query y probar con Trace | No aplicar `cache everything` a HTML personalizado, cookies o consentimiento |
| P1 | [Introducción a Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) | Ejecutar regresiones reproducibles de rendimiento, accesibilidad y SEO | Es laboratorio; no reemplaza CrUX, RUM ni revisión humana |
| P0 | [OpenAI API overview](https://developers.openai.com/api/reference/overview) | Mantener claves en servidor/secret manager y registrar request IDs | Nunca enviar claves al navegador ni a prompts de Luna |
| P1 | [OpenAI Moderation](https://developers.openai.com/api/docs/guides/moderation) | Enrutar borradores potencialmente dañinos a revisión y bloquear publicación automática | Moderación no verifica exactitud científica ni licencia de imágenes |
| P1 | [OpenAI Evals](https://developers.openai.com/api/docs/guides/evals) | Crear casos de regresión para tono, claims, estructura y citas | Los evals no sustituyen fuentes actuales ni aprobación humana; verificar la vigencia del servicio |

#### Cómo se incorporan al plan de puntuación

1. **Técnico:** ejecutar Lighthouse tres veces por plantilla y registrar
   mediana; usar Search Console Core Web Vitals o CrUX cuando haya volumen de
   campo. TTFB se conserva como diagnóstico, no como sustituto de LCP/INP/CLS.
2. **Móvil y accesibilidad:** repetir 320/375/768/1440 px con teclado, foco,
   `lang`, headings, labels y alt; bloquear anuncios si aparece overflow, foco
   perdido o cambio material de CLS.
3. **Indexación:** inspeccionar una URL de cada categoría, la portada y las
   páginas legales después de cada lote; registrar canonical, rastreo y
   exclusión sin confundir URL indexada con posición.
4. **Cloudflare:** mantener la regla RSS específica y medir HIT/MISS antes de
   crear otra regla; no cachear HTML con consentimiento o anuncios de forma
   indiscriminada.
5. **Luna Max:** añadir moderación y casos de regresión al preflight, pero
   conservar `publish: false`, `humanApproval: pending` y la revisión claim →
   fuente → límite.

### Búsqueda de Luna Max — autoridad, campo, consentimiento y gobernanza — 20 de septiembre de 2026

Esta ronda se centró en las brechas que todavía impiden la puntuación máxima:
autoría verificable, medición de campo, consentimiento publicitario y control de
automatización. Se agregaron **17 URLs nuevas** al catálogo; son referencias de
inspiración y control, no citas automáticas para artículos publicados.

| Área | Fuente oficial | Aplicación concreta | Límite |
| --- | --- | --- | --- |
| Citabilidad | [Speakable de Google](https://developers.google.com/search/docs/appearance/structured-data/speakable?hl=en) | Identificar solo el resumen visible y conciso apto para lectura por voz | Función beta y orientada a noticias; no garantiza rich result |
| Transparencia | [Políticas de Google News](https://support.google.com/news/publisher-center/answer/6204050) | Mantener responsable, fecha, contacto y tipo de pieza cuando sea noticiosa | No es requisito universal para Search |
| Campo | [Medición de Web Vitals](https://web.dev/articles/vitals-measurement-getting-started) | Separar laboratorio, RUM y segmentos por ruta/dispositivo | Una muestra pequeña no representa a toda la audiencia |
| Interacción | [INP](https://web.dev/articles/inp) | Medir menú, búsqueda, formularios y controles durante toda la visita | No sustituye pruebas reales con lectores |
| Accesibilidad | [WCAG en W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) | Mantener WCAG 2.2 como objetivo documentado de percepción, operación, comprensión y robustez | Las auditorías automáticas no declaran conformidad completa |
| AdSense | [Páginas listas para AdSense](https://support.google.com/adsense/answer/7299563) | Comprobar contenido original, navegación y experiencia antes de anuncios | No garantiza aprobación |
| Políticas | [Políticas del editor](https://support.google.com/adsense/answer/10008391) | Separar restricciones de inventario de la preparación técnica | La cuenta y las políticas pueden cambiar |
| CMP | [Requisitos de CMP](https://support.google.com/adsense/answer/13554020) | Usar CMP certificada e integración TCF cuando corresponda | Certificación no equivale a cumplimiento legal total |
| CMP | [Configuración de CMP](https://support.google.com/adsense/answer/7670013) | Documentar proveedores, cookies y personalización | Requiere probar los estados reales en producción |
| TCF | [Integración TCF v2.3](https://support.google.com/adsense/answer/9804260) | No cargar etiquetas antes de la señal requerida | Revisar siempre la versión vigente |
| Autorización | [Ads.txt 1.1](https://iabtechlab.com/wp-content/uploads/2022/04/Ads.txt-1.1.pdf) | Validar DIRECT/RESELLER e identificadores exactos | No equivale a aprobación de AdSense |
| Revisión | [Conectar el sitio a AdSense](https://support.google.com/adsense/answer/7584263) | Registrar el estado privado `Ready` por separado del build | No puede verificarse desde el repositorio |
| IA | [Políticas de uso de OpenAI](https://openai.com/policies/usage-policies/) | Conservar supervisión humana, consentimiento y escalamiento de riesgos | No reemplaza la política editorial propia |
| Moderación | [Moderations API](https://platform.openai.com/docs/api-reference/moderations) | Filtrar entradas/salidas y escalar casos ambiguos | No verifica exactitud científica ni derechos |
| Procedencia | [Especificación C2PA](https://spec.c2pa.org/specifications/specifications/2.1/index.html) | Guardar origen, herramienta y transformaciones de imágenes | Procedencia no prueba veracidad |
| Gobernanza | [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) | Inventariar modelos, riesgos, evaluaciones e incidentes | Marco voluntario, no certificación |
| Ética | [Recomendación UNESCO sobre IA](https://www.unesco.org/en/articles/recommendation-ethics-artificial-intelligence) | Formalizar transparencia, responsabilidad y supervisión | No es obligación legal automática |

El catálogo queda en **794 entradas válidas** (777 anteriores + 17 nuevas).
Ningún artículo publicado fue modificado por esta búsqueda y ninguna ficha se
marcó como revisada. La ronda se incorpora al plan como controles, no como una
justificación para producir más volumen.

### Segunda búsqueda dirigida de Luna Max — evidencia temática y procedencia visual — 20 de septiembre de 2026

La segunda pasada se deduplicó contra el catálogo y añadió **15 URLs nuevas**.
La decisión editorial es actualizar las páginas que ya reciben impresiones; no
crear URLs para variantes ortográficas ni mezclar resultados regionales con
cifras globales. Todas las fuentes permanecen como candidatas hasta que una
persona abra el texto y compruebe el alcance exacto.

| Oportunidad | Fuente primaria o institucional | Aporte posible | Límite que debe quedar visible |
| --- | --- | --- | --- |
| Geosmina/petricor | [Genoma de *Streptomyces rubrogriseus* y clúster geoA](https://doi.org/10.1016/j.compbiolchem.2026.108900) | Añadir una capa molecular a la explicación de la geosmina | Una cepa de sedimento; no explica todo el petricor ni la percepción humana |
| Tiburón de Groenlandia | [Factores potenciales de longevidad](https://doi.org/10.1111/jfb.70562) | Separar genes candidatos y mecanismos propuestos de la edad estimada | Revisión/interpretación; no prueba causalidad ni fecha la edad de cada tiburón |
| Geodinamo | [Flujo térmico realista en simulaciones](https://doi.org/10.1016/j.epsl.2026.120089) y [capas límite del núcleo](https://doi.org/10.1029/2025JB033648) | Crear un diagrama de observación indirecta → modelo → simulación | Modelos y supuestos; no son observaciones directas ni predicen una inversión próxima |
| Pulpo mimo | [Medición light-field de locomoción de cefalópodos](https://doi.org/10.1038/s41586-025-09379-z) | Explicar cómo se estudia movimiento con ROV e imagen avanzada | Estudia *Muusoctopus robustus*, no *Thaumoctopus mimicus*; solo sirve como contexto metodológico |
| Leopardo de las nieves | [Cámaras y SECR en Pakistán](https://doi.org/10.1002/ecog.08074) y [genética no invasiva](https://doi.org/10.1016/j.biocon.2026.111709) | Añadir una cifra regional con método y mapa de muestreo | No combinar estudios ni extrapolar una región a la población mundial |
| Pangolín gigante | [Hematología de un ejemplar rehabilitado](https://doi.org/10.3389/fvets.2026.1870026) | Añadir un recuadro de salud/rehabilitación con procedencia | n=1 y en cautiverio; no es rango de referencia de la especie silvestre |
| Relámpago del Catatumbo | [Métrica satelital de NASA](https://science.nasa.gov/earth/earth-observatory/a-new-look-at-earths-lightning-149301/) y [productos de rayos de NOAA](https://www.ncei.noaa.gov/products/lightning-products) | Distinguir densidad, sensor, periodo y unidad de observación | Una métrica satelital no demuestra una tormenta literalmente continua ni una tendencia actual |
| Imágenes y alt | [Tutorial de imágenes de W3C](https://www.w3.org/WAI/tutorials/images/) y [comprobación rápida de alt](https://www.w3.org/WAI/test-evaluate/easy-checks/image-alt/) | Clasificar ilustración informativa, decorativa, compleja o funcional y auditar su descripción | Guías de accesibilidad; no son garantía de ranking ni certificación WCAG |
| Procedencia visual | [IPTC Photo Metadata Standard 2025.1](https://iptc.org/standards/photo-metadata/iptc-standard/) y [guía de uso](https://www.iptc.org/std/photometadata/documentation/userguide/) | Completar manifiesto de autor, fecha, lugar, derechos y fuente digital/sintética | Los metadatos pueden perderse y no constituyen licencia o prueba de autenticidad |
| Autoría y revisión | [Roles de contribución de Crossref](https://www.crossref.org/documentation/schema-library/markup-guide-metadata-segments/contributors) | Modelar autor, editor, revisor, afiliación y ORCID cuando existan datos reales | Es metadata académica; no inventar personas ni tratarla como requisito de Google |

#### Uso en el plan de creación y automatización

1. Luna puede proponer una actualización para cada oportunidad, con una tabla
   de claims, método, población/área, fecha, fuente y límite.
2. El editor abre la fuente primaria, comprueba el pasaje y decide si la cifra
   entra en el artículo existente; si no coincide, se descarta o se conserva
   como contexto explícitamente limitado.
3. Para imágenes, el pipeline debe registrar el propósito del `alt`, creador,
   fecha, licencia o tipo de ilustración y cualquier transformación. IPTC
   inspira el manifiesto, pero no reemplaza el permiso de uso.
4. La automatización no puede fusionar las dos estimaciones regionales del
   leopardo de las nieves, usar el artículo de Nature como evidencia directa
   del pulpo mimo, ni convertir NASA/NOAA en prueba de una “tormenta eterna”.
5. Después de actualizar una página existente, medir durante 28 días clics,
   impresiones, CTR, posición y comportamiento; solo entonces decidir si falta
   una pieza nueva.

Con esta ronda el catálogo queda en **809 entradas válidas** (794 anteriores +
15 nuevas). No se añadieron citas automáticamente a artículos publicados, no se
marcó ninguna ficha como revisada y no se creó ninguna URL nueva.

### Tercera búsqueda dirigida de Luna Max — E‑E‑A‑T, accesibilidad y correcciones — 20 de septiembre de 2026

La tercera pasada se centró en las brechas que siguen limitando la puntuación
editorial: identidad y propósito del editor, controles de accesibilidad que se
puedan repetir, transparencia ante críticas posteriores a publicar y dos
fuentes comparativas para el artículo del pangolín. Se añadieron **10 URLs
nuevas** al catálogo. No son citas aprobadas de los artículos actuales y no
marcan revisiones humanas.

| Área | Fuente nueva | Aplicación concreta | Límite obligatorio |
| --- | --- | --- | --- |
| Identidad | [Google Publisher Policies: misleading representation](https://support.google.com/publisherpolicies/answer/11185754) | Revisar quién publica, el propósito de cada página, autoría, afiliaciones y declaraciones del perfil | Es política de monetización; no garantiza ranking, E‑E‑A‑T ni aprobación |
| Titulares y CTA | [Google Publisher Policies: deceptive practices](https://support.google.com/publisherpolicies/answer/11185755) | Auditar promesas, titulares, llamadas a la acción y cualquier elemento que pueda atraer bajo un pretexto falso | No sustituye la comprobación científica ni una política editorial completa |
| Pruebas accesibles | [W3C ACT Overview](https://www.w3.org/WAI/standards-guidelines/act/) | Guardar resultado `pass`, `fail`, `inapplicable` y fecha para cada control automatizado o manual | Pasar una regla no equivale a conformidad WCAG completa |
| Nombre accesible | [ACT 23a2a8](https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/) | Comprobar que cada imagen tenga nombre accesible o esté correctamente marcada como decorativa | No valida que el texto sea exacto o suficiente |
| Alt descriptivo | [ACT qt1vmo](https://www.w3.org/WAI/standards-guidelines/act/rules/qt1vmo/) | Revisar la función que comunica el `alt`, no solo que el atributo exista | La evaluación semántica requiere juicio editorial |
| Contraste visual | [WCAG 2.2 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | Medir iconos, controles, mapas y gráficos necesarios para comprender o usar la página | Es una guía explicativa; aplicar el criterio normativo completo |
| Texto en imágenes | [WCAG 2.2 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception) | Preferir texto HTML y aportar transcripción si una imagen con texto es esencial | Es criterio AAA, no una prohibición universal de imágenes con letras |
| Correcciones | [COPE: post-publication critiques](https://doi.org/10.24318/o1VgCAih) | Ampliar `/correcciones/` con recepción, respuesta, estado, decisión y enlace desde la pieza original | Marco académico; adaptar roles y plazos al sitio |
| Pangolines | [Genómica poblacional del pangolín malayo](https://doi.org/10.1093/molbev/msag016) | Explicar que las especies asiáticas no forman una única unidad biológica | No permite inferir tamaño o conservación del pangolín gigante |
| Pangolines | [Morfología de escamas](https://doi.org/10.1002/ar.25624) | Añadir un recuadro comparativo sobre variación de escamas entre especies/edades | No respalda comportamiento, inmunidad ni ecología de *Smutsia gigantea* |

#### Cómo se incorpora sin inflar la puntuación

1. Añadir las tres reglas ACT al checklist de activos, conservando el resultado
   y la fecha, sin presentar un `pass` automático como revisión humana.
2. Ampliar la página de correcciones con estados explícitos: `recibida`,
   `en evaluación`, `corregida`, `aclarada`, `retirada` o `sin cambio`, siempre
   con la evidencia que justifique la decisión.
3. Hacer que el brief de Luna incluya un campo de identidad y propósito: quién
   lo prepara, cómo se investigó y por qué el texto aporta valor propio.
4. Actualizar el artículo del pangolín solo con una comparación marcada por
   especie, método y alcance; no convertir estudios del pangolín malayo en
   evidencia del pangolín gigante.
5. Mantener el límite de `humanApproval: pending` y `publish: false` hasta que
   una persona abra las fuentes, compruebe la imagen y apruebe el cambio.

Con esta ronda el catálogo queda en **819 entradas válidas** (809 anteriores +
10 nuevas). El banco sirve para mejorar el proceso y crear briefs de
actualización, no para fabricar credenciales, revisiones, conformidad WCAG o
aprobación de AdSense.

### Briefs de actualización derivados del banco — 20 de septiembre de 2026

Para convertir las fuentes en oportunidades reutilizables sin abrir páginas
duplicadas, se crearon tres briefs locales y sus Markdown generados. Cada uno
conserva una aportación visual propia, una tabla de hecho/inferencia/hipótesis,
límites de alcance y una puerta humana explícita.

| Brief | Fuentes principales | Uso editorial | Decisión de imagen |
| --- | --- | --- | --- |
| [`geodynamo-waves-and-inference.json`](./drafts/geodynamo-waves-and-inference.json) | PNAS sobre ondas magneto-Coriolis, ESA Swarm, NASA GSFC | Actualizar la explicación de geodinamo separando dato, modelo e inferencia | Diagrama original, nunca una supuesta imagen directa del núcleo |
| [`pangolin-detection-not-abundance.json`](./drafts/pangolin-detection-not-abundance.json) | Oryx sobre madrigueras, estudio de colocación de cámaras, IUCN | Actualizar pangolín gigante explicando presencia, detectabilidad, ocupación y abundancia | Infografía original con especie, sitio, periodo y esfuerzo |
| [`greenland-shark-genome-limits.json`](./drafts/greenland-shark-genome-limits.json) | PNAS genómico, Nature Communications visual, NOAA longevidad | Actualizar tiburón de Groenlandia separando edad estimada, genoma y candidatos moleculares | Mapa de evidencia original; no presentar candidatos como tratamiento |

El pipeline generó las versiones Markdown en `drafts/generated/` y
`pnpm content:luna-audit` confirmó **7 briefs válidos en 7 archivos JSON**.
La ampliación sirve para investigación y priorización; no añade artículos
publicados, no altera el catálogo de citas del contenido actual y no cambia el
conteo de revisiones humanas. Antes de utilizar cualquiera de los briefs, una
persona debe abrir cada fuente, verificar el método, revisar la imagen y decidir
si la actualización aporta algo que la pieza existente no resuelva.

### Búsqueda dirigida de Luna Max para el lote P0 — 20 de septiembre de 2026

Luna contrastó los nueve artículos de mayor riesgo contra el catálogo vigente y
descartó duplicados. Se incorporaron **10 fuentes nuevas** (dos para ballena
azul); cada una es una pista de actualización, no una cita aprobada ni una
revisión humana.

| Artículo | Fuente nueva | Oportunidad de actualización | Límite que debe conservarse |
| --- | --- | --- | --- |
| Ballena azul | [PNAS: dinámica cardíaca de rorcuales](https://doi.org/10.1073/pnas.2613082123) y [Science Advances: alometría del forrajeo](https://doi.org/10.1126/sciadv.adw2232) | Ampliar el bloque cardiovascular con biologging, cinemática y coste metabólico relativo | Son muestras y modelos de varias especies/individuos; no reemplazan el ECG previo de un macho ni producen una cifra universal |
| Manta raya gigante | [Conectividad de *Mobula birostris*](https://doi.org/10.1007/s10641-024-01622-2) | Separar conectividad regional y fidelidad espacial de la discusión sobre inteligencia | Estudio regional; no demuestra autoconciencia, memoria ni población mundial |
| Elefante africano | [Llamadas dirigidas a individuos](https://doi.org/10.1038/s41559-024-02420-w) | Añadir comunicación social compleja sin llamarla memoria perfecta o lenguaje humano | Elefantes de sabana de Kenia; no mide memoria autobiográfica |
| Pangolín gigante | [Escamas y defensa innata](https://doi.org/10.1186/s12915-024-02034-5) | Presentar una hipótesis comparativa sobre porosidad, proteínas y microbioma | Principalmente pangolín malayo; no demostrar inmunidad clínica ni transferir el mecanismo a *Smutsia gigantea* |
| Arrecifes de coral | [Respuesta térmica metaproteómica](https://doi.org/10.1002/ece3.73275) | Comparar respuestas divergentes de tres corales ante estrés térmico | Experimento corto de laboratorio; no sustituye mortalidad de campo ni permite generalizar a todos los arrecifes |
| Vórtice polar | [SSW, tropopausa y reanálisis](https://doi.org/10.1029/2025JD044493) | Actualizar el lenguaje probabilístico sobre impactos estratosféricos | GNSS/reanálisis y eventos mayores; no cada SSW causa una ola de frío local |
| Vuelo de búhos | [Serraciones y turbulencia](https://doi.org/10.1088/1748-3190/ad3a4f) | Explicar con PIV cómo un modelo de *Tyto alba* altera el flujo | Modelo de lechuza común; no transferir dB ni resultados a *Bubo bubo* |
| Tardígrados | [Simulante de regolito marciano](https://doi.org/10.1017/S1473550425100220) | Separar exposición espacial, simulante marciano y habitabilidad | Exposición corta, simulante terrestre y dos taxones; no es una misión a Marte |
| Peces linterna | [Distribución en el Atlántico sudoccidental](https://doi.org/10.1016/j.dsr.2025.104518) | Añadir contexto regional de 34 especies, profundidad y masas de agua | No mide brillo, luciferina/luciferasa ni conducta individual; no extrapolar a toda la familia |

La búsqueda confirmó que las referencias anteriores del lote —ECG de ballena,
NOAA sobre manta, matriarcas y cerebro de elefantes, escamas mecánicas de
pangolín, NOAA/USGS sobre coral, revisión de SSW, estudios PMC de búhos,
experimento espacial clásico de tardígrados y estudios de fotóforos— ya estaban
registradas. El catálogo pasa a **829 entradas válidas**. Las nuevas fuentes se
usarán para actualizar las páginas existentes antes de considerar una URL nueva;
el plan conserva `humanApproval: pending` y no permite publicación automática.
