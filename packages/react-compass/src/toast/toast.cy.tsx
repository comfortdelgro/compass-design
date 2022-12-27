import {Default as Toast} from './toast.stories'

describe('sidebar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm toast popups when button is clicked', () => {
    cy.mount(<Toast />)
    cy.get('.c-jdhZyR').click()
    cy.get('.c-enSzkB').should('have.css', 'display').and('eq', 'flex')
    cy.get('[data-icon="xmark"]').click()
    cy.get('.c-enSzkB').should('not.exist')
  })
})
