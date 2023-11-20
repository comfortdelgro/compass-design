import {Avatar, Icon, List} from '@comfortdelgro/react-compass-old'
// import {List as StaticList} from '@comfortdelgro/static'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

function DisabledExample() {
  return (
    <>
      <List
        isDisabled
        title='Title'
        description='Line 1'
        leftInfo={<Avatar label='A' />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />

      {/* <StaticList
        isDisabled
        title='Title'
        description='Line 1'
        leftInfo={<Avatar label='A' />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      /> */}
    </>
  )
}

export default DisabledExample
