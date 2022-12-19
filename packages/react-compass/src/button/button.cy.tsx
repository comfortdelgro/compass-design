import Button from './index'
type Variant = 'primary' | 'secondary' | 'danger' | 'ghost'

describe('button.cy.ts', () => {
  it('C01: Should render children', () => {
    const children = 'Click Me!'
    const button = <Button>{children}</Button>

    cy.mount(button)
    cy.get('button').should('have.text', children)
    cy.document().matchImage()
  })

  it('C02: Should support all variants', () => {
    const listOfVariants: Variant[] = [
      'primary',
      'secondary',
      'danger',
      'ghost',
    ]
    cy.mount(
      <>
        {listOfVariants.map((item) => (
          <Button variant={item} id={item}>
            {item}
          </Button>
        ))}
      </>,
    )
    listOfVariants.forEach((item) => {
      cy.get(`#${item}`).should('have.text', item)
    })
    cy.document().matchImage()
  })
})
