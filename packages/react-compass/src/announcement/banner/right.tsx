import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'

interface Props {
  css?: CSS
}

export type BannerRightProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const BannerRight = React.forwardRef<HTMLDivElement, BannerRightProps>(
  (props, ref) => {
    const {css = {}, className, children} = props

    const rootClasses = [className, 'cdg-announcement-banner-right']
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

export default BannerRight
