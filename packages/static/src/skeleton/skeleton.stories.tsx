import type {Meta} from '@storybook/react'
import React from 'react'
import Skeleton from './index'

export const Variants: React.FC = () => (
  <div>
    <h3>Text</h3>
    <Skeleton variant='text'>
      <h1>Text</h1>
    </Skeleton>
    <h3>Circular</h3>
    <Skeleton variant='circular' width={40} height={40} />
    <h3>Rectangular</h3>
    <Skeleton variant='rectangular' width={210} height={60} />
    <h3>Rounded</h3>
    <Skeleton variant='rounded' width={210} height={60} />
    <h3>Children Shape</h3>
    <Skeleton variant='rectangular'>
      <div style={{width: 210, height: 120}} />
    </Skeleton>
  </div>
)

export const Animations: React.FC = () => (
  <div>
    <h3>Pulse</h3>
    <Skeleton />
    <h3>Wave</h3>
    <Skeleton animation='wave' />
    <h3>False</h3>
    <Skeleton animation={false} />
  </div>
)

const meta = {
  title: 'Example/Skeleton',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
