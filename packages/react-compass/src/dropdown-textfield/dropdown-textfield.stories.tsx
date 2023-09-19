import React from 'react'
import {Column} from '../utils'
import DropdownTextfield, {DropdownOptions} from './dropdown-textfield'
export const Default: React.FC = () => {
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
  const handleInputsChange = (selectedKey: string, value: string | number) => {
    console.log({selectedKey, value})
  }
  return (
    <Column>
      <h3>Default</h3>

      <DropdownTextfield
        options={dropdownOptions}
        inputType='text'
        onChange={handleInputsChange}
        label='Name'
      />
      <h3>Errored</h3>

      <DropdownTextfield
        options={dropdownOptions}
        inputType='text'
        onChange={handleInputsChange}
        label='Name'
        isErrored
        errorMessage='Oh no'
      />
    </Column>
  )
}
