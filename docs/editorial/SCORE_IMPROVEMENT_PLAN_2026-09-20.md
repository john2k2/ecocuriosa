# Plan de elevación de puntuación — EcoCuriosa

**Versión:** 20 de septiembre de 2026  
**Propósito:** convertir la línea base técnica, editorial y de monetización en
un programa de mejora verificable. Las metas son puertas internas de calidad;
no son una promesa de ranking, tráfico, aprobación de AdSense ni ingresos.

## Línea base confirmada

| Área | Estado observable | Riesgo que todavía limita la puntuación |
| --- | --- | --- |
| SEO técnico / infraestructura | Build de 46 páginas; 0 enlaces internos rotos; 32/32 artículos en sitemap; Lighthouse de laboratorio alto | Falta P75 de campo y una comparación estable con usuarios reales |
| Diseño, navegación y móvil | Jerarquía, foco, menú móvil, alt y proporciones de imagen auditados | Falta repetir la matriz en categoría y legales; aún no hay prueba con anuncios reales |
| Indexación | Sitemap correcto con 44 URLs descubiertas; Search Console muestra 57 páginas indexadas y 28 no indexadas | Resolver la única URL rastreada pero no indexada y explicar las 25 redirecciones y 2 `noindex` antes de pedir más rastreo |
| AdSense técnico | El sitio está en revisión; política, contacto y metodología visibles | CMP, pagos, slots reales, `ads.txt` y comportamiento post-aprobación son gates externos |
| E‑E‑A‑T | 809 fuentes candidatas en catálogo; 4 briefs Luna válidos, 31 paquetes asistidos y una biblioteca ampliada de fuentes de autoría, campo, CMP y gobernanza | 31/32 artículos siguen `pending`; faltan nombres/roles reales y trazabilidad visual formal en algunos activos |

La **última ronda vigente** de Jev (20/09/2026), después de acortar cuatro
títulos, añadir dos enlaces internos al artículo con más impresiones e
incorporar 15 fuentes nuevas, dio **1,73/4** (confianza 0,77) y mantuvo
`human_review` como prioridad (0,95; confianza 0,94). Las rondas anteriores de
1,91/4 y 1,98/4 usan otras escalas o estados y se conservan como histórico; la
variación no es una regresión medida del código. La decisión se conserva como
señal consultiva en
[`JEV_REVIEW_2026-09-20.md`](./JEV_REVIEW_2026-09-20.md), no como una medición
externa.

Una pasada de control adicional, con una rúbrica conservadora de readiness,
dio **1,34/4** (confianza 0,62) y mantuvo `human_review` como siguiente acción
(0,96; confianza 0,95). Se registra por separado porque el cuestionario y la
ponderación no son idénticos a los 1,98/4 anteriores; no representa una
regresión del código.

La pasada posterior a incorporar los controles técnicos y el catálogo de 777
candidatas, penalizando la falta de CWV de campo, dio **1,26/4** (confianza
0,65) y volvió a elegir `human_review` (0,87; confianza 0,83). Esta variación
es de rúbrica y estado enviado; las auditorías del código siguen verdes.

La reevaluación posterior a añadir `speakable` sobre el resumen visible,
targets táctiles de 48 px, títulos más concisos, YAML parseable y 17 fuentes
oficiales nuevas dio **1,91/4** (confianza 0,92) y mantuvo `human_review` como
prioridad (0,75; confianza 0,68). La variación no es una serie temporal ni una
predicción de aprobación; el siguiente salto exige cerrar la lectura humana.

## Orden ejecutivo para subir la puntuación

El catálogo ampliado mejora la capacidad de investigar, pero no suma puntos por
sí solo. El orden de trabajo queda fijado por riesgo y evidencia:

1. **E‑E‑A‑T primero:** revisar ocho artículos por semana; pasar un artículo a
   `reviewed` solo cuando una persona haya abierto sus fuentes, comprobado los
   límites y confirmado la imagen. Si una fuente o licencia no abre, mantener
   `pending` y sustituirla por una equivalente accesible.
2. **Indexación después de cada lote:** inspeccionar las URLs actualizadas en
   Search Console, registrar estado canónico/descubierta/rastreada/indexada y
   no crear variantes para consultas casi idénticas. Umbral: 0 exclusiones P0
   sin explicación y 100% de artículos revisados con canonical y sitemap.
3. **Diseño y móvil:** repetir la matriz 320/375/768/1440 px en portada,
   categorías, artículos y legales; bloquear la activación de anuncios si el
   CLS o el foco empeoran. Umbral: 0 overflow, 0 foco perdido y contraste AA.
