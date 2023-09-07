import React from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  ButtonVariantProps,
  StyledButton,
  StyledButtonContent,
  StyledLoading,
} from './button.styles'
import Ripple from './ripple'

interface Props extends StyledComponentProps {
  href?: string
  hrefTarget?: string
  hrefExternal?: boolean
  children?: React.ReactNode
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onPress?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => void
  ripple?: boolean
  isDisabled?: boolean
  'aria-controls'?: string
  'aria-expanded'?: boolean
  'aria-haspopup'?: boolean
  'aria-pressed'?: boolean
  disabled?: boolean
  onBlur?: (e: React.FocusEvent) => void
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => void
  onDragStart?: (e: React.MouseEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void
  onPointerDown?: (e: React.PointerEvent) => void
  onPointerUp?: (e: React.PointerEvent) => void
  onTouchEnd?: (e: React.TouchEvent<HTMLButtonElement>) => void
  tabIndex?: number
  type?: 'button' | 'reset' | 'submit' | undefined
  enableEventsOnDisabled?: boolean
  enableEventsOnLoading?: boolean
  isSquare?: boolean
}

export type ButtonProps = Props &
  ButtonVariantProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      // Add link redirect
      href,
      hrefTarget,
      hrefExternal,
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
      className,
      leftIcon,
      rightIcon,
      onPress,
      onClick,
      onTouchEnd,
      onBlur,
      onDragStart,
      onFocus,
      onKeyDown,
      onKeyUp,
      onPointerDown,
      onPointerUp,
      ripple = false,
      isDisabled = false,
      type = 'button',
      tabIndex,
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHaspopup,
      'aria-pressed': ariaPressed,
      enableEventsOnDisabled = false,
      enableEventsOnLoading = false,
      isSquare = false,
      // VariantProps
      variant,
      size,
      fullWidth,
      loading,
      // AriaButtonProps
      ...delegated
    } = props

    const buttonRef = useDOMRef<HTMLButtonElement>(ref)

    const variantProps = {
      variant,
      size,
      fullWidth,
      loading,
    } as ButtonVariantProps

    const componentProps = () => {
      if (loading) return {className, css, ...variantProps}
      if (href || hrefTarget || hrefExternal)
        return {
          className: `cdg-link-button ${className ? className : ''}`,
          css,
          ...{as: 'a', ...delegated},
          ...variantProps,
          href,
          target: `${hrefTarget || (hrefExternal ? '_blank' : undefined)}`,
          rel: `${
            hrefTarget === '_blank' || hrefExternal
              ? 'noopener noreferrer'
              : undefined
          }`,
        }
      return {
        className,
        css,
        ...delegated,
        ...variantProps,
      }
    }
    const delegateProps = componentProps()

    // events handler
    const handleEvents = (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>
        | React.FocusEvent<HTMLButtonElement>
        | React.TouchEvent<HTMLButtonElement>,
    ) => {
      if (!enableEventsOnDisabled && isDisabled) return
      if (!enableEventsOnLoading && loading) return
      switch (e.type) {
        case 'keydown':
          onKeyDown?.(e as React.KeyboardEvent<HTMLButtonElement>)
          break
        case 'keyup':
          onKeyUp?.(e as React.KeyboardEvent<HTMLButtonElement>)
          break
        case 'pointerdown':
          onPointerDown?.(e as React.PointerEvent<HTMLButtonElement>)
          break
        case 'pointerup':
          onPointerUp?.(e as React.PointerEvent<HTMLButtonElement>)
          break
        case 'focus':
          onFocus?.(e as React.FocusEvent<HTMLButtonElement>)
          break
        case 'blur':
          onBlur?.(e as React.FocusEvent<HTMLButtonElement>)
          break
        case 'click':
          onClick?.(e as React.MouseEvent<HTMLButtonElement>) ??
            onPress?.(e as React.MouseEvent<HTMLButtonElement>)
          break
        case 'touchend':
          onTouchEnd?.(e as React.TouchEvent<HTMLButtonElement>)
          break
        case 'dragstart':
          onDragStart?.(e as React.MouseEvent<HTMLButtonElement>)
          break
        default:
          break
      }
    }

    return (
      <>
        <Ripple isEnabled={ripple}>
          <StyledButton
            {...delegateProps}
            ref={buttonRef}
            // only allow onClick and onTouchEnd to be passed to the button
            // reserve onMouseDown and onTouchStart for ripple effect
            disabled={isDisabled}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            aria-haspopup={ariaHaspopup}
            aria-pressed={ariaPressed}
            tabIndex={tabIndex}
            role={href ? 'link' : 'button'}
            onClick={handleEvents}
            onTouchEnd={handleEvents}
            onBlur={handleEvents}
            onDragStart={handleEvents}
            onFocus={handleEvents}
            onKeyDown={handleEvents}
            onKeyUp={handleEvents}
            onPointerDown={handleEvents}
            onPointerUp={handleEvents}
            type={type}
            isSquare={isSquare}
          >
            {loading ? (
              <StyledLoading
                // make sure the loading indicator isn't visible to screen readers
                hidden={!loading}
                aria-hidden={!loading}
              >
                <div className='dots'>
                  <span />
                  <span />
                  <span />
                </div>
              </StyledLoading>
            ) : null}

            <StyledButtonContent isHaveIcon={Boolean(leftIcon || rightIcon)}>
              {leftIcon || (fullWidth && rightIcon) ? (
                <div className='icon left'>{leftIcon}</div>
              ) : null}
              <span className='children'>{children}</span>
              {rightIcon || (fullWidth && leftIcon) ? (
                <div className='icon right'>{rightIcon}</div>
              ) : null}
            </StyledButtonContent>
          </StyledButton>
        </Ripple>
      </>
    )
  },
)

export default Button
