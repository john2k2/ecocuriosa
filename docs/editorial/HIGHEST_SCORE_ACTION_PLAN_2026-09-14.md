# EcoCuriosa — plan operativo para elevar la puntuación

**Corte:** 20 de septiembre de 2026  
**Propósito:** llevar cada área a su mejor estado demostrable sin convertir una auditoría técnica en una promesa de posiciones, aprobación o ingresos.

## Estado y puerta de salida

| Área | Estado actual | Meta operativa | Evidencia que permite cerrarla |
| --- | --- | --- | --- |
| SEO técnico / infraestructura | 92/100 en la auditoría técnica; build y enlaces correctos | 92/100 sostenido | Cero regresiones en CI, canonicales únicos, sitemap estable y P75 de campo medido |
| Diseño, navegación y móvil | Bueno; `srcset` responsive desplegado y laboratorio fuerte; validación visual amplia pendiente | Excelente medible | Rutas clave comprobadas a 320/375/768/1440 px, teclado, foco, contraste y CLS antes/después de anuncios |
| Indexación | 44 URLs descubiertas; cobertura agregada todavía en proceso | Cobertura controlada | Inspecciones de URL, exclusiones explicadas y sitemap leído sin errores |
| AdSense técnico | Preparado; sin slots reales ni aprobación | Listo tras aprobación | Estado **Ready**, CMP probado, políticas enlazadas, `ads.txt`, slots reales y prueba de CLS/visibilidad |
| E-E-A-T editorial | 56/100; 1 de 32 fichas revisada | 75/100 antes de escalar | 32 revisiones humanas, autoría verificable, trazabilidad afirmación→fuente, procedencia visual y correcciones |
| Citabilidad / autoridad / plataformas | Citabilidad 72; marca 20; plataformas 25 | Subir con valor original y distribución legítima | Menciones externas atribuibles, piezas originales y nuevas instantáneas de Search Console; no se compran enlaces ni tráfico |

## Prioridad inmediata (P0)

