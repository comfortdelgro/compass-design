import {Story} from '@ladle/react'
import React, {useState} from 'react'
import {Column, Row} from '../utils/components'
import Checkbox from './index'

export const Variants: Story<{onChange: () => void}> = () => (
  <Column>
    <h3>1. Default</h3>
    <Column>
      <Checkbox isSelected={false}>Unselected</Checkbox>
      <Checkbox isSelected>Selected</Checkbox>
      <Checkbox isDisabled>Unselected (disabled)</Checkbox>
      <Checkbox isSelected isDisabled>
        Selected (disabled)
      </Checkbox>
      <Checkbox isIndeterminate isSelected>
        Indeterminate
      </Checkbox>
      <Checkbox isIndeterminate isDisabled isSelected>
        Indeterminate (disabled)
      </Checkbox>
      <Checkbox isSelected isReadOnly>
        Read only
      </Checkbox>
    </Column>

    <h3>2. Rounded</h3>
    <Column>
      <Checkbox variant='rounded' isSelected={false}>
        Unselected
      </Checkbox>
      <Checkbox variant='rounded' isSelected>
        Selected
      </Checkbox>
      <Checkbox variant='rounded' isDisabled>
        Unselected (disabled)
      </Checkbox>
      <Checkbox variant='rounded' isSelected isDisabled>
        Selected (disabled)
      </Checkbox>
      <Checkbox variant='rounded' isIndeterminate isSelected>
        Indeterminate
      </Checkbox>
      <Checkbox variant='rounded' isIndeterminate isDisabled isSelected>
        Indeterminate (disabled)
      </Checkbox>
    </Column>

    <h3>3. Without Labels</h3>
    <Column>
      <Row css={{gap: '1em'}}>
        <Checkbox />
        <Checkbox defaultSelected />
        <Checkbox isDisabled />
        <Checkbox defaultSelected isDisabled />
        <Checkbox isIndeterminate defaultSelected />
        <Checkbox isIndeterminate isDisabled defaultSelected />
      </Row>
      <Row css={{gap: '1em'}}>
        <Checkbox variant='rounded' />
        <Checkbox variant='rounded' defaultSelected />
        <Checkbox variant='rounded' isDisabled />
        <Checkbox variant='rounded' defaultSelected isDisabled />
        <Checkbox variant='rounded' isIndeterminate defaultSelected />
        <Checkbox
          variant='rounded'
          isIndeterminate
          isDisabled
          defaultSelected
        />
      </Row>
    </Column>

    <h3>4. HTML forms</h3>
    <Column>
      <Row>
        <Checkbox name='newsletter' value='subscribe'>
          Subscribe
        </Checkbox>
      </Row>
    </Column>
  </Column>
)

export const Controlled: Story<{onChange: () => void}> = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Column>
      <h3>Controlled</h3>

      <Column>
        <Checkbox
          isSelected={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        >
          {isSelected ? 'Selected' : 'Unselected'}
        </Checkbox>
      </Column>
    </Column>
  )
}

export const Uncontrolled: Story<{onChange: () => void}> = () => {
  return (
    <Column>
      <h3>Uncontrolled</h3>
      <Column>
        <Checkbox variant='rounded'>Unselected</Checkbox>
        <Checkbox variant='rounded' defaultSelected>
          Selected
        </Checkbox>
        <Checkbox variant='rounded' isDisabled>
          Unselected (disabled)
        </Checkbox>
        <Checkbox variant='rounded' defaultSelected isDisabled>
          Selected (disabled)
        </Checkbox>
        <Checkbox variant='rounded' isIndeterminate defaultSelected>
          Indeterminate
        </Checkbox>
        <Checkbox variant='rounded' isIndeterminate isDisabled defaultSelected>
          Indeterminate (disabled)
        </Checkbox>
      </Column>
    </Column>
  )
}
export const H5Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <Column>
      <h3>H5 Checkbox</h3>
      <Checkbox
        isSelected={checked}
        variant='h5'
        onChange={() => setChecked(!checked)}
      >
        <b style={{fontSize: '16px', lineHeight: '24px'}}>
          I'm picking with/for a child below 1.35m
        </b>
      </Checkbox>
    </Column>
  )
}
