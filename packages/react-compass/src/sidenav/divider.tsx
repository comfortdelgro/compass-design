'use client'

import React from 'react'
import {classNames} from '../utils/string'
import styles from './styles/divider.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

export type DividerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    // ComponentProps
    className = '',
    // HTML Div props
    ...delegated
  } = props

  return (
    <div
      {...delegated}
      ref={ref}
      className={classNames(styles.divider, className, 'cdg-sidenav-divider')}
    />
  )
})

export default Divider
