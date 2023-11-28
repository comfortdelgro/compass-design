import {MultipleDropdown} from '@comfortdelgro/react-compass'

function MultipleDropdownWithIcon() {
  return (
    <div>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<span>Icon</span>}
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

export default MultipleDropdownWithIcon
