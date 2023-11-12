---
title: React Progress Bar component
components: Progress Bar
---

# Progress Bar

<p class="description">Provides the accessibility implementation for a progress bar component. Progress bars show either determinate or indeterminate progress of an operation over time.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {ProgressBar} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import ProgressBar from '@comfortdelgro/react-compass-old/progress-bar'
```

## Usage

{{"demo": "ProgressBarBasic.tsx"}}

### Variant

{{"demo": "ProgressBarVariants.tsx"}}

### Size

{{"demo": "ProgressBarSizes.tsx"}}

### Color

{{"demo": "ProgressBarColors.tsx"}}

### Loading State

{{"demo": "ProgressBarLoading.tsx"}}

## Component Props

| Name         | Type                                 | Default                                 | Description                                                                             |
| :----------- | :----------------------------------- | :-------------------------------------- | :-------------------------------------------------------------------------------------- |
| `css`        | `CSS`                                | —                                       | The system prop that allows defining system overrides as well as additional CSS styles. |
| `variant`    | `"normal"` \| `"rounded"`            | `"normal"`                              | Whether presentation is indeterminate when progress isn't known.                        |
| `size`       | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"lg"`                                  | Whether presentation is indeterminate when progress isn't known.                        |
| `label`      | `string`                             | —                                       |                                                                                         |
| `rightLabel` | `string`                             | —                                       |                                                                                         |
| `color`      | `string`                             | `"blue"` <small>- $info #009EDA</small> | Color visualization for the current value.                                              |
| `barColor`   | `string`                             | `"$gray30"` <small>- #EDEBE9</small>    | Color of the progress bar.                                                              |
| `value`      | `number`                             | `0`                                     | Current progress value.                                                                 |
| `minValue`   | `number`                             | `0`                                     | The lower numeric bound of the measured range. This must be less than `maxValue`.       |
| `maxValue`   | `number`                             | `100`                                   | The upper numeric bound of the measured range. This must be greater than `minValue`.    |
| `onComplete` | `() => void`                         | —                                       |
| `loading`    | `boolean` \| `"stripes"`             | `false`                                 | Loading state                                                                           |
