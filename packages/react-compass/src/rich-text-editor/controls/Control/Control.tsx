import React from 'react'
import type {StyledComponentProps} from '../../../utils/stitches.types'
import {useDOMRef} from '../../../utils/use-dom-ref'
import {ControlVariantProps, StyledControl} from './Control.styles'


interface Props extends StyledComponentProps {
  active: boolean
  children?: React.ReactNode
  className?: string
  onClick?: (
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
  onBlur?: (e: React.FocusEvent) => void
  onDragStart?: (e: React.MouseEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void
  onPointerDown?: (e: React.PointerEvent) => void
  onPointerUp?: (e: React.PointerEvent) => void
  tabIndex?: number
  type?: 'button' | 'reset' | 'submit' | undefined
}
export interface PremadeControlProps extends StyledComponentProps {
  icon?: React.FC
  controltype?: string
}
export type ButtonProps = Props &
  ControlVariantProps &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const Control = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      css = {},
      onClick,
      ...ariaSafeProps
      // AriaButtonProps
    } = props

    // const buttonProps = useButton(ariaSafeProps, buttonRef).buttonProps
    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const componentProps = () => {
      return {
        className,
        css,
        ...ariaSafeProps,
      }
    }
    const delegateProps = componentProps()

    return (
      <StyledControl
        ref={buttonRef}
        onClick={onClick}
        onTouchEnd={onClick}
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
        {...delegateProps}
      >
        {children}
      </StyledControl>
    )
  },
)

export default Control
