import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import React from 'react'
import Calendar from '../calendar'
import DatePicker from '../date-picker'
import Dropdown from '../dropdown'
import MultipleDropdown from '../multiple-dropdown'
import Textarea from '../textarea'
import Textfield from '../textfield'
import Toggle from '../toggle'
import {Column, Row} from '../utils'

const {getLocalTimeZone, today} = Calendar.InternationalizedDate

export const Variants: React.FC = () => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [isRequired, setIsRequired] = React.useState(false)
  const [isErrored, setIsErrored] = React.useState(false)
  const [isReadonly, setIsReadonly] = React.useState(false)
  return (
    <Column>
      <h4>State Controller</h4>

      <Column css={{marginBottom: 50}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <span style={{width: 100}}>isDisabled</span>
          <Toggle
            size='sm'
            value={isDisabled.toString()}
            onChange={setIsDisabled}
          />
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <span style={{width: 100}}>isRequired</span>
          <Toggle
            size='sm'
            value={isRequired.toString()}
            onChange={setIsRequired}
          />
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <span style={{width: 100}}>isErrored</span>
          <Toggle
            size='sm'
            value={isErrored.toString()}
            onChange={setIsErrored}
          />
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <span style={{width: 100}}>isReadonly</span>
          <Toggle
            size='sm'
            value={isReadonly.toString()}
            onChange={setIsReadonly}
          />
        </div>
      </Column>

      <Row css={{alignItems: 'start'}}>
        <Textfield
          label='Textfield'
          placeholder='Enter your name'
          isErrored={isErrored}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isReadOnly={isReadonly}
          errorMessage={'My error message'}
          onChange={(e) => console.log('onChange', e)}
          onChangeEvent={(e) => console.log('onChangeEvent', e)}
        />
        <Dropdown.Select
          label='Dropdown.Select'
          placeholder='Choose an animal'
          isErrored={isErrored}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isReadOnly={isReadonly}
          errorMessage={'My error message'}
          onBlur={() => console.log('onBlur')}
          onFocus={() => console.log('onFocus')}
        >
          <Dropdown.Item
            key='red panda'
            leftIcon={<BugIcon />}
            textValue='pandared'
          >
            Red Panda
          </Dropdown.Item>
          <Dropdown.Item key='cat' type='color' rightColor='red'>
            Cat
          </Dropdown.Item>
          <Dropdown.Item key='dog'>Dog</Dropdown.Item>
          <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item key='snake'>Snake</Dropdown.Item>
        </Dropdown.Select>
      </Row>

      <Row css={{alignItems: 'start'}}>
        <MultipleDropdown
          label='MultipleDropdown'
          placeholder='Choose an animal'
          isErrored={isErrored}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isReadOnly={isReadonly}
          errorMessage={'My error message'}
          onBlur={() => console.log('')}
        >
          <MultipleDropdown.Item key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
          <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
          <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
          <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
          <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
        </MultipleDropdown>
        <Dropdown.ComboBox
          label='Dropdown.ComboBox'
          placeholder='Choose an animal'
          isErrored={isErrored}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isReadOnly={isReadonly}
          errorMessage={'My error message'}
          onBlur={() => console.log('onBlur')}
          onFocus={() => console.log('onFocus')}
        >
          <Dropdown.Item
            key='red panda'
            leftIcon={<BugIcon />}
            textValue='pandared'
          >
            Red Panda
          </Dropdown.Item>
          <Dropdown.Item key='cat' type='color' rightColor='red'>
            Cat
          </Dropdown.Item>
          <Dropdown.Item key='dog'>Dog</Dropdown.Item>
          <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item key='snake'>Snake</Dropdown.Item>
        </Dropdown.ComboBox>
      </Row>

      <Row css={{alignItems: 'start'}}>
        <Textarea
          label='Textarea'
          placeholder='Enter your message'
          isErrored={isErrored}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isReadOnly={isReadonly}
          errorMessage={'My error message'}
          css={{
            width: '100%',
          }}
        />
        <DatePicker
          label='DatePicker'
          // isErrored={isErrored}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isReadOnly={isReadonly}
          errorMessage={'My error message'}
          defaultValue={today(getLocalTimeZone())}
          css={{
            width: '100%',
          }}
        />
      </Row>
    </Column>
  )
}
