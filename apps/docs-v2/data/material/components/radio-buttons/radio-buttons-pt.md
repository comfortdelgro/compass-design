---
productId: material-ui
title: Componente React para Botões de opção
components: Radio, RadioGroup, FormControl, FormLabel, FormControlLabel
githubLabel: 'component: radio'
materialDesign: 'https://m2.material.io/components/selection-controls#radio-buttons'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
---

# Botões de opção

<p class="description">Botões de opção permitem o usuário selecionar uma das opções de um conjunto.</p>

Use [botões de opção](https://m2.material.io/components/radio-buttons) quando um usuário precisar ver todas as opções disponíveis. If available options can be collapsed, consider using a [Select component](/material-ui/react-select/) because it uses less space.

Os botões de opção devem ter a opção comum e mais usada selecionada por padrão.

{{"component": "modules/components/ComponentLinkHeader.js"}}

## Radio group

O componente `RadioGroup` é um wrapper utilizado para agrupar componentes `Radio`, fornece uma API mais simples e adequada para a acessibilidade por teclado.

{{"demo": "RadioButtonsGroup.js"}}

### Direção

To lay out the buttons horizontally, set the `row` prop:

{{"demo": "RowRadioButtonsGroup.js"}}

### Controlled

You can control the radio with the `value` and `onChange` props:

{{"demo": "ControlledRadioButtonsGroup.js"}}

## Botões de opção independentes

O componente `Radio` também pode ser usado de forma independente, sem o wrapper RadioGroup.

{{"demo": "RadioButtons.js"}}

## Tamanho

Use the `size` prop or customize the font size of the svg icons to change the size of the radios.

{{"demo": "SizeRadioButtons.js"}}

## Cor

{{"demo": "ColorRadioButtons.js"}}

## Posicionamento do rótulo

Você pode alterar o posicionamento do rótulo com o componente `FormControlLabel` na propriedade `labelPlacement`:

{{"demo": "FormControlLabelPlacement.js"}}

## Exibição de erro

Em geral, os botões de opção devem ter um valor selecionado por padrão. Se esse não for o caso, você pode exibir um erro se nenhum valor estiver selecionado quando o formulário for submetido:

{{"demo": "ErrorRadios.js"}}

## Opções customizadas

Aqui está um exemplo de customização do componente. You can learn more about this in the [overrides documentation page](/material-ui/customization/how-to-customize/).

{{"demo": "CustomizedRadios.js"}}

## `useRadioGroup`

Para situações de uso avançadas de customização, um hook `useRadioGroup()` é exposto. Ele retorna o valor do contexto do grupo de botões de opção pai. O componente de botões de opção usa este hook internamente.

### API

```jsx
import { useRadioGroup } from '@material-ui/core/RadioGroup';
```

#### Retornos

`value` (_object_):

- `value.name` (_string_ [opcional]): O nome usado para fazer referência ao valor do controle.
- `value.onChange` (_func_ [optional]): Callback fired when a radio button is selected.
- `value.value` (_any_ [opcional]): Valor do botão de opção selecionado.

#### Exemplo

{{"demo": "UseRadioGroup.js"}}

## Quando usar

- [Caixas de Seleção vs. Botões de Opção](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)

## Acessibilidade

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

- Todos os controles de formulário devem ter rótulos, e isso inclui os botões de opção, caixas de seleção e interruptores. In most cases, this is done by using the `<label>` element ([FormControlLabel](/material-ui/api/form-control-label/)).
- Quando um rótulo não pode ser usado, é necessário adicionar um atributo diretamente no componente de entrada. Nesse caso você pode aplicar um atributo adicional (por exemplo, `aria-label`,`aria-labelledby`, `title`) através da propriedade `inputProps`.

```jsx
<Radio
  value="radioA"
  inputProps={{
    'aria-label': 'Radio A',
  }}
/>
```
