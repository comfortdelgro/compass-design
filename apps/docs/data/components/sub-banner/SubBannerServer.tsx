import {SubBanner} from '@comfortdelgro/static'

function SubBannerPrimary() {
  return (
    <SubBanner variant='primary'>
      <SubBanner.Image src='https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
      <SubBanner.Title>My Title</SubBanner.Title>
      <SubBanner.Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti
        esse qui earum dolorum.
      </SubBanner.Description>
    </SubBanner>
  )
}

export default SubBannerPrimary
