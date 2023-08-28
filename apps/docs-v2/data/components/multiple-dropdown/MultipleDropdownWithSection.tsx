import MultipleDropdown from '@comfortdelgro/react-compass/multiple-dropdown'

function MultipleDropdownWithSection() {
  return (
    <div>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal'>
        <MultipleDropdown.Item value='fly'>Fly</MultipleDropdown.Item>
        <MultipleDropdown.Section title='Group 1'>
          <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Group 2'>
          <MultipleDropdown.Item value='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>
    </div>
  )
}

export default MultipleDropdownWithSection
