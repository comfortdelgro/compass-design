import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
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

  const rootClasses = [
    styles.footerInfoSocial,
    className,
    'cdg-footer-info-social',
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

export default FooterInfoSocial
