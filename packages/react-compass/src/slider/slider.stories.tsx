import {useState} from 'react'
import {Column, Row} from '../utils/components'
import Slider from './slider'

export const Sliders: React.FC = () => {
  const [value, setValue] = useState<number>(20)
  return (
    <Column>
      <h1>Slider</h1>
      <Row>
        <div style={{width: '100%', marginBottom: '2rem'}}>
          <h3>Uncontrolled slider</h3>
          <Slider />
        </div>
      </Row>
      <Row>
        <div style={{width: '100%', marginBottom: '2rem'}}>
          <h3>Controlled slider</h3>
          <Slider value={value} onChange={(val) => setValue(val)} />
        </div>
      </Row>
      <Row>
        <div style={{width: '100%', marginBottom: '2rem'}}>
          <h3>Disabled slider</h3>
          <Slider isDisabled />
        </div>
      </Row>
    </Column>
  )
}
