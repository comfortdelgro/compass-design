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

## Usage

### Basic

{{"demo": "Pudo.tsx"}}

### Manipulate items

<small>
Real-world cases in general and the H5 application in particular, the <code>minLength</code> and <code>maxLength</code> are static value, there's no reason to change it dynamically as shown in the demo below.

This example is just for demo the swap, add & remove features. To prevent rendering issue, please avoid programmatically changing or at least avoid decreasing `minLength` and/or `maxLength` value as much as possible.
</small>

{{"demo": "PudoManipulation.tsx"}}

### Item type: `custom`

{{"demo": "PudoCustomType.tsx"}}

### Align Icon

{{"demo": "PudoAlignIcon.tsx"}}

### Compact

{{"demo": "PudoCompact.tsx"}}

## Component Props

Type: `PudoProps<TItemKeys extends PropertyKey = string>`<sup>(1)</sup>

| Name                | Type                                                              | Default    | Description                                                                                                                 |
| :------------------ | :---------------------------------------------------------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `css`               | `CSS`                                                             | —          | The system prop that allows defining system overrides as well as additional CSS styles.                                     |
| `items`\*           | `PudoItemProps[]`                                                 | —          |                                                                                                                             |
| `type`              | `"input"` \| `"custom"`                                           | —          | If provided, this prop will override the `type` of all items.                                                               |
| `onValuesChange`    | `(values: PudoValueChange<TItemKeys>) => void`                    | —          |                                                                                                                             |
| `onItemFocusChange` | `(focusingItem?: TItemKeys) => void`                              | —          | `focusingItem` is the name of the focused item.<br/><small>If no items are focusing, the value will be `undefined`.</small> |
| `onItemSwap`        | `(pairItemSwapped: [itemA: TItemKeys, itemB: TItemKeys]) => void` | —          | `pairItemSwapped` is a pair of item names that have just swapped their values.                                              |
| `minLength`         | `number`                                                          | `2`        | Minimum length of list items.                                                                                               |
| `maxLength`         | `number`                                                          | `3`        | Maximum length of list items.                                                                                               |
| `addItems`          | `PudoItemProps[]`                                                 | —          | Provide a items list to add to the existing item list.<br/><small>This list will be automatically deduplicated.</small>     |
| `addItemsLabel`     | `string`                                                          | `"Add"`    | Label for the "add" button.                                                                                                 |
| `removableItems`    | `TItemKeys[]`                                                     | —          | A list of item name that allowed to remove.<br/><small>This list will be automatically deduplicated.</small>                |
| `removableLabel`    | `string`                                                          | `"Remove"` | Label for the "remove" button.                                                                                              |
| `compact`           | `"sm"` \| `"md"`                                                  | —          | Compact size                                                                                                                |
| `alignIcon`         | `"top"` \| `"center"`                                             | —          | If provided, this prop will override the `alignIcon` of all items.                                                          |
| `isClearable`       | `boolean`                                                         | —          | If provided, this prop will override the `isClearable` of all items.                                                        |

### `PudoItemProps`

| Name          | Type                         | Default                                  | Description                                                                                       |
| :------------ | :--------------------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------ |
| `name`\*      | Inference type<sup>(1)</sup> | `string`                                 | Item Key and also is input's `name` attribute.                                                    |
| `type`        | `"input"` \| `"custom"`      | `"input"`                                | Decide what the purpose of this item is, used for input or can be customizable.                   |
| `icon`        | `ReactNode`                  | Only the first 3 items have default icon |                                                                                                   |
| `alignIcon`   | `"top"` \| `"center"`        | `"center"`                               | Change the item icon's vertical alignment.                                                        |
| `allowSwap`   | `boolean`                    | `false`                                  | Allow this item to swap value with the below one.                                                 |
| `value`       | `string`                     | `""`                                     | Input value.<br/><small>Only use for `input` type, will be ignored on `custom` type</small>       |
| `placeholder` | `string`                     | `"" `                                    | Input placeholder.<br/><small>Only use for `input` type, will be ignored on `custom` type</small> |
| `title`       | `ReactNode`                  | —                                        | Title section for the `custom` item type.                                                         |
| `content`     | `ReactNode`                  | —                                        | Content, description, etc,... for the `custom` item type.                                         |
| `maxLength`   | `number`                     | `255`                                    | Maximum characters.                                                                               |
| `isRequired`  | `boolean`                    | `false`                                  | Required state.                                                                                   |
| `isClearable` | `boolean`                    | `false`                                  | Add clear value button for each input field.                                                      |

### `PudoValueChange`

| Name     | Type                         | Default | Description                                                                                    |
| :------- | :--------------------------- | :------ | :--------------------------------------------------------------------------------------------- |
| `name`\* | Inference type<sup>(1)</sup> | —       | Same order and name as Pudo's`items` props.<br/>Item Key and also is input's `name` attribute. |
| `value`  | `string`                     | `""`    | Input's value.                                                                                 |

\*: Required.

(1): `TItemKeys` - This component knows exactly what the union enums is, if the provided `items` type is `Readonly`, `const` or declared elsewhere (eg: from declared API's response data type).<br/>
<small>For instance, let's inspect the code of <a href="#basic">the basic example above</a>. The type of `value` from `onValuesChange()` is a union of avaiable item keys, makes it easier for us to process the data, especially looping & item keys comparing.
You can also try adding `removableItems` prop, the intellisense will show and suggest the correct key list that can be removed.</small>
