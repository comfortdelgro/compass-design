import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: CSS
  children: React.ReactNode
}

export type PageHeaderSubtitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  PageHeaderSubtitleProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const rootClasses = classNames(
    styles.pageHeaderSubtitle,
    className,
    'cdg-page-header-subtitle',
  )

  return (
    <CssInjection css={css} childrenRef={ref}>
      <span {...delegated} className={rootClasses} ref={ref}>
        {children}
      </span>
    </CssInjection>
  )
})

export default PageHeaderSubtitle
