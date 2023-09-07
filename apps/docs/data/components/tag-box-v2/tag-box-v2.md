---
title: React TagBoxV2 component
components: TagBoxV2
---

# TagBox V2

<p class="description">The Link component allows you to easily customize anchor elements with your theme colors and typography styles.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {TagBoxV2} from '@comfortdelgro/react-compass'
```

or

```jsx
import TagBoxV2 from '@comfortdelgro/react-compass/tag-box-v2'
```

## Example

### Basic

{{"demo": "TagBoxV2Basic.tsx"}}

### With Errored Items

{{"demo": "WithErroredItems.tsx"}}

## Props

### TagBox

| Name                             | Type       | Default | Description                                                                                         |
| :------------------------------- | :--------- | :------ | :-------------------------------------------------------------------------------------------------- |
| isRequired                       | `boolean`  | —       | A boolean indicating whether the TagBoxV2 component is required or not.                             |
| isErrored                        | `boolean`  | 'false' | A boolean indicating whether the TagBoxV2 component has an error or not.                            |
| tagBoxLabel                      | `string`   | -       | A string representing the label or title for the TagBoxV2 component.                                |
| tags                             | `Array`    | -       | An array of objects representing the tags to be displayed in the TagBoxV2 component                 |
| onAddTag                         | `function` | -       | A callback function triggered when a new tag is added. It receives the event object as an argument. |
| onEditTag                        | `function` | -       | A callback function triggered when a tag is edited. It receives the tag object.                     |
| onRemoveTag                      | `function` | -       | A callback function triggered when a tag is removed. It receives the tag object .                   |
| isDisabled                       | `boolean`  | false   | A boolean indicating whether the TagBoxV2 component is disabled or not.                             |
| isEditable                       | `boolean`  | false   | (Optional) A boolean indicating whether the tags are editable or not.                               |
| customValidationHandler          | `function` | —       | (Optional) A custom validation handler function to perform additional validation on the tags.       |
| addTagPlaceholder                | `function` | —       | The placeholder text for the input field to add new tags.                                           |
| canRemoveOnDeleteAndBackspaceKey | `boolean`  | —       | (Optional) A boolean indicating whether tags can be removed using the delete and backspace keys.    |
| css                              | `CSS`      | —       | The system prop that allows defining system overrides as well as additional CSS styles.             |

### Item

| Name       | Type        | Default | Description                          |
| :--------- | :---------- | :------ | :----------------------------------- |
| id         | `ReactNode` | —       | Unique Id                            |
| value      | `string`    | -       | Value to display in the item content |
| icon       | `ReactNode` | -       | Display icon in the left side        |
| isDisabled | `boolean`   | -       | Disable state.                       |
| isErrored  | `boolean`   | -       | Error state.                         |

### TagBox.Action

| Name     | Type        | Default | Description                                                                             |
| :------- | :---------- | :------ | :-------------------------------------------------------------------------------------- |
| children | `ReactNode` | —       | The content to display in the tag box action.                                           |
| css      | `CSS`       | —       | The system prop that allows defining system overrides as well as additional CSS styles. |
