import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCardImage} from './cardImage.styles'

type Props = StyledComponentProps

export type CardImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  (props, ref) => {
    const {css = {}, ...delegated} = props

    const cardImageRef = useDOMRef<HTMLImageElement>(ref)

    return <StyledCardImage css={css} {...delegated} ref={cardImageRef} />
  },
)

export default CardImage
