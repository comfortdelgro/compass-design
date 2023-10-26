import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSnackbarSuffixIcon} from './snackbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  onClose?: () => void
}

export type SnackbarSuffixIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarSuffixIcon = React.forwardRef<
  HTMLDivElement,
  SnackbarSuffixIconProps
>((props, ref) => {
  const {children, css = {}, onClose, ...delegated} = props
  const snackbarSuffixIconRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledSnackbarSuffixIcon
      css={css}
      ref={snackbarSuffixIconRef}
      {...delegated}
      onClick={(e) => {
        e.stopPropagation()
        onClose?.()
      }}
    >
      {children}
    </StyledSnackbarSuffixIcon>
  )
})

export default SnackbarSuffixIcon
