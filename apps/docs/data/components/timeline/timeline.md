---
title: React Timeline component
components: Timeline
---

# Timeline

<p class="description">The timeline displays a list of events in chronological order.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Timeline} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import Timeline from '@comfortdelgro/react-compass-old/timeline'
```

## Example

### Default

Default timeline is vertical with label and item both are aligned on the
right

{{"demo": "TimelineDefault.tsx"}}

### Variant

{{"demo": "TimelineCustom.tsx"}}

## Props

### Timeline

| Name           | Type              | Default | Description                                                                                            |
| :------------- | :---------------- | :------ | :----------------------------------------------------------------------------------------------------- |
| mode           | string (optional) | —       | Determines the layout of the timeline. Possible values: "vertical" or "horizontal".                    |
| labelAlignment | string (optional) | —       | Determines the alignment of the timeline labels. Possible values: "left", "right", "top", or "bottom". |
| itemAlignment  | string (optional) | —       | Determines the alignment of the timeline items. Possible values: "left", "right", "top", or "bottom".  |
| css?           | `CSS`             | —       | The system prop that allows defining system overrides as well as additional CSS styles.                |

### Timeline.Item

| Name       | Type              | Default | Description                                                                             |
| :--------- | :---------------- | :------ | :-------------------------------------------------------------------------------------- |
| label      | string (required) | —       | The label to be displayed for the timeline item.                                        |
| dot        | ReactNode         | —       | The icon or element to be displayed as a dot for the timeline item.                     |
| identifier | string or number  | —       | An identifier for the timeline item, useful for assigning unique keys in a list.        |
| css?       | `CSS`             | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
