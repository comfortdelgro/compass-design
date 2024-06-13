'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/sub-header-title.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'default'
  css?: CSS
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
          {...htmlProps}
          ref={ref}
          className={classNames(
            styles.subHeaderTitle,
            styles[`${variant}`],
            className,
            'cdg-sub-header-title',
          )}
        >
          {children}
        </h1>
      </CssInjection>
    )
  },
)

export default SubHeaderTitle
