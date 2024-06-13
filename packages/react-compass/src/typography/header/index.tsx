import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {Component} from '../utils'
import styles from './header.module.css'

interface Props {
  variant?:
    | 'header0'
    | 'header1'
    | 'header2'
    | 'header3'
    | 'header4'
    | 'header5'
  component?: Component
  children: React.ReactNode
  css?: CSS
  weight?: 'semibold' | 'bold'
}

export type headerTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Header: React.FC<headerTypographyProps> = (props) => {
  const {
    css = {},
    children,
    variant = 'header1',
    weight = 'semibold',
    component,
    className,
    ...htmlProps
  } = props
  const Component = React.useMemo(() => {
    if (component) return component
    switch (variant) {
      case 'header0':
        return 'h1'
      case 'header1':
        return 'h1'
      case 'header2':
        return 'h2'
      case 'header3':
        return 'h3'
      case 'header4':
        return 'h4'
      case 'header5':
        return 'h5'
      default:
        return 'h1'
    }
  }, [component, variant])

  const rootClasses = classNames(
    styles.header,
    variant && styles[variant],
    weight && styles[weight],
    className,
    'cdg-typography-header',
  )

  return (
    <>
      <CssInjection css={css}>
        <Component {...htmlProps} className={rootClasses}>
          {children}
        </Component>
      </CssInjection>
    </>
  )
}

export default Header
