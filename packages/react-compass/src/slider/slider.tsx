import React, {useEffect, useRef} from 'react'
import './styles.css'
const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      const thumb = slider.querySelector('.thumb') as HTMLElement
      const sliderProgess = slider.querySelector('.range-slider') as HTMLElement
      let isDragging = false
      let prevX = 0

      const handleMouseDown = (event: MouseEvent) => {
        isDragging = true
        prevX = event.clientX
      }

      const handleMouseUp = () => {
        isDragging = false
      }

      const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging) return
        const deltaX = event.clientX - prevX
        prevX = event.clientX
        const newLeft = thumb.offsetLeft + deltaX
        const sliderWidth = slider.offsetWidth
        const thumbWidth = thumb.offsetWidth
        thumb.style.left = `${Math.max(
          0 - thumbWidth,
          Math.min(newLeft, sliderWidth - thumbWidth),
        )}px`
        const sliderProgressWidth = thumb.offsetLeft + thumbWidth // Update the progress track width based on thumb position and thumb width
        sliderProgess.style.width = `${sliderProgressWidth}px`
        // Update the value attribute based on the thumb position
        const minValue = 0
        const maxValue = 100
        const value =
          Math.round(
            (sliderProgressWidth / sliderWidth) * (maxValue - minValue),
          ) + minValue
        thumb.setAttribute('value', value.toString())
      }

      thumb.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)

      return () => {
        thumb.removeEventListener('mousedown', handleMouseDown)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div className='cdg-range-slider' tabIndex={0} ref={sliderRef}>
      <div className='range-slider'>
        <div className='thumb' />
      </div>
    </div>
  )
}

export default Slider
