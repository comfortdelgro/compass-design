import {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import Drawer from '../drawer'
import ConfirmPUPoint from './confirm-pickup'

const samplePickupPoint = {
  name: 'Comfort Building',
  address: '383 Sin Ming Drive',
  city: 'Singapore',
  street: '',
  postalCode: '575717',
  specificPUPoint: 'Comfort Transporation Lobby',
}
export const Variants = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  const [drawerNoPUOpen, setDrawerNoPUOpen] = React.useState<boolean>(false)
  return (
    <div style={{padding: '1rem'}}>
      <h4>Confirm PU Point with specific location</h4>
      <Button
        onPress={() => {
          setDrawerOpen(true)
        }}
      >
        Open Drawer
      </Button>

      <h4>Confirm PU Point without specific location</h4>
      <Button
        onPress={() => {
          setDrawerNoPUOpen(true)
        }}
      >
        Open Drawer
      </Button>

      <Drawer
        variant='h5'
        disableResize
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        css={{
          height: '35dvh',
        }}
      >
        <ConfirmPUPoint
          puPointTitle={samplePickupPoint.name}
          puPointDescription={`${samplePickupPoint.address}, ${samplePickupPoint.city} ${samplePickupPoint.postalCode}`}
          specificPUPoint={samplePickupPoint.specificPUPoint}
          onConfirmPickup={() => {
            alert('confirm the pickup point')
          }}
          onChangePUPoint={() => {
            alert('change the pickup point')
          }}
          css={{
            padding: 0,
            borderRadius: 0,
          }}
        />
      </Drawer>

      <Drawer
        variant='h5'
        disableResize
        open={drawerNoPUOpen}
        onClose={() => setDrawerNoPUOpen(false)}
        css={{
          height: '40dvh',
        }}
      >
        <ConfirmPUPoint
          puPointTitle={samplePickupPoint.name}
          puPointDescription={`${samplePickupPoint.address}, ${samplePickupPoint.city} ${samplePickupPoint.postalCode}`}
          specificPUPoint={''}
          onConfirmPickup={(pickupPoint) => {
            alert(`confirm the pickup point ${pickupPoint}`)
          }}
          onChangePUPoint={() => {
            alert('change the pickup point')
          }}
          placeholder='E.g. Lobby, side entrance, etc'
          css={{padding: 0, borderRadius: 0}}
        />
      </Drawer>
    </div>
  )
}

const meta: Meta<typeof Variants> = {
  title: 'Example/Confirm Pickup',
  tags: ['autodocs'],
  component: Variants,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
