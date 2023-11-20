import Radio from '@comfortdelgro/react-compass-old/radio'
import React from 'react'

function RadioControlled() {
  const [value, setValue] = React.useState('1')
  return (
    <div>
      <Radio.Group
        value={value}
        onChange={(value) => {
          console.log('onChange')
          setValue(value)
        }}
        onBlur={() => {
          console.log('onBlur')
        }}
      >
        <Radio
          variant='simple'
          label='test'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
        />
        <Radio
          variant='simple'
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
        <Radio
          variant='simple'
          label='test3'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='3'
          isDisabled
        />
      </Radio.Group>
    </div>
  )
}

export default RadioControlled
