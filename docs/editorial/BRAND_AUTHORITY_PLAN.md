# Plan de autoridad de marca y distribución — EcoCuriosa

**Versión:** 13 de septiembre de 2026  
**Estado:** plan de trabajo; no crea perfiles externos ni publica automáticamente.

## Punto de partida

La búsqueda pública del nombre `EcoCuriosa` devuelve principalmente el propio dominio. No hay todavía una base defendible de menciones independientes, enlaces editoriales, citas en comunidades o perfiles sociales verificados. Por eso la puntuación de autoridad de marca y de optimización por plataforma se mantiene conservadora: no se fabrican señales con perfiles vacíos, comentarios repetidos ni enlaces de baja calidad.

Las métricas de Search Console son todavía una muestra pequeña: la lectura del 14/09 registra 340 impresiones, 2 clics, CTR 0,6 % y posición media 12. Las solicitudes de Cloudflare incluyen bots y recursos, así que no se usan para declarar audiencia humana. La primera meta es construir evidencia de utilidad y reconocimiento, no inflar el número de publicaciones. El detalle está en [`SEARCH_CONSOLE_SNAPSHOT_2026-09-14.md`](SEARCH_CONSOLE_SNAPSHOT_2026-09-14.md).

## Principios de distribución

1. Cada pieza distribuida debe llevar a la URL canónica de EcoCuriosa y aportar un formato nativo adicional: una lámina, un dato acotado, una explicación breve o una pregunta para el lector.
2. La fuente científica se enlaza en el artículo original; una publicación social sirve para descubrirlo, no para sustituir la evidencia.
3. No se crean cuentas, reseñas, menciones de Wikipedia, hilos de Reddit o enlaces de directorios solo para aparentar autoridad.
4. `sameAs` y perfiles de autor se añaden al Schema únicamente cuando la cuenta o la persona estén verificadas y autorizadas.
5. Las imágenes se generan como ilustraciones originales o se publican con licencia y crédito del activo concreto; nunca se presenta una imagen sintética como fotografía documental.
6. La cadencia se detiene si aumenta la deuda de revisión humana, aparece contenido duplicado o el tráfico no puede atribuirse a una fuente legítima.

## Embudo de 90 días

| Fase | Semanas | Acción | Salida verificable |
| --- | ---: | --- | --- |
| Fundamentos | 1–2 | Unificar nombre, descripción, logo, correo editorial y enlace canónico en perfiles que el titular decida abrir | Lista de perfiles autorizados; no se añaden perfiles vacíos al Schema |
| Biblioteca | 2–4 | Elegir 4 artículos revisados y preparar una lámina, una explicación de 60–90 s, un carrusel y un resumen de newsletter por artículo | 16 activos con alt, fuente y URL de origen |
| Distribución | 5–8 | Publicar manualmente en uno o dos canales sostenibles; participar en comunidades solo cuando la respuesta sea útil aunque no incluya enlace | Registro de fecha, canal, URL, formato y referencia; cero publicación automática |
| Autoridad | 9–12 | Contactar museos, docentes, divulgadores y proyectos de conservación con una aportación concreta o corrección documentada | Respuestas, colaboraciones o enlaces obtenidos de forma editorialmente legítima |

## Canales y formato

| Canal | Formato recomendado | Señal que se mide | Riesgo que evita |
| --- | --- | --- | --- |
| Newsletter propia | Una pregunta, una fuente primaria y una lámina por envío | suscripciones, aperturas, clics a la URL canónica | depender de un algoritmo externo |
| YouTube/Shorts | 45–90 s: pregunta → mecanismo → límite → artículo | retención, clics referidos y suscriptores | vídeo sensacionalista o sin fuente |
| Instagram/TikTok | Carrusel de 5–7 tarjetas o vídeo con crédito | guardados, finalización y visitas referidas | reutilizar fotos sin licencia |
| LinkedIn | Nota de método, visualización o colaboración | menciones profesionales y dominios referidos | publicar solo titulares virales |
| Reddit/comunidades | Respuesta completa y transparente, enlace solo si resuelve la pregunta | respuestas cualitativas y visitas referidas | spam, autopromoción y brigading |
| Wikipedia/Google News | Solo cuando exista cobertura independiente y criterios de elegibilidad | citaciones y descubrimiento | intentar crear una entidad artificial |

### Distribución editorial con evidencia

La autoridad se construye con aportaciones que terceros puedan comprobar, no con
altas masivas en directorios. Para cada colaboración se conserva un registro de
la URL, la institución o comunidad, el formato aportado, la fecha y el resultado.

