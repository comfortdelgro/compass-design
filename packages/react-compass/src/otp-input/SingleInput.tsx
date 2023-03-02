import React, {memo, useLayoutEffect} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledOtpSingleInput} from './otpInput.styles'
import usePrevious from './usePrevious'

export interface SingleOTPInputProps
  extends StyledComponentProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean
}

const SingleOTPInputComponent = React.forwardRef<
  HTMLInputElement,
  SingleOTPInputProps
>((props, ref) => {
  const {css = {}, focus, autoFocus, ...delegated} = props
  const inputRef = useDOMRef<HTMLInputElement>(ref)
  const prevFocus = usePrevious(!!focus)
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus()
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus()
        inputRef.current.select()
      }
    }
  }, [autoFocus, focus, prevFocus])

  return <StyledOtpSingleInput ref={inputRef} {...delegated} />
})

const SingleOTPInput = memo(SingleOTPInputComponent)
export default SingleOTPInput
