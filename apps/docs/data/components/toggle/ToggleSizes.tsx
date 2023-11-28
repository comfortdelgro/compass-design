import {Toggle} from '@comfortdelgro/react-compass'

function ToggleSizes() {
  return (
    <div>
      <h3>Small</h3>
      <Toggle size='sm' />
      <h3>Large</h3>
      <Toggle size='lg' isSelected={true} />
    </div>
  )
}

export default ToggleSizes
