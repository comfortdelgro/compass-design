import {useMergeRefs} from '@floating-ui/react'
import React from 'react'
import {useKeyboardNavigation, useKeyboardNavigationState} from '../utils/hooks'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSpeedDialTrigger} from './speed-dial.styles'

interface Props {
  children?: React.ReactNode
}

type SpeedDialTriggerProps = Props &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

export const SpeedDialTrigger = React.forwardRef<
  HTMLButtonElement,
  SpeedDialTriggerProps
>((props, ref) => {
  const {children, ...delegated} = props
  const {useDescendant} = useKeyboardNavigationState()
  const {onMouseMove} = useKeyboardNavigation()
  const {register, index} = useDescendant()
  const domRef = useDOMRef()

  const mergeRef = useMergeRefs([ref, register, domRef])

  return (
    <StyledSpeedDialTrigger
      ref={mergeRef}
      type='button'
      onMouseMove={onMouseMove?.(index)}
      {...delegated}
    >
      {children}
    </StyledSpeedDialTrigger>
  )
})
