import React, {useState} from 'react'
import Button from '../button'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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
  css?: CSS
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
        <Button
          className={classNames(
            styles.rating,
            activeIndex === 0 && styles.active,
            styles.customButton,
          )}
          onPress={handleRatingBtnPress(0)}
          isDisabled={disabled}
        >
          <FaceSadTear />
        </Button>
        <Button
          className={classNames(
            styles.rating,
            activeIndex === 1 && styles.active,
            styles.customButton,
          )}
          onPress={handleRatingBtnPress(1)}
          isDisabled={disabled}
        >
          <FaceFrown />
        </Button>
        <Button
          className={classNames(
            styles.rating,
            activeIndex === 2 && styles.active,
            styles.customButton,
          )}
          onPress={handleRatingBtnPress(2)}
          isDisabled={disabled}
        >
          <FaceMeh />
        </Button>
        <Button
          className={classNames(
            styles.rating,
            activeIndex === 3 && styles.active,
            styles.customButton,
          )}
          onPress={handleRatingBtnPress(3)}
          isDisabled={disabled}
        >
          <FaceSmile />
        </Button>
        <Button
          className={classNames(
            styles.rating,
            activeIndex === 4 && styles.active,
            styles.customButton,
          )}
          onPress={handleRatingBtnPress(4)}
          isDisabled={disabled}
        >
          <FaceSmileHeart />
        </Button>
      </>
    )
  }
  const renderNumberButtons = () => {
    return [1, 2, 3, 4, 5].map((item, index) => {
      return (
        <Button
          className={classNames(
            styles.rating,
            activeIndex === index && styles.active,
            styles.customButton,
          )}
          onPress={handleRatingBtnPress(index)}
          key={index}
          isDisabled={disabled}
        >
          {item}
        </Button>
      )
    })
  }
  return (
    <CssInjection css={css} childrenRef={ratingRef}>
      <div
        {...htmlProps}
        ref={ratingRef}
        className={classNames(styles.ratingWrapper, className, 'cdg-rating')}
      >
        {useIcons ? renderIconButtons() : renderNumberButtons()}
      </div>
    </CssInjection>
  )
})

export default Rating
