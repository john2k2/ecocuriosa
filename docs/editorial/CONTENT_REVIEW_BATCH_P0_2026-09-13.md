# Lote de revisión editorial P0/P1 — 13 de septiembre de 2026

Este lote reduce la deuda de revisión sin convertirla en una aprobación
automática. Las fuentes y líneas son puntos de partida para una persona: deben
abrirse, compararse con la frase exacta y registrarse en una ficha de revisión
antes de cambiar `reviewedDate`, `reviewedBy` o `decision`.

## Procedimiento común

1. Abrir todas las fuentes del artículo y comprobar especie, muestra, fecha,
   lugar, método y alcance.
2. Completar la matriz afirmación → fuente en
   [`ARTICLE_REVIEW_TEMPLATE.md`](./ARTICLE_REVIEW_TEMPLATE.md).
3. Corregir, matizar o retirar cualquier frase cuyo alcance no coincida.
4. Comprobar que la ilustración representa el tema y conservar su procedencia.
5. Añadir solo enlaces internos que aporten el siguiente contexto natural.
6. Registrar el nombre público real, la fecha efectiva y la decisión; si queda
   una duda, conservar `pending`.

## Orden de trabajo

| Orden | Artículo | Afirmaciones que exigen comprobación | Fuentes catalogadas para abrir | Enlazado interno posible |
| ---: | --- | --- | --- | --- |
| 1 | [Arrecifes de coral](../../src/content/articles/arrecifes-de-coral-simbiosis-zooxantelas-blanqueamiento.md) | `<0,1 %` del océano, `25 %` de especies, `84,4 %` de área con estrés térmico; evento global 2024–2025; recuperación frente a mortalidad por especie y sitio | `noaa-coral-bleaching-current`, `noaa-coral-bleaching-report`, `pmc-coral-symbiosis-5955907`, `noaa-coral-reef-basics-2017` | `mar-de-ardora` o `pez-abrecaminos`, solo si se redacta un puente sobre estrés/luz marina |
| 2 | [Ballena azul](../../src/content/articles/ballena-azul-fisiologia-gigante-cardiovascular.md) | ECG de un macho: `8,5 h`, `60` inmersiones, `184 m`, `16,5 min`, `4–8` y mínimo `2` latidos/min; no generalizar a toda la especie | `blue-whale-ecg-study`, `noaa-blue-whale-physiology-53258`, `pmc-blue-whale-ecg-6911174` | `manta-raya` y `tiburon-de-groenlandia` |
| 3 | [Calentamiento estratosférico](../../src/content/articles/calentamiento-estratosferico-repentino-vortice-polar.md) | Altitud `16–48 km`; frecuencia media; relación entre SSW y tiempo superficial, que es probabilística y no un pronóstico local | `noaa-arctic-polar-vortex`, `reviews-geophysics-polar-vortex-2020`, `nsf-polar-vortex-review-pdf-10230500`, `nasa-gmao-ssw-event` | `auroras` solo con una explicación atmosférica explícita |
| 4 | [Manta raya gigante](../../src/content/articles/manta-raya-gigante-inteligencia-cerebro-peces.md) | Máximos NOAA (`7,9 m`, `2.400 kg`), profundidades variables y experimento de espejo con dos cautivas; separar conducta, hipótesis y autoconciencia | `noaa-giant-manta-ray`, `journal-ethology-manta-self-directed-2016`, `manta-cranial-endothermy-2024`, `manta-mirror-springer-2016`, `pmc-manta-endothermy-7017440` | Ya enlaza `tiburon-de-groenlandia` y `ballena-azul` |
| 5 | [Memoria del elefante](../../src/content/articles/memoria-elefante-africano-estructura-cerebral.md) | `257.000` millones de neuronas, porcentajes comparativos y base post mortem de `23` individuos; no convertir neuroanatomía en una medida universal de memoria | `elephant-brain-neurons`, `pubmed-elephant-matriarchs-11313492`, `elephant-aging-matriarchs`, `elephant-brain-database-2024`, `pmc-elephant-neurons-4053853`, `pmc-elephant-aging-9261397` | No forzar un enlace; añadirlo solo si se introduce una comparación con evidencia propia |
| 6 | [Tardígrados](../../src/content/articles/oso-tardigrado-criptobiosis-supervivencia-espacio.md) | Dos especies desecadas, vacío orbital durante `10 días`, UV y proteína Dsup en células; eliminar cualquier lectura médica o de invulnerabilidad | `tardigrade-space-experiment`, `tardigrade-dsup`, `science-tardigrade-radiotolerance`, `pmc-tardigrade-dsup-6773438` | No añadir enlace hasta encontrar una relación didáctica real |
| 7 | [Pangolín gigante](../../src/content/articles/pangolin-gigante-armadura-queratina-amenazas.md) | Ensayo mecánico y especie estudiada; “cuatro especies africanas”; decomisos `2010–2015`; CITES para `8` especies; ninguna propiedad medicinal | `pubmed-pangolin-scales-26703230`, `mammal-diversity-pangolin-1005800`, `traffic-global-pangolin-trafficking`, `cites-pangolins-appendix-i` | `memoria-elefante`, solo con un puente conservacionista explícito |
| 8 | [Peces linterna](../../src/content/articles/pez-abrecaminos-bioluminiscencia-pez-linterna.md) | No usar un porcentaje mundial fijo; migración vertical y contrailuminación dependen de especie y región; luz roja específica de *Malacosteus niger* | `pmc-lanternfish-vision-5312020`, `myctophid-migration`, `malacosteus-red-bioluminescence-vision-1999`, `pmc-malacosteus-red-1692851` | `mar-de-ardora` o `calamar-gigante` |
| 9 | [Vuelo silencioso de los búhos](../../src/content/articles/vuelo-silencioso-buho-real-aerodinamica.md) | La evidencia morfológica principal es de *Tyto alba*, no necesariamente *Bubo bubo*; no trasladar dB ni porcentajes entre especies | `pmc-owl-wing-serrations-3162239`, `annual-review-owl-flight-2018`, `biolinnean-owl-silent-flight`, `pmc-owl-wings-5206597`, `pmc-owl-serrations-4774958` | No forzar; `geco` solo si se crea una sección de biomímesis claramente etiquetada |
| 10 | [Agujeros azules](../../src/content/articles/agujeros-azules-oceano-sinkholes-formacion-geologica.md) | Separar Amberjack, Green Banana, Gran Agujero Azul y Taam Ja’; no transferir cronología kárstica, profundidad, anoxia o microbiología entre sitios | `blue-hole-taam-ja`, `noaa-blue-holes-exploration`, `usgs-blue-hole-microbes`, `depositional-record-blue-hole-2025`, `usgs-blue-hole-paleoclimate-70030382` | `geiseres` o `por-que-el-agua-hierve`, solo para presión/agua y con una transición explícita |

## Criterios de cierre del lote

- 10 fichas de revisión con cada afirmación crítica en estado `verified`,
  `corrected` o `removed`.
- Cero cifras sin unidad, población/muestra, fecha y método.
- Cero extrapolaciones de un individuo, experimento o región a toda la especie
  o al planeta.
- Imagen, crédito y licencia/procedencia comprobados para el activo concreto.
- Entre 2 y 4 enlaces internos pertinentes cuando realmente aporten contexto.
- Solo después de lo anterior: `reviewedDate` y `reviewedBy` reales, auditoría
  estricta, `astro check` y build.

La ausencia de un error en el build o una respuesta HTTP 200 no cierra ninguna
de estas comprobaciones. Los estados `403`/`203` de algunas fuentes requieren
apertura manual o una fuente alternativa equivalente; no deben convertirse en
citas automáticas.
