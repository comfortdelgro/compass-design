import {Button, Flexbox} from '@comfortdelgro/react-compass-old'

export default function ButtonSize() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium (Default)</Button>
      <Button size='sm'>Small</Button>
    </Flexbox>
  )
}
