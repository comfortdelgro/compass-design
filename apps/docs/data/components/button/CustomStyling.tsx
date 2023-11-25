import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

export default function CustomStyling() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button
        variant='danger'
        rightIcon={<Icon icon={faThumbsUp} />}
        css={{'&:hover': {color: 'grey'}}}
      >
        Danger
      </Button>
    </Flexbox>
  )
}
