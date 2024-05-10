import {Meta} from '@storybook/react'
import {useState} from 'react'
import Button from '../button'
import Drawer from './index'
import storiesStyles from './styles/drawer-stories.module.css'

export function Mobile() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className={storiesStyles.drawerStories}>
      <h4>H5 Drawer</h4>
      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <Drawer
        open={openDrawer}
        variant='mobile'
        onClose={() => setOpenDrawer(false)}
        bgScaleClassName={storiesStyles.bgScaleOverride}
        scaleOffset={8}
      >
        <p style={{textAlign: 'center'}}>Pull up to expand the drawer</p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fuga
          qui corporis alias molestiae, excepturi suscipit natus autem ut nulla
          quis placeat, animi nisi ipsum, blanditiis possimus nihil eos ex.
        </p>
        <Drawer.Footer>Footer</Drawer.Footer>
      </Drawer>
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
