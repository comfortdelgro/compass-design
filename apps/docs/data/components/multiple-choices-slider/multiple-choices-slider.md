---
title: React Multiple Choices Slider component for H5
components: MultipleChoicesSlider
---

# Multiple choices slider

<p class="description">This component is ideal for various use cases such as product reviews, surveys where multiple-item selection or rating is essential.

 </p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {MultipleChoicesSlider} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import MultipleChoicesSlider from '@comfortdelgro/react-compass-old/multiple-choices-slider'
```

## Example

{{"demo": "MultipleChoicesSlider.tsx"}}

## Props

### MultipleChoicesSlider

| Name     | Type                    | Default | Description                                                                      |
| :------- | :---------------------- | :------ | :------------------------------------------------------------------------------- |
| onChange | `(e: number[]) => void` |         | Callback that is called when selecting/ unselecting the items.                   |
| css      | `CSS`                   | —       | The system prop that allows defining system overrides as well as additional CSS. |

### MultipleChoicesSlider.Item

| Name  | Type        | Default | Description                                                                      |
| :---- | :---------- | :------ | :------------------------------------------------------------------------------- |
| icon  | `ReactNode` |         | The ReactNode component for displaying icon or image.                            |
| label | `string`    |         | The rating criterion.                                                            |
| css   | `CSS`       |         | The system prop that allows defining system overrides as well as additional CSS. |
