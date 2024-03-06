'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import SidebarActions from './sidebar-actions'
import SidebarContent from './sidebar-content'
import SidebarTitle from './sidebar-title'
import styles from './styles/sidebar.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  onClick?: (event: MouseEvent) => void
  position?: 'left' | 'right'
  css?: unknown
  variant?: 'primary' | 'secondary'
  className?: string
}

export type SidebarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const {
    children,
    // StyledComponentProps
    css = {},
    // VariantProps
    variant = 'primary',
    position = 'left',
    className = '',
    // Component props
    isOpen = false,
    handleClose,
    onClick,
    // HTMLDiv Props
    ...htmlProps
  } = props

  const sidebarRef = useDOMRef<HTMLDivElement>(ref)

  // Pick title actions component
  const {child: SidebarActionsElement} = pickChild<typeof SidebarActions>(
    children,
    SidebarActions,
  )
  const {child: SidebarContentElement} = pickChild<typeof SidebarContent>(
    children,
    SidebarContent,
  )
  const {child: SidebarTitleElement} = pickChild<typeof SidebarTitle>(
    children,
    SidebarTitle,
  )

  function handleClickBackDrop(event: MouseEvent) {
    event.preventDefault()
    handleClose?.()
  }

  function handleClickSidebar(event: MouseEvent) {
    event.stopPropagation()
    onClick?.(event as unknown as MouseEvent)
  }

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <CssInjection css={css} childrenRef={sidebarRef}>
      {isOpen && (
        <div
          className={`cdg-sidebar-wrapper ${styles.sidebarWrapper} ${className}`}
          onClick={(e) => handleClickBackDrop(e as unknown as MouseEvent)}
        >
          <div
            className={`cdg-sidebar ${styles.sidebar} ${
              variant ? styles[`sidebar${capitalizeFirstLetter(variant)}`] : ''
            } ${
              position
                ? styles[`sidebar${capitalizeFirstLetter(position)}`]
                : ''
            }`}
            ref={sidebarRef}
            onClick={(e) => handleClickSidebar(e as unknown as MouseEvent)}
            {...htmlProps}
          >
            {variant == 'primary' && (
              <div className={`cdg-sidebar-header ${styles.sidebarHeader}`}>
                {SidebarTitleElement}
                <div
                  className={`cdg-sidebar-close-icon ${styles.sidebarCloseIcon}`}
                  onClick={() => handleClose?.()}
                >
                  <svg viewBox='0 0 384 512'>
                    <path
                      fill='currentColor'
                      d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                    />
                  </svg>
                </div>
              </div>
            )}
            {SidebarContentElement}
            {SidebarActionsElement}
          </div>
        </div>
      )}
    </CssInjection>
  )
})

export default Sidebar as typeof Sidebar & {
  Actions: typeof SidebarActions
  Content: typeof SidebarContent
  Title: typeof SidebarTitle
}
