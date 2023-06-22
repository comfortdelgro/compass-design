import React, {useEffect, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  RangeSlider,
  RangeSliderContainer,
  SliderVariantProps,
  Thumb,
} from './slider.styles'

interface Props extends StyledComponentProps {
  isDisabled?: boolean
  tooltip?: boolean
  onChange?: (value: number) => void
  onChangeEnd?: (value: number) => void
  minValue?: number
  maxValue?: number
  step?: number
  value?: number
  defaultValue?: number
  className?: string
}

export type SliderProps = Props &
  SliderVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    isDisabled = false,
    tooltip = true,
    onChange,
    onChangeEnd,
    minValue = 0,
    maxValue = 100,
    step = 1,
    value,
    defaultValue,
    className = '',
    css = {},
    ...ariaSafeProps
  } = props
  const sliderRef = useDOMRef<HTMLDivElement>(ref)
  const [currentValue, setCurrentValue] = useState<number | undefined>(
    defaultValue,
  )
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    if (onChangeEnd && currentValue !== undefined && !dragging) {
      onChangeEnd(currentValue)
      // setIsClicked(true)
    }
  }, [dragging])

  // useEffect(() => {
  //   debugger;
  //   if (onChangeEnd && currentValue !== undefined && !dragging) {
  //     setCurrentValue(value)
  //   }
  // }, [value])

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      const thumb = slider.querySelector('.cdg-thumb') as HTMLElement
      const sliderProgress = slider.querySelector('.cdg-track') as HTMLElement
      let isDragging = false
      let prevX = 0

      const handleMouseDown = (event: MouseEvent | TouchEvent) => {
        if (isDisabled) return

        isDragging = true

        if (event instanceof MouseEvent) {
          prevX = event.clientX
        } else if (event instanceof TouchEvent) {
          const touch = event.touches[0]
          if (touch) {
            prevX = touch.clientX
          } else {
            return
          }
        }

        setDragging(true)
      }

      const handleMouseUp = () => {
        if (isDisabled) return
        isDragging = false
        setDragging(false)
      }

      const handleMouseMove = (event: MouseEvent | TouchEvent) => {
        if (!isDragging || isDisabled) return

        let clientX: number

        if (event instanceof MouseEvent) {
          clientX = event.clientX
        } else if (event instanceof TouchEvent) {
          const touch = event.touches[0]
          if (!touch) return
          clientX = touch.clientX
        } else {
          return
        }

        const deltaX = clientX - prevX
        prevX = clientX

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

      const handleMouseClick = (event: MouseEvent) => {
        if (isDisabled || isDragging) return
        const sliderWidth = slider.offsetWidth
        const thumbWidth = thumb.offsetWidth
        let clickX = event.clientX - slider.getBoundingClientRect().left
        if (clickX >= sliderWidth - thumbWidth / 2)
          clickX = sliderWidth - thumbWidth / 2
        thumb.style.left = `${Math.max(
          0 - thumbWidth,
          Math.min(clickX - (thumbWidth * 3) / 2, sliderWidth - thumbWidth),
        )}px`
        if (clickX - thumbWidth <= 0) sliderProgress.style.width = `0px`
        sliderProgress.style.width = `${clickX - thumbWidth / 2}px`
        const sliderProgressWidth = thumb.offsetLeft + thumbWidth
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

        if (onChangeEnd) {
          onChangeEnd(newValue)
        }
      }

      slider.addEventListener('click', handleMouseClick)
      thumb.addEventListener('touchstart', handleMouseDown)
      thumb.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('touchend', handleMouseUp)
      document.addEventListener('touchmove', handleMouseMove)

      // Set the initial value and position of the thumb based on defaultValue prop
      if (defaultValue !== undefined || value !== undefined) {
        // Update the thumb's position after defaultValue is available
        const updateThumbPosition = () => {
          const sliderWidth = slider.offsetWidth
          const thumbWidth = thumb.offsetWidth
          const initValue =
            value !== undefined ? value : defaultValue || minValue
          const progressWidth =
            ((initValue - minValue) / (maxValue - minValue)) * sliderWidth -
            thumbWidth
          thumb.style.left = `${Math.max(
            0 - thumbWidth,
            Math.min(progressWidth - thumbWidth, sliderWidth - thumbWidth),
          )}px`
          sliderProgress.style.width = `${progressWidth}px`
          setCurrentValue(defaultValue)
          thumb.setAttribute('value', initValue.toString())
        }
        updateThumbPosition()
      }

      return () => {
        thumb.removeEventListener('mousedown', handleMouseDown)
        thumb.removeEventListener('touchstart', handleMouseDown)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('touchend', handleMouseUp)
        document.removeEventListener('touchmove', handleMouseMove)
        slider.removeEventListener('click', handleMouseClick)
      }
    }
    return () => {
      console.log('slider not found!!!')
    }
  }, [isDisabled, minValue, maxValue, step, onChange, defaultValue, value])

  const componentProps = () => {
    return {
      className,
      css,
      ...ariaSafeProps,
    }
  }

  const delegateProps = componentProps()

  return (
    <RangeSliderContainer
      {...delegateProps}
      className={`cdg-range-slider ${className}`}
      tabIndex={0}
      ref={sliderRef}
      disabled={isDisabled}
    >
      <RangeSlider className='cdg-track'>
        <Thumb className={`cdg-thumb ${tooltip ? `cdg-thumb-tooltips` : ''}`} />
      </RangeSlider>
    </RangeSliderContainer>
  )
})
export default Slider
