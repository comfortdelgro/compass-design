import React, {HTMLAttributes} from 'react'
import CssInjection from '../../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../../utils/use-dom-ref'
import styles from '../../styles/control.module.css'

interface Props {
  active: boolean
  children?: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
  onTouchEnd?: (e: React.TouchEvent<HTMLButtonElement>) => void
  tabIndex?: number
  type?: 'button' | 'reset' | 'submit' | undefined
  css?: unknown
}
export interface PremadeControlProps {
  icon?: React.FC
  controltype?: string
  css?: unknown
}
export type ButtonProps = Props &
  Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>

const Control = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {children, className, active, css = {}, onClick, ...htmlProps} = props
    const buttonRef = useDOMRef<HTMLButtonElement>(ref)

    const rootClasses = React.useMemo(() => {
      return [
        styles.rteControl,
        active && styles.active,
        'cdg-rte-control',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [active, className])

    return (
      <CssInjection css={css} childrenRef={buttonRef}>
        <button
          ref={buttonRef}
          className={rootClasses}
          tabIndex={props.tabIndex}
          aria-pressed={props['aria-pressed']}
          aria-controls={props['aria-controls']}
          aria-expanded={props['aria-expanded']}
          aria-haspopup={props['aria-haspopup']}
          onClick={onClick}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
          onTouchEnd={props.onTouchEnd}
          onDragStart={props.onDragStart}
          onPointerUp={props.onPointerUp}
          onPointerDown={props.onPointerDown}
          {...htmlProps}
        >
          {children}
        </button>
      </CssInjection>
    )
  },
)

export default Control
