import SubHeader from './index'

describe('sub-header.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: ', () => {
    const subHeader = (
      <SubHeader id='subHeader'>
        <SubHeader.Header id='header'>
          <SubHeader.Title id='title'>Title</SubHeader.Title>
        </SubHeader.Header>
        <SubHeader.Description id='description'>
          Description
        </SubHeader.Description>
      </SubHeader>
    )

    cy.mount(subHeader)
    cy.get('#subHeader')
    //   .matchImage()
    cy.get('#header').should('be.visible')
    cy.get('#title').should('be.visible').and('have.text', 'Title')
    cy.get('#description').should('be.visible').and('have.text', 'Description')
  })
})
import SubHeader from './index'

describe('sub-header.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: ', () => {
    const subHeader = (
      <SubHeader id='subHeader'>
        <SubHeader.Header id='header'>
          <SubHeader.Title id='title'>Title</SubHeader.Title>
        </SubHeader.Header>
        <SubHeader.Description id='description'>
          Description
        </SubHeader.Description>
      </SubHeader>
    )

    cy.mount(subHeader)
    cy.get('#subHeader')
    //   .matchImage()
    cy.get('#header').should('be.visible')
    cy.get('#title').should('be.visible').and('have.text', 'Title')
    cy.get('#description').should('be.visible').and('have.text', 'Description')
  })
})
