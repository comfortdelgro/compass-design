import React, {memo, useLayoutEffect} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/otpInput.module.css'
import usePrevious from './usePrevious'

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  index: number
  focus?: boolean
  autoFocus?: boolean
  css?: CSS
  isNumberInput?: boolean
  isMobile?: boolean
  isErrored?: boolean
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
    isErrored,
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
  }, [autoFocus, focus, index, inputRef, prevFocus])

  const rootClasses = classNames(
    styles.singleInput,
    isNumberInput && styles.singleInputNumber,
    isMobile && styles.singleInputIsMobile,
    isErrored && styles.singleInputisErrored,
    className,
    'cdg-otp-single-input',
  )

  return (
    <CssInjection css={css}>
      <input {...htmlProps} ref={inputRef} className={rootClasses} />
    </CssInjection>
  )
})

const SingleOTPInput = memo(SingleOTPInputComponent)
export default SingleOTPInput
