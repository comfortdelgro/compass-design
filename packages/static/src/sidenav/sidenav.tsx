'use client'

import React, {useRef, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import Divider from './divider'
import {SidenavContext} from './sidenav-context'
import SidenavItem from './sidenav-item'
import SidenavMenu from './sidenav-menu'
import styles from './styles/sidenav.module.css'

interface Props {
  children: React.ReactNode
  expand?: boolean
  delay?: number
  css?: unknown
  className?: string
  onExpandChange?: (expand: boolean) => void
}

export type SidenavProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Sidenav = React.forwardRef<HTMLDivElement, SidenavProps>((props, ref) => {
  const [expandOnHover, setExpandOnHover] = useState(false)
  const {
    // ComponentProps
    children,
    expand = false,
    className = '',
    delay = 0,
    // StyledComponentProps
    css = {},
    // HTML Div props
    ...htmlProps
  } = props

  const expandTimeout = useRef<NodeJS.Timeout | null>(null)

  // if component is controlled -> return
  // if hover -> set expandOnHover state = true
  const handleMouseOver = () => {
    if (expand) return
    if (!expandTimeout.current) {
      expandTimeout.current = setTimeout(() => {
        setExpandOnHover(true)
        if (props.onExpandChange) {
          props.onExpandChange(true)
        }
      }, delay)
    }
  }

  // if component is controlled -> return
  // if hover -> set expandOnHover state = false
  const handleMouseLeave = () => {
    if (expand) return
    if (expandTimeout.current) {
      clearTimeout(expandTimeout.current)
      expandTimeout.current = null
      if (props.onExpandChange) {
        props.onExpandChange(false)
      }
    }
    setExpandOnHover(false)
  }

  // if expand prop is false -> always open the sidenav
  // else, expand when hover
  const isExpand = !expand ? expandOnHover : true

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div
        ref={ref}
        className={`cdg-sidenav ${styles.sidenav} ${className} ${
          expandOnHover ? 'sidenav-expanded' : ''
        } ${isExpand ? `${styles.sidenavFull}` : 'default'}`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        {...htmlProps}
      >
        <SidenavContext.Provider value={{isExpand: isExpand}}>
          {children}
        </SidenavContext.Provider>
      </div>
    </CssInjection>
  )
})

export default Sidenav as typeof Sidenav & {
  Item: typeof SidenavItem
  Divider: typeof Divider
  Menu: typeof SidenavMenu
}
