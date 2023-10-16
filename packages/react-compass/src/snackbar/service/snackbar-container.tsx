import React from 'react'
import Portal from '../../portal'
import {StyledComponentProps} from '../../utils/stitches.types'
import {Anchor} from './snackbar-context'
import SnackbarItem from './snackbar-item'
import {
  StyledSnackbarContainer,
  SnackbarContainerVariantProps,
} from './snackbar-item.styles'
import {SnackbarItemType} from './types'

interface Props extends StyledComponentProps {
  snackbars: SnackbarItemType[]
  snackbarItemClassName?: string
  anchorOrigin: Anchor
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
    anchorOrigin,
    // HTMLDiv Props
    className,
    ...delegated
  } = props

  return (
    <Portal open={snackbars.length > 0}>
      <StyledSnackbarContainer
        css={css}
        {...delegated}
        vertical={anchorOrigin.vertical}
        horizontal={anchorOrigin.horizontal}
        centerCenter={
          anchorOrigin.vertical === 'center' &&
          anchorOrigin.horizontal === 'center'
        }
        className={`${snackbars.length > 0 ? '' : 'cdg-snackbar-container-hidden'} ${
          className ?? ''
        }`}
      >
        {snackbars.map((snackbar) => (
          <SnackbarItem
            key={snackbar.id}
            {...snackbar}
            horizontal={anchorOrigin.horizontal}
            snackbarItemClassName={`cdg-snackbar-item ${snackbarItemClassName || ''}`}
          />
        ))}
      </StyledSnackbarContainer>
    </Portal>
  )
}

export default SnackbarsContainer
