import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/speed-dial.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
}

export type SpeedDialButtonProps = Props &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

export const SpeedDialButton = React.forwardRef<
  HTMLButtonElement,
  SpeedDialButtonProps
>((props, ref) => {
  const {children, isOpen, ...htmlProps} = props
  const floatButtonRef = useDOMRef<HTMLButtonElement>(ref)

  return (
    <button
      className={`cdg-speed-dial-button ${styles.floatButton} ${
        isOpen && styles.open
      }`}
      ref={floatButtonRef}
      type='button'
      {...htmlProps}
    >
      {children}
    </button>
  )
})
