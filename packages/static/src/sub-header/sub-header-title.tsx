'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/sub-header-title.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'h5'
  css?: unknown
  className?: string
}

export type SubHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderTitle = React.forwardRef<HTMLDivElement, SubHeaderTitleProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      className = '',
      variant = 'default',
      ...htmlProps
    } = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <h1
          className={`cdg-sub-header-title ${className} ${
            styles.subHeaderTitle
          } ${styles[`${variant}`]}`}
          ref={ref}
          {...htmlProps}
        >
          {children}
        </h1>
      </CssInjection>
    )
  },
)

export default SubHeaderTitle
