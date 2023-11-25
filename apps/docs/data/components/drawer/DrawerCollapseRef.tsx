import {
  Button,
  Column,
  Drawer,
  DrawerRef,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import {useRef, useState} from 'react'

export default function DrawerCollapseRefDocs() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const drawerRef = useRef<DrawerRef>(null)

  return (
    <Column>
      <Typography.Header variant='header4'>1. Use ref</Typography.Header>
      <Typography.Body
        variant='body2'
        css={{'&>code': {fontFamily: '$mono', fontWeight: '$semibold'}}}
      >
        Use <code>ref</code> to call the Drawer's <code>triggerCollapse</code>{' '}
        function
      </Typography.Body>
      <Row css={{marginBlock: '$4'}}>
        <Button type='button' onClick={() => setOpenDrawer(true)}>
          Open H5 Drawer
        </Button>
      </Row>

      <Drawer
        ref={drawerRef}
        open={openDrawer}
        variant='h5'
        onExpandChange={(isExpanded) => setIsExpanded(isExpanded)}
        onHeightChange={(height) => console.log('height', height)}
        onClose={() => setOpenDrawer(false)}
      >
        <Drawer.Header>
          Get drawer's parameters and collapse it programmatically
        </Drawer.Header>

        <Button
          css={{marginTop: '$4'}}
          type='button'
          onClick={() => drawerRef.current?.triggerCollapse()}
        >
          Collapse this drawer
        </Button>
      </Drawer>
    </Column>
  )
}
