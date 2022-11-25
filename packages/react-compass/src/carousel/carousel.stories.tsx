import {Column} from '../utils/components'
import Carousel from './index'

const backgroundSrc = [
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
]

const titles = ['First slide label', 'Second slide label', 'Third slide label']

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default carousel is large sized</h3>
      <Carousel>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>
    </Column>
  )
}

export const AutoSlide: React.FC = () => {
  return (
    <Column>
      <h3>Default carousel is large sized</h3>
      <Carousel autoSlide={2500}>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>
    </Column>
  )
}

export const Sizes: React.FC = () => {
  return (
    <Column>
      <h3>Small sized Carousel</h3>
      <Carousel size='sm'>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>

      <h3>Medium sized Carousel</h3>
      <Carousel size='md'>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>

      <h3>Large sized Carousel</h3>
      <Carousel size='lg'>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>

      <h3>Full sized Carousel</h3>
      <Carousel size='full'>
        <Carousel.Image addresses={backgroundSrc} />
        <Carousel.Title titles={titles} />
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>
    </Column>
  )
}
