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

    const rootClasses = [
      styles.speedDial,
      position && styles[`speedDial${capitalizeFirstLetter(position)}`],
      className,
      'cdg-speed-dial',
    ]
      .filter(Boolean)
      .join(' ')

    const triggerClasses = [
      styles.speedDialTriggerContent,
      isOpen ? styles.speedDialTriggerOpenSpan : styles.speedDialTriggerSpan,
      'cdg-speed-dial-trigger-content',
    ]
      .filter(Boolean)
      .join(' ')

    const actionClasses = [
      styles.speedDialActions,
      position && styles[`speedDialActions${capitalizeFirstLetter(position)}`],
      isOpen && styles.speedDialActionsOpen,
      'cdg-speed-dial-actions',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={speedDialRef}>
        <div
          {...htmlProps}
          className={rootClasses}
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
            <span className={triggerClasses}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </SpeedDialTrigger>
          <ul className={actionClasses} role='menu'>
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
