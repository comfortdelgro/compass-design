import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSnackbarIcon} from './snackbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SnackbarPrefixIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarPrefixIcon = React.forwardRef<HTMLDivElement, SnackbarPrefixIconProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const toastIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledSnackbarIcon css={css} ref={toastIconRef} {...delegated}>
        {children}
      </StyledSnackbarIcon>
    )
  },
)

export default SnackbarPrefixIcon
