import {Slider} from '@comfortdelgro/react-compass-old'

function BasicExample() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div style={{width: '100%'}}>
        <Slider />
      </div>
      <div style={{width: '100%'}}>
        <Slider value={20} onChangeEnd={(val) => console.log(val)} />
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
