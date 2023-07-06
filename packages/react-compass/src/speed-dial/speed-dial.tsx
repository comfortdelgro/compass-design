import {createDescendantContext} from '@chakra-ui/descendant'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
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

export const [
  DescendantsProvider,
  useDescendantsContext,
  useDescendants,
  useDescendant,
] = createDescendantContext()

export const SpeedDialContext = React.createContext<{
  selected?: number
  setSelected?: (selected: number) => void
}>({})

export type SpeedDialProps = Props &
  SpeedDialVariantProps &
  Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props>

enum KeyboardKey {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  Tab = 'Tab',
}

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
      setSelected(0)
    }

    const handleActionClick = (action: () => void) => {
      setIsOpen(false)
      action()
    }

    const componentProps = () => {
      return {
        className,
        css,
        ...ariaSafeProps,
      }
    }

    const descendants = useDescendants()
    const [selected, setSelected] = React.useState(0)
    const context = React.useMemo(() => ({selected, setSelected}), [selected])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const key = e.key

      if (key === KeyboardKey.ArrowUp) {
        e.preventDefault()
        const next = descendants.next(selected)
        if (next) {
          next.node.focus()
          setSelected(next.index)
        }
      } else if (key === KeyboardKey.ArrowDown) {
        e.preventDefault()
        const prev = descendants.prev(selected)
        if (prev) {
          prev.node.focus()
          setSelected(prev.index)
        }
      } else if (key === KeyboardKey.Tab) {
        handleMouseLeave()
      }
    }

    const delegateProps = componentProps()
    return (
      <DescendantsProvider value={descendants}>
        <SpeedDialContext.Provider value={context}>
          <StyledSpeedDial
            {...delegateProps}
            ref={speedDialRef}
            className={`speed-dial speed-dial--${position || 'up'} ${position}`}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
          >
            <SpeedDialTrigger
              className={`speed-dial__trigger ${isOpen ? 'open' : ''}`}
              onMouseEnter={handleMouseEnter}
              onFocus={handleMouseEnter}
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
            >
              {actions.map(({name, icon, onClick}, index) => (
                <SpeedDialAction
                  key={index}
                  onClick={() => handleActionClick(onClick)}
                  onMouseMove={() => setSelected(index)}
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
        </SpeedDialContext.Provider>
      </DescendantsProvider>
    )
  },
)
export default SpeedDial
