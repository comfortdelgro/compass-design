import {QuantityToggle} from '@comfortdelgro/react-compass-old'
// import {QuantityToggle as StaticsQuantityToggle} from '@comfortdelgro/static'

function QuantityToggleUnControlled() {
  return (
    <>
      <QuantityToggle
        label='Step + minValue + maxValue'
        minValue={2}
        maxValue={21}
        step={3}
      />
      {/* <StaticsQuantityToggle
        label='Step + minValue + maxValue'
        minValue={2}
        maxValue={21}
        step={3}
      /> */}
    </>
  )
}

export default QuantityToggleUnControlled
