import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  SpeedDialAction,
  SpeedDialIcon,
  SpeedDialName,
  SpeedDialVariantProps,
  StyledSpeedDial,
  StyledSpeedDialActions,
  StyledSpeedDialTrigger,
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

    const delegateProps = componentProps()

    return (
      <StyledSpeedDial
        {...delegateProps}
        ref={speedDialRef}
        className={`speed-dial speed-dial--${position || 'up'} ${position}`}
        onMouseLeave={handleMouseLeave}
      >
        <StyledSpeedDialTrigger
          className={`speed-dial__trigger ${isOpen ? 'open' : ''}`}
          onMouseEnter={handleMouseEnter}
        >
          <span>{/* <Icon icon={faPlus}></Icon> */}+</span>
        </StyledSpeedDialTrigger>
        <StyledSpeedDialActions
          className={`speed-dial__actions speed-dial__actions--${
            position || 'up'
          } ${isOpen ? 'open' : ''}`}
        >
          {actions.map(({name, icon, onClick}, index) => (
            <SpeedDialAction
              key={index}
              className={`speed-dial__action speed-dial__action--${position}`}
              onClick={() => handleActionClick(onClick)}
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
export default SpeedDial
