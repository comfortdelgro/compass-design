---
title: React Tag Box component
components: TagBox
---

# TagBox

<p class="description">Using to display list of tags.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {TagBox} from '@comfortdelgro/react-compass-old'
```

or

```jsx
import TagBox from '@comfortdelgro/react-compass-old/tag-box'
```

## Example

### Full features

{{"demo": "TagBoxBasic.tsx"}}

## Props

### TagBox

| Name          | Type         | Default | Description                                                                             |
| :------------ | :----------- | :------ | :-------------------------------------------------------------------------------------- |
| children      | `ReactNode`  | —       | The content to display in the tag box. It should be TabBox.Action                       |
| isErrored     | `boolean`    | 'false' | Error state when tagbox is isErrored                                                    |
| errorMessage  | `string`     | -       | Error message for tagbox                                                                |
| labelPosition | `top` `left` | -       | The position of the label.                                                              |
| collaspable   | `boolean`    | -       | Collaspable mode when tag bog is to much.                                               |
| typeable      | `boolean`    | -       | Typeable mode for input new tag.                                                        |
| label         | `string`     | -       | The content to display as the label.                                                    |
| items         | `Item`       | -       | List of tags displayed in the tag box.                                                  |
| helperText    | `string`     | -       | The little helper text display below the tag box.                                       |
| onRemove      | `function`   | —       | Callback fired when the click to remove a tag.                                          |
| onAdd         | `function`   | —       | Callback fired when user enter a new tag.                                               |
| onEdit        | `function`   | —       | Callback fired when user edit a tag.                                                    |
| css           | `CSS`        | —       | The system prop that allows defining system overrides as well as additional CSS styles. |

### Item

| Name       | Type        | Default | Description                          |
| :--------- | :---------- | :------ | :----------------------------------- |
| id         | `ReactNode` | —       | Unique Id                            |
| value      | `string`    | -       | Value to display in the item content |
| icon       | `ReactNode` | -       | Display icon in the left side        |
| isDisabled | `boolean`   | -       | Disable state.                       |
| isError    | `boolean`   | -       | Error state.                         |

### TagBox.Action

| Name     | Type        | Default | Description                                                                             |
| :------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children | `ReactNode` | —       | The content to display in the tag box action.                                           |
| css      | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
