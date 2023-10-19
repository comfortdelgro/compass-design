import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/subBanner.module.css'

interface Props {
  css?: unknown
  className?: string
}

export type SubBannerImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const SubBannerImage = React.forwardRef<HTMLImageElement, SubBannerImageProps>(
  (props, ref) => {
    const {
      css = {},
      className = '',
      id = 'cdg-sub-banner-image',
      ...delegated
    } = props
    const subBannerImageRef = useDOMRef<HTMLImageElement>(ref)
    return (
      <CssInjection css={css} childrenRef={subBannerImageRef}>
        <img
          className={`cdg-sub-banner-image ${className} ${styles.subBannerImage}`}
          {...delegated}
          ref={subBannerImageRef}
          id={id}
        />
      </CssInjection>
    )
  },
)

export default SubBannerImage
