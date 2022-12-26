import Spinner from './index'

describe('spinner.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: ', () => {
    const spinner = <Spinner size='2xl' />

    cy.mount(spinner)
    cy.get('.label').should('be.visible')
  })
})
