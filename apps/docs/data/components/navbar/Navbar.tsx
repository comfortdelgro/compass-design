import {
  Avatar,
  Button,
  Column,
  Navbar,
  SearchField,
} from '@comfortdelgro/react-compass-old'
import NavbarActions from '@comfortdelgro/react-compass-old/navbar/navbar-actions'
import {NavbarLinks} from '@comfortdelgro/react-compass-old/navbar/navbar-links'
import {NavbarSeperator} from '@comfortdelgro/react-compass-old/navbar/navbar-seperator.style'
import {
  faBars,
  faBell,
  faChartGantt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const imageSrc = 'https://i.pravatar.cc/150?img=32'

const Variants: React.FC = () => {
  return (
    <Column>
      <Navbar css={{width: '100%'}}>
        <a href='#'>
          <FontAwesomeIcon
            icon={faBars}
            style={{
              color: '#FFF',
              width: '$5',
              height: '$5',
              cursor: 'pointer',
            }}
          />
        </a>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />
        <NavbarLinks>
          <Button href='#'>Home</Button>
          <Button href='#'>Services</Button>
          <Button href='#'>Products</Button>
        </NavbarLinks>
        <NavbarSeperator />
        <NavbarActions>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={{
              color: '#FFF',
              width: '$5',
              height: '$5',
              cursor: 'pointer',
            }}
          />
          <FontAwesomeIcon
            icon={faBell}
            style={{
              color: '#FFF',
              width: '$5',
              height: '$5',
              cursor: 'pointer',
            }}
          />
          <FontAwesomeIcon
            icon={faChartGantt}
            style={{
              color: '#FFF',
              width: '$5',
              height: '$5',
              cursor: 'pointer',
            }}
          />
          <Avatar label='H' size='xs' image={imageSrc} />
        </NavbarActions>
      </Navbar>
    </Column>
  )
}
export default Variants
