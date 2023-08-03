import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledModalTitle} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ModalTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const modalTitleRef = useDOMRef<HTMLHeadingElement>(ref)
    return (
      <StyledModalTitle css={css} ref={modalTitleRef} {...delegated}>
        {children}
      </StyledModalTitle>
    )
  },
)

export default ModalTitle
