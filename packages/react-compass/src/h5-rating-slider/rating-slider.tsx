import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import RatingSliderItem, {RatingSliderItemProps} from './rating-slider-item'
import {StyledRatingSlider} from './rating-slider.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  onChange?: (items: number[]) => void
}

export type RatingSliderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RatingSlider = React.forwardRef<HTMLDivElement, RatingSliderProps>(
  ({children, onChange, css = {}, ...delegated}, ref) => {
    const ratingSliderRef = useDOMRef(ref)

    const [selectedItems, setItems] = React.useState<number[]>([])

    const onSliderItemChange = (index: number, isAdded: boolean) => {
      if (isAdded) {
        setItems((oldItems) => [...oldItems, index])
      } else {
        setItems((oldItems) => oldItems.filter((item) => item !== index))
      }
    }

    React.useEffect(() => {
      if (onChange) {
        onChange(selectedItems)
      }
    }, [selectedItems.length])

    return (
      <StyledRatingSlider ref={ratingSliderRef} css={css} {...delegated}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return null
          }
          const clonedChild = child as React.ReactElement<RatingSliderItemProps>
          const props = {} as RatingSliderItemProps
          props.isSelected = selectedItems.includes(clonedChild.props.index)
          props.onChange = onSliderItemChange
          return React.cloneElement(clonedChild, {
            ...props,
            ...clonedChild.props,
          })
        })}
      </StyledRatingSlider>
    )
  },
)

export default RatingSlider as typeof RatingSlider & {
  Item: typeof RatingSliderItem
}
