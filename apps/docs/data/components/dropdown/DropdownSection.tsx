import {Dropdown} from '@comfortdelgro/react-compass-old'

const Section = () => {
  return (
    <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
      <Dropdown.Item value='fly'>Fly</Dropdown.Item>
      <Dropdown.Section title='Group 1'>
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
      </Dropdown.Section>
      <Dropdown.Section title='Group 2'>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Section>
    </Dropdown.Select>
  )
}

export default Section
