'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/banner.module.css'
interface Props {
  children?: React.ReactNode
  css?: CSS
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
        className={classNames(
          styles.bannerDescription,
          className,
          'cdg-banner-description',
        )}
        ref={bannerDescriptionRef}
        {...delegated}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default BannerDescription
