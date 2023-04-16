import {Story} from '@ladle/react'
import {useState} from 'react'
import {Column, Row} from '../utils/components'
import Checkbox from './index'

export const Variants: Story<{onChange: () => void}> = () => (
  <Column>
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
    </Column>

    <h3>Rounded</h3>
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

    <h3>Without Labels</h3>
    <Column>
      <Row>
        <Checkbox />
        <Checkbox defaultSelected />
        <Checkbox isDisabled />
        <Checkbox defaultSelected isDisabled />
        <Checkbox isIndeterminate defaultSelected />
        <Checkbox isIndeterminate isDisabled defaultSelected />
      </Row>
      <Row>
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
  </Column>
)

export const State: Story<{onChange: () => void}> = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Column>
      <h3>Usage with state management</h3>

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

State.argTypes = {
  onChange: {
    action: 'changed',
  },
}
