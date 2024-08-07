import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import CardAction from './card-actions'
import CardBody from './card-body'
import CardImage from './card-image'
import CardTitle from './card-title'
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

  const rootClasses = classNames(
    styles.card,
    isDisabled && styles.disabled,
    isShadowless && styles.shadowless,
    isClickable && styles.clickable,
    size === 'full'
      ? styles.full
      : size === 'lg'
      ? styles.lg
      : size === 'sm'
      ? styles.sm
      : '',
    className,
    'cdg-card',
  )

  return (
    <CssInjection css={css} childrenRef={cardRef}>
      <div
        {...htmlProps}
        {...buttonProps}
        ref={cardRef}
        className={rootClasses}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default Card as typeof Card & {
  Body: typeof CardBody
  Image: typeof CardImage
  Title: typeof CardTitle
  Action: typeof CardAction
}
