import {Icon, Sidenav} from '@comfortdelgro/react-compass'
import {faHelicopter} from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  return (
    <Sidenav css={{height: '500px'}}>
      <Sidenav.Item isActive>
        <Icon icon={faHelicopter}></Icon>
        <span>Menu</span>
        <Sidenav.Menu>
          <Sidenav.Item>
            <Icon icon={faHelicopter}></Icon>
            <span>Menu</span>
            <Sidenav.Menu>
              <Sidenav.Item>
                <Icon icon={faHelicopter}></Icon>
                <span>Menu</span>
              </Sidenav.Item>
            </Sidenav.Menu>
          </Sidenav.Item>
        </Sidenav.Menu>
      </Sidenav.Item>
    </Sidenav>
  )
}

export default BasicExample
