'use client'

import {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import SubHeader from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  height: string
  width: string
  gap: string
} = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  gap: '0.5rem',
}

export const Default: React.FC = () => {
  return (
    <div style={{padding: '3em'}}>
      <div style={{marginBottom: '2rem', ...style, alignItems: 'flex-start'}}>
        <h3>Default</h3>
        <SubHeader>
          <SubHeader.Header>
            <SubHeader.Title>Title</SubHeader.Title>
          </SubHeader.Header>
          <SubHeader.Description>Description.</SubHeader.Description>
        </SubHeader>

        <h3>With actions</h3>
        <SubHeader
          variant='h5'
          css={{
            '@mobile': {
              flexDirection: 'column',
              alignItems: 'unset',
            },
          }}
        >
          <div style={{flex: 1, ...style}}>
            <SubHeader.Header>
              <SubHeader.Title>Title</SubHeader.Title>
            </SubHeader.Header>
            <SubHeader.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              harum quaerat earum vitae veritatis molestiae vel commodi iste
              tempore magni, officia eaque repudiandae pariatur voluptate
              maiores debitis sed, reprehenderit assumenda.
            </SubHeader.Description>
          </div>
          <div
            style={{
              ...style,
              width: 'fit-content',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Button type='button' size='sm'>
              Call to action
            </Button>
            <Button type='button' variant='secondary' size='sm'>
              Call to action
            </Button>
          </div>
        </SubHeader>
      </div>

      <h3>H5</h3>
      <div
        style={{
          position: 'relative',
          width: 375,
          height: 500,
          backgroundColor: '#f4f4f4',
          border: '1px solid #f0f0f0',
        }}
      >
        <div style={style}>
          <SubHeader variant='h5'>
            <SubHeader.Body>
              <SubHeader.Header>
                <SubHeader.Title variant='h5'>Main Title</SubHeader.Title>
              </SubHeader.Header>
              <SubHeader.Description variant='h5'>
                First line description! <br />
                Second line description!
              </SubHeader.Description>
            </SubHeader.Body>
            <SubHeader.Image src='https://i.ibb.co/Tr9kWZ9/Image.png' />
          </SubHeader>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/Sub Header',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
