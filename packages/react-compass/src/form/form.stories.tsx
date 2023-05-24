import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import React from 'react'
import Calendar from '../calendar'
import DatePicker from '../date-picker'
import Dropdown from '../dropdown'
import MultipleDropdown from '../multiple-dropdown'
import Textarea from '../textarea'
import Textfield from '../textfield'
import {Column, Row} from '../utils'

const {getLocalTimeZone, today} = Calendar.InternationalizedDate

export const Variants: React.FC = () => {
  return (
    <Column>
      <Row>
        <Textfield
          label='Textfield'
          placeholder='Enter your name'
          // isErrored
          // helperText='my helper text'
          errorMessage='my error message'
          onChange={(e) => console.log('onChange', e)}
          onChangeEvent={(e) => console.log('onChangeEvent', e)}
        />
        <Dropdown.Select
          label='Dropdown.Select'
          placeholder='Choose an animal'
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
      <Row>
        <MultipleDropdown
          label='MultipleDropdown'
          placeholder='Choose an animal'
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
      <Row>
        <Textarea
          label='Textarea'
          placeholder='Enter your message'
          isRequired
        />
        <DatePicker
          label='DatePicker'
          defaultValue={today(getLocalTimeZone())}
        />
      </Row>
    </Column>
  )
}
