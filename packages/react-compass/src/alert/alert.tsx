import React from 'react'
import Button from '../button/button'
import {getIconFromColor} from '../utils/get-icon-from-color'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/alert.module.css'

interface Props {
  children?: React.ReactNode
  icon?: false | React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  css?: CSS
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

  const rootClasses = classNames(
    styles.alert,
    color && styles[color],
    className,
    'cdg-alert',
  )

  const contentClasses = classNames(styles.content, 'cdg-alert-content')

  const closeClasses = classNames(styles.closeIcon, 'cdg-alert-close-icon')

  const iconClasses = classNames(
    styles.icon,
    color && styles[color + 'Icon'],
    'cdg-alert-icon',
  )

  const dismissClasses = classNames(
    styles.dismissButton,
    'custom',
    'cdg-alert-dismiss-button',
  )

  return (
    <>
      <CssInjection css={css}>
        <div ref={alertRef} {...htmlProps} className={rootClasses}>
          {icon !== false && <div className={iconClasses}>{displayedIcon}</div>}
          <div className={contentClasses}>{children}</div>
          {dismissible && (
            <Button
              size='sm'
              variant='ghost'
              className={dismissClasses}
              onPress={() => onDismiss?.()}
            >
              <svg className={closeClasses} viewBox='0 0 384 512'>
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
