import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {CardVariantProps, StyledCard} from './card.styles'
import CardBody from './cardBody'
import CardImage from './cardImage'
import CardTitle from './cardTitle'

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
    variant = 'default',
    size = 'full',
    // HTMLDiv Props
    ...delegated
  } = props

  const cardRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledCard
      variant={variant}
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
