import React, {useRef} from 'react'
import {useSnackbar} from '../hooks/useSnackbar'
import Snackbar from '../snackbar'
import {StyledSnackbarItem} from './snackbar-item.styles'
import {SnackbarItemType} from './types'

export type SnackbarItemProps = SnackbarItemType & {
  snackbarItemClassName?: string
  horizontal: 'left' | 'right' | 'center'
}
const ANIMATION_TIME = 300
const CLOSE_TIME = 1000

const SnackbarItem = ({
  id,
  snackbarItemClassName,
  autoClose = CLOSE_TIME,
  horizontal,
  prefixIcon,
  suffixIcon,
  detailDescription,
  detail,
  text,
  type='default',
  css={}
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

  return (
    <StyledSnackbarItem ref={snackbarItemRef} horizontal={horizontal}>
      <Snackbar
        isOpen
        handleClose={handleDismiss}
        className={snackbarItemClassName}
        autoClose={autoClose}
        type={type}
        css={css}
      >
        {prefixIcon && (
          <Snackbar.PrefixIcon>
            {prefixIcon}
          </Snackbar.PrefixIcon>
        )}
        {suffixIcon && (
          <Snackbar.SuffixIcon>
            {suffixIcon}
          </Snackbar.SuffixIcon>
        )}

        {text && <Snackbar.Text>{text}</Snackbar.Text>}
        {detail && <Snackbar.Detail>{detail}</Snackbar.Detail>}
        {detailDescription && <Snackbar.DetailDescription>{detailDescription}</Snackbar.DetailDescription>}
      </Snackbar>
    </StyledSnackbarItem>
  )
}

export default SnackbarItem
