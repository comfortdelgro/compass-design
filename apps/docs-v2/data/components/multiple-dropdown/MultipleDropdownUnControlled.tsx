import MultipleDropdown from '@comfortdelgro/react-compass/multiple-dropdown'

function MultipleDropdownUnControlled() {
  return (
    <div>
      <MultipleDropdown
        label='Favorite Animal'
        disabledValues={['snake']}
        defaultValues={['snake']}
        placeholder='Choose an animal'
      >
        <MultipleDropdown.Item value='red panda '>
          Red Panda
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

export default MultipleDropdownUnControlled
