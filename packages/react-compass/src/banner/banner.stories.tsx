import {Column} from '../utils/components'
import Banner from './index'

export const Default: React.FC = () => {
  const backgroundSrc =
    'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  return (
    <Column>
      <h3>Default banner is large sized</h3>
      <Banner>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </Banner.Description>
      </Banner>
    </Column>
  )
}

export const Variant: React.FC = () => {
  const backgroundSrc =
    'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  return (
    <Column>
      <h3>Small sized Banner</h3>
      <Banner size='sm'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Medium sized Banner</h3>
      <Banner size='md'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Large sized Banner</h3>
      <Banner size='lg'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Full sized Banner</h3>
      <Banner size='full'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>
    </Column>
  )
}
