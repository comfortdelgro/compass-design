import React from 'react'
import QuantityToggle from './index'

describe('quantity-toggle.cy.ts', () => {
  it('C01: Should render children', () => {
    const quantityToggle = <QuantityToggle placeholder='Price' />
    cy.mount(quantityToggle)
    cy.get('[aria-label="decrease"]').should('be.visible')
    cy.get('[aria-label="increase"]').should('be.visible')
  })
})
