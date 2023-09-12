import React, {useEffect, useState} from 'react'

export type RatingProps = {
  maxRating: number
  currentRating: number
  onChange?: (newRating: number) => void
  disabled?: boolean
  renderStar?: (
    isFilled: boolean,
    value: number,
    onClick: () => void,
  ) => React.ReactNode
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
  const {maxRating, currentRating, onChange, disabled, renderStar} = props

  const [rating, setRating] = useState(currentRating)

  useEffect(() => {
    setRating(currentRating)
  }, [currentRating])

  const handleClick = (value: number) => {
    if (disabled) return
    setRating(value)
    if (onChange) {
      onChange(value)
    }
  }

  const defaultRenderStar = (
    isFilled: boolean,
    value: number,
    onClick: () => void,
  ) => (
    <span
      onClick={onClick}
      style={{
        cursor: disabled ? 'default' : 'pointer',
        marginRight: '5px',
      }}
    >
      {isFilled ? '⭐' : '☆'}
    </span>
  )

  const stars = Array.from({length: maxRating}, (_, index) => {
    const value = index + 1
    const isFilled = value <= rating

    return (
      <React.Fragment key={value}>
        {renderStar
          ? renderStar(isFilled, value, () => handleClick(value))
          : defaultRenderStar(isFilled, value, () => handleClick(value))}
      </React.Fragment>
    )
  })

  return <div ref={ref}>{stars}</div>
})

Rating.defaultProps = {
  maxRating: 5,
  currentRating: 0,
  disabled: false,
}

export default Rating
