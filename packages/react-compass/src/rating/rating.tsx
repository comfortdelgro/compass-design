import React, {useState} from 'react'
import Button from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  FaceFrown,
  FaceMeh,
  FaceSadTear,
  FaceSmile,
  FaceSmileHeart,
} from './constants'
import {RatingVariantProps, StyledRatingComponent} from './rating.styles'
interface Props extends StyledComponentProps {
  useIcons?: boolean
  onChange?: (point: number | null) => void
  className?: string
  id?: string
  value?: number
  readOnly?: boolean
  disabled?: boolean
}
export type RatingProps = Props &
  RatingVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>
const Rating = React.forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
  const {
    useIcons = false,
    onChange,
    css = {},
    value = null,
    readOnly = false,
    disabled = false,
    ...delegated
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
          className={`rating ${activeIndex === 0 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(0)}
          isDisabled={disabled}
        >
          <FaceSadTear />
        </Button>
        <Button
          className={`rating ${activeIndex === 1 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(1)}
          isDisabled={disabled}
        >
          <FaceFrown />
        </Button>
        <Button
          className={`rating ${activeIndex === 2 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(2)}
          isDisabled={disabled}
        >
          <FaceMeh />
        </Button>
        <Button
          className={`rating ${activeIndex === 3 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(3)}
          isDisabled={disabled}
        >
          <FaceSmile />
        </Button>
        <Button
          className={`rating ${activeIndex === 4 ? 'active' : ''}`}
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
          className={`rating ${activeIndex === index ? 'active' : ''}`}
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
    <StyledRatingComponent ref={ratingRef} css={css} {...delegated}>
      {useIcons ? renderIconButtons() : renderNumberButtons()}
    </StyledRatingComponent>
  )
})

export default Rating
