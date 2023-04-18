import React, {useEffect, useRef, useState} from 'react'
import {SliderContainer, Thumb} from './volume-slider.styles'

interface VerticalSliderProps {
  value: number
  onChange: (value: number) => void
}

interface ProgressProps {
  value: number
}

type Position = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'

const VolumeSlider: React.FC<VerticalSliderProps> = ({value, onChange}) => {
  const [sliderValue, setSliderValue] = useState(value)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--slider-value', String(sliderValue))
      console.log('value', sliderValue)
    }
  }, [sliderValue])

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (event: MouseEvent) => {
    const slider = sliderRef.current
    if (slider) {
      const sliderRect = slider.getBoundingClientRect()
      const sliderHeight = sliderRect.height
      const offsetY = event.clientY - sliderRect.top
      const percent = Math.max(0, Math.min(1, offsetY / sliderHeight))
      const newValue = Math.round((1 - percent) * 100) // Update the value calculation
      setSliderValue(newValue)
      onChange(newValue)
    }
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current
    if (slider) {
      const sliderRect = slider.getBoundingClientRect()
      const sliderHeight = sliderRect.height
      const offsetY = event.clientY - sliderRect.top
      const percent = Math.max(0, Math.min(1, offsetY / sliderHeight))
      const newValue = Math.round((1 - percent) * 100)
      setSliderValue(newValue)
      onChange(newValue)
    }
  }

  const Progress = ({value}: ProgressProps) => {
    const progressBarStyles = {
      position: 'absolute' as Position,
      bottom: '0',
      width: '100%',
      height: `${value}%`,
      background: '#ffffff',
      borderRadius: '9999px',
    }
    return (
      <div>
        <div style={progressBarStyles} />
      </div>
    )
  }

  return (
    <SliderContainer
      className='vertical-slider'
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <Thumb
        className='slider-thumb'
        style={{
          top: `calc(${sliderValue}% - 8px)`,
        }}
      ></Thumb>
      <Progress value={sliderValue} />
    </SliderContainer>
  )
}

export default VolumeSlider
