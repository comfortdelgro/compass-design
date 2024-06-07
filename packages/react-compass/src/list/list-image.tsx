import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
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
    const {
      isRounded = false,
      css = {},
      className,
      ...htmlProps
    } = props

    const rootClass = React.useMemo(() => {
      return [
        styles.image,
        isRounded && styles.isRounded,
        'cdg-list-image',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, isRounded])

    return (
      <CssInjection css={css} childrenRef={ref}>
        <img ref={ref} className={rootClass} {...htmlProps} />
      </CssInjection>
    )
  },
)

export default ListImage
