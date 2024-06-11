import React from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {classNames} from '../../utils/string'
import styles from '../styles/card.module.css'

interface Props {
  css?: CSS
}

export type CardFooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  (props, ref) => {
    const {css = {}, className, children} = props

    const rootClasses = classNames(
      styles.footer,
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

export default CardFooter
