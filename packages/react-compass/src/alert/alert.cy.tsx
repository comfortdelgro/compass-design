import React from 'react'
import Alert from './index'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

describe('alert.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Able to show children', () => {
    const alert = <Alert color='info'>{lorem}</Alert>

    cy.mount(alert)
    cy.get('.alert-content').should('be.visible').should('have.text', lorem)
  })
})
