import CrossIcon from '@comfortdelgro/compass-icons/react/cross'
import {
  Button,
  Column,
  Divider,
  Drawer,
  Row,
  TextField,
  Typography,
} from '@comfortdelgro/react-compass'
import {FormEventHandler, useState} from 'react'

export default function DrawerDocs() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [keyword, setKeyword] = useState('') // just for display form value

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    setKeyword((formData.get('keyword') as string) || '')

    if (!formData.get('keepFormValue')) {
      e.currentTarget.reset()
    }

    setOpenDrawer(false)
  }

  const listenOnCloseDrawer = () => {
    setOpenDrawer(false)

    // Do other stuff when drawer close
  }

  return (
    <Column>
      <Typography.Header variant='header4'>
        Drawer controlled by form
      </Typography.Header>

      <Row css={{marginBlock: '$4'}}>
        <Button type='button' onClick={() => setOpenDrawer(true)}>
          Open Drawer
        </Button>
      </Row>

      <Typography.Body variant='body2'>Submitted form values:</Typography.Body>
      <pre
        style={{
          padding: '0.5rem',
          margin: '0',

          width: '100%',
          minHeight: '2rem',
          borderRadius: '8px',

          backgroundColor: '#FAF9F8',
          fontSize: '0.875rem',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'anywhere',
        }}
      >
        {JSON.stringify({keyword}, null, 2)}
      </pre>

      <Drawer open={openDrawer} onClose={listenOnCloseDrawer}>
        <Drawer.Header>
          <Typography.Header variant='header3'>
            Drawer controlled by form
          </Typography.Header>
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

        <Typography.Header variant='header4'>Drawer Form</Typography.Header>
        <Typography.Body
          variant='body3'
          css={{color: '$grayShades60', marginBottom: '$4'}}
        >
          In this example, all inputs are uncontrolled input.
        </Typography.Body>

        <form id='form-in-drawer' method='dialog' onSubmit={handleFormSubmit}>
          <TextField
            label='Keyword'
            name='keyword'
            id='keyword'
            placeholder='Enter anything'
          />

          <label htmlFor='keepValue'>Keep form value: </label>
          <input
            name='keepFormValue'
            type='checkbox'
            id='keepValue'
            style={{marginTop: '1rem'}}
          />
        </form>

        <Divider css={{marginBlock: '$4'}} />

        <Typography.Header variant='header4' css={{marginTop: '$16'}}>
          Article contents
        </Typography.Header>
        <section style={{height: '50vh'}}>
          <Typography.Header
            variant='header5'
            css={{
              position: 'sticky',
              insetInline: 0,
              top: '-1rem',
              paddingBlock: '1rem',
              marginBlock: 0,
              backgroundColor: 'white',
            }}
          >
            Section 1: Very long content here, scroll down ⏬ for more content
          </Typography.Header>

          <Typography.Body variant='body3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi.
          </Typography.Body>
        </section>

        <section style={{height: '100vh'}}>
          <Typography.Header
            variant='header5'
            css={{
              position: 'sticky',
              insetInline: 0,
              top: '-1rem',
              paddingBlock: '1rem',
              marginBlock: 0,
              backgroundColor: 'white',
            }}
          >
            Section 2: No idea
          </Typography.Header>

          <Typography.Body variant='body3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem quidem omnis architecto aliquam id dicta dolor magnam,
            sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi
            ratione! Neque doloribus vel esse.
          </Typography.Body>
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
    </Column>
  )
}
