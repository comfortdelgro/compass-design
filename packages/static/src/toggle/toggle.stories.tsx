import {Meta} from '@storybook/react'
import React from 'react'
import Toggle from './index'

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
    <h3>Small</h3>
    <div style={{flexDirection: 'row', ...style}}>
      <Toggle size='sm' />
      <Toggle size='sm' defaultSelected />
      <Toggle size='sm' isDisabled />
      <Toggle size='sm' defaultSelected isDisabled />
    </div>
    <h3>Large</h3>
    <div style={{flexDirection: 'row', ...style}}>
      <Toggle size='lg' />
      <Toggle size='lg' defaultSelected />
      <Toggle size='lg' isDisabled />
      <Toggle size='lg' defaultSelected isDisabled />
    </div>
    <h3>H5</h3>
    <div style={{flexDirection: 'row', ...style}}>
      <Toggle variant='h5' />
      <Toggle variant='h5' defaultSelected />
      <Toggle variant='h5' isDisabled />
      <Toggle variant='h5' defaultSelected isDisabled />
    </div>
  </div>
)

export const State: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Controlled</h3>
      <Toggle size='lg' isSelected={true} />

      <h3>UnControlled</h3>
      <Toggle size='lg' defaultSelected={true} />

      <h3>Disabled</h3>
      <Toggle size='lg' isDisabled />

      <h3>ReadOnly</h3>
      <Toggle size='lg' isReadOnly />

      <h3>Required</h3>
      <Toggle size='lg' isRequired />
    </div>
  )
}

const meta = {
  title: 'Example/Toggle ',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
