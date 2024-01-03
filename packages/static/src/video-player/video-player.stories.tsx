import type {Meta} from '@storybook/react'
import React from 'react'
import VideoPlayer from './index'

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
  width: '90%',
  padding: '3rem',
}

export const Default: React.FC = () => {
  const src = 'http://techslides.com/demos/sample-videos/small.webm'

  return (
    <div style={{...style}}>
      <h3>Video Player with default</h3>
      <VideoPlayer src={src} />
      <h3>Video Player with poster</h3>
      <VideoPlayer
        src={src}
        poster='http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg'
      />
    </div>
  )
}

const meta = {
  title: 'Example/Video Player ',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
