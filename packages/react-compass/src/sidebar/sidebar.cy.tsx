import {Default as Sidebar} from './sidebar.stories'

describe('sidebar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm sidebar popup when button is clicked', () => {
    cy.mount(<Sidebar />)
    cy.get('.c-jdhZyR').click()
    cy.get('.c-bstbuK').should('have.css', 'display').and('eq', 'block')
    cy.get('svg').click()
    cy.get('.c-bstbuK').should('not.exist')
  })
})
import {Default as Sidebar} from './sidebar.stories'

describe('sidebar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm sidebar popup when button is clicked', () => {
    cy.mount(<Sidebar />)
    cy.get('.c-jdhZyR').click()
    cy.get('.c-bstbuK').should('have.css', 'display').and('eq', 'block')
    cy.get('svg').click()
    cy.get('.c-bstbuK').should('not.exist')
  })
})
