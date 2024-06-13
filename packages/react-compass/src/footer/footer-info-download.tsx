import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/footer-info-download.module.css'

interface Props {
  css?: CSS
  children?: React.ReactNode
}

export type FooterInfoDownloadProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoDownload = React.forwardRef<
  HTMLDivElement,
  FooterInfoDownloadProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const rootClasses = classNames(
    styles.footerInfoDownload,
    className,
    'cdg-footer-info-download',
  )

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div {...delegated} className={rootClasses} ref={ref}>
        {children}
      </div>
    </CssInjection>
  )
})

export default FooterInfoDownload
