import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/footer-info-social.module.css'
interface Props {
  css?: CSS
  children?: React.ReactNode
}

export type FooterInfoSocialProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoSocial = React.forwardRef<
  HTMLDivElement,
  FooterInfoSocialProps
>((props, ref) => {
  const {children, className, css = {}, ...delegated} = props

  const rootClasses = classNames(
    styles.footerInfoSocial,
    className,
    'cdg-footer-info-social',
  )

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div {...delegated} className={rootClasses} ref={ref}>
        {children}
      </div>
    </CssInjection>
  )
})

export default FooterInfoSocial
