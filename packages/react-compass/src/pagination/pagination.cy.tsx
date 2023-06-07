import React from 'react'
import Pagination from './index'

describe('pagination.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: ', () => {
    const pagination = (
      <Pagination
        id='pagination'
        total={10}
        page={2}
        onChange={(page) => {
          console.log(page)
        }}
      />
    )

    cy.mount(pagination)
    //confirm total number of pages shown
    cy.get(':nth-child(8)').should('contain', '10')

    //confirm current page selected
    cy.get('#pagination > :nth-child(3)').should('have.text', '2')
  })
})
