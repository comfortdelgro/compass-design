import type {Meta} from '@storybook/react'
import React from 'react'
import Dropdown from './index'

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
      <h3>Basic Dropdown</h3>
      <Dropdown
        style={{width: 500}}
        placeholder='Select an item'
        label='Test 1'
      >
        <Dropdown.Item checkmark='tick' value='panda'>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
        <Dropdown.Item value='dog1'>Dog1</Dropdown.Item>
        <Dropdown.Item value='aardvark1'>Aardvark1</Dropdown.Item>
        <Dropdown.Item value='kangaroo1'>Kangaroo1</Dropdown.Item>
        <Dropdown.Item value='snakessss1'>Snake1</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

const meta = {
  title: 'Example/Dropdown Server',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
