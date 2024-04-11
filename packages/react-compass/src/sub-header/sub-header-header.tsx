'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import styles from './styles/sub-header-header.module.css'

interface Props {
  children: React.ReactNode
  css?: CSS
  className?: string
}

export type SubHeaderHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderHeader = React.forwardRef<HTMLDivElement, SubHeaderHeaderProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          className={`cdg-sub-header-header ${className} ${styles.subHeaderHeader}`}
          ref={ref}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SubHeaderHeader
