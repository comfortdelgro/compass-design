'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/subBanner.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
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
        {...htmlProps}
        ref={ref}
        className={classNames(
          styles.subBannerTitle,
          className,
          'cdg-sub-banner-title',
        )}
      >
        {renderTitle()}
      </h1>
    </CssInjection>
  )
})

export default SubBannerTitle
