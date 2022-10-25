import React, {useRef} from 'react'
import {BadgeVariantProps, StyledBadge} from './badge.styles'

interface Props extends BadgeVariantProps {
  label?: string
  color: NonNullable<BadgeVariantProps['color']>
}
export type BadgeProps = Props &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof Props | 'children'>

const Badge: React.FC<BadgeProps> = ({label, variant, color, ...delegated}) => {
  const variantProps = {variant, color} as BadgeVariantProps
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <StyledBadge ref={ref} {...delegated} {...variantProps}>
      {label}
    </StyledBadge>
  )
}

export default Badge
