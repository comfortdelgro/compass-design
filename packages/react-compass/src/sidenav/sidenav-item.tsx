import { ExtendedRefs, ReferenceType } from '@floating-ui/react'
import React, { useState } from 'react'
import { StyledComponentProps } from '../utils/stitches.types'
import { StyledSidenavItem } from './sidenav-item.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  isActive?: boolean
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
      setMenuParentProps({ ref, getReferenceProps })
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
      <StyledSidenavItem
        ref={mergeRefs}
        css={css}
        className={`${className} ${isActive ? 'sidenav-item-active' : ''}`}
        active={isActive ? 'active' : 'default'}
        onMouseEnter={() => {
          setOpenMenu(true)
        }}
        {...delegated}
        {...menuParenProps?.getReferenceProps()}
      >
        <div className='cdg-sidenav-item-icon'>{icon}</div>
        <div className='cdg-sidenav-item-title'>{title}</div>
        {clonedMenu}
      </StyledSidenavItem>
    )
  },
)

export default SidenavItem
