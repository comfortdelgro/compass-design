import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {Component} from '../utils'
import styles from './label.module.css'

interface Props {
  variant?: 'label1' | 'label2' | 'label3'
  component?: Component
  weight?: 'bold' | 'semibold' | 'light'
  children: React.ReactNode
  css?: CSS
}

export type labelTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Label: React.FC<labelTypographyProps> = (props) => {
  const {
    css = {},
    children,
    variant = 'label1',
    weight,
    component,
    className,
    ...htmlProps
  } = props
  const Component = React.useMemo(() => {
    if (component) return component
    return 'label'
  }, [component])

  const rootClasses = classNames(
    styles.label,
    variant && styles[variant],
    weight && styles[weight],
    className && className,
    'cdg-typography-label',
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

export default Label
