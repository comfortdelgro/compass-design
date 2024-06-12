'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import styles from './styles/sub-header.module.css'
import SubHeaderBody from './sub-header-body'
import SubHeaderDescription from './sub-header-description'
import SubHeaderHeader from './sub-header-header'
import SubHeaderImage from './sub-header-image'
import SubHeaderTitle from './sub-header-title'

interface Props {
  children: React.ReactNode
  variant?: 'default'
  css?: CSS
  className?: string
}

export type SubHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeader = React.forwardRef<HTMLDivElement, SubHeaderProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      className = '',
      variant = 'default',
      ...htmlProps
    } = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          ref={ref}
          {...htmlProps}
          className={classNames(
            styles.subHeader,
            styles[`subHeader${capitalizeFirstLetter(variant)}`],
            className,
            'cdg-sub-header',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
) as typeof SubHeader & {
  Title: typeof SubHeaderTitle
  Header: typeof SubHeaderHeader
  Description: typeof SubHeaderDescription
  Image: typeof SubHeaderImage
  Body: typeof SubHeaderBody
}

export default SubHeader
