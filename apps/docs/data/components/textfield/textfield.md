---
title: React Text Field component
components: Textfield
---

# Text Field

<p class="description">Text Fields let users enter and edit text.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Textfield} from '@comfortdelgro/react-compass'
```

or

```jsx
import Textfield from '@comfortdelgro/react-compass/textfield'
```

## Example

### Basic

{{"demo": "Textfield.tsx"}}

## Props

| Name          | Type                                | Default | Description                                                  |
| :------------ | :---------------------------------- | :------ | :----------------------------------------------------------- |
| `placeholder` | `string` \| `null`                  | `null`  | `Placeholder of the text field`                              |
| `label`       | `string` \| `null`                  | `null`  | `Label of the text field`                                    |
| `helperText`  | `string` \| `null`                  | —       |                                                              |
| `isErrored`   | `true` \| `false`                   | `false` | `Throw error when input value is wrong`                      |
| `value`       | `string`                            | —       | `Input value`                                                |
| `rightIcon`   | `ReactNode`                         | -       | `Icon placed on the right side of the text field`            |
| `leftIcon`    | `ReactNode`                         | -       | `Icon placed on the left side of the text field`             |
| `isDisabled`  | `false`\| `true`                    | `false` | `Disable the text field when true`                           |
| `css `        | `CSS`                               | —       |                                                              |
| `inputRef `   | `React.RefObject<HTMLInputElement>` | —       | `Use useRef to control input tag inside TextField component` |
