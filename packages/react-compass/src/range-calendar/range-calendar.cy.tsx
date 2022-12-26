import {Variants} from './range-calendar.stories'

describe('progress-bar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  const calendar = <Variants />

  it('C01: confirm date selected', () => {
    cy.mount(calendar)
    cy.get(
      `[aria-label="Tuesday, December 6, 2022"] > .calendar-cell-value`,
    ).click()
    cy.get('.highlighted > .calendar-cell-value').should('have.text', '6')
  })
})
