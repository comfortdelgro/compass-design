import React from 'react'
import Card from '../card'
import ConfirmPUPoint from './confirm-pickup'

export const Default = () => {
  const initialPickupPoint = {
    name: 'Comfort Building',
    address: '383 Sin Ming Drive',
    city: 'Singapore',
    street: '',
    postalCode: '575717',
    specificPUPoint: 'Comfort Transporation Lobby',
  }

  return (
    <Card css={{backgroundColor: 'lightgray', width: '400px', padding: '10px'}}>
      <ConfirmPUPoint
        pickupPoint={initialPickupPoint}
        onConfirmPickup={(pickupPoint) => {
          console.log(pickupPoint)
        }}
        onChangePUPoint={() => {}}
      />
    </Card>
  )
}
export const WithoutSpecificPUPoint = () => {
  const initialPickupPoint = {
    name: 'Comfort Building',
    address: '383 Sin Ming Drive',
    city: 'Singapore',
    street: '',
    postalCode: '575717',
    specificPUPoint: '',
  }

  return (
    <Card css={{backgroundColor: 'lightgray', width: '400px', padding: '10px'}}>
      <ConfirmPUPoint
        pickupPoint={initialPickupPoint}
        onConfirmPickup={(pickupPoint) => {
          console.log(pickupPoint)
        }}
      />
    </Card>
  )
}
