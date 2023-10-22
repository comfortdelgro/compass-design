'use client'

import React from 'react'
import { pickChild } from '../utils/pick-child'
import { useDOMRef } from '../utils/use-dom-ref'
import BannerDescription from './banner-description'
import BannerImage from './banner-image'
import BannerTitle from './banner-title'
import styles from './styles/banner.module.css'
import CssInjection from '../utils/objectToCss/CssInjection'

interface Props {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
  css?: unknown
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
  const { child: BannerImageElement } = pickChild<typeof BannerImage>(
    children,
    BannerImage,
  )

  const { child: BannerTitleElement } = pickChild<typeof BannerTitle>(
    children,
    BannerTitle,
  )

  const { child: BannerDescriptionElement } = pickChild<typeof BannerDescription>(
    children,
    BannerDescription,
  )

  return (
    <CssInjection css={css} childrenRef={bannerRef}>
      <div className={`cdg-banner ${className} ${styles.banner} ${styles[`bannerSize${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}
        ref={bannerRef} {...htmlProps}>
        {BannerImageElement}
        <div className={`cdg-banner-content-container ${styles.contentContainer}`}>
          {BannerTitleElement}
          {BannerDescriptionElement}
        </div>
      </div>
    </CssInjection>
  )
})

export default Banner as typeof Banner & {
  Image: typeof BannerImage
  Title: typeof BannerTitle
  Description: typeof BannerDescription
}
