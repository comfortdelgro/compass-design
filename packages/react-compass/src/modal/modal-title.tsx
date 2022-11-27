import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledModalTitle} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ModalTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalTitle = React.forwardRef<HTMLDivElement, ModalTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledModalTitle css={css} ref={ref} {...delegated}>
        {children}
      </StyledModalTitle>
    )
  },
)

export default ModalTitle
