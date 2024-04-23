import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import styles from '../styles/card.module.css'

interface Props {
  css?: CSS
}

export type CardBodyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => {
    const {css = {}, className, children} = props

    const rootClasses = [styles.body, className, 'cdg-announcement-card-body']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css}>
        <div ref={ref} className={rootClasses}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default CardBody
