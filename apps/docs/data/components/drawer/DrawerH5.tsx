import {
  Box,
  Button,
  Column,
  Divider,
  Drawer,
  Icon,
  List,
  Modal,
  Radio,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import {
  faChevronDown,
  faChevronRight,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState} from 'react'

const imgSrc =
  'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

export default function DrawerH5Docs() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openReasonDrawer, setOpenReasonDrawer] = useState(false)

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
        <List.Image variant='h5' isRounded src={imgSrc} alt='singapore' />
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
      <Typography.Header variant='header4'>Default</Typography.Header>
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

      <Divider />

      <Typography.Header variant='header4'>
        With Modal and controlled by a <code>{'<Dropdown />'}</code>
      </Typography.Header>
      <Row css={{marginBlock: '$4'}}>
        <Button
          type='button'
          variant='secondary'
          onClick={() => setOpenModal(true)}
        >
          Modal & H5 Drawer
        </Button>
      </Row>

      <Modal.Trigger
        isOpen={openModal}
        size='sm'
        handleClose={() => setOpenModal(false)}
      >
        <Modal>
          <Modal.Description css={{display: 'flex', flexDirection: 'column'}}>
            <Typography.Label variant='label1' css={{textAlign: 'center'}}>
              Trip is cancelled. No Payment is required.
            </Typography.Label>
            <Dropdown onClickDropdown={() => setOpenReasonDrawer(true)} />
            <Button type='button' variant='primary' h5>
              Submit
            </Button>
          </Modal.Description>
        </Modal>
      </Modal.Trigger>

      <Drawer
        open={openReasonDrawer}
        css={{height: '40dvh', '& .drawer-content': {padding: 0}}}
        onClose={() => setOpenReasonDrawer(false)}
        variant='h5'
        disableResize
      >
        <Typography.Body
          variant='body2'
          css={{textAlign: 'center', paddingBlock: '$4'}}
        >
          Select Reason
        </Typography.Body>

        <Column>
          <Radio.Group orientation='vertical'>
            <Radio
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              value='1'
              css={{width: '100%'}}
            />
            <Radio
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              value='2'
              css={{width: '100%'}}
            />
          </Radio.Group>
        </Column>
      </Drawer>
    </Column>
  )
}

const Dropdown = ({
  idSelected = 0,
  onClickDropdown,
}: {
  idSelected?: number
  onClickDropdown: () => void
}) => {
  return (
    <Box
      as='button'
      onClick={onClickDropdown}
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 16px',
        border: '1px solid #E6E6E6',
        margin: '$6 0',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <Typography.Label css={{cursor: 'pointer'}}>
        Reason for cancel{' '}
      </Typography.Label>
      <Icon icon={faChevronDown} color='#757575' />
    </Box>
  )
}
