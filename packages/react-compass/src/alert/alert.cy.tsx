import Alert from './index'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

describe('accordion.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Able to show children', () => {
    const accordion = <Alert color='info'>{lorem}</Alert>

    cy.mount(accordion)
    cy.get('.c-gVtBjx').should('be.visible')
    cy.get('.c-gVtBjx').should('have.text', lorem)
  })
})
