import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import FooterInfoDownload from './footer-info-download'
import FooterInfoSocial from './footer-info-social'
import styles from './styles/footer-info.module.css'
interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type FooterInfoProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

// eslint-disable-next-line react-refresh/only-export-components
const FooterInfo = React.forwardRef<HTMLDivElement, FooterInfoProps>(
  (props, ref) => {
    const {children, css = {}, className, ...delegated} = props

    const rootClasses = [styles.footerInfo, className, 'cdg-footer-info']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div className={rootClasses} ref={ref} {...delegated}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default FooterInfo as typeof FooterInfo & {
  Social: typeof FooterInfoSocial
  Download: typeof FooterInfoDownload
}
