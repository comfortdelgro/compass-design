import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import React from 'react'
import {StyledComponentProps} from '../../../utils/stitches.types'
import {useDOMRef} from '../../../utils/use-dom-ref'
import {
  RichTextEditorDropdownButtonVariantProps,
  StyledDropdownButton,
} from './menu-bar-select-button.styles'

interface Props extends AriaButtonProps, StyledComponentProps {
  children?: React.ReactNode
  className?: string
}

export type ButtonProps = Props & RichTextEditorDropdownButtonVariantProps

const MenuBarSelectButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      // expand = 'close',
      className,
      css = {},
      ...ariaSafeProps
    } = props

    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const {buttonProps} = useButton(ariaSafeProps, buttonRef)

    return (
      <StyledDropdownButton
        ref={buttonRef}
        className={className}
        css={css}
        {...buttonProps}
      >
        {children}
      </StyledDropdownButton>
    )
  },
)

export default MenuBarSelectButton
