/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledBannerImage, StyledBannerImageFallback} from './styles/banner.styles'

type Props = StyledComponentProps

export type BannerImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const BannerImage = React.forwardRef<HTMLImageElement, BannerImageProps>(
  (props, ref) => {
    const {css = {}, id = 'myId', onError, ...delegated} = props
    const [imageError, setImageError] = React.useState(false)
    const bannerImageRef = useDOMRef<HTMLImageElement>(ref)

    const handleImageError = (
      event: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
      setImageError(true)
      if (typeof onError === 'function') {
        onError(event)
      }
      console.log('error event', event)
    }
    return (
      <>
        {!imageError ? (
          <StyledBannerImage
            css={css}
            ref={bannerImageRef}
            id={id}
            alt='banner image'
            onError={handleImageError}
            {...delegated}
          />
        ) : (
          <StyledBannerImageFallback>
            Image failed to load. Please try again later.
          </StyledBannerImageFallback>
        )}
      </>
    )
  },
)

export default BannerImage
