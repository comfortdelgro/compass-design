import {Button, Tooltip, TooltipTrigger} from '@comfortdelgro/react-compass'
import {useState} from 'react'

const Delay: React.FC = () => {
  const [delayTime, setDelayTime] = useState(0)
  return (
    <>
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
          <label htmlFor='delay-time'>Delay Time (Ms)</label>
          <input
            id='delay-time'
            type='number'
            placeholder='Cross Axis'
            defaultValue={0}
            onChange={(e) => {
              setDelayTime(parseInt(e.target.value))
            }}
          ></input>
        </div>
      </div>
      <TooltipTrigger delay={delayTime}>
        <Button>Trigger</Button>
        <Tooltip title='Title' dismissible>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          quam ullam amet est rerum in enim doloribus laborum beatae veniam
          corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
          Tempora, sit?
        </Tooltip>
      </TooltipTrigger>
    </>
  )
}
export default Delay
