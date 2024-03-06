import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'

import styles from './styles/carousel.module.css'

export interface Props {
  length: number
  current: number
  css?: unknown
  style?: React.CSSProperties
  dotClick?: (index: number) => void
}

const CarouselSliderDots = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {
      length,
      current,
      css = {},
      style,
      dotClick = () => null,
      ...htmlProps
    } = props

    const slideDotsRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={slideDotsRef}>
        <div
          className={`content-slider-dots ${styles.contentSliderDots}`}
          style={style}
          {...htmlProps}
        >
          {Array(length)
            .fill(0)
            .map((item: any, index: number) => {
              return (
                <div
                  key={index + item}
                  className={`carousel-dot ${styles.carouselDot} ${
                    index === current ? styles.carouselActiveDot : ''
                  }`}
                  onClick={() => {
                    dotClick(index)
                  }}
                />
              )
            })}
        </div>
      </CssInjection>
    )
  },
)

export default CarouselSliderDots
