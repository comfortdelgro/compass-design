import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import {
  KeyboardNavigationProvider,
  useKeyboardNavigation,
  useKeyboardNavigationState,
} from '../utils/hooks'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {SpeedDialAction} from './speed-dial-action'
import {SpeedDialTrigger} from './speed-dial-trigger'
import {
  SpeedDialIcon,
  SpeedDialName,
  SpeedDialVariantProps,
  StyledSpeedDial,
  StyledSpeedDialActions,
  StyledSpeedDialTriggerContent,
} from './speed-dial.styles'

interface Props extends StyledComponentProps {
  actions: Array<{name: string; icon: string; onClick: () => void}>
  position?: 'up' | 'right' | 'down' | 'left'
  className?: string
}

export type SpeedDialProps = Props &
  SpeedDialVariantProps &
  Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props>

const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      className,
      actions,
      position,
      // AriaButtonProps
      ...ariaSafeProps
    } = props

    const speedDialRef = useDOMRef<HTMLDivElement>(ref)

    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
      setIsOpen(true)
    }

    const handleMouseLeave = () => {
      setIsOpen(false)
      handleClose()
    }

    const handleActionClick = (action: () => void) => {
      action()
      handleClose()
    }

    const handleClose = () => {
      setIsOpen(false)
      resetFocus?.()
    }

    const componentProps = () => {
      return {
        className,
        css,
        ...ariaSafeProps,
      }
    }

    const {onKeyDown, nextFocus, prevFocus, resetFocus} =
      useKeyboardNavigation()

    const handleKeyDown = onKeyDown?.({
      ArrowUp: (e) => {
        e.preventDefault()
        nextFocus?.()
      },
      ArrowDown: (e) => {
        e.preventDefault()
        prevFocus?.()
      },
      Tab: () => {
        handleClose()
      },
      Escape: () => {
        handleClose()
      },
    })

    const delegateProps = componentProps()

    return (
      <StyledSpeedDial
        {...delegateProps}
        ref={speedDialRef}
        className={`speed-dial speed-dial--${position || 'up'} ${position}`}
        role='presentation'
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
      >
        <SpeedDialTrigger
          className={`speed-dial__trigger ${isOpen ? 'open' : ''}`}
          onMouseEnter={handleMouseEnter}
          onFocus={handleMouseEnter}
          aria-expanded={isOpen}
          aria-haspopup={true}
        >
          <StyledSpeedDialTriggerContent>
            <FontAwesomeIcon icon={faPlus} />
          </StyledSpeedDialTriggerContent>
        </SpeedDialTrigger>
        <StyledSpeedDialActions
          className={`speed-dial__actions speed-dial__actions--${
            position || 'up'
          } ${isOpen ? 'open' : ''}`}
          isOpenAction={isOpen}
          role='menu'
        >
          {actions.map(({name, icon, onClick}, index) => (
            <SpeedDialAction
              key={index}
              onClick={() => handleActionClick(onClick)}
              icon={icon}
              name={name}
              position={position}
            >
              <SpeedDialIcon className='speed-dial__action-icon'>
                {icon}
              </SpeedDialIcon>
              <SpeedDialName className='speed-dial__action-name'>
                {name}
              </SpeedDialName>
            </SpeedDialAction>
          ))}
        </StyledSpeedDialActions>
      </StyledSpeedDial>
    )
  },
)

export const SpeedDialContextWrapper = React.forwardRef<
  HTMLDivElement,
  SpeedDialProps
>((props, ref) => {
  const {provider} = useKeyboardNavigationState()

  return (
    <KeyboardNavigationProvider {...provider}>
      <SpeedDial {...props} ref={ref} />
    </KeyboardNavigationProvider>
  )
})

export default SpeedDialContextWrapper
