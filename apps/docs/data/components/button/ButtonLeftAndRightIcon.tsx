import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'
import {faThumbsUp, faVirus} from '@fortawesome/free-solid-svg-icons'

export default function ButtonLeftAndRight() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button
        variant='secondary'
        rightIcon={<Icon icon={faThumbsUp} />}
        leftIcon={<Icon icon={faVirus} />}
      >
        Secondary
      </Button>
      <Button
        variant='danger'
        rightIcon={<Icon icon={faThumbsUp} />}
        leftIcon={<Icon icon={faVirus} />}
      >
        Danger
      </Button>
      <Button
        variant='ghost'
        rightIcon={<Icon icon={faThumbsUp} />}
        leftIcon={<Icon icon={faVirus} />}
      >
        Ghost
      </Button>
    </Flexbox>
  )
}
