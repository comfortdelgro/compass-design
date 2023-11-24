import clsx from 'clsx'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
}

export type PageHeaderSubtitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  PageHeaderSubtitleProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  return (
    <CssInjection css={css} childrenRef={ref}>
      <span
        className={clsx(styles.pageHeaderSubtitle, className)}
        ref={ref}
        {...delegated}
      >
        {children}
      </span>
    </CssInjection>
  )
})

export default PageHeaderSubtitle
