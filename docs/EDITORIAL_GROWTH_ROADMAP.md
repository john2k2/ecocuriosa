# Hoja de ruta editorial y de crecimiento 2026

Este documento complementa el flujo de [automatización editorial](./EDITORIAL_AUTOMATION.md). Su objetivo no es maximizar el número de URLs, sino elevar la utilidad, confianza y capacidad de monetización de EcoCuriosa de forma medible.

Las oportunidades de nuevos temas deben salir de la [biblioteca de inspiración editorial](./editorial/EDITORIAL_INSPIRATION_LIBRARY.md) y del [catálogo de fuentes](./editorial/SOURCE_CATALOG.yml), y solo pasan a publicación cuando una consulta real y una revisión humana justifican el brief.

Las primeras consultas observadas en Search Console se convierten en hipótesis
de título y descripción en el [backlog de CTR](./editorial/SEARCH_CONSOLE_CTR_BACKLOG_2026-09-13.md);
la muestra todavía es pequeña y ninguna variante se publica automáticamente.

## Condición de salida antes de escalar contenido

El archivo existente debe alcanzar estas condiciones antes de publicar a más de un artículo semanal:

| Puerta | Evidencia obligatoria | Estado de partida |
| --- | --- | --- |
| Fuentes | Dos fuentes por artículo; al menos una primaria o institucional cuando aplique | En progreso |
| Exactitud | Cada dato cuantitativo, afirmación médica, ecológica o de conservación se vincula a una fuente o se elimina/matiza | En progreso |
| Originalidad | Introducción, respuesta rápida, análisis y conclusión específicos del tema; sin cierre reutilizado | En progreso |
| Transparencia | Autor real, fecha de publicación, fuentes visibles y fecha de revisión solo cuando la revisión ocurrió | Parcial |
| Experiencia | Imagen con derechos documentados, alt text, enlaces internos pertinentes y lectura móvil comprobada | En progreso |
| Calidad técnica | `pnpm content:audit -- --strict`, `pnpm astro check` y `pnpm build` correctos | Parcial hasta completar la deuda editorial |

El comando `pnpm content:review-precheck` mantiene visible el orden de trabajo de la deuda editorial y falla si la cola de 31 artículos deja de coincidir con el inventario real. Su informe no sustituye abrir las fuentes ni registrar la revisión humana.

No se debe cambiar una fecha de revisión solo para mejorar el sitemap o la apariencia de actualización.

## Secuencia de 12 semanas

### Semanas 1–2: cerrar deuda y riesgos

1. Abrir las referencias de los 32 artículos, corregir enlaces/títulos incorrectos y dejar la fuente concreta visible para cada afirmación importante.
2. Reescribir las conclusiones repetidas y eliminar cifras o causalidades sin respaldo.
3. Priorizar salud, bienestar animal, conservación y clima: requieren lenguaje especialmente preciso.
4. Registrar revisión real por artículo, sin usar a Luna como autor o revisor humano ficticio.

**Resultado esperado:** inventario defendible ante lectores, buscadores y revisión de AdSense.

### Semanas 3–4: autoridad y recorridos de lectura

1. Crear una página de metodología editorial que explique cómo se eligen y verifican fuentes.
2. Completar perfiles de personas responsables solo con nombres, experiencia y datos reales autorizados.
3. Conectar cada artículo con 2–4 lecturas internas que respondan al siguiente paso natural del lector.
4. Revisar títulos y descripciones para que respondan a una pregunta concreta sin prometer certezas inexistentes.
5. Añadir un historial proporcional de correcciones y una declaración de independencia editorial solo cuando existan cambios, patrocinios o afiliados que documentar.

**Métrica:** reducción de páginas aisladas; aumento de clics internos y sesiones con más de una página.

### Semanas 5–8: publicación selectiva

1. Tomar consultas e impresiones reales de Search Console, no una lista genérica de palabras clave.
2. Crear hasta dos briefs semanales y publicar como máximo un artículo aprobado por semana.
3. Para cada nuevo artículo, aportar al menos uno de estos activos propios: diagrama original, tabla comparativa con fuentes, explicación práctica verificable o entrevista/experiencia atribuida.
4. Evitar canibalizar una URL existente: actualizar o consolidar antes de crear una variante muy similar.

**Métrica:** impresiones y CTR por consulta/página; no volumen de artículos.

### Semanas 9–12: optimización y monetización responsable

1. Comparar páginas de entrada, CTR, engagement, país y dispositivo en Search Console, Analytics y Cloudflare.
2. Mejorar primero las páginas con impresiones altas y CTR bajo mediante título, extracto y respuesta inicial más claros.
3. Revisar Core Web Vitals con datos de usuarios reales antes de alterar diseño o anuncios.
4. Si AdSense aprueba, medir RPM, viewability y CLS por plantilla; mantener espacios reservados y retirar ubicaciones que interrumpan la lectura.

