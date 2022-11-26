/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselButtonContainer} from './carousel.styles'
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  currentSlideIndex?: number
}

export type CarouselButtonsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselButtons = React.forwardRef<HTMLDivElement, CarouselButtonsProps>(
  (props, ref) => {
    const {children, css = {}, currentSlideIndex = 0, ...delegated} = props

    const [currentButtonsIndex, setCurrentButtonsIndex] = React.useState(0)
    const buttons = React.Children.toArray(children)

    const renderButtons = () => {
      if (buttons.length) {
        return <>{buttons[currentButtonsIndex]}</>
      }
    }

    React.useEffect(() => {
      setCurrentButtonsIndex(currentSlideIndex)
    }, [currentSlideIndex])

    return (
      <StyledCarouselButtonContainer css={css} ref={ref} {...delegated}>
        {renderButtons()}
      </StyledCarouselButtonContainer>
    )
  },
)

export default CarouselButtons
