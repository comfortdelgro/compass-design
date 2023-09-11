import {Dropdown} from '@comfortdelgro/react-compass'

const UnControlledDropdown = () => {
  return (
    <>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <Dropdown.Item value='panda'>Panda</Dropdown.Item>
        <Dropdown.Item
          value='cat'
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <Dropdown.ComboBox
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <Dropdown.Item value='panda'>Panda</Dropdown.Item>
        <Dropdown.Item
          value='cat'
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
    </>
  )
}

export default UnControlledDropdown
