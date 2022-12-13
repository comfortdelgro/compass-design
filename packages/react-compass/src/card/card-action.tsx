import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCardAction} from './card-action.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type CardActionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledCardAction css={css} ref={ref} {...delegated}>
        {children}
      </StyledCardAction>
    )
  },
)

export default CardAction
