import React, {useEffect, useState} from 'react'
import {
  StyledInputStar,
  StyledInputStarWrapper,
  StyledRatingv2Component,
} from './rating-v2.styles'

export type RatingV2Props = {
  maxRating?: number
  currentRating?: number
  onChange?: (newRating: number) => void
  disabled?: boolean
  readOnly?: boolean
  renderStar?: (isFilled: boolean, value: number) => React.ReactNode
  className?: string
}

const RatingV2 = React.forwardRef<HTMLDivElement, RatingV2Props>(
  (props, ref) => {
    const {
      maxRating = 5,
      currentRating = 0,
      onChange,
      disabled,
      readOnly,
      renderStar,
      ...delegated
    } = props
    const [rating, setRating] = useState(currentRating)
    const [noOutline, setNoOutline] = useState(true)

    const groupName = `rating-group-${Math.random()
      .toString(36)
      .substring(2, 15)}`

    useEffect(() => {
      setRating(currentRating)
    }, [currentRating])

    const handleChange = (value: number) => {
      if (disabled || readOnly) return
      setRating(value)
      if (onChange) {
        onChange(value)
      }
    }

    useEffect(() => {
      const handleMouseDown = () => {
        setNoOutline(true)
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          setNoOutline(false)
        }
      }

      document.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('mousedown', handleMouseDown)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [])

    const defaultRenderStarVisual = (isFilled: boolean) => (
      <span>
        {' '}
        {isFilled ? (
          <svg height='25' width='23'>
            <polygon
              points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
              fill='#ffd055'
            ></polygon>
          </svg>
        ) : (
          <svg height='25' width='23'>
            <polygon points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78' />
          </svg>
        )}
      </span>
    )

    const stars = Array.from({length: maxRating}, (_, index) => {
      const value = index + 1
      const isFilled = value <= rating
      const checked = rating === value

      const starVisual = renderStar
        ? renderStar(isFilled, value)
        : defaultRenderStarVisual(isFilled)

      return (
        <React.Fragment key={value}>
          <StyledInputStarWrapper
            htmlFor={`${groupName}-${value}`}
            className={`noOutline-${noOutline}`}
          >
            <StyledInputStar
              type='radio'
              role='radio'
              id={`${groupName}-${value}`}
              name={groupName}
              value={value}
              checked={checked}
              disabled={disabled || readOnly}
              aria-checked={checked}
              aria-disabled={disabled || readOnly}
              onChange={() => handleChange(value)}
            />
            {starVisual}
          </StyledInputStarWrapper>
        </React.Fragment>
      )
    })

    return (
      <StyledRatingv2Component
        ref={ref}
        role='radiogroup'
        aria-disabled={disabled}
        aria-readonly={readOnly}
        {...delegated}
      >
        {stars}
      </StyledRatingv2Component>
    )
  },
)

export default RatingV2
