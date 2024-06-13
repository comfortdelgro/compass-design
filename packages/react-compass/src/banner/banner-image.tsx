'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/banner.module.css'

interface Props {
  css?: CSS
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
    }
    return (
      <CssInjection css={css} childrenRef={bannerImageRef}>
        {!imageError ? (
          <img
            className={classNames(
              styles.bannerImage,
              className,
              'cdg-banner-image',
            )}
            ref={bannerImageRef}
            alt='banner image'
            onError={handleImageError}
            {...delegated}
          />
        ) : (
          <div
            className={classNames(
              styles.bannerImageFallback,
              'cdg-banner-image-fallback',
            )}
          >
            Image failed to load. Please try again later.
          </div>
        )}
      </CssInjection>
    )
  },
)

export default BannerImage
