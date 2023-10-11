import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import {FormEventHandler, useState} from 'react'
import Button from '../button'
import Icon from '../icon'
// import Link from '../link'
// import List from '../list'
// import ListImage from '../list/list-image'
// import Modal from '../modal'
// import TextField from '../textfield'
// import Typography from '../typography'
import {Meta} from '@storybook/react'
import Drawer, {DrawerH5Props, DrawerProps} from './index'
import storiesStyles from './styles/drawer-stories.module.css'

export function Default() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [openDrawerNonModal, setOpenDrawerNonModal] = useState(false)

  const [openDrawerPosition, setOpenDrawerPosition] = useState(false)
  const [drawerPosition, setDrawerPosition] =
    useState<DrawerProps['position']>(undefined)

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    setKeyword((formData.get('keyword') as string) || '')

    if (!formData.get('keep')) {
      e.currentTarget.reset()
    }

    handleCloseDrawer()
  }

  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  }

  const listenOnCloseDrawer = () => {
    setOpenDrawer(false)

    // Do other stuff when drawer close
  }

  const handleChangePosition = (position: DrawerProps['position']) => {
    setDrawerPosition(position)
    setOpenDrawerPosition(true)
  }

  return (
    <div className={storiesStyles.drawerStories}>
      {/* <Typography.Header variant='header4'>1. Drawer</Typography.Header>
      <Typography.Body variant='body2'>
        Drawer form value: {keyword}
      </Typography.Body> */}
      <h4>1. Drawer</h4>
      <p>Drawer form value: {keyword}</p>

      <Button
        css={{marginBlock: '$4'}}
        type='button'
        onClick={() => setOpenDrawer(true)}
      >
        Open Drawer
      </Button>

      <Drawer open={openDrawer} onClose={listenOnCloseDrawer}>
        <Drawer.Header>
          <h2 style={{marginBlock: 0}}>Drawer controlled by form</h2>

          <Button
            css={{
              padding: '0.25rem',
              '& svg': {
                width: 'fit-content !important',
              },
            }}
            type='button'
            variant='ghost'
            onClick={handleCloseDrawer}
          >
            <Icon icon={faClose} size='2x' />
          </Button>
        </Drawer.Header>

        <form id='form-in-drawer' method='dialog' onSubmit={handleFormSubmit}>
          <h3>Drawer Form</h3>

          {/* <TextField
            label='Keyword'
            name='keyword'
            id='keyword'
            placeholder='Enter anything'
          /> */}
          <label htmlFor='keyword'>Keyword</label>
          <input
            type='search'
            name='keyword'
            id='keyword'
            placeholder='Enter anything'
          />

          <label htmlFor='keepValue'>Keep form value: </label>
          <input
            name='keep'
            type='checkbox'
            id='keepValue'
            style={{marginTop: '1rem'}}
          />
        </form>

        <section style={{height: '50vh', marginTop: '5rem'}}>
          <h3
            style={{
              position: 'sticky',
              insetInline: 0,
              top: '-1rem',
              paddingBlock: '1rem',
              marginBlock: 0,
              backgroundColor: 'white',
            }}
          >
            Section 1: Very long content here, scroll down ⏬ for more content
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi.
          </p>
        </section>

        <section style={{height: '100vh'}}>
          <h3
            style={{
              position: 'sticky',
              insetInline: 0,
              top: '-1rem',
              paddingBlock: '1rem',
              marginBlock: 0,
              backgroundColor: 'white',
            }}
          >
            Section 2: No idea
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem quidem omnis architecto aliquam id dicta dolor magnam,
            sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi
            ratione! Neque doloribus vel esse.
          </p>
        </section>

        <Drawer.Footer css={{display: 'flex', gap: '$2'}}>
          {/* <Button
            variant='secondary'
            form='form-in-drawer'
            type='reset'
            onClick={handleCloseDrawer}
          >
            Cancel
          </Button>

          <Button form='form-in-drawer' type='submit'>
            Submit
          </Button> */}
        </Drawer.Footer>
      </Drawer>

      {/* <Typography.Header variant='header4'>2. Position</Typography.Header> */}
      <h4>2. Position</h4>
      <div className={storiesStyles.container}>
        <Button
          type='button'
          leftIcon={<Icon icon={faArrowLeft} />}
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
          rightIcon={<Icon icon={faArrowRight} />}
          onClick={() => handleChangePosition('right')}
        >
          Open on the right
        </Button>
      </div>

      <Drawer
        open={openDrawerPosition}
        onClose={() => setOpenDrawerPosition(false)}
        position={drawerPosition}
      >
        <Drawer.Header>
          <h2>Drawer {drawerPosition || ''}</h2>
        </Drawer.Header>

        <p>Article contents</p>

        <Button type='button' onClick={() => setOpenDrawerPosition(false)}>
          Close Drawer
        </Button>
      </Drawer>

      {/* <Typography.Header variant='header4'>3. Non-modal mode</Typography.Header> 
      <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        A Drawer that has no backdrop and also doesn't render on the top-layer.
        It can <strong>NOT</strong> be closed by pressing the <kbd>ESC</kbd>{' '}
        key.
        <br />
        The content below the non-modal drawer can be interacted.
      </Typography.Body>
      */}
      <h4>3. Non-modal mode</h4>
      <Button
        type='button'
        onClick={() => setOpenDrawerNonModal(!openDrawerNonModal)}
      >
        Toggle Non-modal Drawer
      </Button>

      <Drawer
        open={openDrawerNonModal}
        onClose={() => setOpenDrawerNonModal(false)}
        drawerMode='non-modal'
        position={drawerPosition}
      >
        {/* <Drawer.Header>
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
          about non-modal mode and accessibility considerations.
        </Typography.Body> */}

        <div className={storiesStyles.container}>
          <Button
            type='button'
            leftIcon={<Icon icon={faArrowLeft} />}
            onClick={() => setDrawerPosition('left')}
          >
            Open on the left
          </Button>

          <Button
            variant='secondary'
            type='button'
            onClick={() => setDrawerPosition('bottom')}
          >
            Open on the bottom
          </Button>

          <Button
            type='button'
            rightIcon={<Icon icon={faArrowRight} />}
            onClick={() => setDrawerPosition('right')}
          >
            Open on the right
          </Button>
        </div>

        <Button
          type='button'
          variant='danger'
          onClick={() => setOpenDrawerNonModal(false)}
        >
          Close Drawer
        </Button>
      </Drawer>
    </div>
  )
}

