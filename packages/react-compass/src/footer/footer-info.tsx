import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import FooterInfoDownload from './footer-info-download'
import FooterInfoSocial from './footer-info-social'
import styles from './styles/footer-info.module.css'
interface Props {
  css?: CSS
  children?: React.ReactNode
}

export type FooterInfoProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

// eslint-disable-next-line react-refresh/only-export-components
const FooterInfo = React.forwardRef<HTMLDivElement, FooterInfoProps>(
  (props, ref) => {
    const {children, css = {}, className, ...delegated} = props

    const rootClasses = classNames(
      styles.footerInfo,
      className,
      'cdg-footer-info',
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div {...delegated} className={rootClasses} ref={ref}>
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
