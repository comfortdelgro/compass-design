import {Meta} from '@storybook/react'
import React from 'react'
import Slider from './slider'
import classes from './styles/slider-stories.module.css'

export const Default: React.FC = () => {
  return (
    <div className={classes.sliderStories}>
      <h4>Default</h4>
      <div className={classes.showCase}>
        <Slider />
      </div>

      <h4>Value and step</h4>
      <div className={classes.showCase}>
        <Slider
          step={5}
          defaultValue={50}
          minValue={-20}
          maxValue={120}
          onChange={(val) => console.log(val)}
          onChangeEnd={(val) => console.log('onChangeEnd', val)}
        />
      </div>

      <h4>Disabled</h4>
      <div className={classes.showCase}>
        <Slider isDisabled />
      </div>
    </div>
  )
}

const meta = {
  title: 'Example/Slider',
  component: Default,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