4. **SEO técnico:** conservar las auditorías verdes y medir tres ejecuciones por
   plantilla; declarar “sin datos de campo” si no existe P75 real, en lugar de
   usar Lighthouse como sustituto de audiencia.
5. **AdSense al final:** completar CMP, pagos y aprobación en la cuenta; solo
   después probar dos slots reales durante 14 días con viewability, RPM, CTR
   válido y CLS. No activar anuncios para intentar subir una puntuación
   editorial.

La puerta de cada etapa es reversible: si falla, se corrige o se mantiene
pendiente; nunca se rellena una señal humana para avanzar de nivel.

## Objetivos de salida

### 1. SEO técnico / infraestructura — objetivo interno: 95/100

Acciones:

1. Mantener un único canonical, sitemap y barra final por URL; revisar cualquier
   nuevo redirect antes de publicar.
2. Repetir Lighthouse tres veces por plantilla (portada, categoría, artículo y
   legal) y conservar mediana, no el mejor resultado.
3. Obtener P75 real de LCP, INP y CLS mediante RUM/CrUX cuando haya elegibilidad;
   si no existe volumen, declarar `sin datos de campo`.
4. No eliminar protección de Cloudflare ni añadir scripts de medición que no
   tengan consentimiento y un propósito documentado.

Puerta de salida:

- `pnpm astro check`, `pnpm build`, `pnpm content:link-audit`,
  `pnpm content:indexation-audit` y `pnpm content:generated-metadata-audit`
  pasan;
- cero páginas huérfanas, canonical duplicado o recurso interno faltante;
- LCP/INP/CLS de campo documentados o declarados no elegibles;
- cualquier regresión de CLS después de anuncios queda bloqueada hasta corregirla.

### 2. Diseño, navegación y móvil — objetivo interno: excelente medible

Acciones:

1. Ejecutar una matriz repetible en 320, 375, 768 y 1440 px para portada,
   categoría, artículo y legales.
2. Verificar teclado, foco visible, Escape, landmarks, contraste AA y ausencia
   de overflow con menú cerrado y abierto.
3. Mantener el sistema visual actual: serif editorial para lectura, paleta
   bosque/ocre, tarjetas contenidas y una ilustración claramente identificada.
4. Cuando AdSense apruebe, probar una unidad después de la respuesta inicial y
   otra al final de artículos largos; reservar altura antes de medir CLS.

Puerta de salida:

- cero overflow horizontal y foco perdido;
- la leyenda de cada imagen distingue ilustración de fotografía;
- tres mediciones post-anuncios no degradan materialmente CLS ni lectura móvil;
- la revisión visual de categoría y legales queda archivada con fecha.

### 3. Indexación y descubrimiento — objetivo interno: cobertura explicada

Acciones:

1. En Search Console, inspeccionar portada, cuatro categorías, cinco artículos
   P0, `/sobre-nosotros/`, `/metodologia-editorial/`, `/contacto/` y legales.
2. Separar `descubierta`, `rastreo`, `indexada`, `canónica elegida` y
   `excluida`; un HTTP 200 no cierra ninguna de esas etapas.
3. Repetir una lectura después de cada lote editorial y mantener un ledger de
   URL, fecha, estado y acción.
4. Validar Bing Webmaster/IndexNow solo con una URL actualizada, sin envíos
   masivos ni credenciales en el repositorio.

Puerta de salida:

- cada exclusión de Search Console tiene explicación;
- todas las URLs P0 tienen canonical y sitemap correctos;
- no se crean páginas para variantes ortográficas o consultas casi idénticas;
- los cambios de título se evalúan con una ventana comparable, no con una sola
  impresión.

La lectura autenticada del 20/09 está documentada en
[`SEARCH_CONSOLE_SNAPSHOT_2026-09-20.md`](./SEARCH_CONSOLE_SNAPSHOT_2026-09-20.md)
y la lectura de infraestructura en
[`CLOUDFLARE_SNAPSHOT_2026-09-20.md`](./CLOUDFLARE_SNAPSHOT_2026-09-20.md).

### 4. AdSense y monetización — objetivo interno: listo después de aprobación

Acciones externas del titular:

1. Mantener el perfil de pagos, país, dirección, impuestos y beneficiario con
   datos legales verdaderos; no guardarlos en el repositorio ni dárselos a Luna.
2. Configurar el mensaje CMP certificado para EEE, Reino Unido y Suiza y probar
   aceptar, rechazar y gestionar opciones.
