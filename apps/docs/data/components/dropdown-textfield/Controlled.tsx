import Singapore from '@comfortdelgro/compass-icons/react/flag-sgp'
import USA from '@comfortdelgro/compass-icons/react/flag-usa'
import {DropdownOptions, DropdownTextfield} from '@comfortdelgro/react-compass'
import React from 'react'

function Controlled() {
  const phoneDropdownOptions: DropdownOptions[] = [
    {
      value: '+65',
      label: '65',
      icon: <Singapore />,
    },
    {
      value: '+1',
      label: '1',
      icon: <USA />,
    },
  ]

  const [textfieldValue, setTextfieldValue] = React.useState<string>('Foo')
  const [dropdownValue, setDropdownValue] = React.useState<string>('')
  const handleChange = (dropdownValue: string, inputValue: string) => {
    console.log({dropdownValue, inputValue})
    setTextfieldValue(inputValue)
    setDropdownValue(dropdownValue)
  }

  return (
    <>
      <DropdownTextfield
        options={phoneDropdownOptions}
        label='Enter your mobile number'
        dropdownPlaceholder='Select country'
        textfieldPlaceholder='Enter you number'
        onChange={(dropdownValue: string, inputValue: string | number) =>
          handleChange(dropdownValue as string, inputValue as string)
        }
        isRequired={true}
        defaultInputValue={textfieldValue}
      />
    </>
  )
}

export default Controlled
