import type {Meta} from '@storybook/react'
import React from 'react'
import Spinner from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

export const Variants: React.FC = () => (
  <div style={{...style}}>
    <div style={{flexDirection: 'row', ...style}}>
      <Spinner size='2xl' />
      <Spinner size='xl' />
      <Spinner size='lg' />
      <Spinner size='md' />
      <Spinner size='sm' />
    </div>

    <h3>Without Label</h3>
    <div style={{flexDirection: 'row', ...style}}>
      <Spinner size='2xl' label={false} />
      <Spinner size='xl' label={false} />
      <Spinner size='lg' label={false} />
      <Spinner size='md' label={false} />
      <Spinner size='sm' label={false} />
    </div>
  </div>
)
const meta = {
  title: 'Example/Spinner',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
