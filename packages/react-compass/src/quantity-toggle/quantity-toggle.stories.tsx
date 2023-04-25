import React, {useState} from 'react'
import {Column} from '../utils/components'
import QuantityToggle from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = useState(0)
  return (
    <Column>
      <h3>Controlled</h3>
      <QuantityToggle
        disableScroll={false}
        placeholder='Price'
        value={value}
        onChange={(e) => setValue(e)}
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
        onUpdate={(value, number) => {
          console.log('onUpdate value', value)
          console.log('onUpdate number', number)
        }}
      />
      <h3>Un-Controlled</h3>
      <QuantityToggle
        placeholder='Price'
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
      />
      <h3>Disabled</h3>
      <QuantityToggle defaultValue={2} isDisabled helperText='Bla Bla Bla' />
      <h3>Errored</h3>
      <QuantityToggle defaultValue={2} isErrored helperText='Bla Bla Bla' />
    </Column>
  )
}
