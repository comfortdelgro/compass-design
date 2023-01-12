import Chart from './index'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = [
  {
    label: 'Dataset 1',
    data: labels.map(() => Math.floor(Math.random() * 1000)),
  },
  {
    label: 'Dataset 2',
    data: labels.map(() => Math.floor(Math.random() * 1000)),
  },
]

describe('chart.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Should show area chart correctly', () => {
    const chart = <Chart.Area labels={labels} data={data} title='Area Chart' />

    cy.mount(chart)
    cy.get('canvas').should('be.visible')
  })

  it('C02: Should show column chart correctly', () => {
    const chart = (
      <Chart.Column labels={labels} data={data} title='Column Chart' />
    )

    cy.mount(chart)
    cy.get('canvas').should('be.visible')
  })

  it('C03: Should show bar chart correctly', () => {
    const chart = <Chart.Line labels={labels} data={data} title='Line Chart' />

    cy.mount(chart)
    cy.get('canvas').should('be.visible')
  })

  it('C04: Should show lines chart correctly', () => {
    const chart = <Chart.Bar labels={labels} data={data} title='Bar Chart' />

    cy.mount(chart)
    cy.get('canvas').should('be.visible')
  })
})
