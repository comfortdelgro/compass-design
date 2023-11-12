import {
  Button,
  Column,
  Drawer,
  DrawerH5Props,
  Row,
  Typography,
} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

const h5DrawerDefaultConfig: Partial<DrawerH5Props> = {
  disableResize: false,
  disableDragClose: false,
  preventClose: false,
}

export default function DrawerCustomizeDocs() {
  const [openDemoDrawer, setOpenDemoDrawer] = useState(false)
  const [drawerConfig, setDrawerConfig] = useState<Partial<DrawerH5Props>>(
    h5DrawerDefaultConfig,
  )

  const [openNoFocusDrawer, setOpenNoFocusDrawer] = useState({
    open: false,
    preventFocus: false,
  })

  return (
    <Column>
      <Typography.Header variant='header4'>
        Resizable, drag to close and prevent the default closing behaviors.
      </Typography.Header>
      <Row css={{marginBottom: '$8'}}>
        <Button type='button' onClick={() => setOpenDemoDrawer(true)}>
          Open Customizable Drawer
        </Button>
      </Row>

      <Drawer
        {...drawerConfig}
        open={openDemoDrawer}
        css={{
          height: '40dvh',
          '& .drawer-content': {
            button: {
              marginBottom: '$4',
            },
          },
        }}
        onClose={() => {
          setOpenDemoDrawer(false)
          setDrawerConfig(h5DrawerDefaultConfig)
        }}
        variant='h5'
      >
        <p>
          Resizable Drawer? <strong>{`${!drawerConfig.disableResize}`}</strong>
        </p>
        <Button
          type='button'
          onClick={() =>
            setDrawerConfig((currState) => ({
              ...currState,
              disableResize: !currState.disableResize,
            }))
          }
        >
          Toggle Draggable
        </Button>
        <hr />

        <p>
          Should autoclose when drags and drops the drawer below its height?{' '}
          <strong>{`${!drawerConfig.disableDragClose}`}</strong>
        </p>
        <Button
          type='button'
          onClick={() =>
            setDrawerConfig((currState) => ({
              ...currState,
              disableDragClose: !currState.disableDragClose,
            }))
          }
        >
          Toggle autoclose
        </Button>

        <hr />
        <p>
          Should prevent drawer from closing when users tap/click on the
          backdrop or press Escape key?{' '}
          <strong>{`${drawerConfig.preventClose}`}</strong>
        </p>
        <Button
          css={{marginRight: '$4'}}
          type='button'
          onClick={() =>
            setDrawerConfig((currState) => ({
              ...currState,
              preventClose: !currState.preventClose,
            }))
          }
        >
          Toggle prevent close
        </Button>
        {drawerConfig.preventClose && (
          <Button
            type='button'
            variant='secondary'
            onClick={() => {
              setOpenDemoDrawer(false)
              setDrawerConfig(h5DrawerDefaultConfig)
            }}
          >
            Manually close drawer
          </Button>
        )}
      </Drawer>

      <Typography.Header variant='header4'>
        Disable autofocus on the first nested focusable element
      </Typography.Header>
      <Typography.Body variant='body3' css={{marginBottom: '$4'}}>
        By default, the Drawer will autofocus on the first nested focusable
        element after opening.
        <br />
        To disable that, set <code>preventFocus</code> to true
      </Typography.Body>
      <Row css={{gap: '$4'}}>
        <Button
          type='button'
          onClick={() =>
            setOpenNoFocusDrawer({
              open: true,
              preventFocus: true,
            })
          }
        >
          Normal drawer
        </Button>
        <Button
          type='button'
          variant='secondary'
          onClick={() =>
            setOpenNoFocusDrawer({
              open: true,
              preventFocus: false,
            })
          }
        >
          Autofocus prevented drawer
        </Button>
      </Row>

      <Drawer
        open={openNoFocusDrawer.open}
        css={{height: '30dvh'}}
        onClose={() => setOpenNoFocusDrawer({open: false, preventFocus: false})}
        variant='h5'
        expandedPoint={90}
        expandableLine={50}
        preventFocus={openNoFocusDrawer.preventFocus}
      >
        {openNoFocusDrawer.open && (
          <>
            <Typography.Body variant='body3'>
              {!openNoFocusDrawer.preventFocus && 'Disable'}{' '}
              <strong>Autofocus</strong> on the first focusable element - a
              button at the bottom ⏬
            </Typography.Body>

            <Typography.Body
              variant='body3'
              css={{minHeight: '30vh', marginTop: '$10'}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium molestias voluptatem officia at repellat, voluptates
              corrupti quod sunt necessitatibus delectus quae enim, temporibus
              nisi, asperiores consectetur fugiat molestiae error itaque. Animi
              ad ut eum cupiditate tempora reiciendis, doloremque quis corporis
              ipsam aperiam explicabo voluptatum! Possimus tempore praesentium
              suscipit non quisquam ea assumenda, eius sit illo ratione rem
              consequatur est dignissimos? Similique animi dolor a fugiat modi
              nostrum maiores possimus aliquid, repudiandae commodi, suscipit
              aliquam eaque sint repellendus illum dolorem velit. Totam
              necessitatibus accusamus tenetur, saepe distinctio illo maiores
              facilis sapiente! Natus, ab. Omnis deleniti optio sunt debitis
              odio placeat exercitationem tenetur sapiente atque quod neque
              vitae, ipsum amet quas asperiores fugit corporis quo laboriosam
              quibusdam iure porro. Ullam, veritatis totam. Qui reprehenderit
              quidem reiciendis dolorum nisi molestias placeat sit enim culpa
              hic quasi, doloribus, omnis quod ea eligendi architecto? Sint
              alias voluptatem eveniet. Ipsa dolorem, maxime dolor excepturi
              expedita consequuntur. Earum iste voluptatum, expedita vitae
              temporibus optio dolor eius. Eveniet quae ipsum beatae! Pariatur
              explicabo est fuga, suscipit nulla ad a eius porro minus eveniet
              sed eligendi impedit adipisci quaerat.
            </Typography.Body>

            <Button
              type='button'
              variant='secondary'
              onClick={() => console.log('Focusing button is clicked')}
            >
              A focusable element at the bottom
            </Button>
          </>
        )}
      </Drawer>
    </Column>
  )
}
