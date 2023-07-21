import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledFormLayoutGroup} from './FormLayout.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
  columns?: 1 | 2 | 3
}

export type FormLayoutGroupProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const FormLayoutGroup = React.forwardRef<
  HTMLDivElement,
  FormLayoutGroupProps
>((props, ref) => {
  const formRef = useDOMRef<HTMLDivElement>(ref)
  const {children, css = {}, ...delegated} = props

  return (
    <StyledFormLayoutGroup ref={formRef} css={css} {...delegated}>
      {children}
    </StyledFormLayoutGroup>
  )
})
