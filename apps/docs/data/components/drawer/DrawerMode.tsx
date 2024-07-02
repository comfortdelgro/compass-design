import {Button, Drawer, Link, Typography} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function DrawerModeDocs() {
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false)

  return (
    <>
      <Button
        variant={openNonModalDrawer ? 'danger' : 'secondary'}
        type='button'
        onClick={() => setOpenNonModalDrawer(!openNonModalDrawer)}
      >
        {openNonModalDrawer ? 'Close' : 'Open'} Non-modal Drawer
      </Button>

      <Drawer
        open={openNonModalDrawer}
        onClose={() => setOpenNonModalDrawer(false)}
        drawerMode='non-modal'
        style={{zIndex: 10}}
      >
        <Drawer.Header>
          <Typography.Header variant='header3'>
            Non-modal Drawer
          </Typography.Header>
        </Drawer.Header>

        <Typography.Body variant='body2'>
          <Link
            href='https://developer.mozilla.org/docs/Web/HTML/Element/dialog#accessibility'
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
    </>
  )
}
