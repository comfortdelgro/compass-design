import {Column, Row} from '../utils/components'
import Slider from './slider'

export const Sliders: React.FC = () => (
  <Column>
    <Row>
      <div style={{width: '100%', marginBottom: '2rem'}}>
        <Slider />
      </div>
    </Row>
    <Row>
      <div style={{width: '100%', marginBottom: '2rem'}}>
        <Slider value={20} onChangeEnd={(val) => console.log(val)} />
      </div>
    </Row>
    <Row>
      <div style={{width: '100%', marginBottom: '2rem'}}>
        <Slider isDisabled />
      </div>
    </Row>
  </Column>
)
