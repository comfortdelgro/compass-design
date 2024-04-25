import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/accordion-button.module.css'

interface Props {
  css: CSS
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

  const rootClasses = [
    styles.accordionButton,
    expand ? styles.open : styles.close,
    className,
    'cdg-accordion-button',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={buttonRef}>
      <button
        {...delegated}
        type='button'
        ref={buttonRef}
        className={rootClasses}
        aria-expanded={expand}
        aria-controls={props['aria-controls']}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
      >
        {children}
      </button>
    </CssInjection>
  )
})

export default AccordionButton
