import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/card.module.css'

interface Props {
  css?: CSS
  children?: React.ReactNode
  isDisabled?: boolean
  isShadowless?: boolean
  isClickable?: boolean
  size?: 'lg' | 'full' | 'sm'
}

export type CardProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    className,
    // StyledComponentProps
    css = {},
    // VariantProps
    isDisabled = false,
    isShadowless = false,
    isClickable = false,
    size = 'full',
    // HTMLDiv Props
    ...htmlProps
  } = props

  const cardRef = useDOMRef<HTMLDivElement>(ref)

  const buttonProps = isClickable ? {tabIndex: 1, role: 'button'} : {}

  return (
    <CssInjection css={css} childrenRef={cardRef}>
      <div
        className={`${styles.card} ${isDisabled ? styles.disabled : ''} ${
          isShadowless ? styles.shadowless : ''
        } ${isClickable ? styles.clickable : ''} ${
          size === 'full'
            ? styles.full
            : size === 'lg'
            ? styles.lg
            : size === 'sm'
            ? styles.sm
            : ''
        } ${className ?? ''}`}
        ref={cardRef}
        {...buttonProps}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default Card
