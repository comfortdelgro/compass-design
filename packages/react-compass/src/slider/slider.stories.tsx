import React, {useState} from 'react'
import Slider from './slider'

export const Sliders: React.FC = () => {
  const [value, setValue] = useState<number>(20)
  return (
    <div style={{width: `250px`}}>
      <div></div>
      <Slider></Slider>
    </div>
  )
}
