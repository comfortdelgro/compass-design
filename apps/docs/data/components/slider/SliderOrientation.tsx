import {Slider} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
      <div style={{height: 300, width: 30}}>
        <Slider defaultValue={25} orientation='vertical' />
      </div>
      <div style={{height: 300, width: 30}}>
        <Slider.Range
          defaultValue={{start: 12, end: 36}}
          orientation='vertical'
        />
      </div>
    </div>
  )
}

export default BasicExample
