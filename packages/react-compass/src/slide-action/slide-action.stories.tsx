import React from 'react'
import Typography from '../typography'
import SliderAction from './slide-action'

export function Default() {
  return (
    <div>
      <Typography.Header variant='header3' css={{marginBottom: '$4'}}>
        Slider Action
      </Typography.Header>
      <SliderAction>
        <div>Slide to cancel</div>
      </SliderAction>
    </div>
  )
}
