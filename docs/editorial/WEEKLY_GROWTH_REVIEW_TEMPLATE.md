# Revisión semanal de crecimiento

Duplicar esta plantilla fuera del repositorio para cada semana. No incluir IDs de cuenta, correos, IPs, ni exportaciones con datos personales.

## Periodo y responsable

- Periodo analizado:
- Persona responsable:
- Cambios publicados durante el periodo:
- Decisiones pendientes:

## Search Console: descubrimiento orgánico

| Página o consulta | Impresiones | Clics | CTR | Posición | Lectura |
| --- | ---: | ---: | ---: | ---: | --- |
|  |  |  |  |  |  |

Preguntas de decisión:

1. ¿Hay una página con muchas impresiones y CTR bajo? Probar título y extracto más fieles antes de crear otra URL.
2. ¿Dos URLs reciben la misma consulta? Elegir una página principal, enlazar, consolidar o diferenciar intención.
3. ¿Una consulta revela una pregunta no respondida por el inventario? Crear un brief, no publicar directamente.

## Cloudflare y experiencia real

| Métrica o ruta | País/dispositivo | Tendencia | Posible causa | Acción |
| --- | --- | --- | --- | --- |
| TTFB / caché |  |  |  |  |
| LCP / INP / CLS si existe CrUX |  |  |  |  |
| Error 4xx/5xx |  |  |  |  |

Una cifra agregada de Cloudflare no equivale a audiencia orgánica. Contrastar siempre con Search Console o Analytics antes de decidir un tema editorial.

Las pruebas de laboratorio (por ejemplo, un test puntual de Lighthouse o PageSpeed) sirven para detectar regresiones, pero no sustituyen los Core Web Vitals de usuarios reales. Registrar la herramienta, fecha, dispositivo y URL si se usa una prueba de laboratorio.

Objetivos operativos de campo (P75, separados por móvil y escritorio): LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1. TTFB ≤ 0,8 s sirve como alerta diagnóstica, no como requisito de posicionamiento. Si una métrica cae en “Needs improvement” o “Poor”, corregir la plantilla o la entrega antes de añadir scripts o aumentar la densidad publicitaria. Estas metas siguen la documentación de [web.dev](https://web.dev/articles/vitals?hl=en) y [Google Search Central](https://developers.google.com/search/docs/appearance/core-web-vitals).

## Calidad y actualización

| Artículo | Motivo de revisión | Fuente abierta | Corrección necesaria | Responsable | Estado |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  | pendiente |

Ejecutar antes de publicar una corrección:

```bash
pnpm content:audit
pnpm astro check
pnpm build
```

Registrar `reviewedDate` y `reviewedBy` únicamente si una persona responsable comprobó la revisión.

## Monetización, solo después de aprobación de AdSense

| Plantilla | RPM / cobertura | Experiencia/CLS | Acción |
| --- | --- | --- | --- |
| Artículo |  |  |  |
| Categoría |  |  |  |

No usar clics propios, tráfico incentivado ni ubicaciones que se parezcan a navegación. Si una posición empeora lectura, velocidad o CLS, retirarla aunque genere impresiones.

## Decisiones de la semana

1. Mantener:
2. Actualizar:
3. Consolidar o retirar:
4. Briefs que pasan a investigación:
5. Experimentos que no se ejecutarán y motivo:
