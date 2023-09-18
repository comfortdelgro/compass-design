import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import Typography from '../typography'
import {Column, Row} from '../utils/components'
import Radio from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = useState('1')
  return (
    <Column>
      <h3>Outlined</h3>
      <Row>
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
      </Row>
      <h3>Simple</h3>
      <Row>
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
      </Row>

      <h3>Controlled</h3>
      <h4>Selected Value: {value}</h4>
      <Row>
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
      </Row>
    </Column>
  )
}

export const Orientation: React.FC = () => (
  <Column>
    <h3>Horizontal</h3>
    <Row>
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
    </Row>
    <h3>Vertical</h3>
    <Row>
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
    </Row>
  </Column>
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
      <Typography.Header variant='header4' css={{marginBottom: '$4'}}>
        H5
      </Typography.Header>
      <Row>
        <Radio.Group
          css={{padding: 0}}
          onChange={(value) => console.log(value)}
        >
          {H5RadioData.map(({label, disabled = false}, index) => (
            <Radio
              key={index}
              css={{
                '.radio-content-wrapper .radio-label': {
                  fontWeight: '$normal',
                },
              }}
              variant='h5'
              label={label}
              value={index.toString()}
              isDisabled={disabled}
            />
          ))}
        </Radio.Group>
      </Row>

      <Typography.Header variant='header4' css={{marginBlock: '$6 $4'}}>
        H5 with inputPosition: right
      </Typography.Header>
      <Row>
        <Radio.Group
          css={{padding: 0}}
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
      </Row>
    </>
  )
}
