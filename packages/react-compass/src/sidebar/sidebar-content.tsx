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

export type SidebarContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props
    const sidebarContentRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={sidebarContentRef}>
        <div
          {...delegated}
          ref={sidebarContentRef}
          className={classNames(
            styles.sidebarContent,
            className,
            'cdg-sidebar-content',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SidebarContent
