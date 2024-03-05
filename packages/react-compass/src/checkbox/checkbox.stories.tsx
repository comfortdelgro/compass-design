import type {Meta} from '@storybook/react'
import React, {useState} from 'react'
import Checkbox from './index'

export const Variants: React.FC = () => {
  return (
    <>
      <h3>1. Default</h3>
      <div>
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
      </div>

      <h3>2. Rounded</h3>
      <div>
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
      </div>

      <h3>3. Without Labels</h3>
      <div>
        <Checkbox />
        <Checkbox defaultSelected />
        <Checkbox isDisabled />
        <Checkbox defaultSelected isDisabled />
        <Checkbox isIndeterminate defaultSelected />
        <Checkbox isIndeterminate isDisabled defaultSelected />
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
      </div>

      <h3>4. HTML forms</h3>
      <div>
        <Checkbox name='newsletter' value='subscribe'>
          Subscribe
        </Checkbox>
      </div>
    </>
  )
}

export const Controlled = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Checkbox
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    >
      {isSelected ? 'Selected' : 'Unselected'}
    </Checkbox>
  )
}

export const Uncontrolled = () => {
  return <Checkbox defaultSelected>Checkbox</Checkbox>
}

export const H5Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <Checkbox
      isSelected={checked}
      variant='h5'
      onChange={() => setChecked(!checked)}
    >
      <b style={{fontSize: '16px', lineHeight: '24px'}}>
        I'm picking with/for a child below 1.35m
      </b>
    </Checkbox>
  )
}

const meta = {
  title: 'Example/Checkbox',
  component: Variants,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
} satisfies Meta<typeof Variants>

export default meta
