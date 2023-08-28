---
title: React Textarea component
components: Textarea
---

# Textarea

<p class="description">Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Textarea} from '@comfortdelgro/react-compass'
```

or

```jsx
import Textarea from '@comfortdelgro/react-compass/textarea'
```

## Example

### Basic

{{"demo": "TextareaBasic.tsx"}}

### Custom styling

{{"demo": "TextareaCustom.tsx"}}

## Props

| Name          | Type               | Default | Description                              |
| :------------ | :----------------- | :------ | :--------------------------------------- |
| `placeholder` | `string` \| `null` | `null`  | `Placeholder of the text field`          |
| `label`       | `ReactNode`        | `null`  | `Label of the text field`                |
| `isErrored`   | `true` \| `false`  | `false` | `Throw error when input value is wrong`  |
| `value`       | `string`           | —       | `Input value`                            |
| `isDisabled`  | `false`\| `true`   | `false` | `Disable the text field when true`       |
| `css `        | `CSS`              | —       |                                          |
| `wordCount`   | `false`\| `true`   | `false` | `Show word count of the input when true` |
| `maxLength`   | `number`           | —       | `Limit length of the input`              |
| `onChange`    | `function`         | —       |                                          |
