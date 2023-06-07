import React from 'react'
import {Controlled as ControlledTooltip} from './tooltip.stories'

describe('toggle.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm toggle switch when being clicked', () => {
    cy.mount(<ControlledTooltip />)
    cy.get('button').focus()
    cy.get(`[role='tooltip']`).should('exist')
  })
})
