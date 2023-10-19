import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/subBanner.module.css'
import SubBannerDescription from './subBanner-description'
import SubBannerImage from './subBanner-image'
import SubBannerTitle from './subBanner-title'

interface Props {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
  css?: unknown
  className?: string
}

export type SubBannerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubBanner = React.forwardRef<HTMLDivElement, SubBannerProps>(
  (props, ref) => {
    const {
      children,
      // styled component props
      css = {},
      className = '',
      // VariantProps
      variant = 'primary',
      // HTMLDiv Props
      ...delegated
    } = props

    const subBannerRef = useDOMRef<HTMLDivElement>(ref)
    const {child: SubBannerImageElement} = pickChild<typeof SubBannerImage>(
      children,
      SubBannerImage,
    )

    const {child: SubBannerTitleElement} = pickChild<typeof SubBannerTitle>(
      children,
      SubBannerTitle,
    )

    const {child: SubBannerDescriptionElement} = pickChild<
      typeof SubBannerDescription
    >(children, SubBannerDescription)

    return (
      <CssInjection css={css} childrenRef={subBannerRef}>
        {variant == 'primary' ? (
          <div
            className={`cdg-sub-banner ${className} ${styles.subBanner} `}
            ref={subBannerRef}
            {...delegated}
          >
            {SubBannerImageElement}
            <div className={`cdg-sub-banner-bottom ${styles.subBannerBottom} `}>
              <div
                className={`cdg-bottom-content-container ${styles.bottomContentContainer} `}
              >
                {SubBannerTitleElement}
                {SubBannerDescriptionElement}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`cdg-sub-banner ${className} ${styles.subBanner} ${styles.subBannerSecondary}`}
            ref={subBannerRef}
            {...delegated}
          >
            {SubBannerImageElement}

            <div
              className={`cdg-bottom-content-container ${styles.bottomContentContainer} ${styles.bottomContentContainerSecondary}`}
            >
              {SubBannerTitleElement}
              {SubBannerDescriptionElement}
            </div>
          </div>
        )}
      </CssInjection>
    )
  },
)

export default SubBanner as typeof SubBanner & {
  Image: typeof SubBannerImage
  Title: typeof SubBannerTitle
  Description: typeof SubBannerDescription
}
