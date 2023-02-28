import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'
import Icon from '../icon'
import {Column} from '../utils/components'
import Dropdown from './index'

export const Flag: React.FC = () => {
  return (
    <Column>
      <h3>Flag</h3>
      <Dropdown.Flag
        isRequired
        label='List of country'
        placeholder='Choose a country'
        onPhoneChange={(e) => console.log(e)}
      />
    </Column>
  )
}

export const Select: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
  return (
    <Column>
      <h3>Controlled</h3>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        isDisabled
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<Icon icon={faExclamationTriangle} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          key='cat'
          leftIcon={<Icon icon={faExclamationTriangle} />}
          type='color'
          rightColor='red'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>UnControlled</h3>
      <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item
          key='red panda'
          leftIcon={<Icon icon={faExclamationTriangle} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Erorr</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<Icon icon={faExclamationTriangle} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Header</h3>
      <Dropdown.Select
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
      </Dropdown.Select>
      <h3>Loading</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Icon</h3>
      <Dropdown.Select
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
      </Dropdown.Select>
    </Column>
  )
}

export const ComboBox: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
  return (
    <Column>
      <h3>Controlled</h3>
      <Dropdown.ComboBox
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<Icon icon={faExclamationTriangle} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>UnControlled</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item
          key='red panda'
          leftIcon={<Icon icon={faExclamationTriangle} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Erorr</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<Icon icon={faExclamationTriangle} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Header</h3>
      <Dropdown.ComboBox
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
      </Dropdown.ComboBox>
      <h3>Loading</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Icon</h3>
      <Dropdown.ComboBox
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
      </Dropdown.ComboBox>
    </Column>
  )
}
