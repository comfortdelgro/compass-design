import MultipleDropdown from '@comfortdelgro/react-compass/multiple-dropdown'
import React, {Key} from 'react'

function MultipleDropdownCustomDisplayValue() {
  const [value2, setValue2] = React.useState<Key[]>(['snake', 'cat', 'dog'])
  return (
    <div>
      <MultipleDropdown
        label='Favorite Animal'
        displayedValue='string'
        customDisplayValue={`${value2.length} animals selected`}
        placeholder='Choosesss an animal'
        css={{width: '290px'}}
        values={value2}
        onValuesChange={(k: Key[]) => setValue2(k)}
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

export default MultipleDropdownCustomDisplayValue
