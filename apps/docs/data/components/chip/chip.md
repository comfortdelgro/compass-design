---
title: React Chip component
components: Chip
---

# Chip

<p class="description">Chips are compact elements that represent an input, attribute, or action.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Chip} from '@comfortdelgro/react-compass'
```

or

```jsx
import Chip from '@comfortdelgro/react-compass/chip'
```

## Chip

{{"demo": "Chip.tsx"}}

## Chip Server (Experimental)
{{"demo": "ChipServer.tsx"}}

## Props

| Name           | Type        | Default | Description                                                                             |
| :------------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children \*    | `ReactNode` | —       | The content to display in the accordion.                                                |
| hasCloseButton | `Boolean`   | `false` | Whether the close button is shown.                                                      |
| isErrored      | `boolean`   | `false` | Error state when dropdown is isErrored                                                  |
| onClick        | `Function`  | —       | Fire click to the close button.                                                         |
| css            | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
