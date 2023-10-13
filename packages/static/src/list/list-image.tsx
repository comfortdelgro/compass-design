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
      let classes = `cdg-list-image ${styles.image}`
      if (isRounded) classes += ` ${styles.isRounded}`
      if (variant === 'h5') classes += ` ${styles.variantH5}`
      if (className) classes += ` ${className}`
      return classes
    }, [className, isRounded, variant])

    return (
      <CssInjection css={css} childrenRef={ref}>
        <img ref={ref} className={rootClass} {...htmlProps} />
      </CssInjection>
    )
  },
)

export default ListImage
