export default {
  extends: ["stylelint-config-standard"],
  rules: {
    // Erkennt falsch geschriebene CSS-Eigenschaften, z. B. "colour" statt "color"
    "property-no-unknown": true,

    // Erkennt ungültige Farbcodes, z.B. "#fffff"
    "color-no-invalid-hex": true,

    // Erkennt doppelte Eigenschaften in einem CSS-Block, z. B. mehrmals "color"
    "declaration-block-no-duplicate-properties": true,

    // Erkennt doppelte Selektoren, z. B. ".button" an zwei Stellen
    "no-duplicate-selectors": true,

    // Demo-Regel: ID-Selektoren wie "#header" sind nicht erlaubt
    "selector-max-id": 0
  }
};