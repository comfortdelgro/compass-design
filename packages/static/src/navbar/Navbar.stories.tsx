import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'
import MenuIcon from '@comfortdelgro/compass-icons/react/menu'
import {
  faBars,
  faBell,
  faChartGantt,
  faQuestionCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import Navbar from '.'
import {Avatar, Button, Icon, SearchField} from '..'
import NavbarActions from './navbar-actions'
import {NavbarLinks} from './navbar-links'
import {NavbarSeperator} from './navbar-seperator'

const imageSrc = 'https://i.pravatar.cc/150?img=32'

export const Basic = () => {
  const resetButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'var(--cdg-color-gray30)',
      }}
    >
      <h2>Portal Navbar</h2>
      <h3>Blue color</h3>
      <Navbar>
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
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{
                color: '#FFF',
                width: '$5',
                height: '$5',
                cursor: 'pointer',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faBell}
              style={{
                color: '#FFF',
                width: '$5',
                height: '$5',
                cursor: 'pointer',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faChartGantt}
              style={{
                color: '#FFF',
                width: '$5',
                height: '$5',
                cursor: 'pointer',
              }}
            />
          </button>
          <Avatar label='H' size='xs' image={imageSrc} />
        </NavbarActions>
      </Navbar>
      <h3>White color</h3>
      <Navbar color='white'>
        <a href='#'>
          <FontAwesomeIcon icon={faBars} />
        </a>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />
        <NavbarLinks>
          <Button variant='ghost'>Home</Button>
          <Button variant='ghost'>Services</Button>
          <Button variant='ghost'>Products</Button>
        </NavbarLinks>
        <NavbarSeperator />
        <NavbarActions>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{
                color: 'black',
                width: '$5',
                height: '$5',
                cursor: 'pointer',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faBell}
              style={{
                color: 'black',
                width: '$5',
                height: '$5',
                cursor: 'pointer',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faChartGantt}
              style={{
                color: 'black',
                width: '$5',
                height: '$5',
                cursor: 'pointer',
              }}
            />
          </button>
          <Avatar label='H' size='xs' image={imageSrc} />
        </NavbarActions>
      </Navbar>
      <h2>Website Navbar</h2>
      <Navbar color='white' variant='website'>
        <Workbench width={'40px'} height={'40px'} />
        <NavbarSeperator />
        <NavbarActions alternativeElement={<Icon icon={faBars} />}>
          <NavbarLinks>
            <Button variant='primary'>Home</Button>
            <Button variant='ghost'>Services</Button>
            <Button variant='ghost'>Feedback</Button>
            <Button variant='ghost' isDisabled>
              Feedback
            </Button>
          </NavbarLinks>
          <Icon icon={faSearch} size='lg' />
        </NavbarActions>
      </Navbar>
      <h3>With alternative element (change screen size to less than 768px)</h3>
      <Navbar>
        <a href='#' style={{backgroundColor: 'white', borderRadius: '100%'}}>
          <Workbench width={'28px'} height={'24px'} />
        </a>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />
        <NavbarLinks>
          <Button>Home</Button>
          <Button>Services</Button>
          <Button>Products</Button>
        </NavbarLinks>
        <NavbarSeperator />
        <NavbarActions
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
                width: '$5',
                height: '$5',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faBell}
              style={{
                color: '#FFF',
                width: '$5',
                height: '$5',
              }}
            />
          </button>
          <button style={resetButtonStyle}>
            <FontAwesomeIcon
              icon={faChartGantt}
              style={{
                color: '#FFF',
                width: '$5',
                height: '$5',
              }}
            />
          </button>
          <Avatar label='H' size='xs' image={imageSrc} />
        </NavbarActions>
      </Navbar>
    </div>
  )
}

const meta = {
  title: 'Example/Navbar',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
