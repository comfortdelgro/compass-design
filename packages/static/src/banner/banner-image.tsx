'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/banner.module.css'

interface Props {
  css?: unknown
  className?: string
}

export type BannerImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const BannerImage = React.forwardRef<HTMLImageElement, BannerImageProps>(
  (props, ref) => {
    const {css = {}, className = '', onError, ...delegated} = props
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
      <CssInjection css={css} childrenRef={bannerImageRef}>
        {!imageError ? (
          <img
            className={`cdg-banner-image ${styles.bannerImage} ${className}`}
            ref={bannerImageRef}
            alt='banner image'
            onError={handleImageError}
            {...delegated}
          />
        ) : (
          <div
            className={`cdg-banner-image-fallback ${styles.bannerImageFallback}`}
          >
            Image failed to load. Please try again later.
          </div>
        )}
      </CssInjection>
    )
  },
)

export default BannerImage
