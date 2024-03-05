'use client'

import {Meta} from '@storybook/react'
import React from 'react'
import SubBanner from './index'

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

const horizontalBackgroundSrc =
  'https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

const verticalBackgroundSrc =
  'https://images.unsplash.com/photo-1603015268794-b0a30631554d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

export const Default: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Default Sub-banner is primary variant</h3>
      <SubBanner>
        <SubBanner.Image src={horizontalBackgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>
    </div>
  )
}

export const Variant: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Primary</h3>
      <SubBanner variant='primary'>
        <SubBanner.Image src={horizontalBackgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>

      <h3>Secondary</h3>
      <SubBanner variant='secondary'>
        <SubBanner.Image src={verticalBackgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>
    </div>
  )
}

const meta = {
  title: 'Example/SubBanner',
  component: Variant,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variant>

export default meta
