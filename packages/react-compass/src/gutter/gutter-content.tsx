import React, {forwardRef} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledGutterContent} from './gutter-content.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type GutterContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const GutterContent = forwardRef<HTMLDivElement, GutterContentProps>(
  (props, ref) => {
    const {children, css = {}} = props

    return (
      <StyledGutterContent css={css} ref={ref}>
        {children}
      </StyledGutterContent>
    )
  },
)

export default GutterContent
