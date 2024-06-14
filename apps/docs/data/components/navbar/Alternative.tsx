import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'
import MenuIcon from '@comfortdelgro/compass-icons/react/menu'
import {
  Avatar,
  Button,
  Column,
  Navbar,
  SearchField,
} from '@comfortdelgro/react-compass'
import {
  faBell,
  faChartGantt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Variants: React.FC = () => {
  const imageSrc = 'https://i.pravatar.cc/150?img=32'
  const resetButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }
  return (
    <Column>
      <Navbar>
        <a href='#' style={{backgroundColor: 'white', borderRadius: '100%'}}>
          <Workbench width={'28px'} height={'24px'} />
        </a>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />
        <Navbar.Links>
          <Button href='#'>Home</Button>
          <Button href='#'>Services</Button>
          <Button href='#'>Products</Button>
        </Navbar.Links>
        <Navbar.Separator />
        <Navbar.Actions
          alternativeElement={
            <Button>
              <MenuIcon />
            </Button>
          }
        >
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{
                color: '#FFF',
                width: 'var(--cdg-spacing-5)',
                height: 'var(--cdg-spacing-5)',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faBell}
              style={{
                color: '#FFF',
                width: 'var(--cdg-spacing-5)',
                height: 'var(--cdg-spacing-5)',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faChartGantt}
              style={{
                color: '#FFF',
                width: 'var(--cdg-spacing-5)',
                height: 'var(--cdg-spacing-5)',
              }}
            />
          </button>
          <Avatar label='H' size='xs' image={imageSrc} />
        </Navbar.Actions>
      </Navbar>
    </Column>
  )
}
export default Variants
