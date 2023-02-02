import {Variants} from './range-calendar.stories'

describe('range-calendar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  const calendar = <Variants />

  it('C01: confirm date selected', () => {
    cy.mount(calendar)
    cy.get(
      `[aria-label="Saturday, February 4, 2023"] > .calendar-cell-value`,
    ).click()
    cy.get('.highlighted > .calendar-cell-value').should('have.text', '4')
  })
})
