import React from 'react'
import Badge from './index'

describe('badge.cy.ts', () => {
  it('C01: Able to see content', () => {
    const badge = <Badge label='Primary' color='info' variant='primary' />

    cy.mount(badge)
    cy.get('.label').should('be.visible')
  })

  it('C02: Able to see content and icon', () => {
    const badge = <Badge label='Primary' color='info' variant='primary' icon />

    cy.mount(badge)
    cy.get('.icon').should('be.visible')
    cy.get('.label').should('be.visible')
  })
})
