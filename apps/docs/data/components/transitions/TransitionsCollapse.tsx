import {Toggle, Transitions} from '@comfortdelgro/react-compass'
import React from 'react'

const Collapse: React.FC = () => {
  const [show, setShow] = React.useState(false)

  const style: React.CSSProperties = {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10rem',
    width: '10rem',
    backgroundColor: '#ADD8E6',
    borderRadius: '0.5rem',
    border: '1px solid black',
    fontWeight: '600',
    padding: '4px',
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <h4>Click here to show and hide the transitions:</h4>
        <Toggle size='sm' onChange={(status) => setShow(status)} />
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>
        <div style={{height: '10rem', width: '10rem'}}>
          <Transitions effect='collapse' show={show}>
            <div style={style}>Basic</div>
          </Transitions>
        </div>
        <div style={{height: '10rem', width: '10rem'}}>
          <Transitions effect='collapse' show={show} speed={2}>
            <div style={style}>Custom Speed: 2s</div>
          </Transitions>
        </div>
        <div style={{height: '10rem', width: '10rem'}}>
          <Transitions effect='collapse' show={show} collapsedSize='100px'>
            <div style={{...style, alignItems: 'flex-start'}}>
              Custom Collapsed Size: 100px. Default is 1000px
            </div>
          </Transitions>
        </div>
        <div style={{height: '10rem', width: '10rem'}}>
          <Transitions effect='collapse' show={show} orientation='horizontal'>
            <div style={style}>Horizontal</div>
          </Transitions>
        </div>
      </div>
    </>
  )
}

export default Collapse
