import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/list-image.module.css'

interface Props {
  css?: CSS
  isRounded?: boolean
  children?: React.ReactNode
  variant?: 'item' | 'interactive'
}

export type ListImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const ListImage = React.forwardRef<HTMLImageElement, ListImageProps>(
  (props, ref) => {
    const {isRounded = false, css = {}, className, ...htmlProps} = props

    const rootClass = classNames(
      styles.image,
      isRounded && styles.isRounded,
      className,
      'cdg-list-image',
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <img {...htmlProps} ref={ref} className={rootClass} />
      </CssInjection>
    )
  },
)

export default ListImage
