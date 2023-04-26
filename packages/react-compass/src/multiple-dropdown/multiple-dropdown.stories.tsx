import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'
import Icon from '../icon'
import {Column} from '../utils/components'
import MultipleDropdown from './index'

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<Key[]>([])
  return (
    <Column>
      <h3>Controlled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledKeys={['cat']}
        placeholder='Choose an animal'
        selectedKeys={value}
        defaultSelectedKeys={['cat']}
        isRequired
        onSelectionChange={(k: Key[]) => setValue(k)}
      >
        <MultipleDropdown.Item key='red panda'>
          <Icon icon={faExclamationTriangle} style={{marginRight: 5}} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>UnControlled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledKeys={['snake']}
        defaultSelectedKeys={['snake']}
        placeholder='Choose an animal'
      >
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Error</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledKeys={['snake']}
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
        helperText='Helper Message'
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

      <h3>Header</h3>
      <MultipleDropdown
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

      <h3>Header</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal'>
        <MultipleDropdown.Item key='fly'>Fly</MultipleDropdown.Item>
        <MultipleDropdown.Section title='Group 1'>
          <MultipleDropdown.Item key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
          <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Group 2'>
          <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
          <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
          <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>
    </Column>
  )
}
