import React from 'react'
import {NoExpandSidenav} from './testComponent'

describe('range-calendar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  const nav = <NoExpandSidenav />

  it('C01: confirm date selected', () => {
    cy.mount(nav)
    cy.get('.c-TnYYI').trigger('mouseover')
    cy.get('.sidenav-expanded').should('exist')
  })
})

describe('range-calendar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  const nav = <NoExpandSidenav />

  it('C01: confirm date selected', () => {
    cy.mount(nav)
    cy.get('.c-TnYYI').trigger('mouseover')
    cy.get('.sidenav-expanded').should('exist')
  })
})
