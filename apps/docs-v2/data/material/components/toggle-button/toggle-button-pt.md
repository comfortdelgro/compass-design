---
productId: material-ui
title: Toggle button React component
components: ToggleButton, ToggleButtonGroup
githubLabel: 'component: toggle button'
materialDesign: 'https://m2.material.io/components/buttons#toggle-button'
---

# Toggle button

<p class="description">Os botões de alternância podem ser usados para agrupar opções relacionadas.</p>

Para enfatizar grupos de [botões de alternância](https://m2.material.io/components/buttons#toggle-button) relacionados, o grupo deve ter um contêiner em comum. O `ToggleButtonGroup` controla o estado selecionado de seus botões filhos através de sua propriedade `value`.

{{"component": "modules/components/ComponentLinkHeader.js"}}

## Seleção exclusiva

Com seleção exclusiva, selecionar uma opção desseleciona qualquer outra.

In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time.

**Note**: Exclusive selection does not enforce that a button must be active. For that effect see [enforce value set](#enforce-value-set).

{{"demo": "ToggleButtons.js"}}

## Seleção múltipla

Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected.

{{"demo": "ToggleButtonsMultiple.js"}}

## Tamanho

For larger or smaller buttons, use the `size` prop.

{{"demo": "ToggleButtonSizes.js"}}

## Cor

{{"demo": "ColorToggleButton.js"}}

## Botões verticais

The buttons can be stacked vertically with the `orientation` prop set to "vertical".

{{"demo": "VerticalToggleButtons.js"}}

## Forçar valor definido

If you want to enforce that at least one button must be active, you can adapt your handleChange function.

```jsx
const handleFormat = (event, newFormats) => {
  if (newFormats.length) {
    setFormats(newFormats);
  }
};

const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};
```

{{"demo": "ToggleButtonNotEmpty.js"}}

## Botão de alternância autônomo

{{"demo": "StandaloneToggleButton.js"}}

## Botão de alternância customizado

Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](/material-ui/customization/how-to-customize/).

{{"demo": "CustomizedDividers.js", "bg": true}}

## Acessibilidade

### ARIA

- ToggleButtonGroup possui `role="group"`. Você deve fornecer um rótulo acessível com `aria-label="label"`, `aria-labelledby="id"` ou `<label>`.
- ToggleButton define `aria-pressed="<bool>"` de acordo com o estado do botão. Você deve rotular cada botão com `aria-label`.

### Teclado

At present, toggle buttons are in DOM order. Navigate between them with the tab key. The button behavior follows standard keyboard semantics.
