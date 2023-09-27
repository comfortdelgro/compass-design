import type {Meta} from '@storybook/react'
import React from 'react'
import Chip from './index'

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

export const Basic: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Basic Chip</h3>
      <Chip>Basic Chip</Chip>
    </div>
  )
}

export const Variants: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Close button</h3>
      <Chip
        hasCloseButton
        onClose={() => {
          console.log('Close button click')
        }}
      >
        Close button
      </Chip>
      <h3>Errored Chip</h3>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
    </div>
  )
}

export const CustomStyling: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Custom Styling</h3>
      <Chip
        hasCloseButton
        css={{
          border: '1px solid purple',
          '&:hover': {color: '$success'},
          '& > div:first-child': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              height: '2rem',
              width: '2rem',
            },
          },
        }}
      >
        Close button
      </Chip>
    </div>
  )
}

const meta = {
  title: 'Example/Chip Server',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
