import ProgressBar from './index'

describe('progress-bar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm value', () => {
    const bar = <ProgressBar value={20} variant='normal' label='normal' />

    cy.mount(bar)
    cy.get('.progress-bar div')
      //   .matchImage()
      .should('have.attr', 'style')
      .and('include', 'width: 20%')
  })
  it('C02: confirm variant layout', () => {
    const normalVariant = (
      <ProgressBar value={20} variant='normal' label='normal' />
    )

    const roundedVariant = (
      <ProgressBar value={20} variant='rounded' label='rounded' />
    )

    cy.mount(normalVariant)
    cy.get('.progress-bar')
      //   .matchImage()
      .should('have.css', 'border-radius')
      .and('eq', '0px')
    cy.get('.progress-bar-label span')
      .should('be.visible')
      .and('have.text', 'normal')

    cy.mount(roundedVariant)
    cy.get('.progress-bar')
      //   .matchImage()
      .should('have.css', 'border-radius')
      .and('eq', '9999px')
    cy.get('.progress-bar-label span')
      .should('be.visible')
      .and('have.text', 'rounded')
  })

  it('C03: confirm sizes', () => {
    const small = <ProgressBar value={20} size='sm' label='sm' />

    const medium = <ProgressBar value={20} size='md' label='md' />

    const large = <ProgressBar value={20} size='lg' label='lg' />

    const extraLarge = <ProgressBar value={20} size='xl' label='xl' />

    cy.mount(small)
    cy.get('.progress-bar')
      //   .matchImage()
      .should('have.css', 'height')
      .and('eq', '2px')

    cy.mount(medium)
    cy.get('.progress-bar')
      //   .matchImage()
      .should('have.css', 'height')
      .and('eq', '4px')

    cy.mount(large)
    cy.get('.progress-bar')
      //   .matchImage()
      .should('have.css', 'height')
      .and('eq', '8px')
    cy.mount(extraLarge)

    cy.get('.progress-bar')
      //   .matchImage()
      .should('have.css', 'height')
      .and('eq', '12px')
  })

  it('C04: confirm colors', () => {
    const blue = <ProgressBar value={20} color='blue' label='blue' />

    const green = <ProgressBar value={20} color='green' label='green' />

    cy.mount(blue)
    cy.get('.progress-bar div')
      //   .matchImage()
      .should('have.css', 'background-color')
      .and('eq', 'rgb(0, 158, 218)')

    cy.mount(green)
    cy.get('.progress-bar div')
      //   .matchImage()
      .should('have.css', 'background-color')
      .and('eq', 'rgb(16, 124, 16)')
  })
})
