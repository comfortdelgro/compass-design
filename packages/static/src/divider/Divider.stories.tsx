import type {Meta} from '@storybook/react'
import React from 'react'
import Divider from './index'

export const Basic: React.FC = () => {
  return (
    <div>
      <h3>Default divider</h3>
      <Divider />
      <h3>Text left divider</h3>
      <Divider textAlign='left'>
        <span>Left</span>
      </Divider>
      <h3>Text center divider</h3>
      <Divider textAlign='center'>
        <span>Center</span>
      </Divider>
      <h3>Text right divider</h3>
      <Divider textAlign='right'>
        <span>Right</span>
      </Divider>
      <h3>Orientation vertically</h3>
      <div style={{height: 200}}>
        <Divider textAlign='center' orientation='vertical'>
          <span>Center</span>
        </Divider>
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/Divider',
  component: Basic,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
