import HeartFilled from '@comfortdelgro/compass-icons/react/filled/heart-filled'
import {Meta} from '@storybook/react'
import React, {useState} from 'react'
import Radio from './index'

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

export const Variants: React.FC = () => {
  const [value, setValue] = useState('1')
  return (
    <div style={{...style}}>
      <h3>Outlined</h3>
      <div style={{flexDirection: 'row', ...style}}>
        <Radio.Group>
          <Radio
            variant='outlined'
            label={
              <>
                test <HeartFilled />
              </>
            }
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='1'
            tooltip='This is tooltip'
            id='item1'
          />
          <Radio
            variant='outlined'
            label='test2'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='2'
          />
          <Radio
            variant='outlined'
            label='test3'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='3'
            isDisabled
          />
        </Radio.Group>
      </div>
      <h3>Simple</h3>
      <div style={{flexDirection: 'row', ...style}}>
        <Radio.Group>
          <Radio
            variant='simple'
            label='test'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='1'
            tooltip='This is tooltip'
          />
          <Radio
            variant='simple'
            label='test2'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='2'
          />
          <Radio
            variant='simple'
            label='test3'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='3'
            isDisabled
          />
        </Radio.Group>
      </div>

      <h3>Controlled</h3>
      <h4>Selected Value: {value}</h4>
      <div style={{flexDirection: 'row', ...style}}>
        <Radio.Group
          value={value}
          onChange={(value) => {
            console.log('onChange')
            setValue(value)
          }}
          onBlur={() => {
            console.log('onBlur')
          }}
        >
          <Radio
            variant='simple'
            label='test'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='1'
            tooltip='This is tooltip'
          />
          <Radio
            variant='simple'
            label='test2'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='2'
          />
          <Radio
            variant='simple'
            label='test3'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            value='3'
            isDisabled
          />
        </Radio.Group>
      </div>
    </div>
  )
}

export const Orientation: React.FC = () => (
  <div style={{...style}}>
    <h3>Horizontal</h3>
    <div style={{flexDirection: 'row', ...style}}>
      <Radio.Group orientation='horizontal'>
        <Radio
          label='test'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
        />
        <Radio
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
      </Radio.Group>
    </div>
    <h3>Vertical</h3>
    <div style={{flexDirection: 'row', ...style}}>
      <Radio.Group orientation='vertical'>
        <Radio
          label='test'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
        />
        <Radio
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
      </Radio.Group>
    </div>
  </div>
)

const meta = {
  title: 'Example/Radio',
  component: Orientation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Orientation>

export default meta
