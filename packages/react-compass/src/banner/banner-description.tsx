'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/banner.module.css'
interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type BannerDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const BannerDescription = React.forwardRef<
  HTMLDivElement,
  BannerDescriptionProps
>((props, ref) => {
  const {children, css = {}, className = '', ...delegated} = props
  const bannerDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)
  return (
    <CssInjection css={css} childrenRef={bannerDescriptionRef}>
      <div
        className={`cdg-banner-description ${styles.bannerDescription} ${className}`}
        ref={bannerDescriptionRef}
        {...delegated}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default BannerDescription
