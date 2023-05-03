import {
  Dropdown,
  Icon,
} from '@comfortdelgro/react-compass'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const ControlledDropdown = () => {
  const [value, setValue] = React.useState<React.Key>('cat')
  return (
    <>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: React.Key) => setValue(k)}
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
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <Dropdown.ComboBox
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: React.Key) => setValue(k)}
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
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snakessss'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
    </>
  )
}
