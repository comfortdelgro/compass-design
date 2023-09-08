---
title: React Wizard component
components: Wizard
---

# Wizard

<p class="description">Using for display stepper.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Wizard} from '@comfortdelgro/react-compass'
```

or

```jsx
import Wizard from '@comfortdelgro/react-compass/wizard'
```

## Content

The TooltipTrigger accepts exactly two children: the element which triggers the display of the Tooltip and the Tooltip itself. The trigger element must be the first child passed into the TooltipTrigger. All content should be internationalized.

## Example

### Basic

{{"demo": "WizardBasic.tsx"}}

### Custom styling

{{"demo": "WizardCustom.tsx"}}

## Props

### Wizard

| Name        | Type                  | Default | Description                                                                             |
| :---------- | :-------------------- | :------ | :-------------------------------------------------------------------------------------- |
| items?      | `string[]`            | -       | List of display contennt below the stepper                                              |
| currentStep | `number`              | 1       | Current active step, start from 1                                                       |
| onStepClick | `(n: number) => void` | -       | Handler when click on step, return index of step                                        |
| css?        | `CSS`                 | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### Wizard.Item

| Name     | Type        | Default | Description                      |
| :------- | :---------- | :------ | :------------------------------- |
| title    | `string`    | -       | Text displayed below the stepper |
| children | `ReactNode` | 1       | Something to display the stepper |
