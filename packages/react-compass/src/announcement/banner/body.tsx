import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {classNames} from '../../utils/string'
import styles from '../styles/banner.module.css'

interface Props {
  css?: CSS
  align?: 'left' | 'center' | 'right'
}

export type BannerBodyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const BannerBody = React.forwardRef<HTMLDivElement, BannerBodyProps>(
  (props, ref) => {
    const {css = {}, align = 'left', children, className} = props

    const rootClasses = classNames(
      styles.body,
      align === 'left' && styles.bodyAlignLeft,
      align === 'center' && styles.bodyAlignCenter,
      align === 'right' && styles.bodyAlignRight,
      className,
      'cdg-announcement-banner-body',
    )

    return (
      <CssInjection css={css}>
        <div ref={ref} className={rootClasses}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default BannerBody
