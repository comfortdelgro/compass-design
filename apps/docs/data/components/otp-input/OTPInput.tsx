import {Column, OTPInput, Typography} from '@comfortdelgro/react-compass'
import React from 'react'

function Default() {
  const [value, setValue] = React.useState('12345678')

  return (
    <Column>
      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        String OTP
      </Typography.Label>
      <OTPInput
        autoFocus
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />

      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        Number OTP
      </Typography.Label>
      <OTPInput
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        4 Numbers
      </Typography.Label>
      <OTPInput
        length={4}
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        Controlled
      </Typography.Label>
      <OTPInput otp={value} onChangeOTP={(otp) => setValue(otp)} />

      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        Error
      </Typography.Label>
      <OTPInput
        isErrored
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        Disabled
      </Typography.Label>
      <OTPInput
        autoFocus
        disabled
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />
    </Column>
  )
}

export default Default
