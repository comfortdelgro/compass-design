import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/list-image.module.css'

interface Props {
  css?: unknown
  isRounded?: boolean
  children?: React.ReactNode
  variant?: 'item' | 'interactive' | 'h5'
}

export type ListImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const ListImage = React.forwardRef<HTMLImageElement, ListImageProps>(
  (props, ref) => {
    const {
      isRounded = false,
      css = {},
      className,
      variant,
      ...htmlProps
    } = props

    const rootClass = React.useMemo(() => {
      return [
        styles.image,
        isRounded && styles.isRounded,
        variant === 'h5' && styles.variantH5,
        'cdg-list-image',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, isRounded, variant])

    return (
      <CssInjection css={css} childrenRef={ref}>
        <img ref={ref} className={rootClass} {...htmlProps} />
      </CssInjection>
    )
  },
)

export default ListImage
