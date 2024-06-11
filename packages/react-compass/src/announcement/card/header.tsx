import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {classNames} from '../../utils/string'
import styles from '../styles/card.module.css'

interface Props {
  css?: CSS
}

export type CardHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => {
    const {css = {}, className, children} = props

    const rootClasses = classNames(
      styles.header,
      className,
      'cdg-announcement-card-footer',
    )

    return (
      <CssInjection css={css}>
        <div ref={ref} className={rootClasses}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default CardHeader
