import {Badge, Flexbox} from '@comfortdelgro/react-compass'

function BadgeIcon() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Badge label='Primary' color='info' variant='primary' icon />
      <Badge label='Success' color='success' variant='primary' icon />
      <Badge label='Secondary' color='danger' variant='secondary' icon />
      <Badge label='Outline' color='warning' variant='outline' icon />
    </Flexbox>
  )
}

export default BadgeIcon
