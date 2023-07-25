import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledFormExplainationDescription,
  StyledFormExplainationTitle,
  StyledFormLayoutExplaination,
} from './FormLayout.styles'
interface Props extends StyledComponentProps {
  title: React.ReactNode
  description: string
  css?: CSS
}

export type FormLayoutExplainationProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const FormLayoutExplaination = React.forwardRef<
  HTMLDivElement,
  FormLayoutExplainationProps
>((props, ref) => {
  const formRef = useDOMRef<HTMLDivElement>(ref)
  const {title, description, css = {}, ...delegated} = props

  return (
    <StyledFormLayoutExplaination ref={formRef} css={css} {...delegated}>
      <StyledFormExplainationTitle>{title}</StyledFormExplainationTitle>
      <StyledFormExplainationDescription>
        {description}
      </StyledFormExplainationDescription>
    </StyledFormLayoutExplaination>
  )
})

export default FormLayoutExplaination
