import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/accordion-button.module.css'

interface Props {
  css: CSS
  expand?: boolean
}

export type AccordionButtonProps = Props &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const AccordionButton = React.forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>((props, ref) => {
  const {
    css = {},
    expand,
    children,
    className,
    onMouseDown,
    onKeyDown,
    ...delegated
  } = props

  const buttonRef = useDOMRef<HTMLButtonElement>(ref)

  const rootClasses = classNames(
    styles.accordionButton,
    expand ? styles.open : styles.close,
    className,
    'cdg-accordion-button',
  )

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
