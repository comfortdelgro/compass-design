import Link from './index'

describe('link.cy.ts', () => {
  it('C01: Should render children', () => {
    const link = (
      <Link href='https://google.com' external>
        Go to Google
      </Link>
    )
    cy.mount(link)
    cy.get('a')
      .should('be.visible')
      .should('have.attr', 'href', 'https://google.com')
  })
})
