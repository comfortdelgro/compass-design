import React from 'react'
import Portal from '../../portal'
import styles from '../styles/snackbar-item.module.css'
import SnackbarItem from './snackbar-item'
import {SnackbarItemType} from './types'

interface Props {
  snackbars: SnackbarItemType[]
  snackbarItemClassName?: string
  css?: unknown
  className?: string
}

export type SnackbarsContainerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarsContainer = (props: SnackbarsContainerProps) => {
  const {
    // StyledComponentProps
    css = {},
    //Component props
    snackbars,
    snackbarItemClassName,
    // HTMLDiv Props
    className = '',
    ...htmlProps
  } = props

  const contentClasses = [
    'cdg-snackbar-container',
    styles.snackbarContainer,
    snackbars.length > 0 ? '' : styles.snackbarContainerHidden,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Portal open={snackbars.length > 0}>
      <div {...htmlProps} className={contentClasses}>
        {snackbars.map((snackbar) => (
          <SnackbarItem
            key={snackbar.id}
            {...snackbar}
            snackbarItemClassName={`${styles.cdgSnackbarItem} ${
              snackbarItemClassName || ''
            }`}
          />
        ))}
      </div>
    </Portal>
  )
}

export default SnackbarsContainer
