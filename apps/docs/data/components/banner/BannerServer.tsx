// import {Banner} from '@comfortdelgro/static'
import { Banner } from "@comfortdelgro/react-compass"

function BasicExample() {
  return (
    <Banner css={{zIndex: 1}}>
      <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
      <Banner.Title>My Title</Banner.Title>
      <Banner.Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti
        esse qui earum dolorum.
      </Banner.Description>
    </Banner>
  )
}

export default BasicExample
