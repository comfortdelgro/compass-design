import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {Component} from '../utils'
import styles from './body.module.css'

interface Props {
  variant?: 'body1' | 'body2' | 'body3'
  component?: Component
  weight?: 'none' | 'bold' | 'semibold'
  children: React.ReactNode
  css?: CSS
}

export type bodyTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Body: React.FC<bodyTypographyProps> = (props) => {
  const {
    css = {},
    children,
    variant = 'body1',
    weight,
    component,
    className,
    ...htmlProps
  } = props
  const Component = React.useMemo(() => {
    if (component) return component
    return 'p'
  }, [component])

  const rootClasses = classNames(
    variant && styles[variant],
    weight && styles[weight],
    styles.body,
    className,
    'cdg-typography-body',
  )

  return (
    <>
      <CssInjection css={css}>
        <Component className={rootClasses} {...htmlProps}>
          {children}
        </Component>
      </CssInjection>
    </>
  )
}

export default Body
