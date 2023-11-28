import {Dropdown} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const DisableClearableDropdown = () => {
  const [customValue, setCustomValue] = React.useState<string>('kangaroo')

  return (
    <>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={customValue}
        onValueChange={(k: string | number) => setCustomValue(k.toString())}
        allowsCustomValue
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
    </>
  )
}

export default DisableClearableDropdown
