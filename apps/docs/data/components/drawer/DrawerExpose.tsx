import {
  Button,
  Column,
  Drawer,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function DrawerExposeDocs() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <Column>
      <Typography.Header variant='header4'>
        2. <code>children</code> as a function
      </Typography.Header>
      <Typography.Body variant='body2'>
        When using this method, you pass children as a function which allows you
        to access the <code>triggerCollapse</code> function and also some
        Drawer's parameters too.
        <br />
        <br />
        <strong>Note:</strong> you should wrap your Drawer's content inside a{' '}
        <code>{'<Fragment>'}</code> otherwise, the content may appear
        incorrectly.
      </Typography.Body>
      <Row css={{marginBlock: '$4'}}>
        <Button type='button' onClick={() => setOpenDrawer(true)}>
          Open H5 Drawer
        </Button>
      </Row>

      <Drawer
        variant='h5'
        open={openDrawer}
        expanderCSS={{
          background: '$blueShades100',
          paddingBlock: '$2 $6',
        }}
        onClose={() => setOpenDrawer(false)}
      >
        {({triggerCollapse, ...otherParameters}) => (
          <>
            <Drawer.Header
              css={{
                paddingTop: 0,
                gap: '$2',
                backgroundColor: '$blueShades100',
              }}
            >
              <Typography.Header
                variant='header5'
                css={{color: '$grayShades10'}}
              >
                Get drawer's parameters and collapse it programmatically
              </Typography.Header>
            </Drawer.Header>
            <pre
              style={{
                padding: '0.5rem',
                width: '100%',
                borderRadius: '8px',
                color: "initial",
                backgroundColor: '#FAF9F8',
                whiteSpace: 'pre-wrap',
                overflowWrap: 'anywhere',
              }}
            >
              {JSON.stringify(otherParameters, null, 4)}
            </pre>
            <Button css={{marginTop: '$4'}} onClick={() => triggerCollapse()}>
              Collapse this drawer
            </Button>
          </>
        )}
      </Drawer>
    </Column>
  )
}
