import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: CSS
  children: React.ReactNode
}

export type PageHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const PageHeaderTitle = React.forwardRef<HTMLDivElement, PageHeaderTitleProps>(
  (props, ref) => {
    const {children, css = {}, className, ...delegated} = props

    const rootClasses = classNames(
      styles.pageHeaderTitle,
      className,
      'cdg-page-header-title',
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <h1 {...delegated} className={rootClasses} ref={ref}>
          {children}
        </h1>
      </CssInjection>
    )
  },
)

export default PageHeaderTitle
