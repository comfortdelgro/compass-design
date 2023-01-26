import {Column} from '../utils/components'
import MultipleDropdown from './index'

export const MultipleDropdowns: React.FC = () => (
  <Column>
    <h3>Without Header</h3>
    <MultipleDropdown
      label='Favorite Animal'
      selectionMode='multiple'
      disabledKeys={['snake']}
      placeholder='Choose an animal'
    >
      <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
      <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
      <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
      <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
      <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
      <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
    </MultipleDropdown>
    <h3>Header</h3>
    <MultipleDropdown
      selectionMode='multiple'
      disabledKeys={['snake']}
      label='Favorite Animal'
      placeholder='Choose an animal'
      headerTitle='Filter title'
      headerOnClick={() => console.log('clicked')}
    >
      <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
      <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
      <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
      <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
      <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
      <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
    </MultipleDropdown>
    <h3>Loading</h3>
    <MultipleDropdown
      selectionMode='multiple'
      label='Favorite Animal'
      placeholder='Choose an animal'
      isLoading
    >
      <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
      <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
      <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
      <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
      <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
      <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
    </MultipleDropdown>
  </Column>
)
