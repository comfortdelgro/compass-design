import {Column} from '../utils/components'
import Banner from './index'

const backgroundSrc =
  'https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default banner is medium sized</h3>
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

export const Sizes: React.FC = () => {
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
