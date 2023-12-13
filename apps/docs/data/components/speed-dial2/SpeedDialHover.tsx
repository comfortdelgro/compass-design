import {SpeedDial2} from '@comfortdelgro/react-compass'
import {faBagShopping, faChair, faPlus} from '@fortawesome/free-solid-svg-icons'
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
        height: '200px',
      }}
    >
      <SpeedDial2
        showing={showing}
        actions={
          <SpeedDial2.Actions>
            <SpeedDial2.Button>
              <FontAwesomeIcon icon={faBagShopping} />
            </SpeedDial2.Button>
            <SpeedDial2.Button>
              <FontAwesomeIcon icon={faChair} />
            </SpeedDial2.Button>
          </SpeedDial2.Actions>
        }
      >
        <SpeedDial2.Button
          onMouseEnter={() => {
            setShowing(true)
          }}
          onMouseLeave={() => {
            setShowing(false)
          }}
        >
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
