import ArrowLeft from '@comfortdelgro/compass-icons/react/arrow-left'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import {
  Button,
  Drawer,
  Row,
  type DrawerProps,
} from '@comfortdelgro/react-compass'
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
    <>
      <Button
        variant='secondary'
        type='button'
        onClick={() => handleChangePosition('top')}
        style={{display: 'block', marginInline: 'auto', marginBottom: '.5rem'}}
      >
        Open at the top
      </Button>

      <Row style={{justifyContent: 'center', flexWrap: 'wrap'}}>
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
          Open at the bottom
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

        <Button type='button' variant='danger' onClick={handleCloseDrawer}>
          Close Drawer
        </Button>
      </Drawer>
    </>
  )
}
