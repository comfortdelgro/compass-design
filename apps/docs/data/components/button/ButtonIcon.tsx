import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass-old'
import {faVirus} from '@fortawesome/free-solid-svg-icons'

export default function ButtonIcon() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button variant='secondary'>
        <Icon icon={faVirus} />
      </Button>
      <Button variant='danger'>
        <Icon icon={faVirus} />
      </Button>
      <Button variant='ghost'>
        <Icon icon={faVirus} />
      </Button>
    </Flexbox>
  )
}
