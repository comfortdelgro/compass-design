'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter} from '../utils/string'
import styles from './styles/sub-header.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'default'
  css?: CSS
  className?: string
}

export type SubHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeader = React.forwardRef<HTMLDivElement, SubHeaderProps>(
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
        <div
          className={`cdg-sub-header ${className} ${styles.subHeader} ${
            styles[`subHeader${capitalizeFirstLetter(variant)}`]
          }`}
          ref={ref}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SubHeader
