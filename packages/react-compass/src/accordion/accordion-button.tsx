import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  AccordionTitleVariantProps,
  StyledAccordionButton,
} from './accordion-button.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  className?: string
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type ButtonProps = Props & AccordionTitleVariantProps

const AccordionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      expand = 'close',
      className,
      css = {},
      onMouseDown,
      ...ariaSafeProps
    } = props

    const buttonRef = useDOMRef<HTMLButtonElement>(ref)

    return (
      <StyledAccordionButton
        expand={expand}
        ref={buttonRef}
        className={className}
        css={css}
        onMouseDown={onMouseDown}
        {...ariaSafeProps}
      >
        {children}
      </StyledAccordionButton>
    )
  },
)

export default AccordionButton
