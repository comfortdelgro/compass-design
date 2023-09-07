---
title: React Slider component
components: Slider
---

# Slider

<p class="description">Provides the behavior and accessibility implementation for a slider component representing one or more values.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Slider} from '@comfortdelgro/react-compass'
```

or

```jsx
import Slider from '@comfortdelgro/react-compass/slider'
```

## Example

### Basic Usage

{{"demo": "SliderBasic.tsx"}}

## Props

| Name         | Type                      | Default | Description                                                                                                |
| :----------- | :------------------------ | :------ | :--------------------------------------------------------------------------------------------------------- |
| isDisabled   | `boolean`                 | `false` | Whether the Slider are disabled. Shows that a selection exists, but is not available in that circumstance. |
| tooltip      | `boolean`                 | `true`  | Whether the tooltip of slider are hidden.                                                                  |
| onChangeEnd  | `(value: number) => void` | —       | Fired when the slider stops moving, due to being let go.                                                   |
| onChange     | `(value: number) => void` | —       | Handler that is called when the value changes.                                                             |
| minValue     | `number`                  | 0       | The slider's minimum value.                                                                                |
| maxValue     | `number`                  | 100     | The slider's maximum value.                                                                                |
| step         | `number`                  | 1       | The slider's step value.                                                                                   |
| value        | `number`                  | 0       | The current value (controlled).                                                                            |
| defaultValue | `number`                  | 0       | The currently selected key in the collection (uncontrolled).                                               |
| className    | `String`                  | —       | Extra class name for slider.                                                                               |
| css          | `CSS`                     | —       | The system prop that allows defining system overrides as well as additional CSS styles.                    |

