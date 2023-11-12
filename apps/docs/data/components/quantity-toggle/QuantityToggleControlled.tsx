import {QuantityToggle} from '@comfortdelgro/react-compass-old'
// import {QuantityToggle as StaticsQuantityToggle} from '@comfortdelgro/static'
import {useState} from 'react'

function QuantityToggleControlled() {
  const [value, setValue] = useState(0)
  return (
    <>
      <QuantityToggle
        placeholder='Price'
        label='Potato Price'
        value={value}
        onChange={(e) => setValue(e)}
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
        onUpdate={(value, number) => {
          console.log('onUpdate value', value)
          console.log('onUpdate number', number)
        }}
      />
      {/* <StaticsQuantityToggle
        placeholder='Price'
        label='Potato Price'
        value={value}
        onChange={(e) => setValue(e)}
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
        onUpdate={(value, number) => {
          console.log('onUpdate value', value)
          console.log('onUpdate number', number)
        }}
      /> */}
    </>
  )
}

export default QuantityToggleControlled
