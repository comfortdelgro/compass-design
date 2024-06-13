'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/sub-header-body.module.css'

interface Props {
  children: React.ReactNode
  css?: CSS
  className?: string
}

export type SubHeaderBodyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderBody = React.forwardRef<HTMLDivElement, SubHeaderBodyProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          {...htmlProps}
          ref={ref}
          className={classNames(
            styles.subHeaderBody,
            className,
            'cdg-sub-header-body',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SubHeaderBody
