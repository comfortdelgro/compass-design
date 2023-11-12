import OTPInput from '@comfortdelgro/react-compass-old/otp-input'

export default function OTPInputMobileView() {
  return (
    <OTPInput
      autoFocus
      length={4}
      isNumberInput
      isMobile
      onChangeOTP={(otp) => console.log('OTP: ', otp)}
    />
  )
}
