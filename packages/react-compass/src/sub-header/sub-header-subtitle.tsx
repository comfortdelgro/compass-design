'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/sub-header-subtitle.module.css'

interface Props {
  children: React.ReactNode
  css?: unknown
  className?: string
}

export type SubHeaderSubtitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  SubHeaderSubtitleProps
>((props, ref) => {
  const {children, css = {}, className = '', ...htmlProps} = props

  return (
    <CssInjection css={css} childrenRef={ref}>
      <span
        className={`cdg-sub-header-subtitle ${className} ${styles.subHeaderSubtitle}`}
        ref={ref}
        {...htmlProps}
      >
        {children}
      </span>
    </CssInjection>
  )
})

export default SubHeaderSubtitle
