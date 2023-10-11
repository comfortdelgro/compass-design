import {Checkbox, Column} from '@comfortdelgro/react-compass'
// import {Checkbox as StaticCheckbox} from '@comfortdelgro/static'
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

      {/* <StaticCheckbox
        isSelected={isSelected}
        onChange={() => setIsSelected(!isSelected)}
      >
        {isSelected ? 'Selected' : 'Unselected'}
      </StaticCheckbox> */}
    </Column>
  )
}
export default Basic
