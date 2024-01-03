import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
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
                test <FontAwesomeIcon icon={faBug} />
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

const H5RadioData = [
  {label: 'General'},
  {label: 'App issue'},
  {label: 'Booking issue'},
  {label: 'Payment'},
  {label: 'Promo code issue', disabled: true},
  {label: 'Vehicle condition'},
]

export const H5 = () => {
  return (
    <>
      <h3 style={{marginBottom: '$4'}}>H5</h3>
      <div style={{flexDirection: 'row', ...style}}>
        <Radio.Group
          // begin fix and update later
          css={{padding: '0.5rem'}}
          onChange={(value) => console.log(value)}
        >
          {H5RadioData.map(({label, disabled = false}, index) => (
            <Radio
              key={index}
              // begin fix and update later
              css={{
                '.cdg-radio-content-wrapper': {
                  '.cdg-radio-label': {
                    fontWeight: '400',
                  },
                },
              }}
              variant='h5'
              label={label}
              value={index.toString()}
              isDisabled={disabled}
            />
          ))}
        </Radio.Group>
      </div>

      <h3 style={{marginBlock: '$6 $4'}}>H5 with inputPosition: right</h3>
      <div style={{flexDirection: 'row', ...style}}>
        <Radio.Group
          // begin fix and update later
          css={{padding: '0.5rem'}}
          onChange={(value) => console.log(value)}
        >
          {H5RadioData.map(({label, disabled = false}, index) => (
            <Radio
              key={index}
              variant='h5'
              label={label}
              description={
                label +
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam eaque nulla in! Magni fugiat aliquid atque accusantium culpa, eos, nostrum, facilis eius sint incidunt ipsam excepturi praesentium. Natus, iusto?'
              }
              value={index.toString()}
              inputPosition='right'
              isDisabled={disabled}
            />
          ))}
        </Radio.Group>
      </div>
    </>
  )
}

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
