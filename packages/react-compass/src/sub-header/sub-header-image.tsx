'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/sub-header-image.module.css'
interface Props {
  css?: CSS
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
          {...htmlProps}
          ref={ref}
          className={classNames(
            styles.subHeaderImage,
            className,
            'cdg-sub-header-image',
          )}
        />
      </CssInjection>
    )
  },
)

export default SubHeaderImage
