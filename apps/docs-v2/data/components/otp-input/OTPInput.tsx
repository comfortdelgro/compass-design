import {Flexbox, OTPInput, Typography} from '@comfortdelgro/react-compass'

function Default() {
  return (
    <Flexbox
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        Number OTP
      </Typography.Label>
      <OTPInput
        length={4}
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />{' '}
      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        6 Numbers
      </Typography.Label>
      <OTPInput
        length={6}
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />
      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        String OTP
      </Typography.Label>
      <OTPInput
        autoFocus
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />
      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>
        Disabled
      </Typography.Label>
      <OTPInput
        autoFocus
        disabled
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />
    </Flexbox>
  )
}

export default Default
