import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'

import {classNames} from '../utils/string'
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

    const rootClasses = classNames(
      styles.contentSliderDots,
      'cdg-carousel-slider-dots',
    )

    return (
      <CssInjection css={css} childrenRef={slideDotsRef}>
        <div {...htmlProps} style={style} className={rootClasses}>
          {Array(length)
            .fill(0)
            .map((item, index: number) => {
              return (
                <div
                  key={index + item}
                  className={classNames(
                    styles.carouselDot,
                    index === current && styles.carouselActiveDot,
                    'cdg-carousel-slider-dot',
                  )}
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
