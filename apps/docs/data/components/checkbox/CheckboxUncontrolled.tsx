import {Checkbox, Column} from '@comfortdelgro/react-compass-old'
// import {Checkbox as StaticCheckbox} from '@comfortdelgro/static'
import React from 'react'

const Uncontrolled: React.FC = () => {
  return (
    <Column>
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

        {/* <StaticCheckbox variant='rounded'>Unselected</StaticCheckbox>
        <StaticCheckbox variant='rounded' defaultSelected>
          Selected
        </StaticCheckbox>
        <StaticCheckbox variant='rounded' isDisabled>
          Unselected (disabled)
        </StaticCheckbox>
        <StaticCheckbox variant='rounded' defaultSelected isDisabled>
          Selected (disabled)
        </StaticCheckbox>
        <StaticCheckbox variant='rounded' isIndeterminate defaultSelected>
          Indeterminate
        </StaticCheckbox>
        <StaticCheckbox variant='rounded' isIndeterminate isDisabled defaultSelected>
          Indeterminate (disabled)
        </StaticCheckbox> */}
      </Column>
    </Column>
  )
}
export default Uncontrolled