| Oportunidad | Cuándo usarla | Puerta de entrada | Límite que se respeta |
| --- | --- | --- | --- |
| SciDev.Net | Solo con una propuesta regional de divulgación o colaboración que aporte datos propios | Pitch editorial breve y firmado por una persona real | La aceptación y cualquier enlace dependen del editor; no se compra autoridad |
| The Conversation | Solo si existe un autor investigador y afiliación verificables | Propuesta con autoría y fuentes comprobables | Requiere elegibilidad y edición; EcoCuriosa no puede simular una afiliación |
| EurekAlert! / AlphaGalileo | Solo cuando una universidad, museo o proyecto elegible sea el responsable de la noticia | Comunicado o feature story institucional | Moderación y reglas de elegibilidad; un envío pagado no garantiza aceptación ni ranking |
| OER Commons / MERLOT | Para una guía educativa con licencia y objetivos pedagógicos claros | Recurso descargable y atribuido | No son directorios de backlinks ni sustituyen la revisión editorial |

Los marcos de DOAJ, Latindex, SciELO y ROAD sirven como listas de comprobación
de responsabilidad, licencia, revisión y metadatos. No se solicitará inclusión en
un índice académico mientras EcoCuriosa no sea el tipo de recurso que esos
directorios aceptan. OpenAlex puede ayudar a descubrir venues, pero no impone un
umbral de calidad y no se presenta como aval.

Google recomienda titulares descriptivos, imágenes relevantes y contenido people-first para Search y Discover; la elegibilidad de una superficie no garantiza impresiones. Las reglas de plataforma se deben volver a comprobar antes de publicar una campaña.

## KPI y umbrales

Guardar únicamente agregados mensuales y decisiones, no datos personales de suscriptores ni exportaciones crudas de cuentas.

| KPI | Instrumento | Señal inicial | Umbral de decisión a 90 días |
| --- | --- | --- | --- |
| Consultas de marca | Search Console | establecer línea base al exportar | crecimiento sostenido dos meses, no un pico aislado |
| Dominios referidos | Search Console/Cloudflare | registrar URL y contexto | 3–5 menciones editoriales relevantes, no directorios masivos |
| Tráfico referido | Search Console/Analytics/Cloudflare | separar bots y redirecciones | sesiones con lectura y segunda página; no contar requests |
| Retorno | Analytics o newsletter | pendiente de conexión | tendencia mensual antes de activar más anuncios |
| Autoridad editorial | registro manual | 0 colaboraciones confirmadas | una colaboración o cita atribuible antes de ampliar frecuencia |
| Calidad | auditorías y revisión humana | 31 artículos pendientes | no aumentar volumen mientras la cola crezca |

### Medición de marca y atribución

1. **Cada dos semanas:** revisar alertas de marca y menciones encontradas; una
   alerta es una pista, no una mención confirmada. Registrar solo el dominio,
   URL, contexto y si aporta una referencia independiente.
2. **Cada mes:** comparar en Search Console consultas de marca, páginas y
   países con el período anterior. Usar Google Trends únicamente para comparar
   interés relativo (0–100), nunca como volumen absoluto.
3. **En colaboraciones aprobadas:** usar UTMs de `source`, `medium` y `campaign`
   en enlaces de referencia; mantener la URL canónica sin parámetros y no
   incluir datos personales.
4. **Para la lectura de resultados:** Search Console responde qué consultas y
   clics llevaron desde Search; Analytics responde comportamiento y referencias.
   No se espera que las cifras coincidan exactamente.

La salida mínima es un registro mensual agregado. No se automatizan cuentas,
envíos, publicaciones, solicitud de enlaces ni la interpretación de una mención
como autoridad.

## Flujo con Luna Max

Luna puede convertir cada artículo revisado en propuestas de formatos, títulos y guiones breves. Debe devolver `sourceUrl`, alcance, crédito de imagen, URL canónica y una comprobación humana pendiente. No puede crear cuentas, enviar mensajes, publicar en redes, solicitar enlaces, modificar `sameAs` ni afirmar que una mención es independiente.

La persona responsable aprueba el formato y publica manualmente. Después se registra solo el agregado de rendimiento y se decide mantener, corregir o retirar. El flujo se integra con [`LUNA_MAX_AUTOMATION_RUNBOOK.md`](./LUNA_MAX_AUTOMATION_RUNBOOK.md) y se detiene ante una fuente inaccesible, una licencia incierta o una afirmación no respaldada.

## Evidencia de cierre

El área de autoridad no se marca como mejorada por tener perfiles creados. Se necesita una combinación de perfil verificado, contenido original, menciones atribuibles, enlaces contextuales y crecimiento sostenido de consultas de marca, siempre sin prácticas manipulativas. Hasta reunir esa evidencia, el objetivo operativo es mantener una identidad coherente y producir materiales que terceros puedan citar con facilidad.