// const imgSrc =
//   'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const h5DrawerDefaultConfig: Partial<DrawerH5Props> = {
  disableResize: false,
  disableAddBodyAttr: false,
  disableDragClose: false,
  preventClose: false,
}

export function H5() {
  // const [openDrawer, setOpenDrawer] = useState(false)
  const [openDemoDrawer, setOpenDemoDrawer] = useState(false)
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false)
  // const [openDemoTripDrawer, setOpenDemoTripDrawer] = useState(false)
  // const [openConfirmModal, setOpenConfirmModal] = useState(false)

  // const [openNoFocusDrawer, setOpenNoFocusDrawer] = useState({
  //   open: false,
  //   preventFocus: false,
  // })

  const [drawerConfig, setDrawerConfig] = useState<Partial<DrawerH5Props>>(
    h5DrawerDefaultConfig,
  )

  return (
    <div className={storiesStyles.drawerStories}>
      <h4>H5 Drawer</h4>
      {/* <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button> */}

      <h4>Drawer Customize</h4>
      <Button type='button' onClick={() => setOpenDemoDrawer(true)}>
        Open Customizable Drawer
      </Button>

      <h4>Demo Trip information</h4>
      {/* <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        Drawer's maximum expanded height will be half of current viewport with
        autoclose disabled.
        <br />
        Better view on mobile screen
      </Typography.Body> */}
      <p>
        Drawer's maximum expanded height will be half of current viewport with
        autoclose disabled.
        <br />
        Better view on mobile screen
      </p>
      {/* <Button type='button' onClick={() => setOpenDemoTripDrawer(true)}>
        Open Drawer
      </Button> */}

      <h4>Non-modal mode</h4>
      {/* <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        A Drawer that has no backdrop and also doesn't render on the top-layer.
        It can <strong>NOT</strong> be closed by pressing the <kbd>ESC</kbd>{' '}
        key.
        <br />
        The content below the non-modal drawer can be interacted.
      </Typography.Body> */}
      <p>
        A Drawer that has no backdrop and also doesn't render on the top-layer.
        It can <strong>NOT</strong> be closed by pressing the <kbd>ESC</kbd>{' '}
        key.
        <br />
        The content below the non-modal drawer can be interacted.
      </p>
      <Button
        type='button'
        variant='secondary'
        onClick={() => setOpenNonModalDrawer(!openNonModalDrawer)}
      >
        Toggle Non-modal Drawer
      </Button>

      <h4>Disable autofocus on the first nested focusable element</h4>
      {/* <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        By default, the Drawer will autofocus on the first nested focusable
        element after opening.
        <br />
        To disable that, set preventFocus to true
      </Typography.Body> */}
      <p>
        By default, the Drawer will autofocus on the first nested focusable
        element after opening.
        <br />
        To disable that, set preventFocus to true
      </p>
      {/* <Button
        css={{marginRight: '$4'}}
        type='button'
        onClick={() =>
          setOpenNoFocusDrawer({
            open: true,
            preventFocus: true,
          })
        }
      >
        Open Normal Drawer
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
        Open autofocus disabled Drawer
      </Button> */}

      {/* <Drawer
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

        <List
          title='ComfortRIDE'
          description='Car or Taxi, Flat Fare'
          descriptionIcon={
            <Icon
              style={{width: 14, height: 14, color: '#0142AF'}}
              icon={faFaceSmile}
            />
          }
          variant='h5'
          leftInfo={
            <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
          }
          rightInfo={{
            text: '$9.90',
            description: 'Fees may apply',
            icon: <Icon icon={faChevronRight} />,
          }}
        />
        <List
          title='ComfortRIDE'
          description='Car or Taxi, Flat Fare'
          variant='h5'
          leftInfo={
            <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
          }
          rightInfo={{text: '$9.90', description: 'Fees may apply'}}
        />
        <List
          title='ComfortRIDE'
          description='Car or Taxi, Flat Fare'
          variant='h5'
          leftInfo={
            <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
          }
          rightInfo={{text: '$9.90', description: 'Fees may apply'}}
          descriptionIcon={
            <Icon
              style={{width: 14, height: 14, color: '#0142AF'}}
              icon={faFaceSmile}
            />
          }
        />
        <List
          title='ComfortRIDE'
          description='Car or Taxi, Flat Fare'
          variant='h5'
          leftInfo={
            <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
          }
          rightInfo={{text: '$9.90', description: 'Fees may apply'}}
        />
        <List
          title='ComfortRIDE'
          description='Car or Taxi, Flat Fare'
          variant='h5'
          leftInfo={
            <ListImage variant='h5' isRounded src={imgSrc} alt='singapore' />
          }
          rightInfo={{text: '$9.90', description: 'Fees may apply'}}
        />
      </Drawer> */}

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
        <p>Resizable Drawer?</p>
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
          Should block the below layer from scrolling and tell the browser to
          ignore its elements (inert)?{' '}
          <strong>{`${!drawerConfig.disableAddBodyAttr}`}</strong>
        </p>
        <Button
          type='button'
          onClick={() =>
            setDrawerConfig((currState) => ({
              ...currState,
              disableAddBodyAttr: !currState.disableAddBodyAttr,
            }))
          }
        >
          Toggle Block
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

      {/* <Drawer
        open={openDemoTripDrawer}
        css={{height: '20dvh'}}
        expanderCSS={{
          background: '$blueShades100',
          paddingBlock: '$2 $6',
        }}
        onClose={() => setOpenDemoTripDrawer(false)}
        variant='h5'
        expandedPoint={50}
        expandableLine={33}
        disableDragClose
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

        <Typography.Body
          weight='semibold'
          css={{
            paddingBlock: '$5 $8',
            display: 'flex',
            gap: '$2',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Shaw
          <Button type='button' variant='secondary'>
            Call Driver
          </Button>
        </Typography.Body>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <Typography.Body
            variant='body3'
            weight='semibold'
            css={{
              display: 'flex',
              gap: '$2',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>ComfortRIDE</span>{' '}
            <Typography.Link variant='link2'>T&C apply</Typography.Link>
          </Typography.Body>
          <div>$8.60</div>

          <Typography.Body variant='body3' weight='semibold'>
            Total
          </Typography.Body>
          <div>$8.60</div>
        </div>

        <div style={{display: 'flex', gap: '1rem', paddingBlock: '1rem'}}>
          <Button type='button' variant='secondary' css={{flex: 1}}>
            Share your trip
          </Button>
          <Button type='button' variant='danger' css={{flex: 1}}>
            Cancel trip
          </Button>
        </div>
      </Drawer> 

      <Drawer
        open={openNonModalDrawer}
        css={{height: '30dvh'}}
        expanderCSS={{
          background: '$blueShades100',
          paddingBlock: '$2 $6',
        }}
        onClose={() => setOpenNonModalDrawer(false)}
        variant='h5'
        expandedPoint={80}
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
        <p>
          <strong>Drag to bottom</strong> ⏬ of the screen to close or
          <br /> just <strong>tap</strong> on the Toggle Non-modal button
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          quod itaque fugiat ipsa eveniet illum quae eligendi, qui hic officia
          sequi perferendis laborum vel nostrum praesentium doloremque, dolorum
          debitis unde!
        </p>

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
              onClick={() => console.log('clicked')}
            >
              A focusable element at the bottom
            </Button>
          </>
        )}
      </Drawer>
    */}
    </div>
  )
}

const meta = {
  title: 'Example/Drawer',
  tags: ['autodocs'],
  component: Default,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
