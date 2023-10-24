import {QuantityToggle} from '@comfortdelgro/react-compass'
// import {QuantityToggle as StaticsQuantityToggle} from '@comfortdelgro/static'

function QuantityToggleUnControlled() {
  return (
    <>
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
      {/* <StaticsQuantityToggle
        label='Transaction amount'
        defaultValue={45}
        formatOptions={{
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'code',
          currencySign: 'accounting',
        }}
      /> */}
    </>
  )
}

export default QuantityToggleUnControlled
