import {Slider} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div style={{width: '100%'}}>
        <Slider defaultValue={25} />
      </div>
      <div style={{width: '100%'}}>
        <Slider.Range defaultValue={{start: 12, end: 36}} />
      </div>
      <div style={{width: '100%'}}>
        <Slider isDisabled />
      </div>
      <div style={{width: '100%'}}>
        <Slider tooltip={false} />
      </div>
    </div>
  )
}

export default BasicExample
