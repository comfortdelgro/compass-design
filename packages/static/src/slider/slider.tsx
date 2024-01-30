'use client'

import React, {HTMLAttributes, useEffect, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import classes from './styles/slider.module.css'

interface Props {
  css?: unknown
  isDisabled?: boolean
  tooltip?: boolean
  onChange?: (value: number) => void
  onChangeEnd?: (value: number) => void
  minValue?: number
  maxValue?: number
  step?: number
  value?: number
  defaultValue?: number
}

export type SliderProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

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
    ...htmlDivAttributes
  } = props
  const sliderRef = useDOMRef<HTMLDivElement>(ref)
  const [currentValue, setCurrentValue] = useState<number | undefined>(
    defaultValue,
  )
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    if (onChangeEnd && currentValue !== undefined && !dragging) {
      onChangeEnd(currentValue)
    }
  }, [currentValue, dragging, onChangeEnd])

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      const thumb = slider.querySelector(
        '.cdg-range-slider-thumb',
      ) as HTMLElement
      const sliderProgress = slider.querySelector(
        '.cdg-range-slider-progress',
      ) as HTMLElement
      let isDragging = false
      let prevX = 0

      const handleMouseDown = (event: MouseEvent) => {
        if (isDisabled) return
        isDragging = true
        prevX = event.clientX
        setDragging(true)
      }

      const handleMouseUp = () => {
        if (isDisabled) return
        isDragging = false
        setDragging(false)
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
      thumb.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)

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
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('mousemove', handleMouseMove)
        slider.removeEventListener('click', handleMouseClick)
      }
    }
    return () => {
      console.log('slider not found!!!')
    }
  }, [
    isDisabled,
    minValue,
    maxValue,
    step,
    onChange,
    defaultValue,
    value,
    sliderRef,
    onChangeEnd,
  ])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key
    const updateThumbPosition = (newValue: number) => {
      const slider = sliderRef.current
      if (slider) {
        const thumb = slider.querySelector(
          '.cdg-range-slider-thumb',
        ) as HTMLElement
        const sliderProgress = slider.querySelector(
          '.cdg-range-slider-progress',
        ) as HTMLElement
        const sliderWidth = slider.offsetWidth
        const thumbWidth = thumb.offsetWidth
        const progressWidth =
          ((newValue - minValue) / (maxValue - minValue)) * sliderWidth -
          thumbWidth
        thumb.style.left = `${Math.max(
          0 - thumbWidth,
          Math.min(progressWidth - thumbWidth, sliderWidth - thumbWidth),
        )}px`
        sliderProgress.style.width = `${progressWidth}px`
        setCurrentValue(newValue)
        onChange?.(newValue)
        onChangeEnd?.(newValue)
        thumb.setAttribute('value', newValue.toString())
      }
    }
    if (key === 'ArrowRight' && currentValue !== undefined) {
      event.preventDefault()
      event.stopPropagation()
      const value = Math.min(currentValue + step, maxValue)
      updateThumbPosition(value)
    }
    if (key === 'ArrowLeft' && currentValue !== undefined) {
      event.preventDefault()
      event.stopPropagation()
      const value = Math.max(currentValue - step, minValue)
      updateThumbPosition(value)
    }
    htmlDivAttributes.onKeyDown?.(event)
  }

  const rootClasses = [
    classes.rangeSliderContainer,
    isDisabled ? classes.disabled : '',
    className,
    'cdg-range-slider',
  ]
    .filter(Boolean)
    .join(' ')

  const thumbClasses = [
    classes.rangeSliderThumb,
    tooltip && `${classes.thumbTooltip} cdg-range-slider-thumb-tooltips`,
    'cdg-range-slider-thumb',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection childrenRef={sliderRef} css={css}>
      <div
        ref={sliderRef}
        className={rootClasses}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        {...htmlDivAttributes}
      >
        <div
          className={`${classes.rangeSliderProgress} cdg-range-slider-progress`}
        >
          <div className={thumbClasses} />
        </div>
      </div>
    </CssInjection>
  )
})
export default Slider
