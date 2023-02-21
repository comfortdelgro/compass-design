import {faClose} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button/button'
import {Icon, IconProp} from '../icon'
import {getIconFromColor} from '../utils/get-icon-from-color'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {AlertVariantProps, StyledAlert} from './alert.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  icon?: false | IconProp
  dismissible?: boolean
  onDismiss?: () => void
}

export type AlertProps = Props &
  AlertVariantProps &
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
    ...delegates
  } = props

  const variantProps = {color} as AlertVariantProps
  const alertRef = useDOMRef<HTMLDivElement>(ref)

  const faIcon =
    typeof icon === 'undefined'
      ? getIconFromColor(color)
      : icon === false
      ? null
      : icon

  return (
    <StyledAlert css={css} ref={alertRef} {...variantProps} {...delegates}>
      {faIcon ? <Icon icon={faIcon} className='alert-icon' /> : null}
      <div className='alert-content'>{children}</div>
      {dismissible && (
        <Button
          size='sm'
          variant='ghost'
          className='alert-dismiss-button'
          onPress={() => onDismiss?.()}
        >
          <Icon className='alert-close-icon' icon={faClose} />
        </Button>
      )}
    </StyledAlert>
  )
})

export default Alert
