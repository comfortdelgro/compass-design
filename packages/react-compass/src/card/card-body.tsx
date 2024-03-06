import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/card.module.css'
interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type CardBodyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          className={`${styles.cardBody} ${className ?? ''}`}
          ref={ref}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default CardBody
