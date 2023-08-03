import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

export default function ButtonWithLeftIcon() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button variant='secondary' leftIcon={<Icon icon={faThumbsUp} />}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={<Icon icon={faThumbsUp} />}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={<Icon icon={faThumbsUp} />}>
        Ghost
      </Button>
    </Flexbox>
  )
}
