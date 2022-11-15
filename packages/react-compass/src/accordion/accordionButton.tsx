import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  AccordionTitleVariantProps,
  StyledAccordionButton,
} from './accordionButton.styles'

interface Props extends AriaButtonProps, StyledComponentProps {
  children?: React.ReactNode
  className?: string
}

export type ButtonProps = Props & AccordionTitleVariantProps

const AccordionButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      expand = 'close',
      className,
      css = {},
      ...ariaSafeProps
    } = props

    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const {buttonProps} = useButton(ariaSafeProps, buttonRef)

    return (
      <StyledAccordionButton
        expand={expand}
        ref={buttonRef}
        className={className}
        css={css}
        {...buttonProps}
      >
        {children}
      </StyledAccordionButton>
    )
  },
)

export default AccordionButton
