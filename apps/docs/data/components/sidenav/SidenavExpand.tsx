import {Icon, Sidenav} from '@comfortdelgro/react-compass-old'
import {faHelicopter} from '@fortawesome/free-solid-svg-icons'

function ExpandExample() {
  return (
    <Sidenav css={{height: '500px'}} expand>
      <Sidenav.Item isActive>
        <Icon icon={faHelicopter}></Icon>
        <span>Menu</span>
      </Sidenav.Item>
    </Sidenav>
  )
}

export default ExpandExample
