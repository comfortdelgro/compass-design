import React, { Ref } from 'react'
import { StyledComponentProps } from '../utils/stitches.types'
import { StyledRatingSlider } from './rating-slider.styles'
import { useDOMRef } from '../utils/use-dom-ref'
import { RatingSliderItemProps } from './rating-slider-item'

interface Props<T extends string | number | symbol | object> extends StyledComponentProps {
  children: React.ReactNode
  onChange?: (items: number[]) => void
}

export type RatingSliderProps<T extends string | number | symbol | object> = Props<T extends string | number | symbol | object> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const RatingSliderRefComponent = <T extends string | number | symbol | object>(
  {
    children,
    onChange,
    css = {},
    className = "",
    ...delegated
  }: RatingSliderProps<T>,
  ref: Ref<HTMLDivElement>,
) => {
  const ratingSliderRef = useDOMRef(ref)

  const [selectedItems, setItems] = React.useState<number[]>([])

  const onSliderItemChange = (index: number, isAdded: boolean) => {
    if(isAdded) {
      setItems(oldItems => ([...oldItems, index]))
    } else {
      setItems(oldItems => oldItems.filter(item => item !== index))
    }
  }

  React.useEffect(() => {
    if(onChange) {
      onChange(selectedItems)
    }
  },[selectedItems.length])

  return <StyledRatingSlider ref={ratingSliderRef} css={css} {...delegated}>
    {
      React.Children.map(children, (child, childIndex) => {
      if (!React.isValidElement(child)) {
          return null
        }
      const clonedChild = child as React.ReactElement<RatingSliderItemProps>
      const props = {} as RatingSliderItemProps
      props.selected = selectedItems.includes(childIndex)
      props.index = childIndex
      props.onChange = onSliderItemChange
      return React.cloneElement(clonedChild, {...props, ...clonedChild.props})
    })
  }
  </StyledRatingSlider>
}

  const RatingSlider = React.forwardRef(RatingSliderRefComponent) as <
  T extends string | number | symbol | object,
>(
  props: RatingSliderProps<T> & {ref?: Ref<Omit<HTMLDivElement, 'onChange'>>},
) => React.ReactElement

export default RatingSlider
