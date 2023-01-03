import {Item} from '@react-stately/collections'
import {Column} from '../utils/components'
import Dropdown from './index'

export const Dropdowns: React.FC = () => (
  <Column>
    <h3>Without Header</h3>
    <Dropdown label='Favorite Animal' placeholder='Choose an animal'>
      <Item key='red panda'>Red Panda</Item>
      <Item key='cat'>Cat</Item>
      <Item key='dog'>Dog</Item>
      <Item key='aardvark'>Aardvark</Item>
      <Item key='kangaroo'>Kangaroo</Item>
      <Item key='snake'>Snake</Item>
    </Dropdown>
    <h3>With Header</h3>
    <Dropdown
      label='Favorite Animal'
      placeholder='Choose an animal'
      headerTitle='Filter title'
    >
      <Item key='red panda'>Red Panda</Item>
      <Item key='cat'>Cat</Item>
      <Item key='dog'>Dog</Item>
      <Item key='aardvark'>Aardvark</Item>
      <Item key='kangaroo'>Kangaroo</Item>
      <Item key='snake'>Snake</Item>
    </Dropdown>
    <h3>Searchable</h3>
    <Dropdown label='Favorite Animal' placeholder='Choose an animal' searchable>
      <Item key='red panda'>Red Panda</Item>
      <Item key='cat'>Cat</Item>
      <Item key='dog'>Dog</Item>
      <Item key='aardvark'>Aardvark</Item>
      <Item key='kangaroo'>Kangaroo</Item>
      <Item key='snake'>Snake</Item>
    </Dropdown>
    <h3>Loading</h3>
    <Dropdown label='Favorite Animal' placeholder='Choose an animal' isLoading>
      <Item key='red panda'>Red Panda</Item>
      <Item key='cat'>Cat</Item>
      <Item key='dog'>Dog</Item>
      <Item key='aardvark'>Aardvark</Item>
      <Item key='kangaroo'>Kangaroo</Item>
      <Item key='snake'>Snake</Item>
    </Dropdown>
  </Column>
)
