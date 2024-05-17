import {Meta} from '@storybook/react'
import {useState} from 'react'
import Button from '../button'
import Typography from '../typography'
import Drawer from './index'
import storiesStyles from './styles/drawer-stories.module.css'

export function Mobile() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false)

  return (
    <div className={storiesStyles.drawerStories}>
      <h4>Mobile Drawer</h4>
      <p className={storiesStyles.description}>
        A variant that utilizes modern web technologies to replicate the iOS
        drawer (sheets) experience on the web.{' '}
        <a
          href='https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS
        </a>
      </p>
      <p className={storiesStyles.description}>
        ⚠️ <strong>Browser compatibility warning</strong>: This variant
        experiments with the latest web technology concepts and CSS features
        such as view transitions, transitioning discrete animations, the inert
        attribute, etc... Consider using the Drawer's h5 variant or the Dialog
        component for a more stable and widely browser supported experience.
      </p>
      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
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
        variant={openNonModalDrawer ? 'danger' : 'secondary'}
        onClick={() => setOpenNonModalDrawer(!openNonModalDrawer)}
      >
        {openNonModalDrawer ? 'Close' : 'Open'} Non-modal Drawer
      </Button>

      <Drawer
        open={openDrawer}
        variant='mobile'
        onClose={() => setOpenDrawer(false)}
        enableScaleBg
        scaleBgClassName={storiesStyles.bgScaleOverride}
        scaleBgOffset={16}
      >
        <p style={{textAlign: 'center'}}>Pull up to expand the drawer</p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fuga
          qui corporis alias molestiae, excepturi suscipit natus autem ut nulla
          quis placeat, animi nisi ipsum, blanditiis possimus nihil eos ex.
        </p>
        <Drawer.Footer>Footer</Drawer.Footer>
      </Drawer>

      <div className={storiesStyles.nonModalBlock}>
        <div className={storiesStyles.nonModalBlockDesc}>Relative block</div>
        <Typography.Body variant='body3' weight='semibold'>
          The mobile drawer in <code>non-modal</code> mode should be displayed
          inside nearest relative (position) block.
        </Typography.Body>

        <Drawer
          className={storiesStyles.drawerH5Example}
          open={openNonModalDrawer}
          onClose={() => setOpenNonModalDrawer(false)}
          variant='mobile'
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
            sequi perferendis laborum vel nostrum praesentium doloremque,
            dolorum debitis unde!
          </p>
        </Drawer>
      </div>
    </div>
  )
}

const meta: Meta<typeof Mobile> = {
  title: 'Example/Drawer',
  tags: ['autodocs'],
  component: Mobile,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
