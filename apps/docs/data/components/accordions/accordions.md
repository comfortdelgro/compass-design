---
title: React Autocomplete component
components: TextField
---

# Accordions

<p class="description">The accordion component allows the user to show and hide sections of related content on a page.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Accordion} from '@comfortdelgro/react-compass-old'
```

or

```js
import Accordion from '@comfortdelgro/react-compass-old/accordion'
```

## Example

### Basic Example

{{"demo": "AccordionsBasic.tsx"}}

### Controlled Accordion

{{"demo": "AccordionsControlled.tsx"}}

### Expand by default

{{"demo": "AccordionsExpandDefault.tsx"}}

### Table Accordion

{{"demo": "AccordionsTable.tsx"}}

### Custom Accordions

{{"demo": "AccordionsCustom.tsx"}}

## Props

### Accordion

| Name           | Type        | Default | Description                                                                                                  |
| :------------- | :---------- | :------ | :----------------------------------------------------------------------------------------------------------- |
| children \*    | `ReactNode` | —       | The content to display in the accordion.                                                                     |
| expand         | `boolean`   | `false` | If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion. |
| defaultExpand  | `boolean`   | `false` | If true, expands the accordion by default.                                                                   |
| onExpandChange | `function`  | —       | Callback fired when the expand/collapse state is changed.                                                    |
| css            | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles.                      |

### Accordion.Title

| Name     | Type                    | Default | Description                                                                                                       |
| :------- | :---------------------- | :------ | :---------------------------------------------------------------------------------------------------------------- |
| children | `ReactNode` \| `string` | —       | The content to display in the accordion title. If you pass children as a string, it will be render as `h1`        |
| icon     | `ReactNode` \| `false`  | —       | The icon of accordion title. By default it is a circle question mark. You can disable the icon by passing `false` |
| css      | `CSS`                   | —       | The system prop that allows defining system overrides as well as additional CSS styles.                           |

### Accordion.Table

| Name        | Type        | Default | Description                                                                             |
| :---------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children \* | `ReactNode` | —       | The content to display in the accordion table.                                          |
| css         | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
