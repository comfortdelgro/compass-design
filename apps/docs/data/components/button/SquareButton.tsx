import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'
import {faVirus} from '@fortawesome/free-solid-svg-icons'

export default function SquareButtons() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button variant='secondary' isSquare>
        <Icon icon={faVirus} />
      </Button>
      <Button variant='danger' isSquare>
        <Icon icon={faVirus} />
      </Button>
      <Button variant='ghost' isSquare>
        <Icon icon={faVirus} />
      </Button>
    </Flexbox>
  )
}
