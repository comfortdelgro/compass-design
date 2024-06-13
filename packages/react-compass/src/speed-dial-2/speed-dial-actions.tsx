import React from 'react'
import {classNames} from '../utils/string'
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
      {...htmlProps}
      ref={speedDialActionRef}
      className={classNames(
        styles.speedDialActions,
        styles[position],
        'cdg-speed-dial-actions',
      )}
    >
      {children}
    </div>
  )
})
