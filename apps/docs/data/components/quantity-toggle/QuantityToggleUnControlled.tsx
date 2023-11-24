import {QuantityToggle} from '@comfortdelgro/react-compass'

function QuantityToggleUnControlled() {
  return (
    <QuantityToggle
      label='Step + minValue + maxValue'
      minValue={2}
      maxValue={21}
      step={3}
    />
  )
}

export default QuantityToggleUnControlled
