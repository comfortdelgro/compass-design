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
  children?: React.ReactNode
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onPress?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => void
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  ripple?: boolean
  isDisabled?: boolean
  'aria-controls'?: string
  'aria-expanded'?: boolean
  'aria-haspopup'?: boolean
  'aria-pressed'?: boolean
  disabled?: boolean
  onBlur?: (e: React.FocusEvent) => void
  onClick?: (e: React.MouseEvent) => void
  onDragStart?: (e: React.MouseEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void
  onPointerDown?: (e: React.PointerEvent) => void
  onPointerUp?: (e: React.PointerEvent) => void
  tabIndex?: number
  type?: 'button' | 'reset' | 'submit' | undefined
}

export type ButtonProps = Props &
  ButtonVariantProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

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
      onMouseDown,
      onPress,
      ripple = false,
      isDisabled = false,
      // AriaButtonProps
      ...ariaSafeProps
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
      return {
        className,
        css,
        ...ariaSafeProps,
        ...variantProps,
      }
    }
    const delegateProps = componentProps()

    return (
      <>
        {ripple ? (
          <Ripple>
            <StyledButton
              {...delegateProps}
              ref={buttonRef}
              onMouseDown={onMouseDown}
              onClick={onPress}
              onTouchEnd={onPress}
              disabled={isDisabled}
              aria-controls={props['aria-controls']}
              aria-expanded={props['aria-expanded']}
              aria-haspopup={props['aria-haspopup']}
              aria-pressed={props['aria-pressed']}
              tabIndex={props.tabIndex}
              onBlur={props.onBlur}
              onDragStart={props.onDragStart}
              onFocus={props.onFocus}
              onKeyDown={props.onKeyDown}
              onKeyUp={props.onKeyUp}
              onPointerDown={props.onPointerDown}
              onPointerUp={props.onPointerUp}
            >
              {loading ? (
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
              ) : (
                <></>
              )}

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
          </Ripple>
        ) : (
          <StyledButton
            {...delegateProps}
            ref={buttonRef}
            onMouseDown={onMouseDown}
            onClick={onPress}
            onTouchEnd={onPress}
            disabled={isDisabled}
            aria-controls={props['aria-controls']}
            aria-expanded={props['aria-expanded']}
            aria-haspopup={props['aria-haspopup']}
            aria-pressed={props['aria-pressed']}
            tabIndex={props.tabIndex}
            onBlur={props.onBlur}
            onDragStart={props.onDragStart}
            onFocus={props.onFocus}
            onKeyDown={props.onKeyDown}
            onKeyUp={props.onKeyUp}
            onPointerDown={props.onPointerDown}
            onPointerUp={props.onPointerUp}
          >
            {loading ? (
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
            ) : (
              <></>
            )}

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
        )}
      </>
    )
  },
)

export default Button
