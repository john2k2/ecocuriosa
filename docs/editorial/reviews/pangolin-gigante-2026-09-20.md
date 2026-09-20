# Paquete de contraste — Pangolín gigante

```yaml
slug: pangolin-gigante-armadura-queratina-amenazas
url: https://ecocuriosa.com/fauna-fascinante/pangolin-gigante-armadura-queratina-amenazas/
articleVersion: "working tree reviewed on 2026-09-20"
reviewerName: "Pendiente de confirmación por Equipo Editorial EcoCuriosa"
reviewDate: 2026-09-20
decision: pending
reviewMode: "contraste asistido; no sustituye aprobación humana"
```

## Fuentes abiertas

1. [Giant Pangolin (*Smutsia gigantea*)](https://www.mammaldiversity.org/taxon/1005800/) — Mammal Diversity Database / American Society of Mammalogists; taxonomía, distribución y estado.
2. [The global trafficking of Pangolins](https://www.traffic.org/publications/reports/the-global-trafficking-of-pangolins/) — TRAFFIC / IUCN SSC; decomisos y rutas en 2010–2015, con límites históricos explícitos.
3. [Structure and mechanical behaviors of protective armored pangolin scales](https://pubmed.ncbi.nlm.nih.gov/26703230/) — PubMed; ensayo mecánico primario, pendiente de reapertura humana.
4. [Listing of pangolins in the Appendices](https://cites.org/sites/default/files/eng/com/ac/31/Docs/E-AC31-038.pdf) — CITES; documento legal enlazado, pendiente de comprobación directa por PDF.

## Matriz de afirmaciones

| ID | Afirmación del artículo | Evidencia comprobada | Alcance que debe conservarse | Estado |
| --- | --- | --- | --- | --- |
| C1 | *Smutsia gigantea* es el pangolín gigante africano y su distribución se extiende por países de África occidental y central. | Mammal Diversity Database muestra taxón, distribución por países y estado de conservación. | Conservar el nombre científico y no extender la distribución fuera de la ficha taxonómica. | verified |
| C2 | Las escamas de los pangolines son estructuras de queratina organizadas en capas superpuestas, no placas óseas. | El estudio mecánico primario describe macrocapas de elementos de queratina superpuestos. | No atribuir a *S. gigantea* resultados mecánicos medidos en otra especie sin indicarlo. | verified |
| C3 | El solapamiento y la geometría de las escamas pueden disipar cargas y aportar protección mecánica. | El estudio primario analiza propiedades mecánicas, hidratación, orientación y modos de deformación de las escamas. | Valores de dureza/resistencia dependen de ejemplar, especie y ensayo. | verified |
| C4 | TRAFFIC registró al menos 120 toneladas confiscadas, 159 rutas y 1.270 incidentes entre 2010 y 2015. | TRAFFIC expone esas cifras y el periodo analizado en su informe. | Son decomisos documentados, no un censo total ni una tasa actual de extracción. | verified |
| C5 | Las ocho especies de pangolín están incluidas en los apéndices de CITES. | El artículo enlaza el documento del Comité de Animales de CITES, pero el PDF no se reabrió en esta pasada. | Verificar la versión legal vigente antes de resumir categoría o alcance. | pending |
| C6 | No hay base clínica en las fuentes de esta ficha para afirmar que las escamas curan enfermedades. | Es un límite editorial y de seguridad; las fuentes consultadas no aportan evidencia clínica para esa promesa. | No presentar la ausencia de evidencia como ensayo clínico negativo ni dar consejo médico. | verified |

## Imagen, enlaces y políticas

- `public/images/articles/pangolin-gigante-armadura.svg` se declara como ilustración original de EcoCuriosa; no debe confundirse con una fotografía de la especie.
- Las cuatro fuentes aparecen en el frontmatter y en referencias; el auditor de referencias confirma los enlaces exactos.
- La revisión humana debe verificar el PDF de CITES y que las cifras históricas de TRAFFIC lleven siempre el periodo 2010–2015.

## Pendiente antes de cerrar

Este paquete conserva `decision: pending`. Una persona debe abrir PubMed y el PDF de CITES, confirmar especie, ensayo mecánico y categorías legales, revisar la ilustración y comprobar la redacción sobre usos medicinales. Solo después puede registrar la aprobación pública y ejecutar `pnpm content:audit -- --strict`.
