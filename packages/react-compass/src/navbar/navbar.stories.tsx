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
import {StoryDecorator} from '@ladle/react'
import React from 'react'
import Avatar from '../avatar'
import Button from '../button'
import Icon from '../icon'
import SearchField from '../searchfield'
import {Column} from '../utils/components'
import Navbar from './index'
import NavbarActions from './navbar-actions'
import {NavbarLinks} from './navbar-links'
import {NavbarSeperator} from './navbar-seperator.style'
const imageSrc = 'https://i.pravatar.cc/150?img=32'

export const Variants: React.FC = () => {
  const resetButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <Column>
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
      <h3>White color</h3>
      <Navbar color='white'>
        <a href='#'>
          <FontAwesomeIcon icon={faBars} />
        </a>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />
        <NavbarLinks>
          <Button variant='ghost' href='#'>
            Home
          </Button>
          <Button variant='ghost' href='#'>
            Services
          </Button>
          <Button variant='ghost' href='#'>
            Products
          </Button>
        </NavbarLinks>
        <NavbarSeperator />
        <NavbarActions>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={{
              color: 'black',
              width: '$5',
              height: '$5',
              cursor: 'pointer',
            }}
          />
          <FontAwesomeIcon
            icon={faBell}
            style={{
              color: 'black',
              width: '$5',
              height: '$5',
              cursor: 'pointer',
            }}
          />
          <FontAwesomeIcon
            icon={faChartGantt}
            style={{
              color: 'black',
              width: '$5',
              height: '$5',
              cursor: 'pointer',
            }}
          />
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
          <Button href='#'>Home</Button>
          <Button href='#'>Services</Button>
          <Button href='#'>Products</Button>
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
    </Column>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: var(--colors-gray30); }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
