---
title: React Avatar component
components: Avatar, AvatarGroup, Badge
---

# Avatar

<p class="description">Avatars can be used in everything including a person's profile picture, dialog menu, ext.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Avatar} from '@comfortdelgro/react-compass'
```

or

```jsx
import Avatar from '@comfortdelgro/react-compass/avatar'
```

## Examples

### Image avatars

Image avatars can be created by passing standard `image` props to the component.

{{"demo": "ImageAvatars.tsx"}}

### Group avatars

{{"demo": "GroupAvatars.tsx"}}

## Props

### `<Avatar/>`

| Name  | Type                         | Default | Description                                                                                          |
| :---- | :--------------------------- | :------ | :--------------------------------------------------------------------------------------------------- |
| label | `String`                     | —       | The label, used as fallback for image. The avatars would show the initials of the labels.            |
| image | `String `                    | —       | Image of the avatars takes the highest priority. We pass the image's address as string to this prop. |
| size  | `xs`\|`sm`\|`md`\|`lg`       | —       | Sizes of the avatars.                                                                                |
| icon  | `ReactNode`\|`false`\| `true`| false   | The icon of the alerts. It'd disappear if the value is false.                                        |
| css   | `CSS`                        | —       | The system prop that allows defining system overrides as well as additional CSS styles.              |

### `<Avatar.Group/>` 

| Name     | Type                    | Default | Description                                                                             |
| :------- | :---------------------- | :------ | :-------------------------------------------------------------------------------------- |
| children | `ReactNode` \| `String` | —       | We pass our avatars as children props to Avatar.Group.                                  |
| display  | `Number`                | —       | Display prop determines the number of avatar displayed.                                 |
| css      | `CSS`                   | —       | The system prop that allows defining system overrides as well as additional CSS styles. |