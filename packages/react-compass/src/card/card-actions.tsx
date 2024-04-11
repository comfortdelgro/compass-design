import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import styles from './styles/card.module.css'

interface Props {
  css?: CSS
  children?: React.ReactNode
}

export type CardActionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          className={`${styles.cardActions} ${className ?? ''}`}
          ref={ref}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default CardAction
