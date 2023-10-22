'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/subBanner.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type SubBannerDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubBannerDescription = React.forwardRef<
  HTMLDivElement,
  SubBannerDescriptionProps
>((props, ref) => {
  const {children, css = {}, className = '', ...htmlProps} = props

  return (
    <CssInjection css={css} childrenRef={ref}>
      <p
        ref={ref}
        {...htmlProps}
        className={`cdg-sub-banner-description ${className} ${styles.subBannerDescription}`}
      >
        {children}
      </p>
    </CssInjection>
  )
})

export default SubBannerDescription
