import {QuantityToggle} from '@comfortdelgro/react-compass'

function QuantityToggleUnControlled() {
  return (
    <QuantityToggle
      label='Transaction amount'
      defaultValue={45}
      formatOptions={{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code',
        currencySign: 'accounting',
      }}
    />
  )
}

export default QuantityToggleUnControlled
