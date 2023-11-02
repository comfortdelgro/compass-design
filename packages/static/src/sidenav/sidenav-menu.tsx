'use client'

import {
  autoUpdate,
  ExtendedRefs,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  Placement,
  ReferenceType,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useHover,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import React, {useContext, useEffect, useMemo, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/sidenav-menu.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  isOpenMenu?: boolean
  placement?: Placement
  delay?: {
    open?: number
    close?: number
  }
  shouldFlip?: boolean
  onOpenChange?: (isOpen: boolean) => void
  setMenuParentProps?: (
    ref: ExtendedRefs<ReferenceType>,
    getReferenceProps: (
      userProps?: React.HTMLProps<Element> | undefined,
    ) => Record<string, unknown>,
  ) => void
  css?: unknown
  className?: string
}

export type SidenavMenuProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidenavMenu = React.forwardRef<HTMLDivElement, SidenavMenuProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      isOpen = false,
      isOpenMenu = false,
      className = '',
      // StyledComponentProps
      css = {},
      delay,
      placement,
      shouldFlip = true,
      onOpenChange,
      setMenuParentProps,
      // HTML Div props
      ...delegated
    } = props
    // detect mouse leaving menu
    const [isMouseLeave, setIsMouseLeave] = useState(false)
    // internal open state that manage by floating ui
    const [isInternalOpen, setIsInternalOpen] = useState(false)
    // child menu open state, detect whether child menu is open or not
    const [isNestedMenuOpen, setIsNestedMenuOpen] = useState<boolean | null>(
      false,
    )
    // context: to set the [isNestedMenuOpen] state for the parent node
    const {setIsChildOpen} = useContext(SideMenuContext)

    // if no children menu open and the mouse leaving menu area -> close all menus
    useEffect(() => {
      if (!isNestedMenuOpen && isMouseLeave) {
        setIsInternalOpen(false)
        setIsChildOpen?.(false)
      }
    }, [isNestedMenuOpen])

    const {refs, floatingStyles, context} = useFloating({
      open: isInternalOpen,
      onOpenChange: (s) => {
        onOpenChange?.(s)
        if (isNestedMenuOpen) {
          return
        }
        setIsInternalOpen(s)
      },
      middleware: [shift(), shouldFlip ? flip() : null],
      whileElementsMounted: autoUpdate,
      placement: placement ?? 'right-start',
    })

    const hover = useHover(context, {
      delay: {
        open: delay?.open ?? 150,
        close: delay?.close ?? 100,
      },
      handleClose: safePolygon(),
    })
    const dismiss = useDismiss(context)
    const role = useRole(context)

    const {getReferenceProps, getFloatingProps} = useInteractions([
      hover,
      dismiss,
      role,
    ])

    // set ref and anchor position to parent node
    useEffect(() => {
      setMenuParentProps?.(refs, getReferenceProps)
    }, [refs, getReferenceProps])

    const headingId = useId()

    const hasChildren = Boolean(React.Children.count(children))

    // computed state to handle open state
    const openFinal = useMemo(() => {
      if (isOpen === true) {
        return true
      }
      if (isNestedMenuOpen) {
        return true
      }
      return isOpenMenu && isInternalOpen && hasChildren
    }, [isOpen, isNestedMenuOpen, isOpenMenu, isInternalOpen, hasChildren])

    // announce to parent node when this node change open state
    useEffect(() => {
      setIsChildOpen?.(openFinal)
    }, [openFinal])

    const mergeRefs = (el: HTMLDivElement | null) => {
      refs.setFloating(el)
      if (typeof ref === 'function') {
        ref(el)
      } else if (ref != null) {
        ref.current = el
      }
    }

    return (
      <>
        {openFinal && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <CssInjection css={css} childrenRef={mergeRefs}>
                <div
                  className={`cdg-sidenav-menu ${className} ${styles.sidenavMenu}`}
                  ref={mergeRefs}
                  style={{...floatingStyles}}
                  aria-labelledby={headingId}
                  {...getFloatingProps()}
                  onMouseLeave={() => {
                    setIsMouseLeave(true)
                  }}
                  onMouseOver={() => {
                    setIsMouseLeave(false)
                  }}
                  {...delegated}
                >
                  <SideMenuContext.Provider
                    value={{setIsChildOpen: setIsNestedMenuOpen}}
                  >
                    {children}
                  </SideMenuContext.Provider>
                </div>
              </CssInjection>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </>
    )
  },
)

export interface SideMenuContextValue {
  setIsChildOpen?: (open: boolean) => void
}

export const SideMenuContext = React.createContext<SideMenuContextValue>({})

export default SidenavMenu
