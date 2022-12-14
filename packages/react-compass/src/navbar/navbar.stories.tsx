import {
  faBars,
  faBell,
  faChartGantt,
  faQuestionCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import {StoryDecorator} from '@ladle/react'
import React from 'react'
import Avatar from '../avatar'
import Button from '../button'
import SearchField from '../searchfield'
import TextField from '../textfield'
import {Column} from '../utils/components'
import Navbar from './index'

const imageSrc = 'https://i.pravatar.cc/150?img=32'

export const Variants: React.FC = () => {
  return (
    <Column>
      <h2>Portal Navbar</h2>
      <h3>Blue color</h3>
      <Navbar>
        <a href='#'>
          <Navbar.Icon icon={faBars} />
        </a>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <SearchField placeholder='Search' />
        <div>
          <a href='#'>
            <Button>Home</Button>
          </a>
          <a href='#'>
            <Button>Services</Button>
          </a>
          <a href='#'>
            <Button>Products</Button>
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexGrow: 1,
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <Navbar.Icon icon={faQuestionCircle} />
          <Navbar.Icon icon={faBell} />
          <Navbar.Icon icon={faChartGantt} />
          <Avatar label='H' size='xs' image={imageSrc} />
        </div>
      </Navbar>
      <h3>White color</h3>
      <Navbar color='white'>
        <a href='#'>
          <Navbar.Icon icon={faBars} />
        </a>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <SearchField placeholder='Search' />
        <div>
          <a href='#'>
            <Button variant='ghost'>Home</Button>
          </a>
          <a href='#'>
            <Button variant='ghost'>Services</Button>
          </a>
          <a href='#'>
            <Button variant='ghost'>Products</Button>
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexGrow: 1,
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <Navbar.Icon icon={faQuestionCircle} />
          <Navbar.Icon icon={faBell} />
          <Navbar.Icon icon={faChartGantt} />
          <Avatar label='H' size='xs' image={imageSrc} />
        </div>
      </Navbar>
      <h2>Website Navbar</h2>
      <h3>Blue color</h3>
      <Navbar color='blue' variant='website'>
        <a href='#'>
          <Avatar label='C' size='lg' />
        </a>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexGrow: 1,
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <a href='#'>
            <Button variant='primary'>Home</Button>
          </a>
          <a href='#'>
            <Button variant='primary'>Services</Button>
          </a>
          <a href='#'>
            <Button variant='primary'>Products</Button>
          </a>
          <TextField placeholder='search' />
          <Button variant='ghost'>
            <Navbar.Icon icon={faSearch} />
          </Button>
        </div>
      </Navbar>
      <h3>White color</h3>
      <Navbar color='white' variant='website'>
        <a href='#'>
          <Avatar label='C' size='lg' />
        </a>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexGrow: 1,
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <a href='#'>
            <Button variant='ghost'>Home</Button>
          </a>
          <a href='#'>
            <Button variant='ghost'>Services</Button>
          </a>
          <a href='#'>
            <Button variant='ghost'>Products</Button>
          </a>
          <TextField placeholder='search' />
          <Button variant='ghost'>
            <Navbar.Icon icon={faSearch} />
          </Button>
        </div>
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
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
