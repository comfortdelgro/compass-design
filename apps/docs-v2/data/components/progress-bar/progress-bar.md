---
title: React Progress Bar component
components: Progress Bar
---

# Error

<p class="description">Provides the accessibility implementation for a progress bar component. Progress bars show either determinate or indeterminate progress of an operation over time.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {ProgressBar} from '@comfortdelgro/react-compass'
```

or

```jsx
import ProgressBar from '@comfortdelgro/react-compass/progress-bar'
```
### Basic

{{"demo": "ProgressBarBasic.tsx"}}

### Sizes

{{"demo": "ProgressBarSizes.tsx"}}

### Colors

{{"demo": "ProgressBarColors.tsx"}}


### Variants

{{"demo": "ProgressBarVariants.tsx"}}


### 3. Custom Styling

{{"demo": "ProgressBarCustomStyling.tsx"}}


### Props:

| Name            | Type      | Default | Description                                                      |
| :-------------- | :-------- | :------ | :--------------------------------------------------------------- |
| isIndeterminate | `boolean` | -       | Whether presentation is indeterminate when progress isn't known. |
| label           | `boolean` | `false` | The content to display as the left label.                        |
| rightLabel      | `boolean` | `false` | The content to display as the right label.                       |
| value           | `number`  | `0`     | The current value (controlled).                                  |
| minValue        | `number`  | `0`     | The smallest value allowed for the input.                        |
| maxValue        | `number`  | `100`   | Whether presentation is indeterminate when progress isn't known. |
| isIndeterminate | `boolean` | `false` | Whether presentation is indeterminate when progress isn't known. |
| css             | `CSS`     | —       | Extra styles for progress bar                                    |
