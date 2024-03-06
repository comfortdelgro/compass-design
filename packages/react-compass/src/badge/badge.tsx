import {toUpper} from 'lodash'
import React from 'react'
import {getIconFromColor} from '../utils/get-icon-from-color'
import CssInjection from '../utils/objectToCss/CssInjection'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/badge.module.css'

interface Props {
  label?: string
  icon?: boolean | React.ReactNode
  destination?: string
  css?: unknown
  variant?: 'outline' | 'h5' | 'primary' | 'secondary' | 'rounded'
  color?: 'info' | 'danger' | 'success' | 'warning'
  status?: 'online' | 'away' | 'busy' | 'offline'
  statusSize?: '8' | '12' | '16' | '20' | '24' | '28'
  isDisabled?: boolean
  size?: 'sm' | 'lg'
  isRevert?: boolean
}

export type BadgeProps = Omit<Props, 'children'> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    css = {},
    label,
    icon = false,
    destination,
    variant = 'primary',
    color = 'info',
    isDisabled = false,
    status,
    statusSize,
    isRevert = false,
    size,
    className,
    ...htmlProps
  } = props

  const badgeRef = useDOMRef<HTMLDivElement>(ref)

  const classNames = [
    styles.badge,
    variant && styles[variant],
    color && styles[color],
    color && variant && styles[`${color}${capitalizeFirstLetter(variant)}`],
    color &&
      variant &&
      isDisabled &&
      styles[`${color}${capitalizeFirstLetter(variant)}isDisabled}`],
    status && styles[status],
    status && variant && styles[`${status}${capitalizeFirstLetter(variant)}`],
    statusSize && styles[`statusSize${statusSize}`],
    size && styles[size],
    isRevert && styles.revert,
    isDisabled && styles.isDisabled,
    className,
    'cdg-badge',
  ]
    .filter(Boolean)
    .join(' ')

  const iconClassNames = [
    styles.icon,
    statusSize && styles[`statusSize${statusSize}Icon`],
    status && icon && styles.statusIcon,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <CssInjection css={css}>
        <div ref={badgeRef} className={classNames} {...htmlProps}>
          {icon ? (
            <div className={iconClassNames}>
              {typeof icon === 'boolean' ? getIconFromColor(color) : icon}
            </div>
          ) : null}
          {destination ? (
            <span className={variant ? styles[variant + 'Destination'] : ''}>
              {toUpper(destination)}
            </span>
          ) : null}
          <span
            className={`${styles.label} ${
              variant ? styles[variant + 'Label'] : ''
            }`}
          >
            {label}
          </span>
        </div>
      </CssInjection>
    </>
  )
})

export default Badge
