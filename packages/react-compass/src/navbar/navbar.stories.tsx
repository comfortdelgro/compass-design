import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'
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
import {NavbarLinks} from './navbar-links.styles'
import {NavbarSeperator} from './navbar-seperator.style'
const imageSrc = 'https://i.pravatar.cc/150?img=32'

export const Variants: React.FC = () => {
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
          <a href='#'>
            <Button>Home</Button>
          </a>
          <a href='#'>
            <Button>Services</Button>
          </a>
          <a href='#'>
            <Button>Products</Button>
          </a>
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
          <a href='#'>
            <Button variant='ghost'>Home</Button>
          </a>
          <a href='#'>
            <Button variant='ghost'>Services</Button>
          </a>
          <a href='#'>
            <Button variant='ghost'>Products</Button>
          </a>
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
