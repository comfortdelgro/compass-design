import clsx from 'clsx'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer-info-download.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type FooterInfoDownloadProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoDownload = React.forwardRef<
  HTMLDivElement,
  FooterInfoDownloadProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props
  return (
    <CssInjection css={css} childrenRef={ref}>
      <div
        className={clsx(styles.footerInfoDownload, className)}
        ref={ref}
        {...delegated}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default FooterInfoDownload
