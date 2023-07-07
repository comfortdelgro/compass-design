import React from 'react'
import Button from '../button/button'
import {getIconFromColor} from '../utils/get-icon-from-color'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {AlertVariantProps, StyledAlert, StyledIcon} from './alert.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  icon?: false | React.ReactNode
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

  const displayedIcon =
    typeof icon === 'undefined'
      ? getIconFromColor(color)
      : icon === false
      ? null
      : icon

  return (
    <StyledAlert css={css} ref={alertRef} {...variantProps} {...delegates}>
      <StyledIcon>{displayedIcon}</StyledIcon>
      <div className='alert-content'>{children}</div>
      {dismissible && (
        <Button
          size='sm'
          variant='ghost'
          className='alert-dismiss-button'
          onPress={() => onDismiss?.()}
        >
          <svg className='alert-close-icon' viewBox='0 0 384 512'>
            <path
              fill='currentColor'
              d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
            ></path>
          </svg>
        </Button>
      )}
    </StyledAlert>
  )
})

export default Alert
