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

export type SidebarContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const sidebarContentRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={sidebarContentRef}>
        <div
          className={`cdg-sidebar-content ${styles.sidebarContent} ${className}`}
          ref={sidebarContentRef}
          {...delegated}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SidebarContent
