import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
// import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'
import {Meta} from '@storybook/react'
import {FormEventHandler, useRef, useState} from 'react'
import {Divider, Modal, Typography} from '..'
import Button from '../button'
import Icon from '../icon'
import Drawer, {DrawerH5Props, DrawerProps, DrawerRef} from './index'
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

    //Do other stuff when drawer close
  }

  const handleChangePosition = (position: DrawerProps['position']) => {
    setDrawerPosition(position)
    setOpenDrawerPosition(true)
  }

  return (
    <div className={storiesStyles.drawerStories}>
      <h4>Drawer</h4>
      <p>Drawer form value: {keyword}</p>

      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <Drawer
        className={storiesStyles.drawerExample}
        open={openDrawer}
        onClose={listenOnCloseDrawer}
      >
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

          <label htmlFor='keyword'>Keyword</label>
          <input
            type='search'
            name='keyword'
            id='keyword'
            placeholder='Enter anything'
          />
          <br />

          <label htmlFor='keepValue'>Keep form value </label>
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

        <Drawer.Footer css={{display: 'flex', gap: '1rem'}}>
          <Button
            variant='secondary'
            form='form-in-drawer'
            type='reset'
            onClick={handleCloseDrawer}
          >
            Cancel
          </Button>

          <Button form='form-in-drawer' type='submit'>
            Submit
          </Button>
        </Drawer.Footer>
      </Drawer>

      <h4>Position</h4>
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
        className={storiesStyles.drawerExample}
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

      <h4>Non-modal mode</h4>
      <p className={storiesStyles.description}>
        A Drawer that has no backdrop and also doesn't render on the top-layer.
        It can <strong>NOT</strong> be closed by pressing the <kbd>ESC</kbd>{' '}
        key.
        <br />
        The content below the non-modal drawer can be interacted.
      </p>

      <Button
        type='button'
        onClick={() => setOpenDrawerNonModal(!openDrawerNonModal)}
      >
        Toggle Non-modal Drawer
      </Button>

      <Drawer
        className={storiesStyles.drawerExample}
        open={openDrawerNonModal}
        onClose={() => setOpenDrawerNonModal(false)}
        drawerMode='non-modal'
        position={drawerPosition}
      >
        <Drawer.Header>
          <h2>Non-modal Drawer</h2>
        </Drawer.Header>

        <p>
          <a
            href='https:developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations'
            target='_blank'
          >
            Read more
          </a>{' '}
          about non-modal mode and accessibility considerations.
        </p>

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
          css={{marginTop: '1rem'}}
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

const h5DrawerDefaultConfig: Partial<DrawerH5Props> = {
  disableResize: false,
  disableDragClose: false,
  preventClose: false,
}

export function H5() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openDemoDrawer, setOpenDemoDrawer] = useState(false)
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false)
  // const [openDemoTripDrawer, setOpenDemoTripDrawer] = useState(false)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  const collapseDrawerRef = useRef<DrawerRef>(null)
  const [openTriggerCollapseDrawer, setOpenTriggerCollapseDrawer] =
    useState(false)
  const [openParameterDrawer, setOpenParameterDrawer] = useState(false)

  const [openNoFocusDrawer, setOpenNoFocusDrawer] = useState({
    open: false,
    preventFocus: false,
  })

  const [drawerConfig, setDrawerConfig] = useState<Partial<DrawerH5Props>>(
    h5DrawerDefaultConfig,
  )

  return (
    <div className={storiesStyles.drawerStories}>
      <h4>H5 Drawer</h4>
      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <h4>Drawer Customize</h4>
      <Button type='button' onClick={() => setOpenDemoDrawer(true)}>
        Open Customizable Drawer
      </Button>

      <h4>Non-modal mode</h4>
      <p className={storiesStyles.description}>
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

      <h4>Drawer's parameters and manipulation</h4>
      <p className={storiesStyles.description}>
        Get Drawer's parameters and programmatically collapse the drawer
      </p>

      <div>
        <Typography.Body variant='body2'>
          There are two ways to achieve it:
        </Typography.Body>

        <h5>1. Use ref</h5>
        <Typography.Body variant='body2'>
          Use <code>ref</code> to call the Drawer's <code>triggerCollapse</code>{' '}
          function
        </Typography.Body>
        <Button
          type='button'
          onClick={() => setOpenTriggerCollapseDrawer(true)}
        >
          Open Drawer
        </Button>

        <Divider css={{marginTop: '1rem'}} />

        <h5>2. Children as function</h5>
        <Typography.Body variant='body2'>
          When using this method, you pass children as a function which allows
          you to access the <code>triggerCollapse</code> function and also some
          Drawer's parameters too.
          <br />
          <br />
          <strong>Note:</strong> you should wrap your Drawer's content inside a{' '}
          <code>{'<Fragment/>'}</code> otherwise, the content may appear
          incorrectly.
        </Typography.Body>
        <Button type='button' onClick={() => setOpenParameterDrawer(true)}>
          Open Drawer
        </Button>
      </div>

      <h4>Disable autofocus on the first nested focusable element</h4>
      <p className={storiesStyles.description}>
        By default, the Drawer will autofocus on the first nested focusable
        element after opening.
        <br />
        To disable that, set preventFocus to true
      </p>
      <Button
        css={{marginRight: '1rem'}}
        type='button'
        onClick={() =>
          setOpenNoFocusDrawer({
            open: true,
            preventFocus: false,
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
            preventFocus: true,
          })
        }
      >
        Open autofocus disabled Drawer
      </Button>

      <Drawer
        open={openDrawer}
        css={{height: '40dvh'}}
        onClose={() => setOpenDrawer(false)}
        variant='h5'
      >
        <p style={{textAlign: 'center'}}>Pull up to expand the drawer</p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fuga
          qui corporis alias molestiae, excepturi suscipit natus autem ut nulla
          quis placeat, animi nisi ipsum, blanditiis possimus nihil eos ex.
        </p>
      </Drawer>

      <Drawer
        {...drawerConfig}
        open={openDemoDrawer}
        css={{height: '40dvh'}}
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
          css={{marginRight: '1rem'}}
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

      <Drawer
        className={storiesStyles.drawerH5Example}
        open={openNonModalDrawer}
        css={{height: '30dvh'}}
        onClose={() => setOpenNonModalDrawer(false)}
        variant='h5'
        expandedPoint={80}
        expandableLine={60}
        drawerMode='non-modal'
      >
        <Drawer.Header>
          <Typography.Body variant='body3' weight='semibold'>
            Your ride is on the way
          </Typography.Body>
          <Typography.Body variant='body3' weight='semibold'>
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
        ref={collapseDrawerRef}
        open={openTriggerCollapseDrawer}
        variant='h5'
        onExpandChange={(isExpanded) => console.log(isExpanded)}
        onHeightChange={(height) => console.log('height', height)}
        onClose={() => setOpenTriggerCollapseDrawer(false)}
      >
        <Drawer.Header>
          Get drawer's parameters and collapse it programmatically
        </Drawer.Header>

        <Button
          type='button'
          onClick={() => collapseDrawerRef.current?.triggerCollapse()}
        >
          Collapse this drawer
        </Button>
      </Drawer>

      <Drawer
        className={storiesStyles.drawerH5Example}
        open={openParameterDrawer}
        variant='h5'
        onClose={() => setOpenParameterDrawer(false)}
      >
        {({triggerCollapse, ...otherParameters}) => (
          <>
            <Drawer.Header>
              <Typography.Body variant='body3' weight='semibold'>
                Get drawer's parameters and collapse it programmatically
              </Typography.Body>
            </Drawer.Header>

            <pre className={storiesStyles.previewCode}>
              {JSON.stringify(otherParameters, null, 4)}
            </pre>
            <Button type='button' onClick={() => triggerCollapse()}>
              Collapse this drawer
            </Button>
          </>
        )}
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
            <p>
              {!openNoFocusDrawer.preventFocus && 'Disable'}{' '}
              <strong>Autofocus</strong> on the first focusable element - a
              button at the bottom ⏬
            </p>

            <p style={{minHeight: '30vh', marginTop: '2.5rem'}}>
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
            </p>

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
    </div>
  )
}

const meta: Meta<typeof Default> = {
  title: 'Example/Drawer',
  tags: ['autodocs'],
  component: Default,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
