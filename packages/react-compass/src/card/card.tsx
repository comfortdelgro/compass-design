import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CardBody from './card-body'
import CardImage from './card-image'
import CardTitle from './card-title'
import {CardVariantProps, StyledCard} from './card.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isDisabled?: boolean
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
    size = 'full',
    // HTMLDiv Props
    ...delegated
  } = props

  const cardRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledCard
      variant={isDisabled ? 'disabled' : 'default'}
      size={size}
      css={css}
      ref={cardRef}
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
}
