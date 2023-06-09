import React from 'react'
import {Default as Sidebar} from './sidebar.stories'

describe('sidebar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm sidebar popup when button is clicked', () => {
    cy.mount(<Sidebar />)
    cy.get('.children').click()
    cy.get('.c-jWPZdY-iPJLV-css > .c-jWPZdY').should('have.text', 'My title')
  })
})
