import React from 'react'
import {parseDate} from '../internationalized/date'
import DateRangePicker from './index'

const centerDateString = `2022-05-15`
const centerDateNextMonthString = `2022-06-15`

describe('date-range-picker.cy.ts', () => {
  it('C01: Should render children', () => {
    const dateRangePicker = (
      <DateRangePicker
        startDateLabel='Start date'
        endDateLabel='End date'
        defaultValue={{
          start: parseDate(centerDateString),
          end: parseDate(centerDateNextMonthString),
        }}
      />
    )

    cy.mount(dateRangePicker)

    cy.get('button[aria-label="Calendar"]').first().click({multiple: true})
    cy.get(
      `[aria-label="Saturday, May 14, 2022"] > .calendar-cell-value`,
    ).click()
    cy.get(
      `[aria-label="Thursday, June 16, 2022"] > .calendar-cell-value`,
    ).click()
    cy.get('.preview-date').should('have.text', '5/14/2022 – 6/16/2022')
  })
})
