import React, {HTMLAttributes} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {AppNavSection, AppNavSectionProps} from './appnav-section'
import {StyledAppNav} from './appnav.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  sections?: 4 | 5
  position?: 'top' | 'bottom'
  value: number
  onChange: (value: number) => void
}

export type AppNavProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const AppNav = React.forwardRef<HTMLDivElement, AppNavProps>((props, ref) => {
  const navBarRef = useDOMRef(ref)
  const {
    sections = 4,
    position = 'bottom',
    css = {},
    children,
    value,
    onChange,
    ...delegated
  } = props
  return (
    <StyledAppNav
      sections={sections}
      position={position}
      ref={navBarRef}
      css={css}
      {...delegated}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null
        }
        const childToClone = child as React.ReactElement<AppNavSectionProps>
        const props = {} as AppNavSectionProps
        props.active = index === value
        props.value = index
        props.onChange = onChange
        if ('icon' in childToClone.props) {
          props.icon = childToClone.props.icon
        }
        if ('hasBadge' in childToClone.props) {
          props.hasBadge = childToClone.props.hasBadge
        }
        if ('label' in childToClone.props) {
          props.label = childToClone.props.label
        }
        return React.cloneElement(childToClone, props)
      })}
    </StyledAppNav>
  )
})

export default AppNav as typeof AppNav & {
  Section: typeof AppNavSection
}
