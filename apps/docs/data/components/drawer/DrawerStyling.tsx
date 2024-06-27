import {Button, Drawer} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function DrawerStyling() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Button
        variant='secondary'
        type='button'
        onClick={() => setOpenDrawer(true)}
      >
        Open Drawer
      </Button>

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        styles={{
          root: {backgroundColor: 'rgba(255,255,255,0.9)'},
          header: {fontWeight: 600, color: 'var(--cdg-color-cdgBlue)'},
          content: {paddingBlock: 0},
          footer: {
            background:
              'radial-gradient(circle,rgba(34,193,195,0.4) 0%,rgba(253,187,45,0.2) 100%)',
          },
        }}
        backdropProps={{
          blur: 1,
          opacity: 0.9,
          background:
            'linear-gradient(-25deg,rgba(238,174,202,0.6) 0%,rgba(148,187,233,0.6) 100%)',
        }}
      >
        <Drawer.Header>Styling</Drawer.Header>

        <p>
          We can use <code>classNames</code>, <code>styles</code>, and{' '}
          <code>backdropProps</code> to style the Drawer component and its child
          elements.
        </p>

        <Drawer.Footer>
          <Button
            variant='secondary'
            type='button'
            onClick={() => setOpenDrawer(false)}
          >
            Close Drawer
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}
