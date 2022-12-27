import Slider from './index'

describe('range-calendar.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  let value = 20

  const setValFunc = (val: number) => {
    value = val
  }

  const slider = <Slider value={value} onChange={setValFunc} />

  it('C01: confirm date selected', () => {
    cy.mount(slider)
    cy.get('.slider-filled-rail')
      .should('have.attr', 'style')
      .and('include', `width: ${value}%`)
  })
})
