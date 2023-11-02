import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/page-header-description.module.css'
import clsx from 'clsx'

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
  const { children, css = {}, className, ...delegated } = props

  return (
    <CssInjection css={css} childrenRef={ref}>
      <p className={clsx(styles.pageHeaderDescription, className)} ref={ref}{...delegated}>
        {children}
      </p>
    </CssInjection>
  )
})

export default PageHeaderDescription
