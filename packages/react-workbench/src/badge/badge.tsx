import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faCircleExclamation,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {CSS} from '@stitches/react'
import React, {useRef} from 'react'
import {BadgeVariantProps, StyledBadge} from './badge.styles'

const getIcon = (color: NonNullable<BadgeVariantProps['color']>) => {
  const icons: Record<typeof color, IconProp> = {
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faCircleExclamation,
    danger: faCircleExclamation,
  }

  return icons[color]
}

interface Props extends BadgeVariantProps {
  css?: CSS
  label?: string
  icon?: boolean | IconProp
  color: NonNullable<BadgeVariantProps['color']>
}
export type BadgeProps = Props &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof Props | 'children'>

const Badge: React.FC<BadgeProps> = ({
  css = {},
  label,
  icon = false,
  variant,
  color,
  ...delegated
}) => {
  const variantProps = {variant, color} as BadgeVariantProps
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <StyledBadge ref={ref} css={css} {...delegated} {...variantProps}>
      {icon ? (
        <FontAwesomeIcon
          className='icon'
          icon={typeof icon === 'boolean' ? getIcon(color) : icon}
        />
      ) : null}
      <span>{label}</span>
    </StyledBadge>
  )
}

export default Badge
