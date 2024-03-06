import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
}

export type PageHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const PageHeaderTitle = React.forwardRef<HTMLDivElement, PageHeaderTitleProps>(
  (props, ref) => {
    const {children, css = {}, className, ...delegated} = props

    const rootClasses = [
      styles.pageHeaderTitle,
      className,
      'cdg-page-header-title',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={ref}>
        <h1 className={rootClasses} ref={ref} {...delegated}>
          {children}
        </h1>
      </CssInjection>
    )
  },
)

export default PageHeaderTitle
