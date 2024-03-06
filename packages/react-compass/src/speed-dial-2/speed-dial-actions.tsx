import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/speed-dial.module.css'

interface Props {
  children?: React.ReactNode
  position?: 'up' | 'right' | 'down' | 'left'
}

export type SpeedDialActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const SpeedDialActions = React.forwardRef<
  HTMLDivElement,
  SpeedDialActionsProps
>((props, ref) => {
  const {children, position = 'up', ...htmlProps} = props
  const speedDialActionRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <div
      className={`cdg-speed-dial-actions ${styles.speedDialActions} ${styles[position]}`}
      ref={speedDialActionRef}
      {...htmlProps}
    >
      {children}
    </div>
  )
})
