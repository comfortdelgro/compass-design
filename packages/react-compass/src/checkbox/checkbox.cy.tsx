import React from 'react'
import Checkbox from './index'

describe('checkbox.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: able to check', () => {
    const checkbox = <Checkbox />

    cy.mount(checkbox)

    cy.get('label').click()
    cy.get('input').should('be.checked')
  })
  it('C02: unable to check when it disabled', () => {
    const checkbox = <Checkbox isDisabled />

    cy.mount(checkbox)

    cy.get('label').click()
    cy.get('input').should('not.be.checked')
  })
})
