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
    cy.get('.c-hSXQHM').eq(-2).should('contain', '10')

    //confirm current page selected
    cy.get('.c-hSXQHM-hJZsla-active-true').should('have.text', '2')
  })
})
