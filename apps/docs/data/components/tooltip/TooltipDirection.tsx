import {
  Button,
  Placement,
  Tooltip,
  TooltipTrigger,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'

const Placements: React.FC = () => {
  const placements: Placement[] = [
    'bottom',
    'bottom-end',
    'bottom-start',
    'left',
    'left-end',
    'left-start',
    'right',
    'right-end',
    'right-start',
    'top',
    'top-end',
    'top-start',
  ]
  const [currentPlacement, setCurrentPlacement] = useState<Placement>('bottom')

  return (
    <>
      <h3>Select direction for testing</h3>
      <select
        onChange={(e) => {
          setCurrentPlacement(e.target.value as Placement)
        }}
      >
        {placements.map((placement) => {
          return (
            <option key={placement} value={placement}>
              {placement}
            </option>
          )
        })}
      </select>
      <div
        style={{
          height: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TooltipTrigger placement={currentPlacement}>
          <Button>Button</Button>
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
export default Placements
