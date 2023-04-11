import React from 'react'
import SubBanner from './index'

const horizontalBackgroundSrc =
  'https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

describe('subbanner.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: ', () => {
    const subBanner = (
      <SubBanner>
        <SubBanner.Image src={horizontalBackgroundSrc} role='image' />
        <SubBanner.Title role='title'>My Title</SubBanner.Title>
        <SubBanner.Description role='desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>
    )

    cy.mount(subBanner)
    // cy.get('#accordion').click()
    // cy.get('.accordion-left-icon-container').should('be.visible')
    cy.get(`[role='title']`).should('have.text', 'My Title')
    cy.get(`[role='desc']`).should(
      'have.text',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum.',
    )
    // cy.document().matchImage()
  })
})
