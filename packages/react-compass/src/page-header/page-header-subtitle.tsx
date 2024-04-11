import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
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

  const rootClasses = [
    styles.pageHeaderSubtitle,
    className,
    'cdg-page-header-subtitle',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={ref}>
      <span className={rootClasses} ref={ref} {...delegated}>
        {children}
      </span>
    </CssInjection>
  )
})

export default PageHeaderSubtitle
