import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {SidenavContext} from './sidenav-context'
import {StyledSidenavItem} from './sidenav-item.styles'

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

    const {isExpand} = useContext(SidenavContext)

    const [icon, title] = React.Children.toArray(children)

    return (
      <StyledSidenavItem
        ref={ref}
        css={css}
        className={`${className} ${isActive ? 'sidenav-item-active' : ''}`}
        active={isActive ? 'active' : 'default'}
        {...delegated}
      >
        {icon}
        {isExpand && <div className='sidenav-item-title'>{title}</div>}
      </StyledSidenavItem>
    )
  },
)

export default SidenavItem
