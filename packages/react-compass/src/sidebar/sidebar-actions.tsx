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

export type SidebarActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarActions = React.forwardRef<HTMLDivElement, SidebarActionsProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const sidebarActionsRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={sidebarActionsRef}>
        <div
          className={`cdg-sidebar-actions ${styles.sidebarActions} ${className}`}
          ref={sidebarActionsRef}
          {...delegated}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SidebarActions
