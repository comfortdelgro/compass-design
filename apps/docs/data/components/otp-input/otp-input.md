---
title: React OTP Input component
components: OTPInput
---

# OTP Input

<p class="description">OTP Input component for inputting One-Time Passwords.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {OTPInput} from '@comfortdelgro/react-compass'
```

## Examples

{{"demo": "OTPInput.tsx"}}

## Mobile view

{{"demo": "OTPInputMobile.tsx"}}

## Props

| Name          | Type                    | Default | Description                          |
| :------------ | :---------------------- | :------ | :----------------------------------- |
| length        | `number`                | 6       | The length of the OTP input          |
| isNumberInput | `boolean`               | `false` | Whether the input should be numbers  |
| autoFocus     | `boolean`               | `false` | Whether to autofocus the first input |
| onChangeOTP\* | `(otp: string) => void` | —       | Callback when the OTP value changes  |
| disabled      | `boolean`               | `false` | Whether the input should be disabled |
| isMobile      | `boolean`               | `false` | Toggle Mobile UI                     |

\*: Required.
