import {
  Button,
  Column,
  Drawer,
  List,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import ListImage from '@comfortdelgro/react-compass/list/list-image'
import {faChevronRight, faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState} from 'react'

const imgSrc =
  'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

export default function DrawerH5Docs() {
  const [openDrawer, setOpenDrawer] = useState(false)

  const renderDemoList = Array.from(Array(10).keys()).map((id) => (
    <List
      key={id}
      title={`ComfortRIDE ${id}`}
      description='Car or Taxi, Flat Fare'
      descriptionIcon={
        id % 2 === 1 ? (
          <FontAwesomeIcon
            style={{width: 14, height: 14, color: '#0142AF'}}
            icon={faFaceSmile}
          />
        ) : undefined
      }
      variant='h5'
      leftInfo={
        <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
      }
      rightInfo={{
        text: '$9.90',
        description: 'Fees may apply',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
      }}
      onClick={() => console.log('Ride selected:', id)}
    />
  ))

  return (
    <Column>
      <Row css={{marginBlock: '$4'}}>
        <Button type='button' onClick={() => setOpenDrawer(true)}>
          Open H5 Drawer
        </Button>
      </Row>

      <Drawer
        open={openDrawer}
        css={{height: '40dvh', '& .drawer-content': {padding: 0}}}
        onClose={() => setOpenDrawer(false)}
        variant='h5'
      >
        <Typography.Body
          variant='body2'
          css={{textAlign: 'center', paddingBlock: '$4'}}
        >
          Pull up for more rides
        </Typography.Body>

        <Column>{renderDemoList}</Column>
      </Drawer>
    </Column>
  )
}
