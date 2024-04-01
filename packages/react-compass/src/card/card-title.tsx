import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import styles from './styles/card.module.css'
interface Props {
  css?: CSS
  children?: React.ReactNode
}

export type CardTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return <h3 className={styles.cardTitle}>{children}</h3>
      }
      return children
    }

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          className={`${styles.cardTitleContainer} ${className}`}
          ref={ref}
          {...htmlProps}
        >
          {renderTitle()}
        </div>
      </CssInjection>
    )
  },
)

export default CardTitle
