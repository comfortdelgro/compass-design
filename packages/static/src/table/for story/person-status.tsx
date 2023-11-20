import {faHeart, faHeartBroken, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface StatusComponentProps {
  status: string
}

const StatusComponent = ({status}: StatusComponentProps) => {
  const renderIcon = () => {
    switch (status) {
      case 'relationship':
        return <FontAwesomeIcon icon={faHeart} />
      case 'complicated':
        return <FontAwesomeIcon icon={faHeartBroken} />
      case 'single':
        return <FontAwesomeIcon icon={faUser} />
      default:
        return null
    }
  }

  return (
    <div>
      <span style={{paddingRight: '5px'}}>{renderIcon()}</span>
      <span>{status}</span>
    </div>
  )
}

export default StatusComponent
