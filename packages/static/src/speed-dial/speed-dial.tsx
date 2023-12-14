import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import {
  KeyboardNavigationProvider,
  useKeyboardNavigation,
  useKeyboardNavigationState,
} from '../utils/hooks'
import CssInjection from '../utils/objectToCss/CssInjection'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {SpeedDialAction} from './speed-dial-action'
import {SpeedDialTrigger} from './speed-dial-trigger'
import styles from './styles/speed-dial.module.css'

interface Props {
  actions: Array<{name: string; icon: string; onClick: () => void}>
  position?: 'up' | 'right' | 'down' | 'left'
  className?: string
  css?: unknown
}

export type SpeedDialProps = Props &
  Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props>

const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      className,
      actions,
      position = 'up',
      // htmlProps
      ...htmlProps
    } = props

    const speedDialRef = useDOMRef<HTMLDivElement>(ref)

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
      setIsOpen((prev) => !prev)
    }

    const handleMouseEnter = () => {
      setIsOpen(true)
    }
    const handleFocus = () => {
      if (isOpen === false) {
        setIsOpen(true)
      }
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

    const {onKeyDown, nextFocus, prevFocus, resetFocus} =
      useKeyboardNavigation()

    const handleKeyDown = onKeyDown?.<HTMLDivElement>({
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
    const toSpeedDialClassName = (type: string = '') => {
      return position ? styles[`${type}${capitalizeFirstLetter(position)}`] : ''
    }
    const toSpeedDialActionsClassName = (type: string = '') => {
      return position ? styles[`${type}${capitalizeFirstLetter(position)}`] : ''
    }

    return (
      <CssInjection css={css} childrenRef={speedDialRef}>
        <div
          className={`cdg-speed-dial ${className} ${
            styles.speedDial
          } ${toSpeedDialClassName(`speedDial`)}`}
          {...htmlProps}
          ref={speedDialRef}
          role='presentation'
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
        >
          <SpeedDialTrigger
            isOpen={isOpen}
            onMouseEnter={handleMouseEnter}
            onFocus={handleFocus}
            onClick={toggleOpen}
            aria-expanded={isOpen}
            aria-haspopup={true}
          >
            <span
              className={`${styles.speedDialTriggerContent} ${
                isOpen
                  ? styles.speedDialTriggerOpenSpan
                  : styles.speedDialTriggerSpan
              }`}
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </SpeedDialTrigger>
          <ul
            className={`speed-dial-actions ${
              styles.speedDialActions
            } ${toSpeedDialActionsClassName('speedDialActions')} ${
              isOpen && styles.speedDialActionsOpen
            }`}
            role='menu'
          >
            {actions.map(({name, icon, onClick}, index) => (
              <SpeedDialAction
                key={index}
                onClick={() => handleActionClick(onClick)}
                icon={icon}
                name={name}
                position={position}
                isVisible={isOpen}
                disabled={!isOpen}
              />
            ))}
          </ul>
        </div>
      </CssInjection>
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

/**
 * @deprecate SpeedDial will be replaced by new SpeedDial2
 */
export default SpeedDialContextWrapper
