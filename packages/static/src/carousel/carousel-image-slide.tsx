import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/carousel.module.css'

export interface Props {
  imageUrl: string
  css?: unknown
  active: boolean
  className?: string
}

const CarouselImageSlide = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      imageUrl,
      active,
      className,
      ...htmlProps
    } = props

    const buttonRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={buttonRef}>
        <img
          className={`slider-slide ${className ? className : ''} ${
            styles.carouselImageSlide
          } ${active ? styles.sliderSlideActive : ''}`}
          src={imageUrl}
          {...htmlProps}
        />
      </CssInjection>
    )
  },
)

export default CarouselImageSlide
