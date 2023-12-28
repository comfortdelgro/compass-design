import {Meta} from '@storybook/react'
import React from 'react'
import RatingComponent from './rating'

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

export const Default: React.FC = () => {
  return (
    <>
      <div style={{...style}}>
        <h3>Default Rating Component</h3>
        <RatingComponent />
      </div>
      <div style={{...style}}>
        <h3>Controlled Rating Component</h3>
        <RatingComponent value={2} />
      </div>
      <div style={{...style}}>
        <h3>Read-only Rating Component</h3>
        <RatingComponent value={1} readOnly />
      </div>
      <div style={{...style}}>
        <h3>Disabled Rating Component</h3>
        <RatingComponent disabled />
      </div>
    </>
  )
}
export const UsingIcons: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Rating Component with icons</h3>
      <RatingComponent useIcons />
    </div>
  )
}

const meta = {
  title: 'Example/Rating',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
