import {Avatar, Icon, List} from '@comfortdelgro/react-compass'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

function DisabledExample() {
  return (
    <List
      isDisabled
      title='Title'
      description='Line 1'
      leftInfo={<Avatar label='A' />}
      rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
    />
  )
}

export default DisabledExample
