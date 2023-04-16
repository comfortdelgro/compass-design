import React from 'react'
import QuantityToggle from './index'

describe('quantity-toggle.cy.ts', () => {
  it('C01: Should render children', () => {
    const quantityToggle = <QuantityToggle placeholder='Price' />
    cy.mount(quantityToggle)
    cy.get('[aria-label="Decrease"]').should('be.visible')
    cy.get('[aria-label="Increase"]').should('be.visible')
  })
})
