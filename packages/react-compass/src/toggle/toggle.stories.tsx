import React from 'react'
import {Column, Row} from '../utils/components'
import Toggle from './index'

export const Variants: React.FC = () => (
  <Column>
    <h3>Small</h3>
    <Row>
      <Toggle size='sm' />
      <Toggle size='sm' defaultSelected />
      <Toggle size='sm' isDisabled />
      <Toggle size='sm' defaultSelected isDisabled />
    </Row>
    <h3>Large</h3>
    <Row>
      <Toggle size='lg' />
      <Toggle size='lg' defaultSelected />
      <Toggle size='lg' isDisabled />
      <Toggle size='lg' defaultSelected isDisabled />
    </Row>
  </Column>
)

export const State: React.FC = () => {
  const [value, setValue] = React.useState<boolean>(true)

  return (
    <Column>
      <h3>Controlled</h3>
      <Toggle
        size='lg'
        isSelected={value}
        onChange={(value) => {
          console.log('value', value)
          setValue(value)
        }}
      />

      <h3>UnControlled</h3>
      <Toggle size='lg' defaultSelected={true} />

      <h3>Disabled</h3>
      <Toggle size='lg' isDisabled />

      <h3>ReadOnly</h3>
      <Toggle size='lg' isReadOnly />

      <h3>Required</h3>
      <Toggle size='lg' isRequired />
    </Column>
  )
}
