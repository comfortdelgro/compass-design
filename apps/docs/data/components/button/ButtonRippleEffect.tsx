import {Button, Flexbox} from '@comfortdelgro/react-compass-old'

export default function ButtonRippleEffect() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button variant='primary' ripple>
        Primary
      </Button>
      <Button variant='secondary' ripple>
        Secondary
      </Button>
      <Button variant='danger' ripple>
        Danger
      </Button>
      <Button variant='ghost' ripple>
        Ghost
      </Button>
    </Flexbox>
  )
}
