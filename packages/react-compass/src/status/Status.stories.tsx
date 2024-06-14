import HeartFilled from '@comfortdelgro/compass-icons/react/filled/heart-filled'
import type {Meta} from '@storybook/react'
import React from 'react'
import Status from './index'
import {STATUS_SIZE_MAP, StatusSize} from './status.const'

export const Variants: React.FC = () => (
  <div
    style={{
      padding: '20px',
      background: '#f2f2f2',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      {Object.keys(STATUS_SIZE_MAP).map((size) => {
        return <Status key={size} type='online' size={size as StatusSize} />
      })}
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      {Object.keys(STATUS_SIZE_MAP).map((size) => {
        return <Status key={size} type='offline' size={size as StatusSize} />
      })}
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      {Object.keys(STATUS_SIZE_MAP).map((size) => {
        return <Status key={size} type='verified' size={size as StatusSize} />
      })}
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      {Object.keys(STATUS_SIZE_MAP).map((size) => {
        return <Status key={size} type='zig' size={size as StatusSize} />
      })}
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
      {Object.keys(STATUS_SIZE_MAP).map((size, index) => {
        return (
          <Status
            key={size}
            type='icon'
            icon={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#6554C0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: 6 + index * 2 + 'px',
                }}
              >
                <HeartFilled />
              </div>
            }
            size={size as StatusSize}
          />
        )
      })}
    </div>
  </div>
)

const meta = {
  title: 'Example/Status',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
