'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/subBanner.module.css'
import SubBannerDescription from './subBanner-description'
import SubBannerImage, {SubBannerImageProps} from './subBanner-image'
import SubBannerTitle from './subBanner-title'

interface Props {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
  css?: CSS
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
      ...htmlProps
    } = props

    const subBannerRef = useDOMRef<HTMLDivElement>(ref)
    const {child: SubBannerImageElement} = pickChild(children, SubBannerImage)

    const SubBannerImageElementCloned = () => {
      if (React.isValidElement(SubBannerImageElement)) {
        return React.cloneElement(SubBannerImageElement, {
          variant: variant,
        } as SubBannerImageProps)
      }
    }

    const {child: SubBannerTitleElement} = pickChild(children, SubBannerTitle)

    const {child: SubBannerDescriptionElement} = pickChild(
      children,
      SubBannerDescription,
    )

    return (
      <CssInjection css={css} childrenRef={subBannerRef}>
        {variant == 'primary' ? (
          <div
            {...htmlProps}
            ref={subBannerRef}
            className={classNames(
              styles.subBanner,
              className,
              'cdg-sub-banner',
            )}
          >
            {SubBannerImageElementCloned()}
            <div
              className={classNames(
                styles.subBannerBottom,
                'cdg-sub-banner-bottom',
              )}
            >
              <div
                className={classNames(
                  styles.bottomContentContainer,
                  'cdg-bottom-content-container',
                )}
              >
                {SubBannerTitleElement}
                {SubBannerDescriptionElement}
              </div>
            </div>
          </div>
        ) : (
          <div
            {...htmlProps}
            ref={subBannerRef}
            className={classNames(
              styles.subBanner,
              styles.subBannerSecondary,
              className,
              'cdg-sub-banner',
            )}
          >
            {SubBannerImageElementCloned()}

            <div
              className={classNames(
                styles.bottomContentContainer,
                styles.bottomContentContainerSecondary,
                'cdg-bottom-content-container',
              )}
            >
              {SubBannerTitleElement}
              {SubBannerDescriptionElement}
            </div>
          </div>
        )}
      </CssInjection>
    )
  },
) as typeof SubBanner & {
  Image: typeof SubBannerImage
  Title: typeof SubBannerTitle
  Description: typeof SubBannerDescription
}

export default SubBanner
