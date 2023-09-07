import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

export default function ButtonWithRightIcon() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button variant='secondary' rightIcon={<Icon icon={faThumbsUp} />}>
        Secondary
      </Button>
      <Button variant='danger' rightIcon={<Icon icon={faThumbsUp} />}>
        Danger
      </Button>
      <Button variant='ghost' rightIcon={<Icon icon={faThumbsUp} />}>
        Ghost
      </Button>
    </Flexbox>
  )
}
