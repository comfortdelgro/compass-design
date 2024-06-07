'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import BannerDescription from './banner-description'
import BannerImage from './banner-image'
import BannerTitle from './banner-title'
import styles from './styles/banner.module.css'

interface Props {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
  css?: CSS
  className?: string
}

export type BannerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Banner = React.forwardRef<HTMLDivElement, BannerProps>((props, ref) => {
  const {
    // children props
    children,
    // styled component props
    css = {},
    className = '',
    // VariantProps
    size = 'md',
    // HTMLDiv Props
    ...htmlProps
  } = props

  const bannerRef = useDOMRef<HTMLDivElement>(ref)
  const {child: BannerImageElement} = pickChild(children, BannerImage)

  const {child: BannerTitleElement} = pickChild(children, BannerTitle)

  const {child: BannerDescriptionElement} = pickChild(
    children,
    BannerDescription,
  )

  return (
    <CssInjection css={css} childrenRef={bannerRef}>
      <div
        className={`cdg-banner ${className} ${styles.banner} ${
          styles[`bannerSize${capitalizeFirstLetter(size)}`]
        }`}
        ref={bannerRef}
        {...htmlProps}
      >
        {BannerImageElement}
        <div
          className={`cdg-banner-content-container ${styles.contentContainer}`}
        >
          {BannerTitleElement}
          {BannerDescriptionElement}
        </div>
      </div>
    </CssInjection>
  )
})

export default Banner 