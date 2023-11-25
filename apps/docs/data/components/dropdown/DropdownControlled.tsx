import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import {Dropdown} from '@comfortdelgro/react-compass'
import React from 'react'

const ControlledDropdown = () => {
  const [value, setValue] = React.useState<string>('cat')
  return (
    <>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={value}
        onValueChange={(k: string | number) => setValue(k.toString())}
      >
        <Dropdown.Item value='red panda' leftIcon={<BugIcon />}>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<BugIcon />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <br></br>
      <Dropdown.ComboBox
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={value}
        onValueChange={(k: string | number) => setValue(k.toString())}
      >
        <Dropdown.Item value='red panda' leftIcon={<BugIcon />}>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<BugIcon />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
    </>
  )
}

export default ControlledDropdown
