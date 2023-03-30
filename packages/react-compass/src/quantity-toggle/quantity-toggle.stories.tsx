import React, {useState} from 'react'
import {Column} from '../utils/components'
import QuantityToggle from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = useState(0)
  return (
    <Column>
      <h3>Controlled</h3>
      <QuantityToggle
        label='Potato price'
        placeholder='Price'
        onChange={(v) => console.log(v)}
        formatOptions={{
          prefix: '$',
          toFixed: 2,
        }}
      />
      <h3>Un Controlled</h3>
      <QuantityToggle
        label='Potato price'
        isRequired
        placeholder='Price'
        value={value}
        onChange={(e) => setValue(e)}
        formatOptions={{
          prefix: '$',
          // toFixed: 2,
        }}
      />
      <h3>Disabled</h3>
      <QuantityToggle
        label='Potato price'
        defaultValue={2}
        isDisabled
        helperText='This is helper text'
      />
      <h3>Errored</h3>
      <QuantityToggle
        label='Potato price'
        defaultValue={2}
        isErrored
        helperText='This is helper text'
        errorMessage='This is error message'
      />
    </Column>
  )
}