3. Esperar la decisión de AdSense antes de activar slots reales; no usar CPC,
   CPM o RPM estimados como evidencia de aprobación.
4. Después de aprobar, implementar `ads.txt`, dos posiciones iniciales y una
   ventana de 14 días para cobertura, viewability, RPM, sesiones y CLS.

Puerta de salida:

- aprobación visible en la cuenta;
- CMP y política de privacidad describen las herramientas activas;
- `ads.txt` devuelve 200 y coincide con el editor real;
- ningún anuncio se confunde con navegación, contenido o botón de descarga;
- no existen clics propios, incentivos ni cambios de densidad sin medición.

### 5. E‑E‑A‑T — objetivo interno: 75/100 antes de escalar

Acciones:

1. Cerrar ocho artículos por semana con la ficha de
   [`ARTICLE_REVIEW_TEMPLATE.md`](./ARTICLE_REVIEW_TEMPLATE.md), comenzando por
   conservación, clima, salud, récords y cifras experimentales.
2. Para cada afirmación importante registrar fuente, especie, muestra, fecha,
   ubicación, método y límite; retirar cifras que no puedan sostenerse.
3. Registrar `reviewedDate` y `reviewedBy` solo después de que una persona abra
   las fuentes, revise el texto y confirme la imagen.
4. Completar nombres, roles y experiencia únicamente con datos reales
   autorizados; no convertir “Equipo Editorial” en una credencial inventada.
5. Formalizar procedencia visual: creador o institución, licencia, URL de
   licencia, fecha y cambios. Las ilustraciones originales permanecen
   etiquetadas como ilustraciones y nunca como observaciones documentales.
6. Mantener el historial de correcciones y el estado editorial visible para que
   el lector distinga actualización de revisión humana.

Puerta de salida:

- 32/32 artículos revisados humanamente;
- 100% de afirmaciones cuantitativas y sensibles enlazadas a evidencia concreta;
- 100% de imágenes con procedencia documentada;
- cero paquetes asistidos con decisión cerrada o aprobación simulada;
- `pnpm content:audit -- --strict` pasa por razones reales.

## Calendario ejecutable de 30 días

| Días | Trabajo | Evidencia que debe quedar |
| --- | --- | --- |
| 1–3 | Confirmar estado de AdSense/CMP sin modificar datos legales; actualizar ledger de Search Console y Cloudflare | Capturas/exportaciones fechadas, sin datos personales en Git |
| 4–10 | Revisar ocho artículos P0 y cerrar coral, manta, pangolín y ballena si el responsable confirma fuentes e imágenes | Fichas de revisión, cambios de texto y auditorías verdes |
| 11–17 | Revisar ocho artículos adicionales; corregir claims pendientes y completar procedencia visual | 16/32 revisados o cola explícitamente actualizada |
| 18–21 | Repetir matriz visual y Lighthouse en categoría/legal; inspeccionar URLs prioritarias | Snapshot de móvil, HTML, canonical e indexación |
| 22–27 | Revisar ocho artículos más; elegir hasta dos briefs de la biblioteca con consulta real | 24/32 revisados; briefs `publish: false` |
| 28–30 | Cerrar los siete restantes o registrar bloqueos; medir el cambio de CTR solo en páginas con impresiones | Auditoría estricta, decisión de publicación y comparación fechada |

No se escala a más de un artículo aprobado por semana mientras la deuda humana
sea mayor que cero. Si una fuente queda bloqueada, se marca `pending` y se busca
una fuente equivalente accesible; no se inventa una lectura.

## Escala de evidencia y gates de puntuación

Para que una mejora de puntuación sea reproducible, cada artículo debe avanzar
por estados explícitos. El número de fuentes del catálogo no suma puntos por sí
mismo: una candidata no abierta sigue siendo una pista, no evidencia editorial.

| Nivel | Estado | Evidencia mínima | Qué permite hacer |
| --- | --- | --- | --- |
| 0 | `candidate` | URL HTTPS, autoridad identificada y tema pertinente | Inspirar una pregunta; no citar ni publicar |
| 1 | `opened` | Texto o registro abierto, DOI/PMID/identificador, fecha real de acceso y licencia comprobada | Redactar un brief con alcance y limitaciones |
| 2 | `mapped` | Cada afirmación importante enlazada a un pasaje/resultado, muestra, especie, fecha, lugar y método | Preparar borrador local `publish: false` |
| 3 | `reviewed` | Persona responsable abre las fuentes, revisa el texto y la imagen, corrige o elimina claims débiles | Registrar `reviewedDate`/`reviewedBy` y pasar auditoría estricta |
| 4 | `published` | Build, móvil, enlaces, metadatos, procedencia visual y publicación fechada verificados | Medir Search Console/Cloudflare sin atribuir causalidad prematura |

