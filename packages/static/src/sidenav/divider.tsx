'use client'

import React from 'react'
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
      className={`${className} ${styles.divider} cdg-sidenav-divider`}
      ref={ref}
      {...delegated}
    />
  )
})

export default Divider
