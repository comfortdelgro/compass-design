import React from 'react'
import {Variants as Wizard} from './wizard.stories'

describe('wizard.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm the wizard shows correct current step', () => {
    cy.mount(<Wizard />)
    cy.get('.wizard-progress-wrapper > :nth-child(1) > div')
      .should('have.attr', 'class')
      .and('include', 'c-hGkPwH-ftQEAz-active-true')
    cy.get('.wizard-progress-wrapper > :nth-child(2) > div')
      .should('have.attr', 'class')
      .and('include', 'c-hGkPwH-ftQEAz-active-true')
  })
})

describe('wizard.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm the wizard shows correct current step', () => {
    cy.mount(<Wizard />)
    cy.get('.wizard-progress-wrapper > :nth-child(1) > div')
      .should('have.attr', 'class')
      .and('include', 'c-hGkPwH-ftQEAz-active-true')
    cy.get('.wizard-progress-wrapper > :nth-child(2) > div')
      .should('have.attr', 'class')
      .and('include', 'c-hGkPwH-ftQEAz-active-true')
  })
})
