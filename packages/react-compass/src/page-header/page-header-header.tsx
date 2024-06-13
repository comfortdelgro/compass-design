import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: CSS
  children: React.ReactNode
}

export type PageHeaderHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderHeader = React.forwardRef<
  HTMLDivElement,
  PageHeaderHeaderProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const rootClasses = classNames(
    styles.pageHeaderHeader,
    className,
    'cdg-page-header-header',
  )

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div {...delegated} className={rootClasses} ref={ref}>
        {children}
      </div>
    </CssInjection>
  )
})

export default PageHeaderHeader
