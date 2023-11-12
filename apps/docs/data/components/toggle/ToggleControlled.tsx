import Toggle from '@comfortdelgro/react-compass-old/toggle'
import React from 'react'

function ToggleControlled() {
  const [value, setValue] = React.useState<boolean>(true)
  return (
    <div>
      <Toggle size='lg' isSelected={value} onChange={setValue} />
    </div>
  )
}

export default ToggleControlled
