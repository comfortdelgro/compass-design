import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer-info-social.module.css'
import clsx from 'clsx'
interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type FooterInfoSocialProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoSocial = React.forwardRef<
  HTMLDivElement,
  FooterInfoSocialProps
>((props, ref) => {
  const { children, className, css = {}, ...delegated } = props
  return (
    <CssInjection css={css} childrenRef={ref}>
      <div className={clsx(styles.footerInfoSocial, className)} ref={ref} {...delegated}>
        {children}
      </div>
    </CssInjection>
  )
})

export default FooterInfoSocial
