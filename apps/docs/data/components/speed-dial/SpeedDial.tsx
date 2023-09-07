import {SpeedDial} from '@comfortdelgro/react-compass'

function SpeedDialExample() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div>
        <SpeedDial
          css={{
            position: 'relative',
            height: '200px',
          }}
          actions={[
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
          ]}
          position='up'
        />
      </div>
    </div>
  )
}

export default SpeedDialExample
