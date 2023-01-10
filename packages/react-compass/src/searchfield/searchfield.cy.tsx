import SearchField from './index'

describe('searchfield.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm search field submits the right result', () => {
    let inputText = ''
    const onSubmit = (text: string) => {
      return (inputText = text)
    }
    const searchField = <SearchField placeholder='Search' onSubmit={onSubmit} />

    cy.mount(searchField)
    cy.get(`.c-jdhZyR`).click()
    cy.get('input')
      .type('content')
      .type(`{enter}`)
      .then(() => {
        expect(inputText).to.equal('content')
      })
  })
})
