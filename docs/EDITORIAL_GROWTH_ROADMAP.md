# Hoja de ruta editorial y de crecimiento 2026

Este documento complementa el flujo de [automatización editorial](./EDITORIAL_AUTOMATION.md). Su objetivo no es maximizar el número de URLs, sino elevar la utilidad, confianza y capacidad de monetización de EcoCuriosa de forma medible.

Las oportunidades de nuevos temas deben salir de la [biblioteca de inspiración editorial](./editorial/EDITORIAL_INSPIRATION_LIBRARY.md) y del [catálogo de fuentes](./editorial/SOURCE_CATALOG.yml), y solo pasan a publicación cuando una consulta real y una revisión humana justifican el brief.

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
