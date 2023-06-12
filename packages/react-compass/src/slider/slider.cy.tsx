import React from 'react'
import Slider from './index'

describe('slider.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  let value = 20

  const setValFunc = (val: number) => {
    value = val
  }

  const slider = <Slider value={value} onChange={setValFunc} />

  it('C01: Value should be equal to default', () => {
    cy.mount(slider)
    cy.get('.thumb-tooltips').should('have.attr', 'value', 20)
  })
})
