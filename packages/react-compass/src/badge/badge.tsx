import toUpper from 'lodash/toUpper'
import React from 'react'
import {getIconFromColor} from '../utils/get-icon-from-color'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/badge.module.css'

interface Props {
  label?: string
  icon?: boolean | React.ReactNode
  destination?: string
  css?: CSS
  variant?: 'outline' | 'primary' | 'secondary' | 'rounded'
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

  const rootClasses = classNames(
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
  )

  const iconClasses = classNames(
    styles.icon,
    statusSize && styles[`statusSize${statusSize}Icon`],
    status && icon && styles.statusIcon,
    'cdg-badge-icon',
  )

  return (
    <>
      <CssInjection css={css}>
        <div {...htmlProps} ref={badgeRef} className={rootClasses}>
          {icon ? (
            <div className={iconClasses}>
              {typeof icon === 'boolean' ? getIconFromColor(color) : icon}
            </div>
          ) : null}
          {destination ? (
            <span
              className={classNames(
                variant && styles[variant + 'Destination'],
                'cdg-badge-destination',
              )}
            >
              {toUpper(destination)}
            </span>
          ) : null}
          <span
            className={classNames(
              styles.label,
              variant && styles[variant + 'Label'],
              'cdg-badge-label',
            )}
          >
            {label}
          </span>
        </div>
      </CssInjection>
    </>
  )
})

export default Badge
