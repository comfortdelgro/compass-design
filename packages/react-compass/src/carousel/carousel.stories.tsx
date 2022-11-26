import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {
  faPinterest,
  faTelegram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import Carousel from './index'

const socialIcons = [
  {icon: faPinterest as IconProp, target: 'https://www.pinterest.com.au/'},
  {icon: faTiktok as IconProp, target: 'https://www.tiktok.com/'},
  {icon: faTelegram as IconProp, target: 'https://telegram.org/'},
]

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

const secondButtonCssMobile = {
  backgroundColor: '#0142AF',
  color: '#F7F8F9',
  height: '92.857%',
  border: 'none',
  borderRadius: '0',
}

const firstButtonCssMobile = {
  backgroundColor: '#F7F8F9',
  color: '#0142AF',
  height: '92.857%',
  border: 'none',
  borderRadius: '0',
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

export const DesktopView: React.FC = () => {
  return (
    <Column>
      <h3>Default carousel is medium sized</h3>
      <Carousel count={3}>
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

      <h3>Small sized carousel with auto slide</h3>
      <Carousel count={3} size='sm' auto={2500}>
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

      <h3> Large sized carousel with custom social icons</h3>
      <Carousel count={3} size='lg' socialIcons={socialIcons}>
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

      <h3> Full sized carousel with custom previous/next slide button</h3>
      <Carousel
        count={3}
        size='lg'
        socialIcons={socialIcons}
        prevIcon={faChevronCircleLeft}
        nextIcon={faChevronCircleRight}
      >
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
    </Column>
  )
}

export const MobileView: React.FC = () => {
  return (
    <Column>
      <Carousel count={3} view='mobile'>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description descriptions={descriptions} />
        <Carousel.Buttons>
          <React.Fragment>
            <Button css={firstButtonCssMobile}>1st Slide</Button>
            <Button css={secondButtonCssMobile}>1st Slide</Button>
          </React.Fragment>
          <React.Fragment>
            <Button css={firstButtonCssMobile}>2nd Slide</Button>
            <Button css={secondButtonCssMobile}>2nd Slide</Button>
          </React.Fragment>
          <React.Fragment>
            <h3 style={{color: 'white'}}>Show no button</h3>
          </React.Fragment>
        </Carousel.Buttons>
      </Carousel>
    </Column>
  )
}
