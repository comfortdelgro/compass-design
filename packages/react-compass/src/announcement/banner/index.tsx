/* eslint-disable react-refresh/only-export-components */
'use client'
import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {pickChild} from '../../utils/pick-child'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from '../styles/banner.module.css'
import BannerBody from './body'
import BannerLeft from './left'
import BannerRight from './right'

interface Props {
  css?: CSS
  variant?: 'primary-light' | 'primary-dark' | 'gray-light'
}

export type BannerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Banner = React.forwardRef<HTMLDivElement, BannerProps>((props, ref) => {
  const {css = {}, variant = 'primary-light', children, ...htmlProps} = props

  const announcementRef = useDOMRef<HTMLDivElement>(
    ref as React.RefObject<HTMLDivElement>,
  )

  const {child: BannerLeftElement} = pickChild(children, BannerLeft)

  const {child: BannerBodyElement} = pickChild(children, BannerBody)

  const {child: BannerRightElement} = pickChild(children, BannerRight)

  const rootClasses = [
    styles.banner,
    variant === 'primary-light' && styles.primaryLightVariant,
    variant === 'primary-dark' && styles.primaryDarkVariant,
    variant === 'gray-light' && styles.grayLightVariant,
    'cdg-announcement-banner',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <div ref={announcementRef} className={rootClasses} {...htmlProps}>
        {BannerLeftElement}
        {BannerBodyElement}
        {BannerRightElement}
      </div>
    </CssInjection>
  )
})

export default Banner
