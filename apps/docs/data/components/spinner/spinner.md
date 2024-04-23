---
title: React Spinner component
components: Spinner
---

# Spinner

<p class="description">Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Spinner} from '@comfortdelgro/react-compass'
```

## Basic

{{"demo": "SpinnerBasic.tsx"}}

## Circular without label

{{"demo": "SpinnerWithoutLabel.tsx"}}

## Circular with custom label

{{"demo": "SpinnerCustomLabel.tsx"}}

## Circular with custom styling

{{"demo": "SpinnerCustomStyling.tsx"}}

## Props

| Name  | Type                                 | Default | Description |
| :---- | :----------------------------------- | :------ | :---------- |
| size  | `sm`\| `md` \| `lg` \| `xl` \| `2xl` |         |             |
| label | `false`\| `true` \| `String`         | —       |             |
| css   | `CSS`                                | —       |             |
