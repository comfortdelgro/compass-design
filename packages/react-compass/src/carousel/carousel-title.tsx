/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselTitle} from './carousel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type CarouselTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselTitle = React.forwardRef<HTMLDivElement, CarouselTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return <>{children}</>
      }
      return children
    }

    return (
      <StyledCarouselTitle css={css} ref={ref} {...delegated}>
        {renderTitle()}
      </StyledCarouselTitle>
    )
  },
)

export default CarouselTitle
