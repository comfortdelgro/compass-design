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

export type SidebarTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarTitle = React.forwardRef<HTMLDivElement, SidebarTitleProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...delegated} = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return (
          <div
            {...delegated}
            ref={sidebarTitleRef}
            className={classNames(
              styles.sidebarTitle,
              className,
              'cdg-sidebar-title',
            )}
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
          {...delegated}
          ref={sidebarTitleRef}
          className={classNames(
            styles.sidebarTitle,
            className,
            'cdg-sidebar-title',
          )}
        >
          {renderTitle()}
        </div>
      </CssInjection>
    )
  },
)

export default SidebarTitle
