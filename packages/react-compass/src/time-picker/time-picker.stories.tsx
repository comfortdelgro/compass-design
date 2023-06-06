import React from 'react'
import {Column, Row} from '../utils/components'
import TimePicker from './index'

export const Variations: React.FC = () => (
  <>
    <Column>
      <h3>With HALF_FORMAT</h3>
      <Row>
        <TimePicker
          format='HALF_FORMAT'
          hasFooter={false}
          onTimeChange={(value: string) => {
            console.log(value)
          }}
        />
      </Row>
      <h3>With FULL_FORMAT</h3>
      <Row>
        <TimePicker
          format='FULL_FORMAT'
          onTimeChange={(value: string) => {
            console.log(value)
          }}
        />
      </Row>
      <h3>Without footer</h3>
      <Row>
        <TimePicker
          format='HALF_FORMAT'
          hasFooter={false}
          onTimeChange={(value: string) => {
            console.log(value)
          }}
        />
      </Row>
    </Column>
  </>
)
