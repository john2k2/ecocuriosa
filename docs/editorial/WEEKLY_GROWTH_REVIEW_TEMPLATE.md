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
