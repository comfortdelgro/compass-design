import React, {memo, useCallback, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  OtpInputContainerVariantProps,
  StyledOtpInputContainer,
} from './otpInput.styles'
import SingleInput from './SingleInput'

export interface Props extends StyledComponentProps {
  /** @default 6 */
  length?: number
  onChangeOTP: (otp: string) => void
  autoFocus?: boolean
  isNumberInput?: boolean
  disabled?: boolean
  isMobile?: boolean
}
export type OTPInputProps = Props &
  OtpInputContainerVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const OTPInputComponent = React.forwardRef<HTMLDivElement, OTPInputProps>(
  (props, ref) => {
    const {
      css = {},
      length = 6,
      isNumberInput,
      autoFocus,
      disabled,
      isMobile = false,
      onChangeOTP,
      ...delegated
    } = props
    const inputRef = useDOMRef<HTMLDivElement>(ref)
    const [activeInput, setActiveInput] = useState(0)
    const [otpValues, setOTPValues] = useState(Array<string>(length).fill(''))

    // Helper to return OTP from inputs
    const handleOtpChange = useCallback(
      (otp: string[]) => {
        const otpValue = otp.join('')
        onChangeOTP(otpValue)
      },
      [onChangeOTP],
    )

    // Helper to return value with the right type: 'text' or 'number'
    const getRightValue = useCallback(
      (str: string) => {
        const changedValue = str
        if (!isNumberInput) {
          return changedValue
        }
        return !changedValue || /\d/.test(changedValue) ? changedValue : ''
      },
      [isNumberInput],
    )

    // Change OTP value at focussing input
    const changeCodeAtFocus = useCallback(
      (str: string) => {
        const updatedOTPValues = [...otpValues]
        updatedOTPValues[activeInput] = str[0] || ''
        if (otpValues[activeInput] === updatedOTPValues[activeInput]) {
          return
        }

        setOTPValues(updatedOTPValues)
        handleOtpChange(updatedOTPValues)
      },
      [activeInput, handleOtpChange, otpValues],
    )

    // Focus `inputIndex` input
    const focusInput = useCallback(
      (inputIndex: number) => {
        const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0)
        setActiveInput(selectedIndex)
      },
      [length],
    )

    const focusPrevInput = useCallback(() => {
      focusInput(activeInput - 1)
    }, [activeInput, focusInput])

    const focusNextInput = useCallback(() => {
      focusInput(activeInput + 1)
    }, [activeInput, focusInput])

    // Handle onFocus input
    const handleOnFocus = useCallback(
      (index: number) => () => {
        focusInput(index)
      },
      [focusInput],
    )

    // Handle onInput event for each input
    const handleOnInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = getRightValue(e.currentTarget.value)
        if (!val) {
          e.preventDefault()
          return
        }
        changeCodeAtFocus(val)
        focusNextInput()
      },
      [changeCodeAtFocus, focusNextInput, getRightValue],
    )

    // Hanlde onBlur input
    const onBlur = useCallback(() => {
      setActiveInput(-1)
    }, [])

    // Handle onKeyDown input
    const handleOnKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
          case 'Backspace':
          case 'Delete': {
            e.preventDefault()
            if (otpValues[activeInput]) {
              changeCodeAtFocus('')
            }

            focusPrevInput()
            break
          }
          case 'ArrowLeft': {
            e.preventDefault()
            focusPrevInput()
            break
          }
          case 'ArrowRight': {
            e.preventDefault()
            focusNextInput()
            break
          }
          case ' ': {
            e.preventDefault()
            break
          }
          default:
            break
        }
      },
      [
        activeInput,
        changeCodeAtFocus,
        focusNextInput,
        focusPrevInput,
        otpValues,
      ],
    )

    const handleOnPaste = useCallback(
      (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pastedData = e.clipboardData
          .getData('text/plain')
          .trim()
          .slice(0, length - activeInput)
          .split('')
        if (pastedData) {
          let nextFocusIndex = 0
          const updatedOTPValues = [...otpValues]
          updatedOTPValues.forEach((val, index) => {
            if (index >= activeInput) {
              const changedValue = getRightValue(pastedData.shift() || val)
              if (changedValue) {
                updatedOTPValues[index] = changedValue
                nextFocusIndex = index
              }
            }
          })
          setOTPValues(updatedOTPValues)
          handleOtpChange(updatedOTPValues)
          setActiveInput(Math.min(nextFocusIndex + 1, length - 1))
        }
      },
      [activeInput, getRightValue, handleOtpChange, length, otpValues],
    )

    return (
      <StyledOtpInputContainer
        css={css}
        ref={inputRef}
        isMobile={isMobile}
        {...delegated}
      >
        {Array.from(Array(length).keys()).map((index) => (
          <SingleInput
            key={`SingleInput-${index}`}
            focus={activeInput === index}
            autoFocus={autoFocus}
            index={index}
            value={otpValues && otpValues[index]}
            onFocus={handleOnFocus(index)}
            onInput={handleOnInput}
            onKeyDown={handleOnKeyDown}
            onBlur={onBlur}
            onPaste={handleOnPaste}
            {...(isNumberInput
              ? {type: 'number', pattern: 'd{1}', inputMode: 'numeric'}
              : undefined)}
            autoComplete='one-time-code'
            disabled={disabled}
          />
        ))}
      </StyledOtpInputContainer>
    )
  },
)

const OTPInput = memo(OTPInputComponent)
export default OTPInput
