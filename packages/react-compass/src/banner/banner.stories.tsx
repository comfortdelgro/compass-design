'use client'

import type {Meta} from '@storybook/react'
import React from 'react'
import Banner from './index'

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

const backgroundSrc =
  'https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

export const Basic: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Default banner is medium sized</h3>
      <Banner>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </Banner.Description>
      </Banner>
    </div>
  )
}

export const Sizes: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Small sized Banner</h3>
      <Banner size='sm'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Medium sized Banner</h3>
      <Banner size='md'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Large sized Banner</h3>
      <Banner size='lg'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Full sized Banner</h3>
      <Banner size='full'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>
    </div>
  )
}

const meta = {
  title: 'Example/Banner',
  component: Sizes,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sizes>

export default meta
