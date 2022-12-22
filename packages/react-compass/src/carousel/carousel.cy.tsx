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
    cy.get('.fa-chevron-left').click()
    cy.get('h1').should('have.text', titles[2])
    cy.get('.fa-chevron-right').click()
    cy.get('h1').should('have.text', titles[0])
  })
})
