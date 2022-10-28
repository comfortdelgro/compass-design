import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import type {CSS} from '@stitches/react'
import React, {useRef} from 'react'
import {ButtonVariantProps, StyledButton} from './button.styles'
import Loading from './loading'

interface Props extends ButtonVariantProps {
  css?: CSS
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export type ButtonProps = Props &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof Props>

const Button: React.FC<ButtonProps> = ({
  css = {},
  variant,
  size,
  block,
  iconOnly,
  disabled,
  loading,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...delegated
}) => {
  const variantProps = {
    variant,
    size,
    block,
    iconOnly,
    loading,
  } as ButtonVariantProps
  const ariaProps = {
    ...delegated,
    isDisabled: disabled,
    onPress: onClick as AriaButtonProps['onPress'],
  } as AriaButtonProps

  const ref = useRef<HTMLButtonElement>(null)
  const {buttonProps} = useButton(ariaProps, ref)

  return (
    <StyledButton
      ref={ref}
      css={css}
      {...delegated}
      {...buttonProps}
      {...variantProps}
    >
      <div className='loading-wrapper' aria-hidden={!loading} hidden={!loading}>
        <Loading />
      </div>

      {leftIcon && (
        <span className='left-icon-wrapper'>
          <FontAwesomeIcon className='icon' icon={leftIcon} />
        </span>
      )}
      <span className='content-wrapper'>{children}</span>
      {rightIcon && (
        <span className='right-icon-wrapper'>
          <FontAwesomeIcon className='icon' icon={rightIcon} />
        </span>
      )}
    </StyledButton>
  )
}

export default Button
