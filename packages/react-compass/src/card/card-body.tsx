import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/card.module.css'
interface Props {
  css?: CSS
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
          {...htmlProps}
          ref={ref}
          className={classNames(styles.cardBody, className, 'cdg-card-body')}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default CardBody
