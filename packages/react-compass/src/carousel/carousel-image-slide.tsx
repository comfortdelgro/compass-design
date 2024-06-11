import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/carousel.module.css'

interface Props {
  imageUrl: string
  css?: CSS
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

  const rootClasses = [
    styles.carouselImageSlide,
    active && styles.sliderSlideActive,
    className,
    'cdg-carousel-image-slider-slide',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={buttonRef}>
      <img {...htmlProps} src={imageUrl} className={rootClasses} />
    </CssInjection>
  )
})

export default CarouselImageSlide
