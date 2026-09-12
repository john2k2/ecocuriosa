# Biblioteca de inspiración editorial y fuentes primarias

**Versión:** 12 de septiembre de 2026  
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

## Políticas que deben acompañar cada brief

| Tema | Fuente oficial | Aplicación en EcoCuriosa |
| --- | --- | --- |
| Contenido útil y autoría | [Google: contenido útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=es) | Respuesta propia, autoría visible, experiencia o análisis demostrable |
| IA generativa | [Google: IA generativa](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) | Luna asiste; la persona comprueba exactitud, calidad y valor añadido |
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
| Alta | ¿Cómo se documenta el tráfico internacional de pangolines? | [TRAFFIC/IUCN SSC](https://www.traffic.org/publications/reports/the-global-trafficking-of-pangolins/) · [CITES](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-38.pdf) | Línea temporal de decomisos, rutas y marco legal | Los decomisos son una muestra del comercio, no un censo de animales extraídos |
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
| 2026-09-12 | Se incorporaron fuentes primarias/institucionales, catálogo de 267 entradas, 64 briefs candidatos y guías de licencia/transparencia | Equipo Editorial EcoCuriosa | URLs enlazadas en esta biblioteca; validar cada ficha antes de citar |

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
