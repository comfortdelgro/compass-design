import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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
          {...htmlProps}
          ref={ref}
          className={classNames(
            styles.cardActions,
            className,
            'cdg-card-action',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default CardAction
