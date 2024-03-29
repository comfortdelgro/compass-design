import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/accordion-button.module.css'

interface Props {
  css: unknown
  children?: React.ReactNode
  className?: string
  expand?: boolean
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
}

export type AccordionButtonProps = Props &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const AccordionButton = React.forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>((props, ref) => {
  const {
    children,
    expand,
    className,
    css = {},
    onMouseDown,
    onKeyDown,
    ...delegated
  } = props

  const buttonRef = useDOMRef<HTMLButtonElement>(ref)

  return (
    <CssInjection css={css} childrenRef={buttonRef}>
      <button
        aria-expanded={expand}
        aria-controls={props['aria-controls']}
        ref={buttonRef}
        className={`${styles.accordionButton} ${
          expand ? styles.open : styles.close
        } ${className}`}
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        type='button'
        {...delegated}
      >
        {children}
      </button>
    </CssInjection>
  )
})

export default AccordionButton
