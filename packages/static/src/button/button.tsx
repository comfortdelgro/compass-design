'use client'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import Ripple from './ripple'
import styles from './styles/button.module.css'

interface Props {
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
  css?: unknown
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  h5?: boolean
}

export type ButtonProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props> &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof Omit<React.HTMLAttributes<HTMLElement>, keyof Props>
  >

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
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
    // VariantProps
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    isSquare = false,
    h5 = false,
    // html props
    ...htmlProps
  } = props

  const buttonRef = useDOMRef<HTMLButtonElement | HTMLAnchorElement>(
    ref as React.RefObject<HTMLButtonElement | HTMLAnchorElement>,
  )

  // events handler
  const handleEvents = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLAnchorElement>
      | React.FocusEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLAnchorElement>
      | React.TouchEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLAnchorElement>,
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
        onClick
          ? onClick?.(e as React.MouseEvent<HTMLButtonElement>)
          : onPress?.(e as React.MouseEvent<HTMLButtonElement>)
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

  const Button = href ? 'a' : 'button'

  //  button classes
  const buttonClasses = [
    styles.button,
    loading && styles.loading,
    variant && styles[variant],
    size && styles[size],
    fullWidth && styles.fullWidth,
    isSquare && styles.isSquare,
    loading && styles.loading,
    isDisabled && styles.isDisabled,
    href && variant && styles[variant + 'Link'],
    href && styles.linkButton,
    h5 && styles.h5,
    h5 && variant && styles[variant + 'H5'],
    className,
    'cdg-button',
  ]
    .filter(Boolean)
    .join(' ')

  // content classes
  const contentClasses = [
    styles.content,
    leftIcon || (fullWidth && rightIcon) ? styles.hasIcon : '',
    size && styles[`${size}Content`],
    h5 && styles.h5Content,
    'cdg-button-content',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <Button
        ref={
          buttonRef as React.RefObject<HTMLButtonElement> &
            React.RefObject<HTMLAnchorElement>
        }
        href={href}
        target={hrefTarget || (hrefExternal ? '_blank' : undefined)}
        rel={
          hrefTarget === '_blank' || hrefExternal
            ? 'noopener noreferrer'
            : undefined
        }
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
        className={buttonClasses}
        {...htmlProps}
      >
        {loading ? (
          <Ripple isEnabled={ripple}>
            <span
              // make sure the loading indicator isn't visible to screen readers
              hidden={!loading}
              aria-hidden={!loading}
              className={contentClasses}
            >
              <span className={styles.loadingDots}>
                <span
                  className={`${styles.loadingDot} ${styles.firstLoadingDot}`}
                />
                <span
                  className={`${styles.loadingDot} ${styles.secondLoadingDot}`}
                />
                <span
                  className={`${styles.loadingDot} ${styles.thirdLoadingDot}`}
                />
              </span>
            </span>
          </Ripple>
        ) : (
          <Ripple isEnabled={ripple}>
            <span className={contentClasses}>
              {leftIcon || (fullWidth && rightIcon) ? (
                <span className={`${styles.leftIcon} cdg-button-left-icon`}>
                  {leftIcon}
                </span>
              ) : null}
              <span
                className={`cdg-button-content-children ${styles.children}`}
              >
                {children}
              </span>
              {rightIcon || (fullWidth && leftIcon) ? (
                <span className={`${styles.rightIcon} cdg-button-right-icon`}>
                  {rightIcon}
                </span>
              ) : null}
            </span>
          </Ripple>
        )}
      </Button>
    </CssInjection>
  )
})

export default Button
