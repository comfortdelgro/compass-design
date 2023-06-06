import {
  faBars,
  faBell,
  faChartGantt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from '../avatar'
import Button from '../button'
import SearchField from '../searchfield'
import Navbar from './index'

const imageSrc = 'https://i.pravatar.cc/150?img=32'

describe('navbar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })
  it('C01: List should render children', () => {
    const navbar = (
      <Navbar id='navbar'>
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
        </div>
      </Navbar>
    )
    cy.mount(navbar)
    cy.get('#navbar').children().should('be.visible')
  })
})
