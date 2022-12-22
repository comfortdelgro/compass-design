import QuantityToggle from './index'

describe('quantity-toggle.cy.ts', () => {
  it('C01: Should render children', () => {
    const quantityToggle = <QuantityToggle placeholder='Price' />
    cy.mount(quantityToggle)
    cy.get('a')
      .should('be.visible')
      .should('have.attr', 'href', 'https://google.com')
  })
})
