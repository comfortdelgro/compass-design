import {Avatar, Icon, List} from '@comfortdelgro/react-compass-old'
// import {List as StaticList} from '@comfortdelgro/static'
import {faBug, faChevronRight} from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
      }}
    >
      <List
        title='Title'
        description='Line 1'
        leftInfo={<Avatar label='A' />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />
      <List
        title='Title'
        description='Line 1'
        leftInfo={
          <List.Image
            src={
              'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            alt='singapore'
          />
        }
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />
      <List
        title='Title'
        description='Line 1'
        leftInfo={<Icon icon={faBug} />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />

      {/* <StaticList
        title='Title'
        description='Line 1'
        leftInfo={<Avatar label='A' />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />
      <StaticList
        title='Title'
        description='Line 1'
        leftInfo={
          <StaticList.Image
            src={
              'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            alt='singapore'
          />
        }
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />
      <StaticList
        title='Title'
        description='Line 1'
        leftInfo={<Icon icon={faBug} />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      /> */}
    </div>
  )
}

export default BasicExample
