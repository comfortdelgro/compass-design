import React, {useEffect, useRef, useState} from 'react'
import './styles.css'

interface SliderProps {
  isDisabled?: boolean
  tooltip?: boolean
  onChange?: (value: number) => void
  minValue?: number
  maxValue?: number
  step?: number
  value?: number
  defaultValue?: number
  className?: string
}

const Slider: React.FC<SliderProps> = ({
  isDisabled = false,
  tooltip = false,
  onChange,
  minValue = 0,
  maxValue = 100,
  step = 1,
  value,
  defaultValue,
  className = '',
}) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentValue, setCurrentValue] = useState<number | undefined>(
    defaultValue,
  )

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      const thumb = slider.querySelector('.thumb') as HTMLElement
      const sliderProgress = slider.querySelector(
        '.range-slider',
      ) as HTMLElement
      let isDragging = false
      let prevX = 0

      const handleMouseDown = (event: MouseEvent) => {
        if (isDisabled) return
        isDragging = true
        prevX = event.clientX
      }

      const handleMouseUp = () => {
        if (isDisabled) return
        isDragging = false
      }

      const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging || isDisabled) return
        const deltaX = event.clientX - prevX
        prevX = event.clientX
        const newLeft = thumb.offsetLeft + deltaX
        const sliderWidth = slider.offsetWidth
        const thumbWidth = thumb.offsetWidth
        thumb.style.left = `${Math.max(
          0 - thumbWidth,
          Math.min(newLeft, sliderWidth - thumbWidth * 2),
        )}px`
        const sliderProgressWidth = thumb.offsetLeft + thumbWidth
        sliderProgress.style.width = `${sliderProgressWidth}px`

        const newValue =
          Math.round(
            ((sliderProgressWidth / (sliderWidth - thumbWidth)) *
              (maxValue - minValue)) /
              step,
          ) *
            step +
          minValue
        setCurrentValue(newValue)
        thumb.setAttribute('value', newValue.toString())
        if (onChange) {
          onChange(newValue)
        }
      }

      thumb.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)

      // Set the initial value and position of the thumb based on defaultValue prop
      if (defaultValue !== undefined) {
        // Update the thumb's position after defaultValue is available
        const updateThumbPosition = () => {
          const sliderWidth = slider.offsetWidth
          const thumbWidth = thumb.offsetWidth
          const progressWidth =
            ((defaultValue - minValue) / (maxValue - minValue)) * sliderWidth -
            thumbWidth
          thumb.style.left = `${Math.max(
            0 - thumbWidth,
            Math.min(progressWidth - thumbWidth, sliderWidth - thumbWidth),
          )}px`
          sliderProgress.style.width = `${progressWidth}px`
          setCurrentValue(defaultValue)
          thumb.setAttribute('value', defaultValue.toString())
        }
        updateThumbPosition()
      }

      return () => {
        thumb.removeEventListener('mousedown', handleMouseDown)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isDisabled, minValue, maxValue, step, onChange, defaultValue])

  return (
    <div
      className={`cdg-range-slider ${className}`}
      tabIndex={0}
      ref={sliderRef}
    >
      <div className='range-slider'>
        <div className='thumb' />
      </div>
    </div>
  )
}

export default Slider
