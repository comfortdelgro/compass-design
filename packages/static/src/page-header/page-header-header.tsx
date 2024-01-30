import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
}

export type PageHeaderHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderHeader = React.forwardRef<
  HTMLDivElement,
  PageHeaderHeaderProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const rootClasses = [
    styles.pageHeaderHeader,
    className,
    'cdg-page-header-header',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div className={rootClasses} ref={ref} {...delegated}>
        {children}
      </div>
    </CssInjection>
  )
})

export default PageHeaderHeader
