import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import styles from '../styles/card.module.css'

interface Props {
  css?: unknown
}

export type CardFooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  (props, ref) => {
    const {css = {}, className, children} = props

    const rootClasses = [
      styles.footer,
      className,
      'cdg-announcement-card-footer',
    ]
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

export default CardFooter
