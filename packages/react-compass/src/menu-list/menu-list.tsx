import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledMenuList} from './menu-list.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type MenuListProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      className = '',
      // StyledComponentProps
      css = {},
      // HTML Div props
      ...delegated
    } = props

    return (
      <StyledMenuList
        className={`${className} menu-list`}
        ref={ref}
        css={css}
        {...delegated}
      >
        {children}
      </StyledMenuList>
    )
  },
)

export default MenuList
