import {AriaButtonProps, useButton} from '@react-aria/button'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'

export const Button = React.forwardRef<HTMLButtonElement, AriaButtonProps>(
  (props, ref) => {
    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const {buttonProps} = useButton(props, buttonRef)
    return (
      <button {...buttonProps} ref={buttonRef}>
        {props.children}
      </button>
    )
  },
)

export const Icon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='#201F1E'
    />
  </svg>
)
