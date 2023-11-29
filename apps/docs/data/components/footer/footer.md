    ---

title: React Footer component
components: Footer

---

# Chart

<p class="description">
Footer component is an additional navigation used for displaying general information that a user might want to access from any page within your site.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Footer, FooterInfo} from '@comfortdelgro/react-compass'
```

### Footer Color Variants

{{"demo": "FooterColorVariants.tsx"}}

### Introduction to Footer's items

Footer.Header should contain company logo and/or language-changing button.
Footer.Nav should contain all links of pages in website for user to navigate.
Footer.Policy should contain links to policies and/or copyrights.
FooterInfo should contain the address, social media and/or download links of the website.

## Props

#### Footer

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

#### Footer.Header

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

#### Footer.Nav

| Name             | Type              | Default | Description                                    |
| :--------------- | :---------------- | :------ | :--------------------------------------------- |
| children         | `React.ReactNode` | —       |                                                |
| gridNumber       | `number`          | —       | Number of grid column                          |
| tabletGridNumber | `number`          | —       | Number of grid column in the tablet responsive |
| css              | `CSS`             | —       |                                                |

#### Footer.Policy

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

#### FooterInfo

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

#### FooterInfo.Download

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |

#### FooterInfo.Social

| Name     | Type              | Default | Description |
| :------- | :---------------- | :------ | :---------- |
| children | `React.ReactNode` | —       |             |
| css      | `CSS`             | —       |             |
