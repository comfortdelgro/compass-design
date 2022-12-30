import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledModalCloseIcon} from './modal.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  onClose?: () => void
}

export type ModalCloseIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalCloseIcon = React.forwardRef<HTMLDivElement, ModalCloseIconProps>(
  (props, ref) => {
    const {children, css = {}, onClose, ...delegated} = props
    const modalCloseIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledModalCloseIcon
        css={css}
        ref={modalCloseIconRef}
        {...delegated}
        onClick={() => onClose?.()}
      >
        {children}
      </StyledModalCloseIcon>
    )
  },
)

export default ModalCloseIcon
