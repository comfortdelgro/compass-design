import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCard} from './Card.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type CardProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledCard css={css} ref={ref} {...delegated}>
      {children}
    </StyledCard>
  )
})

export default Card
