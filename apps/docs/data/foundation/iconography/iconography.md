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

We have supported 2 types of icons: react and iconify, for iconify you can checkout the web site of [iconify](https://iconify.design/docs/icon-components/react/) for usage and installation

## Import

```js
For react icons:
import {Activity} from '@comfortdelgro/compass-icons/react'

For iconify icons:
import {Icon} from '@iconify/react'
import {Activity} from '@comfortdelgro/compass-icons/iconify'
```

or

```js
For react icons:
import Activity from '@comfortdelgro/compass-icons/react/activity'

For iconify icons:
import {Icon} from '@iconify/react'
import Activity from '@comfortdelgro/compass-icons/iconify/activity'
```

## Usage

```js
<Activity width={20} height={20} color='red' />
```

or with iconify

```js
<Icon icon={activityIcon} width={20} height={20} />
```

## Filled Icons

### Import and Usage

```js
import AddressBookFilled from '@comfortdelgro/compass-icons/react/filled/address-book-filled'
;<AddressBookFilled width={40} height={40} />

or

import {Icon} from '@iconify/react'
import addressBookFilled from '@comfortdelgro/compass-icons/iconify/filled/address-book-filled'
;<Icon icon={addressBookFilled} width={40} height={40} />
```

{{"demo": "/showcases/FilledIcons.tsx"}}

## Outline Icons

### Import and Usage

```js
import AddressBookOutlined from '@comfortdelgro/compass-icons/react/outlined/address-book-outlined'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import addressBookOutlined from '@comfortdelgro/compass-icons/iconify/outlined/address-book-outlined'
;<Icon icon={addressBookOutlined} width={40} height={40} />
```

{{"demo": "/showcases/OutlinedIcons.tsx"}}

## Duotone Icons

### Import and Usage

```js
import BadgeDollarDuotone from '@comfortdelgro/compass-icons/react/duotone/badge-dollar-duotone'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import badgeDollarDuotone from '@comfortdelgro/compass-icons/iconify/duotone/badge-dollar-duotone'
;<Icon icon={badgeDollarDuotone} width={40} height={40} />
```

{{"demo": "/showcases/DuotoneIcons.tsx"}}

## Colorful Icons

### Import and Usage

```js
import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import compass from '@comfortdelgro/compass-icons/iconify/colorful/compass'
;<Icon icon={compass} width={40} height={40} />
```

{{"demo": "/showcases/ColorfulIcons.tsx"}}

## Payment Icons

### Import and Usage

```js
import Affirm from '@comfortdelgro/compass-icons/react/payment/affirm'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import affirm from '@comfortdelgro/compass-icons/iconify/payment/affirm'
;<Icon icon={affirm} width={40} height={40} />
```

{{"demo": "/showcases/PaymentIcons.tsx"}}

## Other Icons

### Import and Usage

```js
import Activity from '@comfortdelgro/compass-icons/react/activity'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import activity from '@comfortdelgro/compass-icons/iconify/activity'
;<Icon icon={activity} width={40} height={40} />
```

{{"demo": "/showcases/Icons.tsx"}}

## Country Icons

### Import and Usage

```js
import FlagAbw from '@comfortdelgro/compass-icons/react/country/flag-abw'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import flagAbw from '@comfortdelgro/compass-icons/iconify/country/flag-abw'
;<Icon icon={flagAbw} width={40} height={40} />
```

{{"demo": "/showcases/CountryIcons.tsx"}}

## File Icons

### Import and Usage

```js
import SVG from '@comfortdelgro/compass-icons/react/file/svg'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import svg from '@comfortdelgro/compass-icons/iconify/file/svg'
;<Icon icon={svg} width={40} height={40} />
```

{{"demo": "/showcases/FileIcons.tsx"}}

## H5 Icons

### Import and Usage

```js
import H5AccountFilled from '@comfortdelgro/compass-icons/react/h5/h5-account-filled'
;<AddressBookOutlined width={40} height={40} />

or

import {Icon} from '@iconify/react'
import h5AccountFilled from '@comfortdelgro/compass-icons/iconify/h5/h5-account-filled'
;<Icon icon={svg} width={40} height={40} />
```

{{"demo": "/showcases/H5Icons.tsx"}}

## Props for react icons

| Name      | Type     | Default | Description            |
| :-------- | :------- | :------ | :--------------------- |
| color     | `string` | —       | Color of the icon      |
| height    | `number` | —       | Height of the icon     |
| width     | `number` | —       | Width of the icon      |
| id        | `string` | —       | Unique ID of the icon  |
| style     | `string` | —       | Style of the icon      |
| className | `CSS`    | —       | Class name of the icon |
