import React from 'react'
import Portal from '../../portal'
import {StyledComponentProps} from '../../utils/stitches.types'
import SnackbarItem from './snackbar-item'
import {
  SnackbarContainerVariantProps,
  StyledSnackbarContainer,
} from './snackbar-item.styles'
import {SnackbarItemType} from './types'

interface Props extends StyledComponentProps {
  snackbars: SnackbarItemType[]
  snackbarItemClassName?: string
}

export type SnackbarsContainerProps = Props &
  SnackbarContainerVariantProps &
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
    ...delegated
  } = props

  return (
    <Portal open={snackbars.length > 0}>
      <StyledSnackbarContainer
        css={css}
        {...delegated}
        className={`${
          snackbars.length > 0 ? '' : 'cdg-snackbar-container-hidden'
        } ${className ?? ''}`}
      >
        {snackbars.map((snackbar) => (
          <SnackbarItem
            key={snackbar.id}
            {...snackbar}
            snackbarItemClassName={`cdg-snackbar-item ${
              snackbarItemClassName || ''
            }`}
          />
        ))}
      </StyledSnackbarContainer>
    </Portal>
  )
}

export default SnackbarsContainer
