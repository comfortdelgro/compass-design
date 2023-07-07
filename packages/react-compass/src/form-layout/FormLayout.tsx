import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledFormLayout} from './FormLayout.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
}

export type FormLayoutProps = Props &
  Omit<React.HTMLAttributes<HTMLFormElement>, keyof Props>

export const FormLayout = React.forwardRef<HTMLFormElement, FormLayoutProps>(
  (props, ref) => {
    const formRef = useDOMRef<HTMLFormElement>(ref)
    const {children, css = {}, ...delegated} = props

    return (
      <StyledFormLayout ref={formRef} css={css} {...delegated}>
        {children}
      </StyledFormLayout>
    )
  },
)
