import ArrowLeft from '@comfortdelgro/compass-icons/react/arrow-left'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import CrossIcon from '@comfortdelgro/compass-icons/react/cross'
import {
  Button,
  Column,
  Drawer,
  DrawerProps,
  Row,
  TextField,
  Typography,
} from '@comfortdelgro/react-compass'
import {FormEventHandler, useState} from 'react'

export function Default() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [keyword, setKeyword] = useState('')

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
    <Column>
      <Typography.Label>Drawer</Typography.Label>
      <p>Drawer form value: {keyword}</p>
      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <Drawer open={openDrawer} onClose={listenOnCloseDrawer}>
        <Drawer.Header>
          <h2 style={{marginBlock: 0}}>Drawer controlled by form</h2>

          <Button
            css={{
              padding: '$1',
              svg: {
                width: 'fit-content !important',
              },
            }}
            type='button'
            variant='ghost'
            onClick={() => setOpenDrawer(false)}
          >
            <CrossIcon />
          </Button>
        </Drawer.Header>

        <form id='form-in-drawer' method='dialog' onSubmit={handleFormSubmit}>
          <h3>Drawer Form</h3>

          <TextField
            label='Keyword'
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
          <Button
            variant='secondary'
            form='form-in-drawer'
            type='reset'
            onClick={() => setOpenDrawer(false)}
          >
            Cancel
          </Button>

          <Button form='form-in-drawer' type='submit'>
            Submit
          </Button>
        </Drawer.Footer>
      </Drawer>

      <Typography.Label>Position</Typography.Label>
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
    </Column>
  )
}
