import {Badge, Flexbox} from '@comfortdelgro/react-compass'

function BadgeVariants() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Badge label='Primary' color='danger' variant='primary' />
      <Badge label='Secondary' color='danger' variant='secondary' />
      <Badge label='Outline' color='danger' variant='outline' />
    </Flexbox>
  )
}

export default BadgeVariants
