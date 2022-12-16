import Button from './index'

describe('button.cy.ts', () => {
  it('should render children', () => {
    const children = 'Click Me!'
    const button = <Button>{children}</Button>

    cy.mount(button)
    cy.get('button').should('have.text', children)
    cy.document().matchImage()
  })

  it('should support all variants', () => {
    const children = 'Click Me!'
    cy.mount(
      <>
        <Button variant='primary'>{children}</Button>
        <Button variant='secondary'>{children}</Button>
        <Button variant='danger'>{children}</Button>
        <Button variant='ghost'>{children}</Button>
      </>,
    )

    cy.document().matchImage()
  })
})
