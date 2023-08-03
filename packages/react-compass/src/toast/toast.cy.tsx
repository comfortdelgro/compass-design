import React from 'react'
import {Default as Toast} from './toast.stories'

describe('toast.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm toast popups when button is clicked', () => {
    cy.mount(<Toast />)
    cy.get('button').click()
    cy.get('p').should('have.text', 'Lorem ipsum dolor, sit amet consectetur.')
    cy.get('[data-icon="xmark"]').click()
    cy.get('p').should('not.exist')
  })
})
