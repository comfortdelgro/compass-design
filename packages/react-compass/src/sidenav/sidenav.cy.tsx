import React from 'react'
import Sidenav from './index'

const nav = (
  <Sidenav
    css={{height: '800px', position: 'absolute', top: '0px', zIndex: 2}}
    expand={false}
  >
    <Sidenav.Item>
      <h2 style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}>
        Workbench
      </h2>
    </Sidenav.Item>
    <Sidenav.Divider />
    <a href='#' style={{color: 'inherit', textDecoration: 'none'}}>
      link
    </a>
    <Sidenav.Divider />
    <Sidenav.Item css={{marginTop: 'auto'}}>
      <span>Placeholder</span>
    </Sidenav.Item>
  </Sidenav>
)

describe('sidenav.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: sidenav can be hovered', () => {
    cy.mount(nav)
    cy.get('h2').trigger('mouseover')
    cy.get('.sidenav-expanded').should('exist')
  })
})
