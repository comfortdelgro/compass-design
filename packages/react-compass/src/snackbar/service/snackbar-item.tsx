import React, {useRef} from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useSnackbar} from '../hooks/useSnackbar'
import Snackbar from '../snackbar'
import styles from '../styles/snackbar-item.module.css'
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
      snackbarItemRef.current.classList.add(`${styles.snackbarItemFadeOut}`)
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

  const contentClasses = ['cdg-snackbar-item', styles.snackbarItem]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection>
      <div className={contentClasses} ref={snackbarItemRef}>
        <Snackbar
          isOpen
          handleClose={handleDismiss}
          className={snackbarItemClassName}
          autoClose={autoClose}
          type={type}
          css={css}
          onClick={handleClick}
        >
          {prefixIcon && (
            <Snackbar.PrefixIcon>{prefixIcon}</Snackbar.PrefixIcon>
          )}
          {suffixIcon && (
            <Snackbar.SuffixIcon>{suffixIcon}</Snackbar.SuffixIcon>
          )}

          {text && <Snackbar.Text>{text}</Snackbar.Text>}
        </Snackbar>
      </div>
    </CssInjection>
  )
}

export default SnackbarItem
