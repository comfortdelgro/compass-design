import MultipleDropdown from '@comfortdelgro/react-compass-old/multiple-dropdown'

function MultipleDropdownCustomPopoverStyling() {
  return (
    <div>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Animals'
        css={{width: 250}}
        popoverCSS={{width: 'auto'}}
      >
        <MultipleDropdown.Item value='Panda' textValue='Panda'>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
    </div>
  )
}

export default MultipleDropdownCustomPopoverStyling
