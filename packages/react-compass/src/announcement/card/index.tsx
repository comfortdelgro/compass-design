/* eslint-disable react-refresh/only-export-components */
'use client'
import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {pickChild} from '../../utils/pick-child'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from '../styles/card.module.css'
import CardBody, {CardBodyProps} from './body'
import CardFooter, {CardFooterProps} from './footer'
import CardHeader, {CardHeaderProps} from './header'

interface Props {
  css?: CSS
  variant?: 'primary-light' | 'primary-dark' | 'gray-light'
}

export type CardProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {css = {}, variant = 'primary-light', children, ...htmlProps} = props

  const announcementRef = useDOMRef<HTMLDivElement>(
    ref as React.RefObject<HTMLDivElement>,
  )

  const {child: CardHeaderElement} = pickChild<
    React.ReactElement<CardHeaderProps>
  >(children, CardHeader)

  const {child: CardBodyElement} = pickChild<React.ReactElement<CardBodyProps>>(
    children,
    CardBody,
  )

  const {child: CardFooterElement} = pickChild<
    React.ReactElement<CardFooterProps>
  >(children, CardFooter)

  const rootClasses = [
    styles.card,
    variant === 'primary-light' && styles.primaryLightVariant,
    variant === 'primary-dark' && styles.primaryDarkVariant,
    variant === 'gray-light' && styles.grayLightVariant,
    'cdg-announcement-card',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <div ref={announcementRef} className={rootClasses} {...htmlProps}>
        {CardHeaderElement}
        {CardBodyElement}
        {CardFooterElement}
      </div>
    </CssInjection>
  )
})

export default Card
