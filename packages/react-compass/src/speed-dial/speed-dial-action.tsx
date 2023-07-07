import {useMergeRefs} from '@floating-ui/react'
import React from 'react'
import {useKeyboardNavigation, useKeyboardNavigationState} from '../utils/hooks'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  SpeedDialAction as StyledSpeedDialAction,
  SpeedDialIcon,
  SpeedDialName,
} from './speed-dial.styles'

interface Props extends StyledComponentProps {
  icon?: React.ReactNode
  name?: string
  position?: 'up' | 'right' | 'down' | 'left' | undefined
}

type SpeedDialActionProps = Props &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

export const SpeedDialAction = React.forwardRef<
  HTMLButtonElement,
  SpeedDialActionProps
>((props, ref) => {
  const {...delegated} = props
  const {useDescendant} = useKeyboardNavigationState()
  const {selected, onMouseMove} = useKeyboardNavigation()
  const {icon, name, position} = props
  const {index, register} = useDescendant()
  const domRef = useDOMRef<HTMLButtonElement>()

  const isSelected = index === selected

  const mergeRef = useMergeRefs([ref, domRef, register])

  return (
    <StyledSpeedDialAction
      className={`speed-dial__action speed-dial__action--${position}`}
      ref={mergeRef}
      aria-selected={isSelected}
      onMouseMove={onMouseMove?.(index)}
      tabIndex={-1}
      type='button'
      role='menuitem'
      {...delegated}
    >
      <SpeedDialIcon className='speed-dial__action-icon'>{icon}</SpeedDialIcon>
      <SpeedDialName className='speed-dial__action-name'>{name}</SpeedDialName>
    </StyledSpeedDialAction>
  )
})
