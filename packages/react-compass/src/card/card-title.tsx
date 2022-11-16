import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCardTitle, StyledCardTitleContainer} from './card-title.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type CardTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return <StyledCardTitle>{children}</StyledCardTitle>
      }
      return children
    }

    return (
      <StyledCardTitleContainer css={css} ref={ref} {...delegated}>
        {renderTitle()}
      </StyledCardTitleContainer>
    )
  },
)

export default CardTitle
