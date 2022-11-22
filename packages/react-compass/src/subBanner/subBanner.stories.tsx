import {Column} from '../utils/components'
import SubBanner from './index'

export const Default: React.FC = () => {
  const backgroundSrc =
    'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  return (
    <Column>
      <h3>Default Sub-banner</h3>
      <SubBanner>
        <SubBanner.Image src={backgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>
    </Column>
  )
}

export const Variant: React.FC = () => {
  const backgroundSrc =
    'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

  return (
    <Column>
      <h3>Primary</h3>
      <SubBanner variant='primary'>
        <SubBanner.Image src={backgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>

      <h3>Secondary</h3>
      <SubBanner variant='secondary'>
        <SubBanner.Image src={backgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>
    </Column>
  )
}
