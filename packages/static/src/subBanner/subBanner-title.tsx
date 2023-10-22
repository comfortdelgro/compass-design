'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/subBanner.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type SubBannerTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const SubBannerTitle = React.forwardRef<
  HTMLHeadingElement,
  SubBannerTitleProps
>((props, ref) => {
  const {children, css = {}, className = '', ...htmlProps} = props

  const renderTitle = () => {
    if (typeof children === 'string') {
      return <>{children}</>
    }
    return children
  }

  return (
    <CssInjection css={css} childrenRef={ref}>
      <h1
        className={`cdg-sub-banner-title ${className} ${styles.subBannerTitle}`}
        ref={ref}
        {...htmlProps}
      >
        {renderTitle()}
      </h1>
    </CssInjection>
  )
})

export default SubBannerTitle
