import React from 'react'
import Box from './index'

const text = `Lorem ipsum dolor`

describe('box.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Able to show children', () => {
    const box = (
      <Box color='red' className='box'>
        <p>{text}</p>
      </Box>
    )

    cy.mount(box)
    cy.get('.box').should('be.visible').should('have.text', text)
  })
})
