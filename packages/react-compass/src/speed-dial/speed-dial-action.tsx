import {useMergeRefs} from '@floating-ui/react'
import React from 'react'
import {useKeyboardNavigation, useKeyboardNavigationState} from '../utils/hooks'
import CssInjection from '../utils/objectToCss/CssInjection'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/speed-dial.module.css'

interface Props {
  icon?: React.ReactNode
  name?: string
  position?: 'up' | 'right' | 'down' | 'left' | undefined
  isVisible?: boolean
  css?: unknown
  className?: string
}

type SpeedDialActionProps = Props &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

export const SpeedDialAction = React.forwardRef<
  HTMLButtonElement,
  SpeedDialActionProps
>((props, ref) => {
  const {isVisible = false, css = {}, className = '', ...htmlProps} = props
  const {useDescendant} = useKeyboardNavigationState()
  const {selected, onMouseMove} = useKeyboardNavigation()
  const {icon, name, position} = props
  const {index, register} = useDescendant()
  const domRef = useDOMRef<HTMLButtonElement>()

  const isSelected = index === selected

  const mergeRef = useMergeRefs([ref, domRef, register])

  const actionClasses = [
    styles.speedDialAction,
    position && styles[`speedDialAction${capitalizeFirstLetter(position)}`],
    isVisible ? styles.isVisibleTrue : styles.isVisibleFalse,
    position && styles[`speedDialAction${capitalizeFirstLetter(position)}`],
    className,
    'cdg-speed-dial-action',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={mergeRef}>
      <button
        {...htmlProps}
        className={actionClasses}
        ref={mergeRef}
        aria-selected={isSelected}
        onMouseMove={onMouseMove?.(index)}
        tabIndex={-1}
        type='button'
        role='menuitem'
      >
        <span className={`${styles.speedDialIcon} cdg-speed-dial-action-icon`}>
          {icon}
        </span>
        <span className={`${styles.speedDialName} cdg-speed-dial-action-name`}>
          {name}
        </span>
      </button>
    </CssInjection>
  )
})
