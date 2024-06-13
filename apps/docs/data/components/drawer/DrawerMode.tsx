import {
  Button,
  Column,
  Drawer,
  Link,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function DrawerModeDocs() {
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false)

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
    </Column>
  )
}
