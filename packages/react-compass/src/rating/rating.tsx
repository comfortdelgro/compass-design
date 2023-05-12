import FaceFrown from '@comfortdelgro/compass-icons/react/face-frown'
import FaceMeh from '@comfortdelgro/compass-icons/react/face-meh'
import FaceSadTear from '@comfortdelgro/compass-icons/react/face-sad-tear'
import FaceSmile from '@comfortdelgro/compass-icons/react/face-smile'
import FaceSmileHeart from '@comfortdelgro/compass-icons/react/face-smile-heart'
import React, {useState} from 'react'
import Button from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledRatingComponent} from './rating.styles'
export interface RatingProps extends StyledComponentProps {
  useIcons?: boolean
  onChange?: (point: number | null) => void
}
const Rating = React.forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
  const {useIcons = false, onChange} = props
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleRatingBtnPress = (index: number) => () => {
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
        >
          <FaceSadTear width={32} height={32} />
        </Button>
        <Button
          className={`rating ${activeIndex === 1 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(1)}
        >
          <FaceFrown width={32} height={32} />
        </Button>
        <Button
          className={`rating ${activeIndex === 2 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(2)}
        >
          <FaceMeh width={32} height={32} />
        </Button>
        <Button
          className={`rating ${activeIndex === 3 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(3)}
        >
          <FaceSmile width={32} height={32} />
        </Button>
        <Button
          className={`rating ${activeIndex === 4 ? 'active' : ''}`}
          onPress={handleRatingBtnPress(4)}
        >
          <FaceSmileHeart width={32} height={32} />
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
        >
          {item}
        </Button>
      )
    })
  }
  return (
    <StyledRatingComponent ref={ref}>
      {useIcons ? renderIconButtons() : renderNumberButtons()}
    </StyledRatingComponent>
  )
})

export default Rating
