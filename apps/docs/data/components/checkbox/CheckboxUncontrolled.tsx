import {Checkbox, Column} from '@comfortdelgro/react-compass'
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
      </Column>
    </Column>
  )
}
export default Uncontrolled
