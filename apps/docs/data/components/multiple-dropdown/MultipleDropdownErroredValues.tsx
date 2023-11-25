import {MultipleDropdown} from '@comfortdelgro/react-compass'

function MultipleDropdownErroredValues() {
  return (
    <div>
      <MultipleDropdown
        label='Favorite Animal'
        defaultValues={['panda', 'cat']}
        erroredValues={['panda']}
        isErrored
        errorMessage='Red panda is not available'
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

export default MultipleDropdownErroredValues
