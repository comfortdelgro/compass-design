import ArrowLeft from '@comfortdelgro/compass-icons/react/arrow-left'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import {
  Button,
  Column,
  Drawer,
  DrawerProps,
  Row,
} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

export default function DrawerPositionDocs() {
  const [openDrawerPosition, setOpenDrawerPosition] = useState(false)
  const [drawerPosition, setDrawerPosition] =
    useState<DrawerProps['position']>(undefined)

  const handleChangePosition = (position: DrawerProps['position']) => {
    setDrawerPosition(position)
    setOpenDrawerPosition(true)
  }

  const handleCloseDrawer = () => {
    setOpenDrawerPosition(false)
  }

  return (
    <Column>
      <Row>
        <Button
          type='button'
          leftIcon={<ArrowLeft />}
          onClick={() => handleChangePosition('left')}
        >
          Open on the left
        </Button>

        <Button
          variant='secondary'
          type='button'
          onClick={() => handleChangePosition('bottom')}
        >
          Open on the bottom
        </Button>

        <Button
          type='button'
          rightIcon={<ArrowRight />}
          onClick={() => handleChangePosition('right')}
        >
          Open on the right
        </Button>
      </Row>

      <Drawer
        open={openDrawerPosition}
        onClose={handleCloseDrawer}
        position={drawerPosition}
      >
        <Drawer.Header>
          <h2>Drawer {drawerPosition || ''}</h2>
        </Drawer.Header>

        <p>Article contents</p>

        <Button type='button' onClick={handleCloseDrawer}>
          Close Drawer
        </Button>
      </Drawer>
    </Column>
  )
}