Reglas de calidad para subir de nivel:

1. Un brief debe tener entre 2 y 6 candidatas, pero debe conservar al menos una
   fuente primaria o institucional pertinente; dos páginas que repiten la misma
   nota no cuentan como corroboración independiente.
2. Una afirmación cuantitativa necesita unidad, población o muestra, fecha,
   método y límite. Si falta uno, se mantiene `pending` o se elimina el número.
3. Una fuente bloqueada por paywall, CAPTCHA o error no se presenta como leída:
   se registra como candidata y se busca una copia abierta o una fuente
   equivalente antes de cerrar el artículo.
4. La imagen tiene su propio gate: creador, licencia, URL de licencia, fecha y
   cambios para terceros; etiqueta de ilustración y proceso para activos
   originales o generados. El derecho de uso no demuestra exactitud científica.
5. La publicación automática está prohibida mientras exista cualquier claim
   `pending`, licencia no comprobada o revisión humana ausente.

Indicador principal de E‑E‑A‑T para el próximo ciclo: pasar de **1/32** a
**9/32** artículos revisados humanamente, luego 16/32, 24/32 y finalmente
32/32. Jev puede ayudar a priorizar, pero solo el registro humano y las pruebas
del artefacto pueden mover un artículo al nivel `reviewed`.

## Automatización segura con Luna Max

El flujo complementario está en [`LUNA_MAX_AUTOMATION_RUNBOOK.md`](./LUNA_MAX_AUTOMATION_RUNBOOK.md)
y [`LUNA_MAX_PROTOCOL.md`](./LUNA_MAX_PROTOCOL.md):

```text
Search Console/Cloudflare agregados
        ↓
Luna Max: hasta cinco oportunidades y 2–6 fuentes candidatas
        ↓
Editor: abre fuentes, verifica alcance y aprueba el ángulo
        ↓
Luna Max: brief/borrador local con claims y plan visual
        ↓
Editor: revisión humana, derechos de imagen y aportación propia
        ↓
Auditorías + prueba móvil + build
        ↓
Publicación humana y medición fechada
```

Controles no negociables:

- `humanApproval: pending` y `publish: false` en todo borrador;
- ninguna escritura a `src/content/articles`, AdSense, Search Console,
  Cloudflare o cuentas de pago;
- no inventar autores, licencias, citas, experiencias ni resultados;
- no producir variantes de URL para capturar palabras clave;
- detener el ciclo si falla una fuente, derechos, enlaces, móvil o auditoría.

## Decisión sobre imágenes

| Tipo de contenido | Opción | Prueba mínima |
| --- | --- | --- |
| Mecanismo, anatomía o proceso | Ilustración original EcoCuriosa | `imageAlt`, crédito visible y revisión de exactitud |
| Animal/lugar/evento real | Foto propia, encargada o licencia explícita | Autor, URL, licencia, fecha, cambios y crédito |
| Imagen encontrada en una web | No reutilizar por defecto | Permiso del activo concreto antes de descargar o transformar |
| Imagen generada de una especie | Solo ilustración didáctica | Etiqueta clara; nunca prueba documental ni conducta observada |

## Métricas y reglas de decisión

- **Search Console:** mejorar primero páginas con impresiones y CTR bajo; no
  crear contenido nuevo para una variante hasta actualizar la URL existente.
- **Cloudflare:** separar bots, recursos, redirecciones y caché; sus requests no
  son personas ni sesiones.
- **RUM/CrUX:** usar P75 de LCP, INP y CLS cuando haya volumen; Lighthouse es
  diagnóstico de laboratorio.
- **AdSense:** medir RPM/viewability solo después de aprobación y con anuncios
  válidos; nunca optimizar por clics propios.
- **Contenido:** si la deuda editorial aumenta, pausar nuevos briefs y dedicar
  el ciclo a revisiones.

## Fuentes de inspiración

La biblioteca curada y el catálogo se mantienen en
[`EDITORIAL_INSPIRATION_LIBRARY.md`](./EDITORIAL_INSPIRATION_LIBRARY.md) y
[`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml). Las fuentes sirven para generar
preguntas, diagramas y comparaciones originales; no autorizan copiar texto,
figuras o fotografías. Cada nueva fuente debe conservar URL exacta, autoridad,
tipo de evidencia, alcance, limitación y estado de acceso.
