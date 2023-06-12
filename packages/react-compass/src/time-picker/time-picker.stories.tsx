import React from 'react'
import {Column, Row} from '../utils/components'
import TimePicker from './index'

export const Default: React.FC = () => (
  <>
    <Column>
      <h3>With 12-hours</h3>
      <Row>
        <TimePicker
          formatTime='hh:mm:ss AA'
          views={['hours12', 'minutes', 'seconds', 'sessions']}
          hasFooter={false}
          // onTimeChange={(value: string) => {
          //   console.log(value)
          // }}
        />
      </Row>
      {/* <h3>With 24-hours</h3>
      <Row>
        <TimePicker
          onTimeChange={(value: string) => {
            console.log(value)
          }}
        />
      </Row>
      <h3>Without footer</h3>
      <Row>
        <TimePicker
          formatTime='hh:mm:ss'
          views={['hours12', 'minutes', 'seconds']}
          hasFooter={false}
          onTimeChange={(value: string) => {
            console.log(value)
          }}
        />
      </Row>
      <h3>Format: mm:ss</h3>
      <Row>
        <TimePicker
          formatTime='mm:ss'
          views={['minutes', 'seconds']}
          hasFooter={false}
          onTimeChange={(value: string) => {
            console.log(value)
          }}
        />
      </Row> */}
    </Column>
  </>
)
