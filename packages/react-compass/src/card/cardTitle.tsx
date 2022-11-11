import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledBCardTitle} from './cardTitle.styles'

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
        return <h2 className='card-default-title'>{children}</h2>
      }
      return children
    }

    return (
      <StyledBCardTitle css={css} ref={ref} {...delegated}>
        {renderTitle()}
      </StyledBCardTitle>
    )
  },
)

export default CardTitle
