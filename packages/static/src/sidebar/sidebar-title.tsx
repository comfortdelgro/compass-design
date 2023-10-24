'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/sidebar.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type SidebarTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarTitle = React.forwardRef<HTMLDivElement, SidebarTitleProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return (
          <div
            className={`cdg-sidebar-title ${styles.sidebarTitle} ${className}`}
            ref={sidebarTitleRef}
            {...delegated}
          >
            {children}
          </div>
        )
      }
      return children
    }
    const sidebarTitleRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={sidebarTitleRef}>
        <div
          className={`cdg-sidebar-title ${styles.sidebarTitle} ${className}`}
          ref={sidebarTitleRef}
          {...delegated}
        >
          {renderTitle()}
        </div>
      </CssInjection>
    )
  },
)

export default SidebarTitle
