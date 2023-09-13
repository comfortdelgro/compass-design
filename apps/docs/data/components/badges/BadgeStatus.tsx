import Tick from '@comfortdelgro/compass-icons/react/tick'
import {Badge, Flexbox} from '@comfortdelgro/react-compass'
function BadgeIcon() {
  return (
    <>
      <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
        <Badge status='online' variant='rounded' statusSize='8' />
        <Badge
          status='online'
          variant='rounded'
          statusSize='12'
          icon={<Tick />}
        />
        <Badge
          status='online'
          variant='rounded'
          statusSize='16'
          icon={<Tick />}
        />
        <Badge
          status='online'
          variant='rounded'
          statusSize='20'
          icon={<Tick />}
        />
        <Badge
          status='online'
          variant='rounded'
          statusSize='24'
          icon={<Tick />}
        />
        <Badge
          status='online'
          variant='rounded'
          statusSize='28'
          icon={<Tick />}
        />
      </Flexbox>
    </>
  )
}

export default BadgeIcon
