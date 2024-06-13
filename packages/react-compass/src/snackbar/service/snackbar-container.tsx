import React from 'react'
import Portal from '../../portal'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import styles from '../styles/snackbar-item.module.css'
import SnackbarItem from './snackbar-item'
import {SnackbarItemType} from './types'

interface Props {
  snackbars: SnackbarItemType[]
  snackbarItemClassName?: string
  css?: CSS
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
    className,
    ...htmlProps
  } = props

  const contentClasses = classNames(
    styles.snackbarContainer,
    snackbars.length > 0 ? '' : styles.snackbarContainerHidden,
    className,
    'cdg-snackbar-container',
  )

  return (
    <Portal open={snackbars.length > 0}>
      <CssInjection css={css}>
        <div {...htmlProps} className={contentClasses}>
          {snackbars.map((snackbar) => (
            <SnackbarItem
              key={snackbar.id}
              {...snackbar}
              snackbarItemClassName={classNames(
                styles.cdgSnackbarItem,
                snackbarItemClassName || '',
              )}
            />
          ))}
        </div>
      </CssInjection>
    </Portal>
  )
}

export default SnackbarsContainer
