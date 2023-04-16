import Breadcrumbs from './index'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

describe('banner.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Able to show children', () => {
    const banner = (
      <Breadcrumbs isCurrent={isCurrent}>
        <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#2' isDisabled>
          Disabled
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href='#3'>Data</Breadcrumbs.Item>
      </Breadcrumbs>
    )

    cy.mount(banner)
    cy.get("a[href='#0']").should('be.visible').should('have.text', 'Home')
    cy.get("a[href='#1']").should('be.visible').should('have.text', 'Library')
    cy.get("span[href='#2']")
      .should('be.visible')
      .should('have.text', 'Disabled')
    cy.get("a[href='#3']").should('be.visible').should('have.text', 'Data')
  })
})
