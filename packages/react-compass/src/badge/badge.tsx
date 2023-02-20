import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import {Icon} from '../icon'
import {getIconFromColor} from '../utils/get-icon-from-color'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {BadgeVariantProps, StyledBadge} from './badge.styles'

interface Props extends StyledComponentProps {
  label?: string
  icon?: boolean | IconProp
}

export type BadgeProps = Omit<Props, 'children'> &
  BadgeVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    label,
    icon = false,
    // VariantProps
    variant = 'primary',
    color = 'info',
    ...delegates
  } = props

  const variantProps = {variant, color} as BadgeVariantProps
  const badgeRef = useDOMRef<HTMLSpanElement>(ref)

  return (
    <StyledBadge css={css} ref={badgeRef} {...variantProps} {...delegates}>
      {icon ? (
        <Icon
          className='icon'
          icon={typeof icon === 'boolean' ? getIconFromColor(color) : icon}
        />
      ) : null}
      <span>{label}</span>
    </StyledBadge>
  )
})

export default Badge
