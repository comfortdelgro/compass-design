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
        className={classNames(
          styles.subBannerDescription,
          className,
          'cdg-sub-banner-description',
        )}
      >
        {children}
      </p>
    </CssInjection>
  )
})

export default SubBannerDescription
