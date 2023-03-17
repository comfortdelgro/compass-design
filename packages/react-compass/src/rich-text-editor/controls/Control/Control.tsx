import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import React from 'react'
import type {StyledComponentProps} from '../../../utils/stitches.types'
import {useDOMRef} from '../../../utils/use-dom-ref'
import {ControlVariantProps, StyledControl} from './Control.styles'

interface Props extends AriaButtonProps, StyledComponentProps {
  children?: React.ReactNode
  className?: string
  active: boolean
}
export interface PremadeControlProps
  extends AriaButtonProps,
    StyledComponentProps {
  icon?: React.FC
  controltype?: string
}
export type ButtonProps = Props &
  ControlVariantProps &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const Control = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
      className,
      // AriaButtonProps
      ...ariaSafeProps
    } = props

    const buttonRef = useDOMRef<HTMLButtonElement>(ref)

    const buttonProps = useButton(ariaSafeProps, buttonRef).buttonProps

    const componentProps = () => {
      return {
        className,
        css,
        ...buttonProps,
        ...ariaSafeProps,
      }
    }
    const delegateProps = componentProps()
    return <StyledControl {...delegateProps}>{children}</StyledControl>
  },
)

export default Control
