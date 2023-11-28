import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

export default function ButtonLoading() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button variant='secondary' loading>
        Secondary
      </Button>
      <Button variant='danger' loading rightIcon={<Icon icon={faThumbsUp} />}>
        Danger
      </Button>
      <Button variant='ghost' loading rightIcon={<Icon icon={faThumbsUp} />}>
        Ghost
      </Button>
    </Flexbox>
  )
}
