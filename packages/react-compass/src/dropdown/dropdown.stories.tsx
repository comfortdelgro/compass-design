import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import Icon from '../icon'
import {Column} from '../utils/components'
import Dropdown from './index'

export const Dropdowns: React.FC = () => (
  <Column>
    <h3>Without Header</h3>
    <Dropdown label='Favorite Animal' placeholder='Choose an animal'>
      <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
      <Dropdown.Item key='cat'>Cat</Dropdown.Item>
      <Dropdown.Item key='dog'>Dog</Dropdown.Item>
      <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
      <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
      <Dropdown.Item key='snake'>Snake</Dropdown.Item>
    </Dropdown>
    <h3>With Header</h3>
    <Dropdown
      label='Favorite Animal'
      placeholder='Choose an animal'
      headerTitle='Filter title'
    >
      <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
      <Dropdown.Item key='cat'>Cat</Dropdown.Item>
      <Dropdown.Item key='dog'>Dog</Dropdown.Item>
      <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
      <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
      <Dropdown.Item key='snake'>Snake</Dropdown.Item>
    </Dropdown>
    <h3>Searchable</h3>
    <Dropdown label='Favorite Animal' placeholder='Choose an animal' searchable>
      <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
      <Dropdown.Item key='cat'>Cat</Dropdown.Item>
      <Dropdown.Item key='dog'>Dog</Dropdown.Item>
      <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
      <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
      <Dropdown.Item key='snake'>Snake</Dropdown.Item>
    </Dropdown>
    <h3>Loading</h3>
    <Dropdown label='Favorite Animal' placeholder='Choose an animal' isLoading>
      <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
      <Dropdown.Item key='cat'>Cat</Dropdown.Item>
      <Dropdown.Item key='dog'>Dog</Dropdown.Item>
      <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
      <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
      <Dropdown.Item key='snake'>Snake</Dropdown.Item>
    </Dropdown>
    <h3>With Icon</h3>
    <Dropdown
      label='Favorite Animal'
      placeholder='Choose an animal'
      icon={<Icon icon={faExclamationTriangle} />}
    >
      <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
      <Dropdown.Item key='cat'>Cat</Dropdown.Item>
      <Dropdown.Item key='dog'>Dog</Dropdown.Item>
      <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
      <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
      <Dropdown.Item key='snake'>Snake</Dropdown.Item>
    </Dropdown>
  </Column>
)
