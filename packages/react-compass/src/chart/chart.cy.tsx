import Chart from './index'

const dataSet = {
  data: [
    {
      title: '1',
      data: [300, 430],
    },
    {
      title: '2',
      data: [320, 230],
    },
    {
      title: '3',
      data: [260, 370],
    },
    {
      title: '4',
      data: [300, 430],
    },
    {
      title: '5',
      data: [300, 430],
    },
  ],
  legends: ['legend1', 'legend2'],
}

describe('accordion.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Should show area chart correctly', () => {
    const chart = <Chart.Area dataSet={dataSet} title='Area Chart' />

    cy.mount(chart)
    // chart
    cy.get('.c-sGuKw').should('be.visible')

    // legends
    cy.get('.c-flgKTm').should('be.visible')
  })

  it('C02: Should show column chart correctly', () => {
    const chart = <Chart.Column dataSet={dataSet} title='Column Chart' />

    cy.mount(chart)
    // chart
    cy.get('.c-sGuKw').should('be.visible')

    // legends
    cy.get('.c-flgKTm').should('be.visible')

    // paths
    dataSet.data.forEach((item) => {
      cy.get(`[title="${item.title}"]`).should('be.visible')
    })

    // cy.document().matchImage()
  })

  it('C03: Should show bar chart correctly', () => {
    const chart = <Chart.Bar dataSet={dataSet} title='Bar Chart' />

    cy.mount(chart)
    // chart
    cy.get('.c-sGuKw').should('be.visible')

    // legends
    cy.get('.c-flgKTm').should('be.visible')
  })

  it('C04: Should show lines chart correctly', () => {
    const chart = <Chart.Line dataSet={dataSet} title='Line Chart' />

    cy.mount(chart)
    // chart
    cy.get('.c-sGuKw').should('be.visible')

    // legends
    cy.get('.c-flgKTm').should('be.visible')
  })
})
