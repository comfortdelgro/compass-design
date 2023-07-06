import {useMergeRefs} from '@floating-ui/react'
import React from 'react'
import {useDescendant} from './speed-dial'
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
  const {register} = useDescendant()

  const mergeRef = useMergeRefs([ref, register])

  return (
    <StyledSpeedDialTrigger ref={mergeRef} {...delegated}>
      {children}
    </StyledSpeedDialTrigger>
  )
})
