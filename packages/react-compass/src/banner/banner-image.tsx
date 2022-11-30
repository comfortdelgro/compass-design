/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledBannerImage} from './banner.styles'

type Props = StyledComponentProps

export type BannerImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const BannerImage = React.forwardRef<HTMLImageElement, BannerImageProps>(
  (props, ref) => {
    const {css = {}, id = 'myId', ...delegated} = props
    const bannerImageRef = useDOMRef<HTMLImageElement>(ref)
    return (
      <>
        <StyledBannerImage
          css={css}
          {...delegated}
          ref={bannerImageRef}
          id={id}
        />
      </>
    )
  },
)

export default BannerImage
