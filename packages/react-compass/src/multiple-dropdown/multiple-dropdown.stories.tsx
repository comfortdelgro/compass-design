import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'
import Icon from '../icon'
import {Column} from '../utils/components'
import MultipleDropdown from './index'

export const MultipleDropdowns: React.FC = () => {
  const [value, setValue] = React.useState<'all' | Key[]>(['cat'])
  return (
    <Column>
      <h3>Controlled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        selectionMode='multiple'
        disabledKeys={['snake']}
        placeholder='Choose an animal'
        selectedKeys={value}
        isRequired
        onSelectionChange={(k: 'all' | Set<Key>) =>
          setValue(k === 'all' ? k : [...k])
        }
      >
        <MultipleDropdown.Item
          leftIcon={<Icon icon={faExclamationTriangle} />}
          key='red panda'
        >
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
        selectionMode='multiple'
        disabledKeys={['snake']}
        placeholder='Choose an animal'
      >
        <MultipleDropdown.Item
          leftIcon={<Icon icon={faExclamationTriangle} />}
          key='red panda'
        >
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Error</h3>
      <MultipleDropdown
        label='Favorite Animal'
        selectionMode='multiple'
        disabledKeys={['snake']}
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
        helperText='Helper Message'
      >
        <MultipleDropdown.Item
          leftIcon={<Icon icon={faExclamationTriangle} />}
          key='red panda'
        >
          Red Panda
        </MultipleDropdown.Item>
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
        <MultipleDropdown.Item
          leftIcon={<Icon icon={faExclamationTriangle} />}
          key='red panda'
        >
          Red Panda
        </MultipleDropdown.Item>
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
        <MultipleDropdown.Item
          leftIcon={<Icon icon={faExclamationTriangle} />}
          key='red panda'
        >
          Red Panda
        </MultipleDropdown.Item>
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
        <MultipleDropdown.Item
          leftIcon={<Icon icon={faExclamationTriangle} />}
          key='red panda'
        >
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
    </Column>
  )
}
