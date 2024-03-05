import React from 'react'

import {Meta} from '@storybook/react'
import OTPInput from '.'

export const Variants: React.FC = () => {
  const [value, setValue] = React.useState('12345678')

  return (
    <div style={{padding: '2rem'}}>
      <h2>Number OTP</h2>
      <OTPInput
        length={4}
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <h2>6 Numbers</h2>
      <OTPInput
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <h2>Controlled</h2>
      <OTPInput
        isNumberInput
        autoFocus
        otp={value}
        onChangeOTP={(otp) => setValue(otp)}
      />

      <h2>String OTP</h2>
      <OTPInput
        autoFocus
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />

      <h2>Disabled</h2>
      <OTPInput
        disabled
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />

      <h2>Error</h2>
      <OTPInput
        isErrored
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <h2>Mobile view</h2>
      <OTPInput
        css={{marginBottom: '$8'}}
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
        autoFocus
        isNumberInput
        isMobile
      />
    </div>
  )
}

const meta = {
  title: 'Example/OTP Input',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
