import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
}

export type PageHeaderDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderDescription = React.forwardRef<
  HTMLDivElement,
  PageHeaderDescriptionProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const rootClasses = [
    styles.pageHeaderDescription,
    className,
    'cdg-page-header-description',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={ref}>
      <p className={rootClasses} ref={ref} {...delegated}>
        {children}
      </p>
    </CssInjection>
  )
})

export default PageHeaderDescription
