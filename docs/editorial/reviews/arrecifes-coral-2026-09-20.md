# Paquete de contraste — Arrecifes de coral

```yaml
slug: arrecifes-de-coral-simbiosis-zooxantelas-blanqueamiento
url: https://ecocuriosa.com/especies-marinas/arrecifes-de-coral-simbiosis-zooxantelas-blanqueamiento/
articleVersion: "working tree reviewed on 2026-09-20"
reviewerName: "Pendiente de confirmación por Equipo Editorial EcoCuriosa"
reviewDate: 2026-09-20
decision: pending
reviewMode: "contraste asistido; no sustituye aprobación humana"
```

## Fuentes abiertas

1. [What is coral bleaching?](https://oceanservice.noaa.gov/facts/coral_bleach.html) — NOAA Ocean Service; estrés, pérdida de simbiontes, recuperación y causas no térmicas.
2. [Heat-driven functional extinction of Caribbean *Acropora* corals from Florida's Coral Reef](https://www.usgs.gov/publications/heat-driven-functional-extinction-caribbean-acropora-corals-floridas-coral-reef) — USGS; resumen institucional del estudio de campo publicado en *Science*.
3. [Coral bleaching from a single cell perspective](https://pmc.ncbi.nlm.nih.gov/articles/PMC5955907/) — revisión celular en PMC; el acceso presentó protección intermedia durante esta pasada y requiere reapertura humana.
4. [Current Global Bleaching: Status Update & Data Submission](https://www.coralreefwatch.noaa.gov/satellite/research/coral_bleaching_report.php) — NOAA Coral Reef Watch; la cifra del evento global debe conservar su fecha de corte y metodología satelital.

## Matriz de afirmaciones

| ID | Afirmación del artículo | Evidencia comprobada | Alcance que debe conservarse | Estado |
| --- | --- | --- | --- | --- |
| C1 | El blanqueamiento puede ocurrir cuando el coral expulsa simbiontes o pierde pigmentos bajo estrés. | NOAA describe estrés, expulsión de algas simbióticas y pérdida de color; también advierte que no todo blanqueamiento es térmico. | No presentarlo como muerte inmediata ni como fenómeno causado solo por calor. | verified |
| C2 | La simbiosis con dinoflagelados de Symbiodiniaceae aporta productos de la fotosíntesis al pólipo. | La revisión de PMC es la fuente declarada para el mecanismo, pero debe reabrirse manualmente por la protección intermedia observada. | Mantener la variación entre especies, colonias, luz y temperatura. | pending |
| C3 | NOAA Coral Reef Watch informó una actualización fechada sobre el cuarto evento global y el estrés térmico acumulado. | La URL está enlazada en el artículo; la cifra de área mundial requiere comprobación humana del corte temporal y del método. | No confundir grados de calentamiento detectados por satélite con colonias muertas. | pending |
| C4 | El estudio de Florida examinó unos 560 km tras la ola de calor marina de 2023 y registró SST de al menos 31 °C durante 40,7 días de promedio. | El resumen de USGS expone región, evento y duración térmica. | Es un estudio regional y fechado, no una condición universal de los arrecifes. | verified |
| C5 | En Florida Keys y Dry Tortugas murió entre 97,8 % y 100 % de las colonias estudiadas de dos especies de *Acropora*; offshore la mortalidad fue 37,9 %. | USGS resume esos porcentajes y distingue las subregiones. | Son dos especies y sitios concretos; no afirmar extinción planetaria. | verified |
| C6 | Un coral blanqueado puede recuperarse si el estrés disminuye antes de que el daño sea letal. | NOAA explica que el blanqueamiento no implica muerte inmediata y que la recuperación depende de la intensidad y duración del estrés. | No prometer recuperación ni usarla para minimizar el riesgo de mortalidad. | verified |

## Imagen, enlaces y políticas

- `public/images/articles/arrecife-coral-zooxantelas.svg` se declara como ilustración original de EcoCuriosa; no debe presentarse como fotografía ni como evidencia de campo.
- Las cuatro fuentes del artículo aparecen en el frontmatter y en referencias; el auditor de referencias comprueba los enlaces exactos.
- La persona revisora debe comprobar que los porcentajes regionales, la fecha del evento y la cifra satelital no se mezclen en un único indicador.

## Pendiente antes de cerrar

Este paquete es un contraste asistido y conserva `decision: pending`. Una persona debe abrir de nuevo la revisión celular, la actualización de Coral Reef Watch y el DOI de *Science*, revisar la ilustración y confirmar que la redacción distingue mecanismo, seguimiento satelital y mortalidad de campo. Solo después puede registrar la aprobación humana en el artículo y ejecutar `pnpm content:audit -- --strict`.
