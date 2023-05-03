import React from 'react'
import SpeedDial from '../speed-dial/speed-dial'

export const SpeedDials: React.FC = () => {
  const actions = [
    {
      name: 'Action 1',
      icon: '+',
      onClick: () => console.log('Action 1 clicked'),
    },
    {
      name: 'Action 2',
      icon: '-',
      onClick: () => console.log('Action 2 clicked'),
    },
    // Add more actions as needed
  ]
  return (
    <div>
      {/* Render other content */}
      {/* Render the SpeedDial component with the actions prop */}
      <h1>Default:</h1>
      <SpeedDial actions={actions} position='up' />
    </div>
  )
}
