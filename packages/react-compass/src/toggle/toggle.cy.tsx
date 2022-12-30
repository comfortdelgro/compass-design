import {Variants as Toggles} from './toggle.stories'

describe('toggle.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm toggle switch when being clicked', () => {
    cy.mount(<Toggles />)
    cy.get('.c-iTKOFX > :nth-child(2) > :nth-child(1)').click()
    cy.get('.c-iTKOFX > :nth-child(2) > :nth-child(1)')
      .should('have.attr', 'class')
      .and('include', 'c-jozUte-kBgkqj-active-true')
  })
})
import {Variants as Toggles} from './toggle.stories'

describe('toggle.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm toggle switch when being clicked', () => {
    cy.mount(<Toggles />)
    cy.get('.c-iTKOFX > :nth-child(2) > :nth-child(1)').click()
    cy.get('.c-iTKOFX > :nth-child(2) > :nth-child(1)')
      .should('have.attr', 'class')
      .and('include', 'c-jozUte-kBgkqj-active-true')
  })
})
