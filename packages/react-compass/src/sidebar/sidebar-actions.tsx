'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/sidebar.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
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
          {...delegated}
          ref={sidebarActionsRef}
          className={classNames(
            styles.sidebarActions,
            className,
            'cdg-sidebar-actions',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SidebarActions
