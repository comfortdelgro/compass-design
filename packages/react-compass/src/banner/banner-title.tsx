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

export type BannerTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const BannerTitle = React.forwardRef<HTMLHeadingElement, BannerTitleProps>(
  (props, ref) => {
    const {children, css = {}, className, ...delegated} = props
    const bannerTitleRef = useDOMRef<HTMLDivElement>(ref)
    const renderTitle = () => {
      if (typeof children === 'string') {
        return <>{children}</>
      }
      return children
    }

    return (
      <CssInjection css={css} childrenRef={bannerTitleRef}>
        <h1
          className={classNames(
            styles.bannerTitle,
            className,
            'cdg-banner-title',
          )}
          ref={bannerTitleRef}
          {...delegated}
        >
          {renderTitle()}
        </h1>
      </CssInjection>
    )
  },
)

export default BannerTitle
