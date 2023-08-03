import React from 'react'
import Toggle from '.'

describe('toggle.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm toggle switch when being clicked', () => {
    cy.mount(<Toggle size='lg' />)
    cy.get('.toggle-circle').parent('div').click()
    cy.get('.toggle-circle')
      .parent('div')
      .should('have.css', 'background-color', 'rgb(16, 124, 16)')
  })
})
