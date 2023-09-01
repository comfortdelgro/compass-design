import React, {HTMLAttributes} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledRatingSliderItem} from './rating-slider.styles'

interface Props extends StyledComponentProps {
  selected?: boolean
  icon: React.ReactNode
  label: string
  index?: number
  onChange?: (index: number, isAdded: boolean) => void
}

export type RatingSliderItemProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const RatingSliderItem = React.forwardRef<
  HTMLDivElement,
  RatingSliderItemProps
>((props, ref) => {
  return <StyledRatingSliderItem></StyledRatingSliderItem>
})

export default RatingSliderItem
