import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSnackbarText} from './snackbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SnackbarTextProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const SnackbarText = React.forwardRef<HTMLHeadingElement, SnackbarTextProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const SnackbarTextRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledSnackbarText css={css} ref={SnackbarTextRef} {...delegated}>
        {children}
      </StyledSnackbarText>
    )
  },
)

export default SnackbarText
