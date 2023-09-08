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

or

```jsx
import OTPInput from '@comfortdelgro/react-compass/otpinput'
```

## Example

{{"demo": "OTPInput.tsx"}}

## Props

| Name          | Type     | Default | Description                          |
| :------------ | :------- | :------ | :----------------------------------- |
| length        | `number` | —       | The length of the OTP input          |
| isNumberInput | `bool`   | `false` | Whether the input should be numbers  |
| autoFocus     | `bool`   | `false` | Whether to autofocus the first input |
| onChangeOTP   | `func`   | —       | Callback when the OTP value changes  |
| disabled      | `bool`   | `false` | Whether the input should be disabled |
