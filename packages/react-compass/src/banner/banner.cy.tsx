import React from 'react'
import Banner from './index'

const backgroundSrc =
  'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg'

const description = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum.`

const title = `My Title`

describe('banner.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: Able to show children', () => {
    const banner = (
      <Banner>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>{title}</Banner.Title>
        <Banner.Description>{description}</Banner.Description>
      </Banner>
    )

    cy.mount(banner)
    cy.get('img').should('be.visible')
    cy.get('h1').should('have.text', title)
    cy.get('p').should('have.text', description)
  })
})
