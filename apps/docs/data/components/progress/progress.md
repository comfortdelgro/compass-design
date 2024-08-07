---
title: React Page Progress component
components: Progress
---

# Progress

<p class="description">Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.</p>


```jsx
import {Progress} from '@comfortdelgro/react-compass'
```

## Circular

### Circular indeterminate

{{"demo": "CircularIndeterminate.tsx"}}

### Circular determinate

{{"demo": "CircularDeterminate.tsx"}}

### Circular color

{{"demo": "CircularColor.tsx"}}

### Circular size

The default height/width is 40px. In this example, we tailored it to be 70px

{{"demo": "CircularSize.tsx"}}

## Linear

### Linear Indeterminate

{{"demo": "LinearIndeterminate.tsx"}}

### Linear Determinate

{{"demo": "LinearDeterminate.tsx"}}

### Linear Buffer

{{"demo": "LinearBuffer.tsx"}}

### Linear Color

{{"demo": "LinearColor.tsx"}}

### Linear Size

The default height is 4px. In this example, we tailored it to be 10px.

{{"demo": "LinearSize.tsx"}}

### Linear Rounded

{{"demo": "LinearRounded.tsx"}}

## Props

### Progress.Circular Props:

| Name          | Type                            | Default         | Description                                                                               |
| :------------ | :------------------------------ | :-------------- | :---------------------------------------------------------------------------------------- |
| size          | `number`                        | `40`            | The size of the component                                                                 |
| color         | `string`                        | —               | The color of the component                                                                |
| value         | `number`                        | `0`             | The value of the progress indicator for the determinate variant. Value between 0 and 100. |
| thickness     | `number`                        | `3.6`           | The thickness of the circle.                                                              |
| disableShrink | `number`                        | `false`         | If true, the shrink animation is disabled. This only works if variant is indeterminate.   |
| variant       | `determinate`\| `indeterminate` | `indeterminate` | The variant to use. Use indeterminate when there is no progress value.                    |

### Progress.Linear Props:

| Name        | Type                                       | Default         | Description                                                                               |
| :---------- | :----------------------------------------- | :-------------- | :---------------------------------------------------------------------------------------- |
| size        | `number`                                   | `4`             | The size of the component                                                                 |
| color       | `string`                                   | —               | The color of the component                                                                |
| value       | `number`                                   | `0`             | The value of the progress indicator for the determinate variant. Value between 0 and 100. |
| rounded     | `boolean`                                  | `false`         | The border radius of lines.                                                               |
| valueBuffer | `number`                                   | `0`             | The value for the buffer variant. Value between 0 and 100.                                |
| variant     | `determinate`\| `indeterminate`\| `buffer` | `indeterminate` | The variant to use. Use indeterminate when there is no progress value.                    |
