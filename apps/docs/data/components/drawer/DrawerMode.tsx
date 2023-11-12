import {
  Button,
  Column,
  Drawer,
  Link,
  Modal,
  Row,
  Typography,
} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

export default function DrawerModeDocs() {
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false)
  const [openNonModalH5Drawer, setOpenNonModalH5Drawer] = useState(false)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  return (
    <Column>
      <Row>
        <Button
          type='button'
          onClick={() => setOpenNonModalDrawer(!openNonModalDrawer)}
        >
          Toggle Non-modal Drawer
        </Button>
      </Row>

      <Typography.Header css={{marginBlock: '$4 0'}} variant='header4'>
        H5 Drawer
      </Typography.Header>
      <Row>
        <Button
          type='button'
          variant='secondary'
          onClick={() => setOpenNonModalH5Drawer(!openNonModalH5Drawer)}
        >
          Toggle Non-modal H5 Drawer
        </Button>
      </Row>

      <Drawer
        open={openNonModalDrawer}
        onClose={() => setOpenNonModalDrawer(false)}
        drawerMode='non-modal'
      >
        <Drawer.Header>
          <Typography.Header variant='header3'>
            Non-modal Drawer
          </Typography.Header>
        </Drawer.Header>

        <Typography.Body variant='body2'>
          <Link
            href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations'
            target='_blank'
          >
            Read more
          </Link>{' '}
          about non-modal mode and related accessibility considerations.
        </Typography.Body>

        <Drawer.Footer>
          <Button
            type='button'
            variant='danger'
            onClick={() => setOpenNonModalDrawer(false)}
          >
            Close Drawer
          </Button>
        </Drawer.Footer>
      </Drawer>

      <Drawer
        open={openNonModalH5Drawer}
        css={{height: '30dvh'}}
        expanderCSS={{
          background: '$blueShades100',
          paddingBlock: '$2 $6',
        }}
        onClose={() => setOpenNonModalH5Drawer(false)}
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
            Drawer Header
          </Typography.Body>
          <Typography.Body
            variant='body3'
            weight='semibold'
            css={{color: '$grayShades10', width: 'fit-content'}}
          >
            Non-modal Mode
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
                  setOpenNonModalH5Drawer(false)
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
