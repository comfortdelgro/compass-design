import React, {useRef} from 'react'
import {AlertVariantProps, StyledAlert} from './alert.styles'

interface Props extends AlertVariantProps {
  color: NonNullable<AlertVariantProps['color']>
  dismissible?: boolean
  onDismiss?: () => void
}
export type AlertProps = Props &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof Props>

const Alert: React.FC<AlertProps> = ({color, children, ...delegated}) => {
  const variantProps = {color} as AlertVariantProps
  const ref = useRef<HTMLDivElement>(null)

  return (
    <StyledAlert ref={ref} {...delegated} {...variantProps}>
      {children}
    </StyledAlert>
  )
}

export default Alert
