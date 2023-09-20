import {Button, Tooltip, TooltipTrigger} from '@comfortdelgro/react-compass'
import {useState} from 'react'

const Offset: React.FC = () => {
  const [crossAxis, setCrossAxis] = useState(0)
  const [mainAxis, setMainAxis] = useState(0)

  return (
    <>
      <h3>Offset</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label htmlFor='cross-axis'>Cross Axis</label>
          <input
            id='cross-axis'
            type='number'
            placeholder='Cross Axis'
            defaultValue={0}
            onChange={(e) => {
              setCrossAxis(parseInt(e.target.value))
            }}
          ></input>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label htmlFor='main-axis'>Main Axis</label>
          <input
            id='main-axis'
            type='number'
            placeholder='Main Axis'
            defaultValue={0}
            onChange={(e) => {
              setMainAxis(parseInt(e.target.value))
            }}
          ></input>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TooltipTrigger offset={{crossAxis: crossAxis, mainAxis: mainAxis}}>
          <Button>Trigger</Button>
          <Tooltip title='Title' dismissible>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quam ullam amet est rerum in enim doloribus laborum beatae veniam
            corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
            Tempora, sit?
          </Tooltip>
        </TooltipTrigger>
      </div>
    </>
  )
}

export default Offset
