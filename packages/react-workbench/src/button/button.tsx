import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import React, {useRef} from 'react'
import {ButtonVariantProps, StyledButton} from './button.styles'

export type ButtonProps = ButtonVariantProps &
  React.ComponentPropsWithoutRef<'button'>

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  block,
  disabled,
  children,
  ...delegated
}) => {
  const variantProps = {variant, size, block} as ButtonVariantProps
  const ariaProps = {...delegated, isDisabled: disabled} as AriaButtonProps

  const ref = useRef<HTMLButtonElement>(null)
  const {buttonProps} = useButton(ariaProps, ref)

  return (
    <StyledButton ref={ref} {...buttonProps} {...variantProps}>
      {children}
    </StyledButton>
  )
}

export default Button
