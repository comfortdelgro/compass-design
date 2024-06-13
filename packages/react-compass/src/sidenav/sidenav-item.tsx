'use client'

import {ExtendedRefs, ReferenceType} from '@floating-ui/react'
import React, {useState} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/sidenav-item.module.css'

interface Props {
  children: React.ReactNode
  isActive?: boolean
  css?: CSS
  className?: string
}

export type SidenavItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidenavItem = React.forwardRef<HTMLDivElement, SidenavItemProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      isActive,
      className = '',
      // StyledComponentProps
      css = {},
      // HTML Div props
      ...delegated
    } = props

    const [menuParenProps, setMenuParentProps] = useState<{
      ref: ExtendedRefs<ReferenceType>
      getReferenceProps: (
        userProps?: React.HTMLProps<Element> | undefined,
      ) => Record<string, unknown>
    } | null>(null)

    const [isOpenMenu, setOpenMenu] = useState(false)

    const [icon, title, menu] = React.Children.toArray(children)

    const setMenuParent = (
      ref: ExtendedRefs<ReferenceType>,
      getReferenceProps: (
        userProps?: React.HTMLProps<Element> | undefined,
      ) => Record<string, unknown>,
    ) => {
      setMenuParentProps({ref, getReferenceProps})
    }

    const clonedMenu = menu ? (
      React.cloneElement(menu as JSX.Element, {
        setMenuParentProps: setMenuParent,
        isOpenMenu: isOpenMenu,
      })
    ) : (
      <></>
    )

    const mergeRefs = (el: HTMLDivElement | null) => {
      // tooltipContext.tooltipRef?.(el)
      menuParenProps?.ref.setReference(el)
      if (typeof ref === 'function') {
        ref(el)
      } else if (ref != null) {
        ref.current = el
      }
    }

    return (
      <CssInjection css={css} childrenRef={mergeRefs}>
        <div
          {...delegated}
          {...menuParenProps?.getReferenceProps()}
          ref={mergeRefs}
          className={classNames(
            styles.sidenavItem,
            isActive
              ? `${styles.sidenavItemActive} sidenav-item-active`
              : 'default',
            className,
            'cdg-sidenav-item',
          )}
          onMouseEnter={() => {
            setOpenMenu(true)
          }}
        >
          <div
            className={classNames(
              styles.cdgSidenavItemIcon,
              isActive && styles.cdgSidenavItemActiveIcon,
              'cdg-sidenav-item-icon',
            )}
          >
            {icon}
          </div>
          <div
            className={classNames(
              styles.cdgSidenavItemTitle,
              'cdg-sidenav-item-title',
            )}
          >
            {title}
          </div>
          {clonedMenu}
        </div>
      </CssInjection>
    )
  },
)

export default SidenavItem
