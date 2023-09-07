---
backgroundColor: #E3D0B3
textColor: #684842
imgSrc: /static/images/iconography-background.png
---

# Iconography

<p class="description hidden">Icons are visual representations of commands, devices, directories, or common actions.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

{{"component": "data/foundation/iconography/components/SearchBar.tsx"}}

## Icons

Icons should be used to maximize comprehension and reduce cognitive load when you need to call attention to a particular action, command, or section. Our icons are designed with our brand personality baked in.

## Import

```js
import {Activity} from '@comfortdelgro/compass-icons/iconify'
import {Activity} from '@comfortdelgro/compass-icons/react'
```

or

```js
import Activity from '@comfortdelgro/compass-icons/iconify/activity'
import Activity from '@comfortdelgro/compass-icons/react/activity'
```

## Filled Icons

```js
import AddressBookFilled from '@comfortdelgro/compass-icons/react/filled/address-book-filled'
```

{{"demo": "/showcases/FilledIcons.tsx"}}

## Outline Icons

```js
import AddressBookOutlined from '@comfortdelgro/compass-icons/react/outlined/address-book-outlined'
```

{{"demo": "/showcases/OutlinedIcons.tsx"}}

## Duotone Icons

```js
import BadgeDollarDuotone from '@comfortdelgro/compass-icons/react/duotone/badge-dollar-duotone'
```

{{"demo": "/showcases/DuotoneIcons.tsx"}}

## Colorful Icons

```js
import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
```

{{"demo": "/showcases/ColorfulIcons.tsx"}}

## Payment Icons

```js
import Compass from '@comfortdelgro/compass-icons/react/payment/compass'
```

{{"demo": "/showcases/PaymentIcons.tsx"}}

## Other Icons

```js
import Activity from '@comfortdelgro/compass-icons/react/activity'
```

{{"demo": "/showcases/Icons.tsx"}}

## Country Icons

```js
import FlagAbw from '@comfortdelgro/compass-icons/react/country/flag-abw'
```

{{"demo": "/showcases/CountryIcons.tsx"}}

## File Icons

```js
import SVG from '@comfortdelgro/compass-icons/react/file/svg'
```

{{"demo": "/showcases/FileIcons.tsx"}}

## H5 Icons

```js
import SVG from '@comfortdelgro/compass-icons/react/h5/svg'
```

{{"demo": "/showcases/H5Icons.tsx"}}

## Props

| Name      | Type     | Default | Description            |
| :-------- | :------- | :------ | :--------------------- |
| color     | `string` | —       | Color of the icon      |
| height    | `number` | —       | Height of the icon     |
| width     | `number` | —       | Width of the icon      |
| id        | `string` | —       | Unique ID of the icon  |
| style     | `string` | —       | Style of the icon      |
| className | `CSS`    | —       | Class name of the icon |
