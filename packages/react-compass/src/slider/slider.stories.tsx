import React, {useState} from 'react'
import Slider from './slider'

export const Sliders: React.FC = () => {
  const [value, setValue] = useState<number>(20)
  return (
    <div style={{width: `250px`}}>
      <Slider
        color='red'
        max={100}
        min={0}
        onChange={() => {
          console.log('sdf')
        }}
      ></Slider>
    </div>
  )
}
