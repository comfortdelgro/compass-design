import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import React from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  ButtonVariantProps,
  StyledButton,
  StyledButtonContent,
  StyledLoading,
} from './button.styles'

interface Props extends AriaButtonProps, StyledComponentProps {
  children?: React.ReactNode
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export type ButtonProps = Props & ButtonVariantProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
      className,
      leftIcon,
      rightIcon,
      // VariantProps
      variant,
      size,
      fullWidth,
      loading,
      // AriaButtonProps
      ...ariaSafeProps
    } = props

    const componentProps = {className}

    // const {
    //   // we have no information about these props
    //   // todo: should we delegate them?
    //   ...extraProps
    // } = ariaSafeProps

    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const {buttonProps} = useButton(ariaSafeProps, buttonRef)

    const variantProps = {
      variant,
      size,
      fullWidth,
      loading,
    } as ButtonVariantProps

    return (
      <StyledButton
        /** Stitches related props, such as `css` and `as` */
        css={css}
        /** React related props */
        ref={buttonRef}
        /**
         * 1. Aria props first, e.g. aria attributes, events, etc.
         * 2. Then component props, e.g. className, data-attributes, etc.
         * 3. Then variant props at last, to make sure we have styles even in case of clash.
         */
        {...buttonProps}
        {...componentProps}
        {...variantProps}
      >
        <StyledLoading
          // make sure the loading indicator isn't visible to screen readers
          hidden={!loading}
          aria-hidden={!loading}
        >
          <div className='dots'>
            <i />
            <i />
            <i />
          </div>
        </StyledLoading>

        <StyledButtonContent>
          {leftIcon || (fullWidth && rightIcon) ? (
            <div className='icon left'>{leftIcon}</div>
          ) : null}
          <span className='children'>{children}</span>
          {rightIcon || (fullWidth && leftIcon) ? (
            <div className='icon right'>{rightIcon}</div>
          ) : null}
        </StyledButtonContent>
      </StyledButton>
    )
  },
)

export default Button
