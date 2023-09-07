import {
  Button,
  Column,
  Drawer,
  Modal,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function DrawerModeDocs() {
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  return (
    <Column>
      <Row>
        <Button
          type='button'
          variant='secondary'
          onClick={() => setOpenNonModalDrawer(!openNonModalDrawer)}
        >
          Toggle Non-modal Drawer
        </Button>
      </Row>

      <Drawer
        open={openNonModalDrawer}
        css={{height: '30dvh'}}
        expanderCSS={{
          background: '$blueShades100',
          paddingBlock: '$2 $6',
        }}
        onClose={() => setOpenNonModalDrawer(false)}
        variant='h5'
        expandedPoint={70}
        expandableLine={60}
        drawerMode='non-modal'
      >
        <Drawer.Header
          css={{
            display: 'flex',
            paddingTop: 0,
            gap: '$2',
            justifyContent: 'space-between',
            backgroundColor: '$blueShades100',
          }}
        >
          <Typography.Body
            variant='body3'
            weight='semibold'
            css={{color: '$grayShades10', width: 'fit-content'}}
          >
            Your ride is on the way
          </Typography.Body>
          <Typography.Body
            variant='body3'
            weight='semibold'
            css={{color: '$grayShades10', width: 'fit-content'}}
          >
            Arriving in 8 - 10 min
          </Typography.Body>
        </Drawer.Header>

        <Typography.Body variant='body3' css={{marginBlock: '$4'}}>
          To close this drawer:
          <br />
          <strong>Drag to bottom</strong> ⏬ of the screen or{' '}
          <strong>confirm</strong> the modal that opened by button below or
          <br /> just <strong>tap</strong> on the button that open it (the{' '}
          <q>Toggle Non-modal Drawer</q> button).
        </Typography.Body>

        <Button
          type='button'
          variant='secondary'
          onClick={() => setOpenConfirmModal(true)}
        >
          Open confirm modal
        </Button>

        <Modal.Trigger
          isOpen={openConfirmModal}
          handleClose={() => setOpenConfirmModal(false)}
        >
          <Modal css={{display: 'flex', flexDirection: 'column'}}>
            <Modal.Title>Please confirm</Modal.Title>
            <Modal.Description css={{flex: 1}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias reprehenderit animi ducimus facere perspiciatis, quod
              deserunt, necessitatibus voluptatibus ipsam harum rerum cumque,
              vero tempore ipsum praesentium quas veniam expedita magnam.
            </Modal.Description>
            <Modal.Actions>
              <Button
                variant='ghost'
                onClick={() => setOpenConfirmModal(false)}
                css={{marginRight: '4px'}}
              >
                Cancel
              </Button>
              <Button
                variant='danger'
                onClick={() => {
                  setOpenConfirmModal(false)
                  setOpenNonModalDrawer(false)
                }}
              >
                Proceed
              </Button>
            </Modal.Actions>
          </Modal>
        </Modal.Trigger>
      </Drawer>
    </Column>
  )
}
