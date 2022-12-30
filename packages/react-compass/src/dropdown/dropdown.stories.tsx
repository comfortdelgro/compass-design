import {Item} from '@react-stately/collections'
import {Column} from '../utils/components'
import Dropdown from './index'

export const Dropdowns: React.FC = () => (
  <Column>
    <Dropdown label='Favorite Animal' placeholder='adasdasd'>
      <Item key='red panda'>Red Panda</Item>
      <Item key='cat'>Cat</Item>
      <Item key='dog'>Dog</Item>
      <Item key='aardvark'>Aardvark</Item>
      <Item key='kangaroo'>Kangaroo</Item>
      <Item key='snake'>Snake</Item>
    </Dropdown>
  </Column>
)
