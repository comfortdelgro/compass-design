import MultipleDropdown from '@comfortdelgro/react-compass/multiple-dropdown'

function MultipleDropdownLoading() {
  return (
    <div>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
    </div>
  )
}

export default MultipleDropdownLoading
