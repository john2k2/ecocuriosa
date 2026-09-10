# Flujo editorial asistido por Luna Max

Luna con razonamiento **Max** puede acelerar investigación, esquemas, borradores y propuestas visuales. No puede publicar ni declarar una fuente como verificada por sí sola.

Los documentos operativos que convierten este principio en una puerta de calidad son:

- [Plantilla de brief](./editorial/ARTICLE_BRIEF_TEMPLATE.md)
- [Estándar de evidencia](./editorial/SOURCE_QUALITY_STANDARD.md)
- [Protocolo de Luna Max](./editorial/LUNA_MAX_PROTOCOL.md)
- [Cola de revisión editorial](./editorial/CONTENT_REVIEW_QUEUE.md)
- [Hoja de ruta editorial y de crecimiento](./EDITORIAL_GROWTH_ROADMAP.md)

## Cadencia propuesta

| Frecuencia | Entrada | Trabajo de Luna Max | Salida para revisión humana |
| --- | --- | --- | --- |
| Semanal | Consultas, impresiones y páginas de Search Console; páginas y países de Cloudflare | Detectar oportunidades con intención informativa, canibalización y temas relacionados | Backlog priorizado de hasta cinco briefs |
| Por brief | Consulta objetivo, audiencia, artículos existentes y fuentes candidatas | Proponer ángulo propio, esquema, enlaces internos y preguntas frecuentes verificables | Un borrador en cambio separado, nunca publicado |
| Al aprobar el texto | Brief aprobado y licencia definida | Proponer alt text y, si corresponde, un prompt para diagrama original | Lista de activos y créditos, no una descarga automática |
| Mensual | Rendimiento de artículos publicados | Comparar impresiones, CTR, páginas de entrada y navegación interna | Lista de actualizaciones o consolidaciones, no más páginas por volumen |

## Implementación gradual

1. Exportar o conectar los datos de Search Console y Cloudflare en modo lectura; conservarlos fuera del repositorio si contienen datos de cuenta.
2. Crear una tarea semanal de Luna Max que produzca solo briefs en `docs/editorial/backlog/`.
3. Crear una tarea por brief que abra un cambio local con el frontmatter completo y estado `draft`; la publicación continúa siendo una aprobación humana.
4. Añadir una revisión editorial de fuentes, derechos de imagen, enlaces internos, `pnpm content:audit`, `pnpm build` y `pnpm astro check` como puerta de salida. El modo `pnpm content:audit -- --strict` solo pasa cuando cada artículo tenga fuentes y revisión; hoy sirve para medir la deuda, no para ocultarla. La aprobación debe registrarse en la plantilla de brief antes de publicar.
5. Tras cuatro semanas, medir clics orgánicos, impresiones, CTR, páginas por sesión y RPM por país antes de aumentar la frecuencia.

No se debe programar una creación masiva diaria: con el inventario actual, mejorar y citar las monografías existentes tiene más valor que ampliar el volumen.

La verificación de GitHub ejecuta la auditoría no estricta, `astro check` y el build en cada cambio. La CI evita regresiones de formato o compilación; no sustituye la comprobación humana de las afirmaciones.

## Flujo obligatorio

1. Elegir tema desde consultas e impresiones reales de Search Console, no desde volumen de palabras clave aislado.
2. Crear un brief: intención, lector, pregunta principal, información original que se añadirá y tres fuentes candidatas de primera mano.
3. Usar Luna para proponer esquema y borrador, marcando toda cifra o afirmación verificable con una fuente pendiente.
4. Un editor humano comprueba URL, fecha, contexto y licencia; elimina cualquier afirmación no sustentada.
5. Completar frontmatter con `sources`, `reviewedDate`, `reviewedBy`, `imageCredit` cuando corresponda y enlaces internos relevantes.
6. Ejecutar build, revisión de enlaces/imágenes y revisión visual antes de abrir un cambio para aprobación humana.
7. Publicar únicamente después de una aprobación editorial explícita.

## Política de imágenes

- Diagramas y láminas explicativas: se pueden generar de forma original, deben describirse como ilustración y llevar alt text preciso.
- Animales, lugares o sucesos reales: usar fotografía propia, comisionada, de dominio público o con licencia comercial/CC documentada.
- Nunca descargar, reutilizar ni transformar imágenes de páginas ajenas sin derechos verificables.
- Cada activo debe conservar procedencia, licencia y crédito en el registro editorial.

## Controles anti-slop

- No producir lotes de páginas para cubrir variantes mínimas de la misma búsqueda.
- Un artículo necesita una respuesta directa, análisis propio, fuentes comprobables y una ruta de lectura relacionada.
- Luna no puede crear autores, credenciales, revisiones, resultados de investigación, licencias ni referencias inexistentes.
