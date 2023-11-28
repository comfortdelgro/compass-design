---
title: React Chart component
components: Chart
---

# Chart

<p class="description">Chart is used to render charts.</p>

Warning: This component only works well with next.13 or later (because of swc issues). If you are using next.12 please use this config in your next.config file

```
const nextConfig = {
  swcMinify: fasle,
}
```

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {Chart} from '@comfortdelgro/react-compass'
```


## Example

### Column

{{"demo": "ChartColumn.tsx"}}

### Bar

{{"demo": "ChartBar.tsx"}}

### Line

{{"demo": "ChartLine.tsx"}}

### Area

{{"demo": "ChartArea.tsx"}}

## Props

| Name           | Type                             | Default | Description                  |
| :------------- | :------------------------------- | :------ | :--------------------------- |
| data           | `Dataset[]`                      | -       | Data set of the chart        |
| labels         | `string[]`                       | -       | List of lables in the chart  |
| unit           | `string`                         | -       | Unit of the dataset lables   |
| title          | `string`                         | -       | Display title of the chart   |
| hideYAxis      | `boolean`                        | false   | Hide the y-axis of the chart |
| hideXAxis      | `boolean`                        | false   | Hide the x-axis of the chart |
| legendPosition | `top`\|`bottom`\|`left`\|`right` | false   | Position of the legends      |

Type of DataSet includes:
| Name | Type | Default | Description | |
|:----------------|:-----------|:--------|:-------------------------------------------|--|
| label | `string` | - | Name of the dataset | |
| data | `number[]` | - | List of value in dataset | |
| backgroundColor | `string` | - | Background color in 1 point of the dataset | |
| borderColor | `string` | - | Border color in 1 point of the dataset | |
