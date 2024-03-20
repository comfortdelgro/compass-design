import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'

interface Props {
  css?: unknown
}

export type BannerLeftProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const BannerLeft = React.forwardRef<HTMLDivElement, BannerLeftProps>(
  (props, ref) => {
    const {css = {}, className, children} = props

    const rootClasses = [className, 'cdg-announcement-banner-left']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css}>
        <div ref={ref} className={rootClasses}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default BannerLeft
