/* eslint-disable react-refresh/only-export-components */
'use client'
import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {pickChild} from '../../utils/pick-child'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from '../styles/announcement.module.css'
import BannerBody, {BannerBodyProps} from './body'
import BannerLeft, {BannerLeftProps} from './left'
import BannerRight, {BannerRightProps} from './right'

interface Props {
  css?: unknown
  variant?: 'primary-light' | 'primary-dark' | 'gray-light'
}

export type AnnouncementProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Announcement = React.forwardRef<HTMLDivElement, AnnouncementProps>(
  (props, ref) => {
    const {css = {}, variant = 'primary-light', children, ...htmlProps} = props

    const announcementRef = useDOMRef<HTMLDivElement>(
      ref as React.RefObject<HTMLDivElement>,
    )

    const {child: BannerLeftElement} = pickChild<
      React.ReactElement<BannerLeftProps>
    >(children, BannerLeft)

    const {child: BannerBodyElement} = pickChild<
      React.ReactElement<BannerBodyProps>
    >(children, BannerBody)

    const {child: BannerRightElement} = pickChild<
      React.ReactElement<BannerRightProps>
    >(children, BannerRight)

    const rootClasses = [
      styles.announcement,
      variant === 'primary-light' && styles.primaryLightVariant,
      variant === 'primary-dark' && styles.primaryDarkVariant,
      variant === 'gray-light' && styles.grayLightVariant,
      'cdg-announcement',
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
  },
)

export default Announcement
