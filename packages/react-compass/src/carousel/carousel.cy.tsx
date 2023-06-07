import React from 'react'
import Button from '../button/button'
import Carousel from './index'

const firstButtonCss = {
  backgroundColor: '#0142AF',
  color: '#F7F8F9',
  height: '92.857%',
  border: 'none',
}

const secondButtonCss = {
  backgroundColor: '#F7F8F9',
  color: '#0142AF',
  height: '92.857%',
  border: 'none',
  '&:hover': {
    color: '#F7F8F9',
  },
}

const backgroundSrc = [
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
]

const titles = ['First slide label', 'Second slide label', 'Third slide label']

const descriptions = [
  'First lorem ipsum dolor, sit amet consectetur adipisicing elit iste corrupti',
  'Second lorem ipsum dolor, sit amet consectetur adipisicing elit iste corrupti',
  'Third lorem ipsum dolor, sit amet consectetur adipisicing elit iste corrupti',
]

describe('carousel.cy.ts', () => {
  it('C01: Should render children', () => {
    const carousel = (
      <Carousel count={3} size='sm' auto={2500} id='carousel'>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description descriptions={descriptions} />
        <Carousel.Buttons>
          <React.Fragment>
            <Button css={firstButtonCss}>1st Slide</Button>
            <Button css={secondButtonCss}>1st Slide</Button>
          </React.Fragment>
          <React.Fragment>
            <Button css={firstButtonCss}>2nd Slide</Button>
            <Button css={secondButtonCss}>2nd Slide</Button>
          </React.Fragment>
          <React.Fragment>
            <h3 style={{color: 'white'}}>Show no button</h3>
          </React.Fragment>
        </Carousel.Buttons>
      </Carousel>
    )

    cy.mount(carousel)

    cy.get('#carousel').should('be.visible')
    cy.get(
      'path[d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]',
    )
      .parent('svg')
      .click()
    cy.get('h1').should('have.text', titles[2])
    cy.get(
      'path[d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]',
    )
      .parent('svg')
      .click()
    cy.get('h1').should('have.text', titles[0])
  })
})
