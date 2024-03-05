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

  const rootClasses = [
    styles.footerInfoDownload,
    className,
    'cdg-footer-info-download',
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

export default FooterInfoDownload
