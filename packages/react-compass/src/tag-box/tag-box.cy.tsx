import TagBox from './index'

const items = [
  {id: 1, value: 'Item 1'},
  {id: 2, value: 'Item 2'},
]

describe('tag-box.cy.ts', () => {
  it('C01: Should render children', () => {
    const tagBox = (
      <TagBox
        id='tag-box'
        label='Text Label'
        items={items}
        onRemove={(e) => console.log(e)}
      />
    )
    cy.mount(tagBox)
    cy.get('#tag-box').should('be.visible')
  })
})
