import {SpeedDial2} from '@comfortdelgro/react-compass'
import {
  faBagShopping,
  faCameraRetro,
  faChair,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState} from 'react'

function SpeedDialExample() {
  const [showing, setShowing] = useState(false)

  const toggleSpeedDial = () => {
    setShowing(!showing)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '2rem',
        height: '240px',
      }}
    >
      <SpeedDial2
        showing={showing}
        actions={
          <SpeedDial2.Actions>
            <SpeedDial2.Button
              onClick={() => {
                setShowing(false)
              }}
            >
              <FontAwesomeIcon icon={faCameraRetro} />
            </SpeedDial2.Button>
            <SpeedDial2.Button
              onClick={() => {
                setShowing(false)
              }}
            >
              <FontAwesomeIcon icon={faBagShopping} />
            </SpeedDial2.Button>
            <SpeedDial2.Button
              onClick={() => {
                setShowing(false)
              }}
            >
              <FontAwesomeIcon icon={faChair} />
            </SpeedDial2.Button>
          </SpeedDial2.Actions>
        }
      >
        <SpeedDial2.Button onClick={() => toggleSpeedDial()}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{
              ...(showing && {transform: 'rotate(45deg)'}),
              ...{transition: 'all 0.2s'},
            }}
          />
        </SpeedDial2.Button>
      </SpeedDial2>
    </div>
  )
}

export default SpeedDialExample
