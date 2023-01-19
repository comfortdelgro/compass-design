import {AriaButtonProps, useButton} from '@react-aria/button'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'

export interface CollapseState {
  isOpen: boolean
  setOpen: (v: boolean) => void
  toggle: () => void
  close: () => void
  open: () => void
}

export const Button = React.forwardRef<HTMLButtonElement, AriaButtonProps>(
  (props, ref) => {
    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const {buttonProps} = useButton(props, buttonRef)
    return (
      <button {...buttonProps} ref={ref}>
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

export const XIcon = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <g clip-path='url(#clip0_5299_13653)'>
      <path
        d='M9.11731 7.88215C9.45908 8.22392 9.45908 8.77759 9.11731 9.11936C8.94779 9.29024 8.72359 9.375 8.49938 9.375C8.27518 9.375 8.05153 9.28956 7.88092 9.11867L4.99966 6.23892L2.11867 9.11799C1.94779 9.29024 1.72386 9.375 1.49993 9.375C1.276 9.375 1.05235 9.29024 0.881328 9.11799C0.539557 8.77622 0.539557 8.22255 0.881328 7.88078L3.76313 4.99897L0.881328 2.11854C0.539557 1.77677 0.539557 1.2231 0.881328 0.881328C1.2231 0.539557 1.77677 0.539557 2.11854 0.881328L4.99966 3.7645L7.88146 0.882695C8.22323 0.540925 8.7769 0.540925 9.11867 0.882695C9.46044 1.22446 9.46044 1.77813 9.11867 2.1199L6.23687 5.00171L9.11731 7.88215Z'
        fill='#3B3A39'
      />
    </g>
    <defs>
      <clipPath id='clip0_5299_13653'>
        <rect width='10' height='10' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
