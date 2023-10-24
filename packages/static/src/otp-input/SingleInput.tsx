import React, {memo, useLayoutEffect} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/otpInput.module.css'
import usePrevious from './usePrevious'

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  index: number
  focus?: boolean
  autoFocus?: boolean
  css?: unknown
  isNumberInput?: boolean
  isMobile?: boolean
}

const SingleOTPInputComponent = React.forwardRef<
  HTMLInputElement,
  SingleOTPInputProps
>((props, ref) => {
  const {
    css = {},
    className,
    index,
    focus,
    autoFocus,
    isNumberInput,
    isMobile,
    ...htmlProps
  } = props
  const inputRef = useDOMRef<HTMLInputElement>(ref)
  const prevFocus = usePrevious(!!focus)

  useLayoutEffect(() => {
    if (!inputRef.current) {
      return
    }

    if (index === 0) {
      if (focus && (autoFocus || focus !== prevFocus)) {
        inputRef.current.focus()

        inputRef.current.select()
      }

      return
    }

    if (focus && focus !== prevFocus) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [autoFocus, focus, prevFocus])

  const classNames = [
    'cdg-otp-single-input',
    className,
    styles.singleInput,
    isNumberInput && styles.singleInputNumber,
    isMobile && styles.singleInputIsMobile,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <input ref={inputRef} className={classNames} {...htmlProps} />
    </CssInjection>
  )
})

const SingleOTPInput = memo(SingleOTPInputComponent)
export default SingleOTPInput
