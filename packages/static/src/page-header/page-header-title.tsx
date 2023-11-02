import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/page-header-description.module.css'
import clsx from 'clsx'

interface Props {
  css?: unknown
  children: React.ReactNode
}

export type PageHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const PageHeaderTitle = React.forwardRef<HTMLDivElement, PageHeaderTitleProps>(
  (props, ref) => {
    const { children, css = {}, className, ...delegated } = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <h1 className={clsx(styles.pageHeaderTitle, className)} ref={ref} {...delegated}>
          {children}
        </h1>
      </CssInjection>
    )
  },
)

export default PageHeaderTitle
