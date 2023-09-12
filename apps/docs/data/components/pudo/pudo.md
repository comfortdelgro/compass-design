---
title: React PUDO component
components: PUDO
---

# PUDO

<p class="description">A journey planner that allows user to input multiple locations.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Pudo} from '@comfortdelgro/react-compass'
```

or

```jsx
import Pudo from '@comfortdelgro/react-compass/pudo'
```

## Usage

### Basic

{{"demo": "Pudo.tsx"}}

### H5 example

{{"demo": "PudoH5Example.tsx"}}

### Swap, add & remove items

<small>
Real-world cases in general and the H5 application in particular, the <code>minLength</code> and <code>maxLength</code> are static value, there's no reason to change it dynamically as shown in the demo below.

This example is just for demo the swap, add & remove features. To prevent rendering issue, please avoid programmatically changing or at least avoid decreasing `minLength` and/or `maxLength` value as much as possible.
</small>

{{"demo": "PudoManipulation.tsx"}}

### Label view

{{"demo": "PudoLabelView.tsx"}}

### Compact

{{"demo": "PudoCompact.tsx"}}

## Component Props

Type: `PudoProps<TItemKeys extends string | number | symbol = string>`<sup>(1)</sup>

| Name             | Type                   | Default    | Description                                                                                                             |
| :--------------- | :--------------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------- |
| `css`            | `CSS`                  | —          | The system prop that allows defining system overrides as well as additional CSS styles.                                 |
| `items`\*        | `PudoItemProps[]`      | —          |                                                                                                                         |
| `type`           | `"input"` \| `"label"` | —          | If provided, this prop will override the `type` of all items.                                                           |
| `onValuesChange` | `(values) => void`     | —          |                                                                                                                         |
| `minLength`      | `number`               | `2`        | Minimum length of list items.                                                                                           |
| `maxLength`      | `number`               | `3`        | Maximum length of list items.                                                                                           |
| `addItems`       | `PudoItemProps[]`      | —          | Provide a items list to add to the existing item list.<br/><small>This list will be automatically deduplicated.</small> |
| `addItemsLabel`  | `string`               | `"Add"`    | Label for the "add" button.                                                                                             |
| `removableItems` | `TItemKeys[]`          | —          | A list of item name that allowed to remove.<br/><small>This list will be automatically deduplicated.</small>            |
| `removableLabel` | `string`               | `"Remove"` | Label for the "remove" button.                                                                                          |
| `compact`        | `"sm" \| "md"`         | —          | Compact size                                                                                                            |

### `PudoItemProps`

| Name          | Type                         | Default                                  | Description                                                              |
| :------------ | :--------------------------- | :--------------------------------------- | :----------------------------------------------------------------------- |
| `name`\*      | Inference type<sup>(1)</sup> | `string`                                 | Item Key and also input's `name` attribute.                              |
| `icon`        | `ReactNode`                  | Only the first 3 items have default icon |                                                                          |
| `type`        | `"input"` \| `"label"`       | `"input"`                                | Decide what the purpose of this item is, used for input or display text. |
| `allowSwap`   | `boolean`                    | `false`                                  | Allow this item to swap value with the below one.                        |
| `value`\*     | `string`                     | `""`                                     | Item's value.                                                            |
| `placeholder` | `string`                     | `"" `                                    |                                                                          |
| `maxLength`   | `number`                     | `255`                                    | Maximum characters.                                                      |
| `isRequired`  | `boolean`                    | `false`                                  | Required state.                                                          |

\*: Required.

(1): `TItemKeys` - This component knows exactly what the union enums is, if the provided `items` type is `Readonly`, `const` or declared elsewhere (eg: from declared API's response data type).<br/>
<small>For instance, see <a href="#basic">the demo above</a>. The type of `value` from `onValuesChange()` is a union enum, makes it easier for us to process the data, especially looping & item keys comparing.
Also, you can try adding `removableItems` prop, the intellisense will show and suggest the correct keys list that can be removed.</small>
