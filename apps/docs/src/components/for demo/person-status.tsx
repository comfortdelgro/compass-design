import { Icon } from '@comfortdelgro/react-compass'
import {faHeart, faHeartBroken, faUser} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

interface StatusComponentProps {
  status: string
}

const StatusComponent = ({status}: StatusComponentProps) => {
  const renderIcon = () => {
    switch (status) {
      case 'relationship':
        return <Icon icon={faHeart} />
      case 'complicated':
        return <Icon icon={faHeartBroken} />
      case 'single':
        return <Icon icon={faUser} />
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
