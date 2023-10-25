'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/subBanner.module.css'

interface Props {
  css?: unknown
  className?: string
  variant?: 'primary' | 'secondary'
}

export type SubBannerImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const SubBannerImage = React.forwardRef<HTMLImageElement, SubBannerImageProps>(
  (props, ref) => {
    const {
      css = {},
      className = '',
      variant = 'primary',
      id = 'cdg-sub-banner-image',
      ...htmlProps
    } = props
    const subBannerImageRef = useDOMRef<HTMLImageElement>(ref)
    return (
      <CssInjection css={css} childrenRef={subBannerImageRef}>
        <img
          className={`cdg-sub-banner-image ${className} ${
            styles.subBannerImage
          } ${styles[`subBannerImage${capitalizeFirstLetter(variant)}`]}`}
          {...htmlProps}
          ref={subBannerImageRef}
          id={id}
        />
      </CssInjection>
    )
  },
)

export default SubBannerImage
