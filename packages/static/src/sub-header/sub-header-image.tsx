'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/sub-header-image.module.css'
interface Props {
  css?: unknown
  className?: string
}

export type SubHeaderImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const SubHeaderImage = React.forwardRef<HTMLImageElement, SubHeaderImageProps>(
  (props, ref) => {
    const {css = {}, className = '', ...htmlProps} = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <img
          className={`cdg-sub-header-image ${className} ${styles.subHeaderImage}`}
          ref={ref}
          {...htmlProps}
        />
      </CssInjection>
    )
  },
)

export default SubHeaderImage
