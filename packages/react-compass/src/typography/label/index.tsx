import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {Component} from '../utils'
import styles from './label.module.css'

interface Props {
  variant?: 'label1' | 'label2' | 'label3'
  component?: Component
  weight?: 'bold' | 'semibold' | 'light'
  children: React.ReactNode
  css?: unknown
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

  const classNames = React.useMemo(() => {
    const arr = [
      styles.label,
      variant && styles[variant],
      weight && styles[weight],
      className && className,
      'cdg-label',
    ]
    return arr.filter(Boolean).join(' ')
  }, [className, variant, weight])

  return (
    <>
      <CssInjection css={css}>
        <Component {...htmlProps} className={classNames}>
          {children}
        </Component>
      </CssInjection>
    </>
  )
}

export default Label
