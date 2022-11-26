import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
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

export const Default: React.FC = () => {
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
    </Column>
  )
}

export const AutoSlide: React.FC = () => {
  return (
    <Column>
      <Carousel count={3} autoSlide={2500}>
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

// export const Sizes: React.FC = () => {
//   return (
//     <Column>
//       <h3>Small sized Carousel</h3>
//       <Carousel size='sm'>
//         <Carousel.Image addresses={backgroundSrc} />
//         <Carousel.Title titles={titles} />
//         <Carousel.Description descriptions={descriptions} />
//       </Carousel>

//       <h3>Medium sized Carousel</h3>
//       <Carousel size='md'>
//         <Carousel.Image addresses={backgroundSrc} />
//         <Carousel.Title titles={titles} />
//         <Carousel.Description descriptions={descriptions} />
//       </Carousel>

//       <h3>Large sized Carousel</h3>
//       <Carousel size='lg'>
//         <Carousel.Image addresses={backgroundSrc} />
//         <Carousel.Title titles={titles} />
//         <Carousel.Description descriptions={descriptions} />
//       </Carousel>

//       <h3>Full sized Carousel</h3>
//       <Carousel size='full'>
//         <Carousel.Image addresses={backgroundSrc} />
//         <Carousel.Title titles={titles} />
//         <Carousel.Description descriptions={descriptions} />
//       </Carousel>
//     </Column>
//   )
// }
