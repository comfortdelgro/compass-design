import React, {useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  FaceFrown,
  FaceMeh,
  FaceSadTear,
  FaceSmile,
  FaceSmileHeart,
} from './constants'
import styles from './styles/rating.module.css'

interface Props {
  useIcons?: boolean
  onChange?: (point: number | null) => void
  className?: string
  id?: string
  value?: number
  readOnly?: boolean
  disabled?: boolean
  css?: unknown
}
export type RatingProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>
const Rating = React.forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
  const {
    useIcons = false,
    onChange,
    css = {},
    value = null,
    readOnly = false,
    disabled = false,
    className = '',
    ...htmlProps
  } = props
  const ratingRef = useDOMRef<HTMLDivElement>(ref)
  const [activeIndex, setActiveIndex] = useState<number | null>(value)
  const handleRatingBtnPress = (index: number) => () => {
    if (readOnly) {
      return
    }
    if (index === activeIndex) {
      setActiveIndex(null)
      onChange?.(null)
    } else {
      setActiveIndex(index)
      onChange?.(index + 1)
    }
  }
  const renderIconButtons = () => {
    return (
      <>
        <button
          className={`${styles.rating} ${activeIndex === 0 ? `${styles.active}` : ''}`}
          onClick={handleRatingBtnPress(0)}
          disabled={disabled}
        >
          <FaceSadTear />
        </button>
        <button
          className={`${styles.rating} ${activeIndex === 1 ? `${styles.active}` : ''}`}
          onClick={handleRatingBtnPress(1)}
          disabled={disabled}
        >
          <FaceFrown />
        </button>
        <button
          className={`${styles.rating} ${activeIndex === 2 ? `${styles.active}` : ''}`}
          onClick={handleRatingBtnPress(2)}
          disabled={disabled}
        >
          <FaceMeh />
        </button>
        <button
          className={`${styles.rating} ${activeIndex === 3 ? `${styles.active}` : ''}`}
          onClick={handleRatingBtnPress(3)}
          disabled={disabled}
        >
          <FaceSmile />
        </button>
        <button
          className={`${styles.rating} ${activeIndex === 4 ? `${styles.active}` : ''}`}
          onClick={handleRatingBtnPress(4)}
          disabled={disabled}
        >
          <FaceSmileHeart />
        </button>
      </>
    )
  }
  const renderNumberButtons = () => {
    return [1, 2, 3, 4, 5].map((item, index) => {
      return (
        <button
          className={`${styles.rating} ${activeIndex === index ? `${styles.active}` : ''}`}
          onClick={handleRatingBtnPress(index)}
          key={index}
          disabled={disabled}
        >
          {item}
        </button>
      )
    })
  }
  return (
    <CssInjection css={css} childrenRef={ratingRef}>
      <div ref={ratingRef} {...htmlProps} className={`cdg-rating ${styles.StyledRatingComponent} ${className}`}>
        {useIcons ? renderIconButtons() : renderNumberButtons()}
      </div>
    </CssInjection>
  )
})

export default Rating
