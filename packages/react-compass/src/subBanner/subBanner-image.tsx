'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/subBanner.module.css'

interface Props {
  css?: CSS
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
          {...htmlProps}
          id={id}
          ref={subBannerImageRef}
          className={classNames(
            styles.subBannerImage,
            styles[`subBannerImage${capitalizeFirstLetter(variant)}`],
            className,
            'cdg-sub-banner-image',
          )}
        />
      </CssInjection>
    )
  },
)

export default SubBannerImage
