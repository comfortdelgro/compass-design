import Singapore from '@comfortdelgro/compass-icons/react/flag-sgp'
import USA from '@comfortdelgro/compass-icons/react/flag-usa'
import React from 'react'
import TextField from '../textfield'
import {Column, Row} from '../utils'
import DropdownTextfield, {DropdownOptions} from './dropdown-textfield'
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
export const Variants: React.FC = () => {
  const handleInputsChange = (selectedKey: string, value: string | number) => {
    console.log({selectedKey, value})
  }
  return (
    <>
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
          errorMessage='Oops, something happens.'
        />

        <h3>Readonly</h3>

        <DropdownTextfield
          options={dropdownOptions}
          inputType='text'
          onChange={handleInputsChange}
          label='Name'
          isReadOnly
        />

        <h3>Disabled</h3>

        <DropdownTextfield
          options={dropdownOptions}
          inputType='text'
          onChange={handleInputsChange}
          label='Name'
          isDisabled
        />
        <h3>With icons</h3>

        <DropdownTextfield
          options={phoneDropdownOptions}
          inputType='text'
          onChange={handleInputsChange}
          label='Enter your mobile number'
        />
        <h3>Required</h3>

        <DropdownTextfield
          options={phoneDropdownOptions}
          inputType='password'
          onChange={handleInputsChange}
          label='Enter your mobile number'
          isRequired={true}
        />
      </Column>
      <Row>
        <Column>
          <h3>Min length</h3>

          <DropdownTextfield
            options={phoneDropdownOptions}
            inputType='text'
            onChange={handleInputsChange}
            label='Enter your mobile number'
            minLength={5}
            placeholder='Min length of 5'
          />
        </Column>
        <Column>
          <h3>Max length</h3>

          <DropdownTextfield
            options={phoneDropdownOptions}
            inputType='text'
            onChange={handleInputsChange}
            label='Enter your mobile number'
            maxLength={10}
            placeholder='Max length of 10'
          />
        </Column>
      </Row>
    </>
  )
}

export const H5Form: React.FC = () => {
  return (
    <>
      <h4>Your Information</h4>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <DropdownTextfield
          options={dropdownOptions}
          inputType='text'
          label='Name'
          h5
        />
        <DropdownTextfield
          options={phoneDropdownOptions}
          inputType='text'
          label='Mobile Number'
          h5
        />
        <TextField
          h5
          type='email'
          value={'sallylee@gmail.com'}
          label={'Email'}
        />
      </div>
    </>
  )
}
