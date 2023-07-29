import {Button, Navbar} from '@comfortdelgro/react-compass'
import React from 'react'

export const PortalLayout: React.FC = () => {
  return (
    <div
      className='layout-demo'
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <Navbar>
        <Navbar.Brand>Workbench Title</Navbar.Brand>
        <Navbar.Links>
          <a href='#'>
            <Button>Home</Button>
          </a>
          <a href='#'>
            <Button>Services</Button>
          </a>
          <a href='#'>
            <Button>Products</Button>
          </a>
        </Navbar.Links>
      </Navbar>
    </div>
  )
}
