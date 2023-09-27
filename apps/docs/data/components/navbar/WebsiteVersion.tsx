import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'
import {Button, Column, Navbar} from '@comfortdelgro/react-compass'

const Variants: React.FC = () => {
  return (
    <Column>
      <Navbar variant='website' color='white'>
        <Workbench width={'40px'} height={'40px'} />
        <Navbar.Links>
          <Button variant='ghost'>Home</Button>
          <Button variant='ghost'>Services</Button>
          <Button variant='ghost'>Products</Button>
        </Navbar.Links>
      </Navbar>
    </Column>
  )
}
export default Variants