1. **Revisión editorial:** abrir la cola y cerrar ocho fichas por semana. Registrar `reviewedDate` y `reviewedBy` solo después de abrir cada fuente, comprobar especie/muestra/fecha/lugar/método y revisar la imagen.
2. **Autoría:** publicar nombres, experiencia y perfiles únicamente con autorización expresa. Mientras tanto, conservar la firma colectiva y no crear `Person`/`sameAs` ficticios.
3. **AdSense y privacidad:** el titular completa CMP, perfil de pagos y datos fiscales con información real y verificable; el repositorio no guarda documentos, banco, PIN ni contraseñas. AdSense solo permite servir anuncios tras revisión y estado **Ready** ([preparar el sitio](https://support.google.com/adsense/answer/7299563?hl=en), [configurar la cuenta](https://support.google.com/adsense/answer/7402256?hl=en)).
4. **Fuentes:** completar las 35 fechas de acceso que faltan durante la revisión, sin inventar fechas retroactivas. El catálogo es una lista de candidatos, no una aprobación de citas.
5. **Rendimiento de imágenes y tipografías:** conservar las variantes WebP 400/800/1200 px y ejecutar `pnpm content:responsive-image-audit` cuando se incorpore una ilustración. El preload de Albert Sans ya está desplegado; la última lectura pública dio LCP 2,7 s, FCP 1,4 s, CLS 0 y 93/100 de rendimiento en laboratorio. El siguiente experimento debe centrarse en CSS crítico/hero y repetirse antes de atribuir una tendencia.

## Plan de 30 días

### Días 1–7 — cumplimiento y base de medición

- [ ] Probar el CMP en EEE, Reino Unido y Suiza en aceptar, rechazar y gestionar opciones.
- [ ] Confirmar que `/politica-de-privacidad/`, `/politica-de-cookies/`, `ads.txt` y el publisher ID coinciden con la configuración real.
- [ ] Revisar ocho artículos P0 y guardar la relación afirmación→fuente en la plantilla editorial.
- [ ] Mantener separadas las métricas de Search Console (búsqueda), Cloudflare (edge) y RUM (experiencia). La API antigua de Zone Analytics está retirada; GraphQL es la ruta actual ([documentación](https://developers.cloudflare.com/analytics/graphql-api/)).

### Días 8–14 — calidad y recorrido

- [ ] Revisar ocho artículos más, priorizando salud, conservación, cifras y afirmaciones experimentales.
- [ ] Ejecutar prueba visual de portada, una categoría, un artículo y una página legal a 320/375/768/1440 px.
- [ ] Comprobar teclado, foco visible, zoom 400 %, `alt`, dimensiones y ausencia de desplazamiento horizontal.
- [x] Servir variantes WebP responsive para tarjetas y láminas; producción selecciona 800 px en móvil y el auditor confirma 32/32 artículos.
- [ ] Inspeccionar en Search Console las páginas con muchas impresiones y CTR bajo antes de cambiar títulos o crear URLs.

### Días 15–21 — autoridad y contenido original

- [ ] Completar autoría verificable si el titular la autoriza.
- [ ] Actualizar tres páginas con impresiones reales: respuesta inicial de 40–80 palabras, fuente primaria visible, límite explícito y enlace interno útil.
- [ ] Preparar una guía pilar solo cuando resuelva una necesidad que el archivo actual no cubre.
- [ ] Buscar colaboraciones atribuibles con instituciones o divulgadores; no comprar enlaces, menciones ni tráfico.

### Días 22–30 — monetización controlada

- [ ] Esperar la revisión y confirmar **Ready** en AdSense.
- [ ] Copiar los cinco IDs reales de bloques; no inventar slots.
- [ ] Activar primero una unidad superior y otra dentro de artículos largos, reservando altura y etiquetando anuncios.
- [ ] Medir 14 días: cobertura, viewability, RPM, CTR, CLS, LCP, INP, páginas por sesión y retorno. Cambiar una variable por vez.

## Protocolo E‑E‑A‑T para la puntuación máxima demostrable

La auditoría actual no permite cerrar esta área todavía: `content:review-precheck`
encuentra 31 fichas pendientes de 32, 22/31 con señales que requieren lectura
humana y solo 17/31 con fechas de acceso completas para sus fuentes. El control
estricto falla por la deuda de revisión, no por un problema de compilación. No se
deben convertir estos pendientes en fechas o responsables ficticios.

El protocolo sigue las preguntas de Google sobre contenido people-first,
fuentes claras, autoría y experiencia demostrable ([guía de contenido útil y
fiable](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)),
y usa `ProfilePage` únicamente para la organización real mientras no exista una
persona autorizada con perfil público ([documentación de ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page)).

| Señal | Implementación actual | Condición para subir de nivel | Evidencia de cierre |
| --- | --- | --- | --- |
| **Quién** | Firma colectiva, página Sobre Nosotros y byline enlazada | Nombre, rol y experiencia solo cuando el responsable los autorice y pueda sostenerlos | Byline, página de perfil y JSON-LD coinciden; no se inventan `Person`/`sameAs` |
| **Cómo** | Metodología, fuentes visibles, límites e imágenes acreditadas | Añadir una matriz de afirmaciones a cada revisión y conservar qué cambió | Ficha de revisión con fuente exacta, alcance, muestra, fecha, método y límite |
| **Qué se sabe** | 107 fuentes estructuradas; 107 enlaces corporales exactos | Abrir cada fuente del lote, corregir o matizar y registrar fecha real de acceso | 32/32 revisiones humanas; `content:audit -- --strict` pasa |
| **Qué no se sabe** | Artículos pendientes muestran estado editorial pendiente | Mantener incertidumbre visible y retirar cifras/causalidad sin respaldo | Cero afirmaciones pendientes en fichas aprobadas; hipótesis etiquetadas |
| **Responsabilidad** | Página de correcciones y contacto público | Registrar avisos, decisiones, cambios y versión sin borrar el historial | Corrección reproducible con fecha, motivo, fuente y responsable |
| **Visual** | 32/32 imágenes con alt y procedencia declarada | Abrir cada activo y comprobar que no representa otra especie, lugar o conducta | Crédito/licencia/creador verificables o ilustración claramente marcada |

Cadencia de trabajo: revisar nueve fichas de alto riesgo en la primera semana,
nueve de cifras y alcance en la segunda, nueve de método en la tercera y cuatro
de cierre en la cuarta. Si una fuente no se puede abrir o no cubre la afirmación,
la decisión permanece `pending`; el volumen de publicación se detiene hasta
resolverla.

El nuevo campo `editor` del JSON-LD solo aparece cuando existen `reviewedDate` y
`reviewedBy` reales, de modo que el marcado estructurado no presenta una
revisión que todavía no ocurrió.

## Contrato de Luna Max

Luna puede investigar fuentes candidatas, comparar alcance, proponer esquemas, generar borradores locales y producir ilustraciones didácticas. Cada ejecución debe conservar:

- `humanApproval: pending` y `publish: false`;
- fuentes con URL exacta, tipo, alcance y limitación;
- hechos, inferencias e hipótesis separados;
- plan de imagen y derechos pendientes;
- enlaces internos canónicos y una pregunta people-first.

Luna no puede inventar citas, autores, licencias, resultados de Search Console, revisiones, perfiles, ingresos ni aprobación de AdSense. La persona responsable abre cada fuente, revisa el texto y decide si publica.

## Decisión de imágenes

- **Mecanismo o proceso:** ilustración original, marcada como ilustración y revisada por precisión.
- **Especie o lugar real:** fotografía propia, encargada, de dominio público o con licencia explícita; guardar creador, URL, licencia, fecha y crédito.
- **Imagen encontrada o generada por IA:** no presentarla como observación documental ni reutilizarla sin permiso.

## Indicadores y detención

- No aumentar volumen si la cola humana crece o aparecen afirmaciones sin fuente específica.
- No interpretar solicitudes de Cloudflare como audiencia ni impresiones de Search Console como ingresos.
- No activar anuncios hasta CMP, políticas, estado **Ready**, slots reales y prueba móvil.
- Repetir la instantánea de Search Console cada dos semanas y el control de rendimiento después de cualquier cambio de anuncios, fuentes o plantilla.

Este plan complementa [`GEO-AUDIT-REPORT.md`](../../GEO-AUDIT-REPORT.md), [`EDITORIAL_GROWTH_SCORECARD.md`](../EDITORIAL_GROWTH_SCORECARD.md), [`LUNA_MAX_PROTOCOL.md`](./LUNA_MAX_PROTOCOL.md) y [`SOURCE_CATALOG.yml`](./SOURCE_CATALOG.yml).
