import React, {useState} from 'react'
import {
  SpeedDialAction,
  SpeedDialIcon,
  SpeedDialName,
  StyledSpeedDial,
  StyledSpeedDialActions,
  StyledSpeedDialTrigger,
} from './speed-dial.styles'

interface Props {
  actions: Array<{name: string; icon: string; onClick: () => void}>
  position?: 'up' | 'right' | 'down' | 'left'
}
export type SpeedDialProps = Props

const SpeedDial: React.FC<SpeedDialProps> = ({actions, position}) => {
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

  return (
    <StyledSpeedDial
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
}

export default SpeedDial
