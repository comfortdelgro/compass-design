import {toUpper} from 'lodash'
import React from 'react'
import {getIconFromColor} from '../utils/get-icon-from-color'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {BadgeVariantProps, StyledBadge} from './badge.styles'

interface Props extends StyledComponentProps {
  label?: string
  icon?: boolean | React.ReactNode
  destination?: string
  isRevert?: boolean
}

export type BadgeProps = Omit<Props, 'children'> &
  BadgeVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    css = {},
    label,
    icon = false,
    destination,
    variant = 'primary',
    color = 'info',
    ...delegates
  } = props

  const variantProps = {variant, color} as BadgeVariantProps
  const badgeRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledBadge css={css} ref={badgeRef} {...variantProps} {...delegates}>
      {icon ? (
        <div className='icon'>
          {typeof icon === 'boolean' ? getIconFromColor(color) : icon}
        </div>
      ) : null}
      {destination ? (
        <span className='destination'>{toUpper(destination)}</span>
      ) : null}
      <span className='label'>{label}</span>
    </StyledBadge>
  )
})

export default Badge
