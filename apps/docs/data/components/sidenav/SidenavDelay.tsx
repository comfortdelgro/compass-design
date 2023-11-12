import {Icon, Sidenav} from '@comfortdelgro/react-compass-old'
import {faHelicopter} from '@fortawesome/free-solid-svg-icons'

function DelayExample() {
  return (
    <Sidenav css={{height: '500px'}} delay={1000}>
      <Sidenav.Item isActive>
        <Icon icon={faHelicopter}></Icon>
        <span>Menu</span>
      </Sidenav.Item>
    </Sidenav>
  )
}

export default DelayExample
