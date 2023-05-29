import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
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
            setValue(value)
          }}
          onBlur={() => {
            alert('onBlur triggered!!')
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
