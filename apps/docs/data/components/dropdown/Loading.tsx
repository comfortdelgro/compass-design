import {Dropdown} from '@comfortdelgro/react-compass'

const LoadingDropdown = () => {
  return (
    <>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
    </>
  )
}

export default LoadingDropdown
