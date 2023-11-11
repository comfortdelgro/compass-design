import React, {useEffect, useRef, useState} from 'react'
import styles from '../styles/volume-slider.module.css'

interface VerticalSliderProps {
  value: number
  onChange: (value: number) => void
}

interface ProgressProps {
  value: number
}

const VolumeSlider: React.FC<VerticalSliderProps> = ({value, onChange}) => {
  const [sliderValue, setSliderValue] = useState(value)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--slider-value', String(sliderValue))
    }
  }, [sliderValue])

  useEffect(() => {
    if (value) {
      setSliderValue(value)
    }
  }, [value])

  const handleMouseDown = () => {
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
      height: `${value}%`,
    }
    return (
      <div>
        <div className={styles.progressBar} style={progressBarStyles} />
      </div>
    )
  }

  return (
    <div
      ref={sliderRef}
      className={`cdg-video-vertical-slider ${styles.sliderContainer}`}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div
        className={`cdg-video-slider-thumb ${styles.thumb}`}
        style={{
          top: `calc(${sliderValue}% - 8px)`,
        }}
      ></div>
      <Progress value={sliderValue} />
    </div>
  )
}

export default VolumeSlider
