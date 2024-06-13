'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/sub-header-subtitle.module.css'

interface Props {
  children: React.ReactNode
  css?: CSS
  className?: string
}

export type SubHeaderSubtitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  SubHeaderSubtitleProps
>((props, ref) => {
  const {children, css = {}, className = '', ...htmlProps} = props

  return (
    <CssInjection css={css} childrenRef={ref}>
      <span
        {...htmlProps}
        ref={ref}
        className={classNames(
          styles.subHeaderSubtitle,
          className,
          'cdg-sub-header-subtitle',
        )}
      >
        {children}
      </span>
    </CssInjection>
  )
})

export default SubHeaderSubtitle
