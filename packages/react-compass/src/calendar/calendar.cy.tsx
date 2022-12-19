import {parseDate} from '@internationalized/date'
import Calendar from './index'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const centerDateString = `${new Date().getFullYear()}-${new Date().getMonth()}-15`
const today = new Date(centerDateString)
const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)

describe('calendar.cy.ts', () => {
  it('C01: Should render children', () => {
    const calendar = <Calendar defaultValue={parseDate(centerDateString)} />

    cy.mount(calendar)

    cy.get(
      `[aria-label="${days[tomorrow.getDay()]}, ${
        month[tomorrow.getMonth()]
      } ${tomorrow.getDate()}, ${tomorrow.getFullYear()}"] > .calendar-cell-value`,
    ).click()
    cy.get('.highlighted > .calendar-cell-value').should('have.text', '16')

    cy.get(
      `[aria-label="${days[today.getDay()]}, ${
        month[today.getMonth()]
      } ${today.getDate()}, ${today.getFullYear()}"] > .calendar-cell-value`,
    ).click()
    cy.get('.highlighted > .calendar-cell-value').should('have.text', '15')
  })
})
