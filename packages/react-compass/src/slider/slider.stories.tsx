import React from 'react'
import Slider from './slider'

export const Default: React.FC = () => {
  return (
    <div style={{width: `250px`}}>
      <div></div>
      <Slider
        step={1}
        defaultValue={250}
        minValue={0}
        maxValue={250}
        onChange={(val) => console.log(val)}
        onChangeEnd={(val) => console.log('onChangeEnd', val)}
      ></Slider>
    </div>
  )
}
