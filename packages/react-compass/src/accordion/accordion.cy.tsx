import Accordion from './index'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

describe('accordion.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Have icon, Able to click to show children', () => {
    const accordion = (
      <Accordion id='accordion'>
        <Accordion.Title>Title</Accordion.Title>
        {lorem}
      </Accordion>
    )

    cy.mount(accordion)
    cy.get('#accordion').click()
    cy.get('.accordion-left-icon-container').should('be.visible')
    cy.get('.accordion-body-inner').should('have.text', lorem)
    // cy.document().matchImage()
  })

  it('C02: Able to click to show children', () => {
    const accordion = (
      <Accordion id='accordion'>
        <Accordion.Title icon={false}>Title</Accordion.Title>
        {lorem}
      </Accordion>
    )

    cy.mount(accordion)
    cy.get('#accordion').click()
    cy.get('.accordion-body-inner').should('have.text', lorem)
    // cy.document().matchImage()
  })
})
