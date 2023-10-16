import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSnackbarDetailDescription} from './snackbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SnackbarDetailDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarDetailDescription = React.forwardRef<HTMLDivElement, SnackbarDetailDescriptionProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const snackbarDetailDescriptionRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledSnackbarDetailDescription css={css} ref={snackbarDetailDescriptionRef} {...delegated}>
        {children}
      </StyledSnackbarDetailDescription>
    )
  },
)

export default SnackbarDetailDescription
