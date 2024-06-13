import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {Component} from '../utils'
import styles from './display.module.css'

interface Props {
  variant?: 'display1' | 'display2' | 'display3'
  weight?: 'bold' | 'semibold'
  component?: Component
  children: React.ReactNode
  css?: CSS
}

export type displayTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Display: React.FC<displayTypographyProps> = (props) => {
  const {
    css = {},
    children,
    variant = 'display1',
    weight = 'bold',
    component,
    className,
    ...htmlProps
  } = props

  const Component = React.useMemo(() => {
    if (component) return component
    switch (variant) {
      case 'display1':
        return 'h1'
      case 'display2':
        return 'h2'
      case 'display3':
        return 'h3'
    }
  }, [component, variant])

  const rootClasses = classNames(
    styles.display,
    variant && styles[variant],
    weight && styles[weight],
    className,
    'cdg-typography-display',
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

export default Display
