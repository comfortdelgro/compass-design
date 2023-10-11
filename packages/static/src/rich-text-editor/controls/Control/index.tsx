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
    return (
      <CssInjection css={css} childrenRef={buttonRef}>
        <button
          ref={buttonRef}
          className={`cdg-rte-control ${className} ${styles.rteControl} ${
            active ? styles.active : ''
          }`}
          onClick={onClick}
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
          onTouchEnd={props.onTouchEnd}
          {...htmlProps}
        >
          {children}
        </button>
      </CssInjection>
    )
  },
)

export default Control
