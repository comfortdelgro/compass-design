import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'

import styles from './styles/carousel.module.css'

export interface Props {
  length: number
  current: number
  css?: CSS
  style?: React.CSSProperties
  dotClick?: (index: number) => void
}

const CarouselSliderDots = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {
      style,
      length,
      current,
      css = {},
      dotClick = () => null,
      ...htmlProps
    } = props

    const slideDotsRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = [styles.contentSliderDots, 'cdg-carousel-slider-dots']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={slideDotsRef}>
        <div {...htmlProps} style={style} className={rootClasses}>
          {Array(length)
            .fill(0)
            .map((item, index: number) => {
              return (
                <div
                  key={index + item}
                  className={[
                    styles.carouselDot,
                    index === current && styles.carouselActiveDot,
                    'cdg-carousel-slider-dot',
                  ]
                    .filter(Boolean)
                    .join(' ')}
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
