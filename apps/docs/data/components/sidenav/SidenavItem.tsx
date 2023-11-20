import {Icon, Sidenav} from '@comfortdelgro/react-compass-old'
import {faHelicopter} from '@fortawesome/free-solid-svg-icons'

function SidenavItem() {
  return (
    <Sidenav css={{height: '500px'}}>
      <Sidenav.Item isActive>
        <Icon icon={faHelicopter}></Icon>
        <span>Menu</span>
      </Sidenav.Item>
    </Sidenav>
  )
}

export default SidenavItem
