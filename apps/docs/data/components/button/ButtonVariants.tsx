import {Button, Flexbox} from '@comfortdelgro/react-compass-old'

export default function ButtonVariants() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isDisabled>Disabled</Button>
    </Flexbox>
  )
}
