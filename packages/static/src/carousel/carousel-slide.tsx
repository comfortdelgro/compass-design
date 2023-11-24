import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/carousel.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  active: boolean
  className?: string
  style?: React.CSSProperties
}

export type CarouselSlideProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselSlide = React.forwardRef<HTMLDivElement, CarouselSlideProps>(
  (props, ref) => {
    const {
      css = {},
      children,
      active,
      className = '',
      style,
      ...htmlProps
    } = props

    const slideRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={slideRef}>
        <div
          className={`${className} slider-slide ${styles.sliderSlide} ${
            active ? styles.sliderSlideActive : ''
          }`}
          {...htmlProps}
          style={style}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default CarouselSlide
