<<<<<<< HEAD
import React, {useState} from 'react'
import {Column, Row} from '../utils/components'
import Slider from './index'
=======
import React from 'react'
import Slider from './slider'
>>>>>>> f9a8279480ff9c139121ba4c9c1deb08e4f5bd03

export const Sliders: React.FC = () => {
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
