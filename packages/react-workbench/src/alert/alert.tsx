import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faCircleExclamation,
  faClose,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {CSS} from '@stitches/react'
import React from 'react'
import Button from '../button/button'
import {useDOMRef} from '../utils/use-dom-ref'
import {AlertVariantProps, StyledAlert} from './alert.styles'

const getIcon = (color: NonNullable<AlertVariantProps['color']>) => {
  const icons: Record<typeof color, IconProp> = {
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faCircleExclamation,
    danger: faCircleExclamation,
  }

  return icons[color]
}

interface Props extends AlertVariantProps {
  css?: CSS
  color: NonNullable<AlertVariantProps['color']>
  icon?: false | IconProp
  dismissible?: boolean
  onDismiss?: () => void
}
export type AlertProps = Props &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof Props>

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    css = {},
    color,
    icon,
    dismissible,
    onDismiss,
    children,
    ...delegated
  } = props

  const variantProps = {color} as AlertVariantProps
  const alertRef = useDOMRef<HTMLDivElement>(ref)

  const faIcon =
    typeof icon === 'undefined' ? getIcon(color) : icon === false ? null : icon

  return (
    <StyledAlert ref={alertRef} css={css} {...delegated} {...variantProps}>
      {faIcon ? <FontAwesomeIcon icon={faIcon} className='alert-icon' /> : null}
      <div className='alert-content'>{children}</div>
      {dismissible && (
        <Button
          iconOnly
          size='sm'
          variant='ghost'
          className='alert-dismiss-button'
          onClick={onDismiss}
        >
          <FontAwesomeIcon className='alert-close-icon' icon={faClose} />
        </Button>
      )}
    </StyledAlert>
  )
})

export default Alert
