import {parseDate} from '@internationalized/date'
import Calendar from './index'

const centerDateString = `2022-05-15`

describe('calendar.cy.ts', () => {
  it('C01: Should render children', () => {
    const calendar = <Calendar defaultValue={parseDate(centerDateString)} />

    cy.mount(calendar)
    cy.get(
      `[aria-label="Saturday, May 14, 2022"] > .calendar-cell-value`,
    ).click()
    cy.get('.highlighted > .calendar-cell-value').should('have.text', '14')

    cy.get(`[aria-label="Monday, May 16, 2022"] > .calendar-cell-value`).click()
    cy.get('.highlighted > .calendar-cell-value').should('have.text', '16')
  })
})
