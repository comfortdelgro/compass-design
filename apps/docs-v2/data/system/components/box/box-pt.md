---
productId: system
title: React Box component
components: Box
githubLabel: 'component: Box'
---

# Box

<p class="description">O componente Box serve como um componente encapsulador (wrapper) para a auxiliar na maioria das necessidades de uso com CSS.</p>

The Box component packages [all the style functions](/system/getting-started/the-sx-prop/) that are exposed in `@mui/system`.

[A paleta](/system/palette/) com funções de estilo.

## Exemplo

[A paleta](/system/palette/) com funções de estilo.

## A propriedade `sx`

All system properties are available via the [`sx` prop](/system/getting-started/the-sx-prop/). In addition, the `sx` prop allows you to specify any other CSS rules you may need. Aqui está um exemplo de como você pode usá-la:

{{"demo": "BoxSx.js", "defaultCodeOpen": true }}

## Sobrescrevendo componentes do Material-UI

O componente Box envolve seu componente. Ele cria um novo elemento DOM, uma `<div>` por padrão, algo que pode ser modificado com a propriedade `component`. Digamos que você queira usar um `<span>`:

{{"demo": "BoxComponent.js", "defaultCodeOpen": true }}

Isso funciona muito bem quando as alterações precisam ser isoladas em um novo elemento DOM. Note no exemplo, a forma que você alterou a margem.

No entanto, às vezes, você precisa modificar o elemento DOM subjacente. As an example, you may want to change the border of the Button. Por exemplo, você quer mudar a borda do botão. A herança por CSS não irá ajudar nesse caso. To workaround the problem, you can use the [`sx`](/system/getting-started/the-sx-prop/) prop directly on the child if it is a MUI component.

```diff
-<Box sx={{ border: '1px dashed grey' }}>
-  <Button>Save</Button>
-</Box>
+<Button sx={{ border: '1px dashed grey' }}>Save</Button>
```

For non-Material-UI components, use the `component` prop.

```diff
-<Box sx={{ border: '1px dashed grey' }}>
-  <button>Save</button>
-</Box>
+<Box component="button" sx={{ border: '1px dashed grey' }}>Save</Box>
```

## System props

As a CSS utility component, the `Box` also supports all [`system`](/system/properties/) properties. You can use them as prop directly on the component. For instance, a margin-top:

```jsx
<Box mt={2}>
```

## Create your own `Box` component

Se você quiser ter um tema padrão diferente para o componente `Box` , você pode criar sua própria versão dele, usando o utilitário `createBox()`.

```js
import { createBox, createTheme } from '@mui/system';

const defaultTheme = createTheme({
  // your custom theme values
});

const Box = createBox({ defaultTheme });

export default Box;
```
