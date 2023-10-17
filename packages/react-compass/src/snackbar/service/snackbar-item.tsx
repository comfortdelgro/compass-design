import React, {useRef} from 'react'
import {useSnackbar} from '../hooks/useSnackbar'
import Snackbar from '../snackbar'
import {StyledSnackbarItem} from './snackbar-item.styles'
import {SnackbarItemType} from './types'

export type SnackbarItemProps = SnackbarItemType & {
  snackbarItemClassName?: string
}
const ANIMATION_TIME = 300
const CLOSE_TIME = 1000

const SnackbarItem = ({
  id,
  snackbarItemClassName,
  autoClose = CLOSE_TIME,
  prefixIcon,
  suffixIcon,
  text,
  type = 'default',
  onClick,
  css = {},
}: SnackbarItemProps) => {
  const snackbar = useSnackbar() // call useSnackbar

  const snackbarItemRef = useRef<HTMLDivElement>(null)

  const handleDismiss = () => {
    if (snackbarItemRef.current && id) {
      snackbarItemRef.current.classList.add('cdg-snackbar-item-fade-out')
      setTimeout(() => {
        snackbar.remove(id)
      }, ANIMATION_TIME)
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e, id)
    }
  }

  return (
    <StyledSnackbarItem ref={snackbarItemRef}>
      <Snackbar
        isOpen
        handleClose={handleDismiss}
        className={snackbarItemClassName}
        autoClose={autoClose}
        type={type}
        css={css}
        onClick={handleClick}
      >
        {prefixIcon && <Snackbar.PrefixIcon>{prefixIcon}</Snackbar.PrefixIcon>}
        {suffixIcon && <Snackbar.SuffixIcon>{suffixIcon}</Snackbar.SuffixIcon>}

        {text && <Snackbar.Text>{text}</Snackbar.Text>}
      </Snackbar>
    </StyledSnackbarItem>
  )
}

export default SnackbarItem
