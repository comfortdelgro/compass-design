import React, {useState} from 'react'
import {Column, Row} from '../utils/components'
import Radio from './index'
import RadioGroup from './radio-group'

export const Variants: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('option1')

  const handleRadioChange = (value: string) => {
    setSelectedValue(value)
  }
  return (
    <Column>
      <h3>Outlined</h3>
      <Row>
        <RadioGroup
          name='myRadioGroup'
          value={selectedValue}
          onChange={handleRadioChange}
        >
          <Radio
            title='Option 1'
            value='option1'
            description='Option 1 description'
            rightLabel='Right label'
            tooltip='Tooltip 1'
          />
          <Radio
            title='Option 2'
            value='option2'
            description='Option 2 description'
            rightLabel='Right label'
            tooltip='Tooltip 2'
          />
          <Radio
            title='Option 3'
            value='option3'
            description='Option 3 description'
            rightLabel='Right label'
            tooltip='Tooltip 3'
          />
        </RadioGroup>
      </Row>
    </Column>
  )
}
