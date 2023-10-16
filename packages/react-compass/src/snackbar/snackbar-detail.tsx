import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSnackbarDetail} from './snackbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SnackbarDetailProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarDetail = React.forwardRef<HTMLDivElement, SnackbarDetailProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const snackbarDetailRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledSnackbarDetail css={css} ref={snackbarDetailRef} {...delegated}>
        {children}
      </StyledSnackbarDetail>
    )
  },
)

export default SnackbarDetail
