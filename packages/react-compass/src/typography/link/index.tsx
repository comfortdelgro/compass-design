import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import styles from './link.module.css'

interface Props {
  variant?: 'link1' | 'link2' | 'link3'
  weight?: 'semibold' | 'bold'
  children: React.ReactNode
  css?: CSS
}

export type linkTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>

const Link: React.FC<linkTypographyProps> = (props) => {
  const {
    css = {},
    children,
    weight,
    variant = 'link1',
    className,
    ...htmlProps
  } = props

  const rootClasses = classNames(
    styles.link,
    variant && styles[variant],
    weight && styles[weight],
    className,
    'cdg-typography-link',
  )

  return (
    <>
      <CssInjection css={css}>
        <a {...htmlProps} className={rootClasses}>
          {children}
        </a>
      </CssInjection>
    </>
  )
}

export default Link
