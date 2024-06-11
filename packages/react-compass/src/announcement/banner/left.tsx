import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {classNames} from '../../utils/string'

interface Props {
  css?: CSS
}

export type BannerLeftProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const BannerLeft = React.forwardRef<HTMLDivElement, BannerLeftProps>(
  (props, ref) => {
    const {css = {}, className, children} = props

    const rootClasses = classNames(className, 'cdg-announcement-banner-left')

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
