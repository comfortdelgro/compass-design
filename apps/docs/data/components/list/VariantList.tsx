import {Avatar, Icon, List} from '@comfortdelgro/react-compass-old'
// import {List as StaticList} from '@comfortdelgro/static'
import {faBug, faChevronRight} from '@fortawesome/free-solid-svg-icons'

function VariantExample() {
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
        variant='item'
        description='Line 1'
        leftInfo={<Avatar label='A' />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />
      <List
        variant='item'
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
        variant='item'
        description='Line 1'
        leftInfo={<Icon icon={faBug} style={{width: '40px'}} />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />

      {/* <StaticList
        title='Title'
        variant='item'
        description='Line 1'
        leftInfo={<Avatar label='A' />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />
      <StaticList
        variant='item'
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
        variant='item'
        description='Line 1'
        leftInfo={<Icon icon={faBug} style={{width: '40px'}} />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      /> */}
    </div>
  )
}

export default VariantExample
