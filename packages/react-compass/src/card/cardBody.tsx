import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCardBody} from './cardBody.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type CardBodyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledCardBody css={css} ref={ref} {...delegated}>
        {children}
      </StyledCardBody>
    )
  },
)

export default CardBody
