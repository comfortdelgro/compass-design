import {Checkbox, Column} from '@comfortdelgro/react-compass'
import React, {useState} from 'react'

const Basic: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Column>
      <Checkbox
        isSelected={isSelected}
        onChange={() => setIsSelected(!isSelected)}
      >
        {isSelected ? 'Selected' : 'Unselected'}
      </Checkbox>
    </Column>
  )
}
export default Basic
