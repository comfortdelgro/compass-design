import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import style from './styles/card.module.css'

type Props = {
  css?: unknown
}

export type CardImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  (props, ref) => {
    const {css = {}, className, ...htmlProps} = props

    const cardImageRef = useDOMRef<HTMLImageElement>(ref)

    return (
      <CssInjection css={css} childrenRef={ref}>
        <img
          className={`${style.cardImage} ${className ?? ''}`}
          {...htmlProps}
          ref={cardImageRef}
        />
      </CssInjection>
    )
  },
)

export default CardImage
