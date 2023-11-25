import {Alert} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function AlertIconProp() {
  return (
    <div>
      <Alert color='success' icon={<FontAwesomeIcon icon={faBug} />}>
        This is a success alert — check it out!
      </Alert>
    </div>
  )
}

export default AlertIconProp
