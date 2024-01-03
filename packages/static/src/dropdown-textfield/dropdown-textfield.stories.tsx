import Singapore from '@comfortdelgro/compass-icons/react/flag-sgp'
import USA from '@comfortdelgro/compass-icons/react/flag-usa'
import type {Meta} from '@storybook/react'
import {toString} from 'lodash'
import React, {useEffect, useState} from 'react'
import Dropdown from '../dropdown'
import Textarea from '../textarea'
import TextField from '../textfield'
import DropdownTextfield, {DropdownOptions} from './dropdown-textfield'

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '3rem',
}
const styleRow: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
}

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
  const [dropdownKey, setDropdownKey] = useState<string>('')
  const [textfieldValue, setTextfieldValue] = useState<string>('')
  const handleInputsChange = (selectedKey: string, value: string | number) => {
    setDropdownKey(selectedKey)
    setTextfieldValue(toString(value))
  }
  useEffect(() => {
    setTimeout(() => {
      setDropdownKey('mr')
      setTextfieldValue('test')
    }, 1000)
  }, [])
  return (
    <>
      <div style={{...style}}>
        <h3>Default</h3>

        <DropdownTextfield
          options={dropdownOptions}
          inputType='text'
          onChange={handleInputsChange}
          label='Name'
          defaultInputValue={textfieldValue}
          defaultSelectedKey={dropdownKey}
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
      </div>
      <div style={{...styleRow}}>
        <div style={{...style}}>
          <h3>Min length</h3>

          <DropdownTextfield
            options={phoneDropdownOptions}
            inputType='text'
            onChange={handleInputsChange}
            label='Enter your mobile number'
            minLength={5}
            placeholder='Min length of 5'
          />
        </div>
        <div style={{...style}}>
          <h3>Max length</h3>

          <DropdownTextfield
            options={phoneDropdownOptions}
            inputType='text'
            onChange={handleInputsChange}
            label='Enter your mobile number'
            maxLength={10}
            placeholder='Max length of 10'
          />
        </div>
      </div>
    </>
  )
}

export const H5Form: React.FC = () => {
  return (
    <div style={{...style}}>
      <h4>Your Information</h4>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <DropdownTextfield
          options={dropdownOptions}
          inputType='text'
          label='Name'
          h5
          dropdownPlaceholder='Select gender'
          textfieldPlaceholder='Enter name'
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

      <h4>Your Information</h4>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <Dropdown.Select h5 label='Feedback' defaultSelectedKey={'General'}>
          <Dropdown.Item key={'General'}>General</Dropdown.Item>
        </Dropdown.Select>
        <TextField placeholder='Enter trip number' h5 />
        <Textarea
          variant='h5'
          placeholder='Type your feedback here'
          resizable={false}
          wordCount
          maxLength={200}
          label={'Details'}
        />
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/Dropdown Textfield',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
