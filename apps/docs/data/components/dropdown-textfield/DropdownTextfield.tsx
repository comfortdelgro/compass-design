import Singapore from '@comfortdelgro/compass-icons/react/flag-sgp'
import USA from '@comfortdelgro/compass-icons/react/flag-usa'
import {DropdownOptions, DropdownTextfield} from '@comfortdelgro/react-compass'
function BasicExample() {
  const dropdownOptions: DropdownOptions[] = [
    {
      value: 'mr',
      label: 'Mr',
      icon: null,
    },
    {
      value: 'ms',
      label: 'Ms',
      icon: null,
    },
    {
      value: 'mrs',
      label: 'Mrs',
      icon: null,
    },
  ]
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
  return (
    <>
      <h3>Default</h3>

      <DropdownTextfield
        options={dropdownOptions}
        inputType='text'
        label='Name'
      />
      <h3>Errored</h3>

      <DropdownTextfield
        options={dropdownOptions}
        inputType='text'
        label='Name'
        isErrored
        errorMessage='Oops, something happens.'
      />

      <h3>Readonly</h3>

      <DropdownTextfield
        options={dropdownOptions}
        inputType='text'
        label='Name'
        isReadOnly
      />

      <h3>Disabled</h3>

      <DropdownTextfield
        options={dropdownOptions}
        inputType='text'
        label='Name'
        isDisabled
      />
      <h3>With icons</h3>

      <DropdownTextfield
        options={phoneDropdownOptions}
        inputType='text'
        label='Enter your mobile number'
      />
      <h3>Required</h3>

      <DropdownTextfield
        options={phoneDropdownOptions}
        inputType='password'
        label='Enter your mobile number'
        isRequired={true}
      />
    </>
  )
}

export default BasicExample
