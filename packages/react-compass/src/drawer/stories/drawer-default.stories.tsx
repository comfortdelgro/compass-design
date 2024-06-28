import ArrowLeft from '@comfortdelgro/compass-icons/react/arrow-left'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import Cross from '@comfortdelgro/compass-icons/react/cross'
import {Meta} from '@storybook/react'
import {FormEventHandler, useState} from 'react'
import Drawer from '..'
import Button from '../../button'
import storiesStyles from '../styles/drawer-stories.module.css'
import {DrawerProps} from '../types'

export function Default() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [openDrawerNonModal, setOpenDrawerNonModal] = useState(false)

  const [openDrawerPosition, setOpenDrawerPosition] = useState(false)
  const [drawerPosition, setDrawerPosition] =
    useState<DrawerProps['position']>(undefined)

  const [openDrawerBackdropCustomized, setOpenDrawerBackdropCustomized] =
    useState(false)

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
        styles={{footer: {display: 'flex', gap: '1rem'}}}
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
            <Cross />
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
              color: 'var(--cdg-color-primaryText)',
              backgroundColor: 'var(--cdg-color-background)',
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
              color: 'var(--cdg-color-primaryText)',
              backgroundColor: 'var(--cdg-color-background)',
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

        <Drawer.Footer>
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
        variant={openDrawerNonModal ? 'danger' : 'secondary'}
        type='button'
        onClick={() => setOpenDrawerNonModal(!openDrawerNonModal)}
      >
        {openDrawerNonModal ? 'Close' : 'Open'} Non-modal Drawer
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
            href='https:developer.mozilla.org/docs/Web/HTML/Element/dialog#accessibility_considerations'
            target='_blank'
          >
            Read more
          </a>{' '}
          about non-modal mode and accessibility considerations.
        </p>

        <div className={storiesStyles.container}>
          <Button
            type='button'
            leftIcon={<ArrowLeft />}
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
            rightIcon={<ArrowRight />}
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

      <h4>Backdrop styling</h4>
      <p className={storiesStyles.description}>
        We can customize the backdrop of the drawer by using the{' '}
        <code>backdropProps</code> prop, update related CSS variables or
        <br />
        apply styles directly to the <code>::backdrop</code> CSS pseudo-element.
      </p>

      <Button
        variant='secondary'
        type='button'
        onClick={() => setOpenDrawerBackdropCustomized(true)}
      >
        Open Drawer
      </Button>

      <Drawer
        className={storiesStyles.drawerExample}
        open={openDrawerBackdropCustomized}
        onClose={() => setOpenDrawerBackdropCustomized(false)}
        styles={{header: {fontWeight: 600}, content: {paddingBlock: 0}}}
        backdropProps={{
          blur: 1,
          opacity: 0.9,
          background:
            'linear-gradient(-25deg,rgba(238,174,202,0.6) 0%,rgba(148,187,233,0.6) 100%)',
        }}
      >
        <Drawer.Header>Backdrop styling</Drawer.Header>

        <p>Article contents</p>

        <Drawer.Footer>
          <Button
            type='button'
            onClick={() => setOpenDrawerBackdropCustomized(false)}
          >
            Close Drawer
          </Button>
        </Drawer.Footer>
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
