import {Column} from '../utils/components'
import Carousel from './index'

export const Default: React.FC = () => {
  const backgroundSrc =
    'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  return (
    <Column>
      <h3>Default carousel is large sized</h3>
      <Carousel>
        <Carousel.Image src={backgroundSrc} />
        <Carousel.Title>My Title</Carousel.Title>
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>
    </Column>
  )
}

export const Variant: React.FC = () => {
  const backgroundSrc =
    'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  return (
    <Column>
      <h3>Small sized Carousel</h3>
      <Carousel size='sm'>
        <Carousel.Image src={backgroundSrc} />
        <Carousel.Title>My Title</Carousel.Title>
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>

      <h3>Medium sized Carousel</h3>
      <Carousel size='md'>
        <Carousel.Image src={backgroundSrc} />
        <Carousel.Title>My Title</Carousel.Title>
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>

      <h3>Large sized Carousel</h3>
      <Carousel size='lg'>
        <Carousel.Image src={backgroundSrc} />
        <Carousel.Title>My Title</Carousel.Title>
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>

      <h3>Full sized Carousel</h3>
      <Carousel size='full'>
        <Carousel.Image src={backgroundSrc} />
        <Carousel.Title>My Title</Carousel.Title>
        <Carousel.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit iste
          corrupti.
        </Carousel.Description>
      </Carousel>
    </Column>
  )
}
