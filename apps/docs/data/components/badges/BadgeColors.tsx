import {Badge, Flexbox} from '@comfortdelgro/react-compass-old'

function BadgeIcon() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Badge label='Info' color='info' />
      <Badge label='Success' color='success' />
      <Badge label='Danger' color='danger' />
      <Badge label='Warning' color='warning' />
    </Flexbox>
  )
}

export default BadgeIcon
