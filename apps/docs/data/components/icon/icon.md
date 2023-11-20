---
title: React Icon component
components: Icon
---

# Icon

<p class="description">The SGV icons.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import Activity from '@comfortdelgro/compass-icons/react/activity'
```

or with iconify

```jsx
import {Icon} from '@iconify/react'
import activityIcon from '@comfortdelgro/compass-icons/iconify/activity'rom '@comfortdelgro/react-compass-old/icon'
```

## Example

### Filled Icons

{{"demo": "IconFilled.tsx"}}

### Outline Icons

{{"demo": "IconOutline.tsx"}}

### Colorful Icons

{{"demo": "IconColor.tsx"}}

### Other Icons

{{"demo": "IconOther.tsx"}}

### Country Icons

{{"demo": "IconCountry.tsx"}}

### File Icons

{{"demo": "IconFile.tsx"}}

## Usage

```js
<Activity width={20} height={20} color='red' />
```

or with iconify

```js
<Icon icon={activityIcon} width={20} height={20} />
```

## Props

| Name      | Type     | Default | Description            |
| :-------- | :------- | :------ | :--------------------- |
| color     | `string` | —       | Color of the icon      |
| height    | `number` | —       | Height of the icon     |
| width     | `number` | —       | Width of the icon      |
| id        | `string` | —       | Unique ID of the icon  |
| style     | `string` | —       | Style of the icon      |
| className | `CSS`    | —       | Class name of the icon |
