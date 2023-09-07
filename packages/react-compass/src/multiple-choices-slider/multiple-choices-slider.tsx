import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import MultipleChoicesSliderItem, {
  MultipleChoicesSliderItemProps,
} from './multiple-choices-slider-item'
import {StyledMultipleChoicesSlider} from './multiple-choices-slider.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  onChange?: (items: number[]) => void
}

export type MultipleChoicesSliderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MultipleChoicesSlider = React.forwardRef<
  HTMLDivElement,
  MultipleChoicesSliderProps
>(({children, onChange, css = {}, ...delegated}, ref) => {
  const MultipleChoicesSliderRef = useDOMRef(ref)

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
    <StyledMultipleChoicesSlider
      ref={MultipleChoicesSliderRef}
      css={css}
      {...delegated}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null
        }
        const clonedChild =
          child as React.ReactElement<MultipleChoicesSliderItemProps>
        const props = {} as MultipleChoicesSliderItemProps
        props.isSelected = selectedItems.includes(clonedChild.props.index)
        props.onChange = onSliderItemChange
        return React.cloneElement(clonedChild, {
          ...props,
          ...clonedChild.props,
        })
      })}
    </StyledMultipleChoicesSlider>
  )
})

export default MultipleChoicesSlider as typeof MultipleChoicesSlider & {
  Item: typeof MultipleChoicesSliderItem
}
