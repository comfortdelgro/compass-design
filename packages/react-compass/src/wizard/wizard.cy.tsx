import React from 'react'
import {Variants as Wizard} from './wizard.stories'

describe('wizard.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm the wizard shows correct current step', () => {
    cy.mount(<Wizard />)
  })
})
