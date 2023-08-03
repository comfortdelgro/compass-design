import React from 'react'
import {useIsDarkTheme} from '../theme'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CardAction from './card-action'
import CardBody from './card-body'
import CardImage from './card-image'
import CardTitle from './card-title'
import {CardVariantProps, StyledCard} from './card.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type CardProps = Props &
  CardVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    // StyledComponentProps
    css = {},
    // VariantProps
    isDisabled = false,
    isShadowless = false,
    isClickable = false,
    size = 'full',
    // HTMLDiv Props
    ...delegated
  } = props

  const isDarkTheme = useIsDarkTheme()

  const cardRef = useDOMRef<HTMLDivElement>(ref)

  const variantProps = {
    isDisabled,
    isShadowless,
    isClickable,
  }

  const buttonProps = isClickable ? {tabIndex: 1, role: 'button'} : {}

  return (
    <StyledCard
      {...variantProps}
      size={size}
      css={css}
      ref={cardRef}
      isDarkTheme={isDarkTheme}
      {...buttonProps}
      {...delegated}
    >
      {children}
    </StyledCard>
  )
})

export default Card as typeof Card & {
  Body: typeof CardBody
  Image: typeof CardImage
  Title: typeof CardTitle
  Action: typeof CardAction
}
