# Registro de integridad bibliográfica

Plantilla para comprobar las fuentes de un artículo antes de registrar una
revisión editorial. Este documento no sustituye abrir la fuente ni una lectura
humana; sirve para dejar trazable qué se comprobó, cuándo y con qué alcance.

```yaml
slug: "[slug del artículo]"
articleVersion: "[commit o fecha de trabajo]"
reviewStatus: pending
reviewerName: "[nombre público real o pendiente]"
reviewedDate: null
sources:
  - sourceId: "[id de SOURCE_CATALOG.yml]"
    url: "https://..."
    accessedDate: "AAAA-MM-DD"
    titleMatched: pending
    authorsMatched: pending
    dateMatched: pending
    doi: null
    pmid: null
    crossrefStatus: pending
    pubmedRelation: none
    conflictOfInterestVisible: pending
    reportingGuideline: not-applicable
    scopeConfirmed: pending
    action: keep | correct | replace | remove
    notes: "[muestra, método, especie, población, fecha y límites]"
```

## Estados permitidos

- `pending`: todavía requiere abrir la fuente o confirmar el campo.
- `keep`: la referencia respalda una afirmación concreta con el alcance declarado.
- `correct`: la fuente sigue siendo útil, pero el artículo debe ajustar una frase.
- `replace`: la fuente no es suficiente o fue sustituida por una versión válida.
- `remove`: la referencia no respalda el texto o tiene un estado que impide usarla.

## Comprobación mínima

1. Resolver el DOI o PMID y comparar título, autoría y fecha con la ficha.
2. Revisar Crossmark/Crossref cuando exista DOI para detectar correcciones,
   retractaciones, actualizaciones, licencia y relaciones de versión.
3. Revisar PubMed cuando exista PMID para errata, retractación, expresión de
   preocupación, actualización y conflicto de interés visible.
4. Conservar la muestra, método, especie, población y fecha; no convertir la
   ausencia de una marca bibliográfica en prueba de ausencia de conflicto.
5. Registrar la frase concreta que queda respaldada y su limitación; una fuente
   de contexto no debe sostener una cifra que no midió.
6. Solo después de completar todas las filas puede una persona registrar
   `reviewedDate` y `reviewedBy` en el frontmatter del artículo.

No guardar credenciales, datos bancarios, documentos de identidad ni
exportaciones privadas en este registro.
