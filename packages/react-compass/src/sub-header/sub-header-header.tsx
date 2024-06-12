'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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
          {...htmlProps}
          ref={ref}
          className={classNames(
            styles.subHeaderHeader,
            className,
            'cdg-sub-header-header',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SubHeaderHeader
