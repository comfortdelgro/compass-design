import React from 'react'
import Button from '../button/button'
import {getIconFromColor} from '../utils/get-icon-from-color'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/alert.module.css'

interface Props {
  children?: React.ReactNode
  icon?: false | React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  css?: unknown
  color?: 'info' | 'success' | 'warning' | 'danger'
}

export type AlertProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    icon,
    dismissible,
    onDismiss,
    children,
    // VariantProps
    color = 'info',
    className,
    ...htmlProps
  } = props

  const alertRef = useDOMRef<HTMLDivElement>(ref)

  const displayedIcon =
    typeof icon === 'undefined'
      ? getIconFromColor(color)
      : icon === false
      ? null
      : icon

  const classNames = [
    className,
    color && styles[color],
    styles.alert,
    'cdg-button',
  ]
    .filter(Boolean)
    .join(' ')

  const svgClassNames = ['alert-close-icon', styles.closeIcon]
    .filter(Boolean)
    .join(' ')

  const iconClassNames = [
    'alert-icon',
    styles.icon,
    color && styles[color + 'Icon'],
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <>
      <CssInjection css={css}>
        <div ref={alertRef} {...htmlProps} className={classNames}>
          {icon !== false && (
            <div className={iconClassNames}>{displayedIcon}</div>
          )}
          <div className={`${styles.content} alert-content`}>{children}</div>
          {dismissible && (
            <Button
              size='sm'
              variant='ghost'
              className={`${styles.dismissButton} alert-dismiss-button custom`}
              onPress={() => onDismiss?.()}
            >
              <svg className={svgClassNames} viewBox='0 0 384 512'>
                <path
                  fill='currentColor'
                  d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                ></path>
              </svg>
            </Button>
          )}
        </div>
      </CssInjection>
    </>
  )
})

export default Alert
