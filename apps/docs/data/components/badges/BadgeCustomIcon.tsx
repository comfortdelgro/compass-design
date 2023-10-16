import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import {Badge, Flexbox} from '@comfortdelgro/react-compass'

function BadgeIcon() {
  return (
    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>
      <Badge
        label='LGTM'
        color='success'
        variant='secondary'
        icon={<BugIcon />}
      />
      <Badge
        label='Practice Social Distancing'
        color='danger'
        variant='outline'
        icon={<BugIcon />}
      />
    </Flexbox>
  )
}

export default BadgeIcon
