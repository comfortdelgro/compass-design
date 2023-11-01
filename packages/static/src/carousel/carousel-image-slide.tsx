import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/carousel.module.css'

interface Props {
  imageUrl: string
  css?: unknown
  active: boolean
  className?: string
}

export type CarouselImageSlideProps = Props &
  Omit<React.HTMLAttributes<HTMLImageElement>, keyof Props>

const CarouselImageSlide = React.forwardRef<
  HTMLDivElement,
  CarouselImageSlideProps
>((props, ref) => {
  const {css = {}, imageUrl, active, className, ...htmlProps} = props

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
})

export default CarouselImageSlide
