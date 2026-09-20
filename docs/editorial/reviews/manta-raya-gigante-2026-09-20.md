# Paquete de contraste — Manta raya gigante

```yaml
slug: manta-raya-gigante-inteligencia-cerebro-peces
url: https://ecocuriosa.com/especies-marinas/manta-raya-gigante-inteligencia-cerebro-peces/
articleVersion: "working tree reviewed on 2026-09-20"
reviewerName: "Pendiente de confirmación por Equipo Editorial EcoCuriosa"
reviewDate: 2026-09-20
decision: pending
reviewMode: "contraste asistido; no sustituye aprobación humana"
```

## Fuentes abiertas

1. [Giant Manta Ray](https://www.fisheries.noaa.gov/species/giant-manta-ray) — NOAA Fisheries; tamaño, profundidad, amenazas, población y estado legal, ficha actualizada en enero de 2026.
2. [Contingency checking and self-directed behaviors in giant manta rays](https://doi.org/10.1007/s10164-016-0462-z) — experimento de espejo; el DOI requiere reapertura humana para comprobar texto y muestra.
3. [Cranial endothermy in mobulid rays](https://pubmed.ncbi.nlm.nih.gov/39434239/) — PubMed; la ficha resume una hipótesis anatómica/evolutiva y requiere comprobación humana del artículo completo.

## Matriz de afirmaciones

| ID | Afirmación del artículo | Evidencia comprobada | Alcance que debe conservarse | Estado |
| --- | --- | --- | --- | --- |
| C1 | La manta raya gigante (*Mobula birostris*) puede alcanzar hasta 26 pies de anchura de disco y 5.300 libras. | NOAA Fisheries publica ambos máximos en su ficha de especie. | Son máximos reportados, no el promedio de la especie ni una medida de cada individuo. | verified |
| C2 | Puede alimentarse en aguas someras y realizar inmersiones de 200–450 m y, en algunos registros, superiores a 1.000 m. | NOAA resume ese rango de uso de profundidad y su relación con presas/termoclina. | No convertirlo en una profundidad fija ni universal. | verified |
| C3 | La población mundial es desconocida y las poblaciones regionales están fragmentadas. | NOAA indica población global desconocida y ofrece estimaciones regionales variables. | No extrapolar una estimación regional a toda la especie. | verified |
| C4 | La pesca dirigida, la captura incidental y el comercio de branquias son amenazas relevantes; la especie figura como amenazada en EE. UU. | NOAA enumera amenazas y estado ESA/CITES/SPAW en la ficha actualizada. | Mantener la jurisdicción y el marco legal explícitos; no llamarla “en peligro” sin categoría concreta. | verified |
| C5 | Dos mantas cautivas mostraron movimientos compatibles con comprobación de contingencia frente a un espejo. | El experimento publicado describe dos individuos, conductas repetitivas y autodirigidas; la prueba de marca no permite una conclusión fuerte de autorreconocimiento. | No afirmar autoconciencia humana; indicar muestra cautiva, pequeña y experimental. | verified |
| C6 | La termorregulación craneal de mobúlidos es una hipótesis anatómica que no prueba inteligencia. | El resumen de PubMed formula una hipótesis evolutiva sobre conservar calor en aguas frías y señala que hacen falta pruebas mecanísticas adicionales. | No convertir modelización o anatomía en medición directa de cada manta ni en rendimiento cognitivo. | verified |

## Imagen, enlaces y políticas

- `public/images/articles/manta-raya-gigante.svg` se declara como ilustración original de EcoCuriosa; no es una fotografía ni una observación experimental.
- Los tres enlaces del frontmatter aparecen en el texto; el auditor de referencias confirma las coincidencias exactas.
- La revisión humana debe comprobar especialmente el lenguaje de “inteligencia”, “autoconciencia” y “cerebro termogénico”.

## Pendiente antes de cerrar

Este paquete conserva `decision: pending`. Una persona debe abrir el DOI del experimento de espejo y el registro PubMed, confirmar muestra, especie y método, revisar la ilustración y comprobar el estado legal vigente en NOAA. Solo entonces puede registrar la aprobación pública y ejecutar `pnpm content:audit -- --strict`.
