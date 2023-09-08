import React, {HTMLAttributes} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledMultipleChoicesSliderItem} from './multiple-choices-slider.styles'

interface Props extends StyledComponentProps {
  isSelected?: boolean
  icon: React.ReactNode
  label: string
  index: number
  onChange?: (index: number, isAdded: boolean) => void
}

export type MultipleChoicesSliderItemProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const MultipleChoicesSliderItem = React.forwardRef<
  HTMLDivElement,
  MultipleChoicesSliderItemProps
>((props, ref) => {
  const {isSelected, icon, label, index, onChange} = props
  const itemRef = useDOMRef(ref)
  const handleItemClick = React.useCallback(() => {
    if (onChange) {
      onChange(index, !isSelected)
    }
  }, [index, isSelected])
  return (
    <StyledMultipleChoicesSliderItem
      ref={itemRef}
      onClick={handleItemClick}
      isActive={!!isSelected}
    >
      {icon}
      <span>{label}</span>
    </StyledMultipleChoicesSliderItem>
  )
})

export default MultipleChoicesSliderItem
