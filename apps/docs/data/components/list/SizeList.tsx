import {Icon, List} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'

function SizeExample() {
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
        size='sm'
        leftInfo={<Icon icon={faBug} />}
        title='Title'
        description='Lorem Ipsum'
        css={{maxWidth: '198px'}}
      />
      <List
        size='sm'
        isDisabled
        leftInfo={<Icon icon={faBug} />}
        title='Title'
        description='Lorem Ipsum'
        css={{maxWidth: '198px'}}
      />
    </div>
  )
}

export default SizeExample