**Métrica:** crecimiento orgánico y rendimiento publicitario sin deteriorar experiencia ni inducir clics.

## Modelo operativo Luna Max

```text
Métricas de solo lectura
        ↓
Luna: propuesta de oportunidad y brief con fuentes candidatas
        ↓
Editor: abre fuentes, aprueba ángulo y derechos de la imagen
        ↓
Luna: borrador local marcado como draft
        ↓
Editor: comprueba cada afirmación, aporta experiencia/análisis y aprueba
        ↓
Auditorías técnicas + revisión visual
        ↓
Publicación humana y medición posterior
```

La salida de Luna debe contener una tabla de afirmaciones, fuente exacta y nivel de certeza. Si falta una fuente verificable, la afirmación queda fuera. Nunca debe inventar autoría, imágenes con licencia, resultados, revisiones o citas.

## Puerta de cuenta y pagos de AdSense

Esta puerta es manual y separada del flujo editorial. El titular debe completar en AdSense la información legal, fiscal y de pagos que corresponda a su situación real; Luna y el repositorio no deben recibir documentos, identificaciones, números fiscales, datos bancarios ni contraseñas.

1. **Antes de la aprobación:** mantener el perfil coherente y completar el mensaje CMP certificado para EEE, Reino Unido y Suiza cuando AdSense lo solicite. El mensaje de consentimiento no sustituye la política de privacidad ni una revisión legal local.
2. **Cuando Google lo solicite:** confirmar nombre legal, país y dirección postal real en el [perfil de pagos](https://support.google.com/adsense/answer/7363450?hl=es); no usar una dirección temporal solo para superar la revisión.
3. **Después del umbral de verificación:** responder al [PIN de dirección](https://support.google.com/adsense/answer/157667?hl=es), completar impuestos y elegir el método de pago disponible para el país del perfil.
4. **Si aparece una retención:** seguir las [causas de retención](https://support.google.com/adsense/answer/1714364?hl=es) y resolver la alerta en la cuenta; no intentar corregirla publicando más páginas o cambiando anuncios.

La aprobación de contenido, el perfil de pagos y el cobro son decisiones distintas: completar el perfil no garantiza aprobación editorial ni ingresos. Las cifras de RPM, CPM o audiencia solo se podrán evaluar con datos reales después de que la cuenta publique anuncios y acumule impresiones válidas.

## Estrategia de imágenes

| Caso | Decisión |
| --- | --- |
| Fenómeno, anatomía, proceso o comparación | Crear diagrama/ilustración original con IA o diseño propio, identificada como ilustración y con alt text descriptivo |
| Animal, lugar o evento real | Fotografía propia, encargada, dominio público o licencia comercial/CC comprobable; conservar crédito y licencia |
| Imagen encontrada en una web | No reutilizar ni transformar sin permiso/licencia verificable |
| Imagen IA de una especie real | Puede ser ilustrativa, no debe presentarse como fotografía documental ni mostrar una conducta específica como si estuviera observada |

## Tablero de control mensual

| Área | Fuente | Señal | Decisión |
| --- | --- | --- | --- |
| Descubrimiento | Search Console | Consultas, impresiones, CTR y posición | Actualizar, expandir o consolidar contenido |
| Audiencia | Analytics | Entradas, páginas por sesión, retorno y scroll | Mejorar recorrido y respuesta inicial |
| Rendimiento | Cloudflare / CrUX | TTFB, LCP, INP, CLS, países y caché | Corregir plantilla o entrega antes de sumar scripts |
| Ingresos | AdSense, tras aprobación | RPM, cobertura y viewability | Ajustar densidad y posición sin inducir clics |
| Calidad | Auditoría local | Fuentes, revisiones, imágenes y repetición | Bloquear publicación si falla |

No se extraen métricas privadas al repositorio. Los informes deben guardar únicamente agregados y decisiones, no datos de cuenta, identificadores ni información personal.

## Plan maestro de ejecución y puertas de puntuación

Esta tabla convierte la puntuación orientativa en trabajo verificable. Una
puntuación de laboratorio o una fuente catalogada no cierra una puerta por sí
sola: cada salida exige la evidencia indicada.

| Frente | Estado comprobado | Próxima acción | Puerta de salida | Responsable |
| --- | --- | --- | --- | --- |
| SEO técnico | Auditorías locales y HTML generado sin problemas; Lighthouse móvil alto en laboratorio | Ejecutar la matriz pública y revisar redirecciones, sitemap y metadatos después de cada cambio | 0 enlaces internos rotos, canonical único, build/`astro check` verdes y P75 de campo disponible o documentado como no elegible | Operación técnica |
| Diseño, navegación y móvil | Navegación por categorías, búsqueda, foco visible, imágenes con dimensiones y layout reservado; auditoría estática del menú sin incidencias | Probar portada, categoría, artículo, legales y menú con teclado en 320/375/768/1440 px | Ningún overflow, foco perdido, contraste insuficiente ni CLS material antes/después de anuncios | Operación técnica + editor |
| Indexación | Sitemap con 43 páginas descubiertas en la última lectura autenticada; la propiedad todavía está procesando cobertura | Tras publicar `/correcciones/`, volver a enviar el sitemap local de 44 URLs e inspeccionar portada, categorías, cinco artículos prioritarios y páginas de confianza en Search Console | Cada URL canónica tiene estado explicado; exclusiones no deseadas corregidas y sitemap actualizado | Titular de Search Console |
| Bing/Copilot | No hay cuenta Bing verificada ni envío IndexNow confirmado | Verificar el sitio en Bing Webmaster Tools y probar una sola URL actualizada; conservar sitemap y ledger de cambios | Estado de rastreo/indexación observado en Bing; ningún envío masivo ni credencial en el repositorio | Titular + operación técnica |
| E‑E‑A‑T | 32 artículos con fuentes y derechos declarados; 1/32 revisado | Revisar ocho fichas por semana, empezando por las nueve de alto riesgo; aplicar correcciones de la cola | 32/32 con nombre real, fecha real, afirmación→fuente, límites y procedencia comprobados | Editor humano |
| Autoría y transparencia | Equipo editorial y metodología visibles; no hay credenciales individuales inventadas | Completar perfil solo con datos reales autorizados y registrar roles de contribución | Bylines, roles, correcciones y uso de IA coinciden entre HTML, JSON-LD y página editorial | Titular + editor |
| Audiencia orgánica | 179 impresiones, 1 clic, CTR 0,6 % y posición media 15,1 en la lectura del 13/09; consultas principales: architeuthis dux, geodinamo y pulpo mimo | Testear una hipótesis de título/extracto por página con impresiones, no crear duplicados; conservar el detalle en [`SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md`](editorial/SEARCH_CONSOLE_SNAPSHOT_2026-09-13.md) | Comparación fechada de CTR, posición, país, dispositivo y páginas por sesión; sin atribuir causalidad con muestras pequeñas | Editor de crecimiento |
| Distribución y marca | No se cuentan menciones externas como autoridad hasta tener evidencia | Distribuir manualmente piezas revisadas en comunidades pertinentes y buscar colaboraciones legítimas | Registro de publicación, enlace, audiencia y respuesta; cero compra de enlaces o perfiles falsos | Editor de crecimiento |
| Monetización | Código cliente preparado; slots reales aún no configurados | Completar CMP y perfil de AdSense en la cuenta con datos verdaderos; esperar decisión | Aprobación de Google, `ads.txt` 200, slots reales, prueba de consentimiento y CLS estable | Titular de AdSense |
| Automatización Luna Max | Briefs y drafts locales con `publish: false`; 31 revisiones pendientes | Ejecutar una cadencia semanal de investigación y una revisión mensual de resultados | Ninguna tarea puede escribir producción, inventar fuentes/autoría/licencias o saltarse una revisión humana | Operación + editor |

### Cadencia mínima que mantiene el sistema sano

1. **Cada semana:** revisar ocho artículos pendientes o, si no alcanza el
   tiempo, dejar explícitamente la cola sin reducirla; registrar fuentes,
   alcance, límites, enlaces y decisión editorial.
2. **Cada dos semanas:** revisar en Search Console las páginas y consultas con
   impresiones; elegir una sola hipótesis de mejora y anotar el período de
   comparación. Cloudflare se usa para entrega y errores, no como sustituto de
   audiencia humana.
3. **Cada mes:** comprobar producción, sitemap, redirecciones, `ads.txt` si ya
   existe, consentimiento, Lighthouse de muestra y CrUX cuando haya datos;
   archivar solo agregados.
4. **Cada trimestre:** retirar o consolidar páginas que no aporten una
   respuesta propia, renovar fuentes sensibles a fecha y revisar la política
   editorial, de privacidad y de correcciones.

### Decisiones que no se automatizan

- Introducir nombre, dirección, impuestos, PIN, banco o cualquier documento en
  AdSense.
- Registrar una persona como autora o revisora, o afirmar que una fuente fue
  leída, sin que esa persona lo haya hecho.
- Publicar un artículo o una imagen generada, comprar enlaces, crear perfiles
  de marca o enviar mensajes externos.
- Activar anuncios o cambiar densidad cuando la cuenta no esté aprobada o no
  exista una medición de experiencia posterior al cambio.

El plan se considera cumplido por etapas: primero se cierran calidad y
medición, después se amplía el archivo y solo al final se optimiza el ingreso.
Ninguna etapa garantiza aprobación, tráfico, RPM o ingresos; esas señales se
evalúan con datos auténticos una vez que existan.
