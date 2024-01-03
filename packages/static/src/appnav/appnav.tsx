import React, {HTMLAttributes} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {AppNavSection, AppNavSectionProps} from './appnav-section'
import styles from './styles/appnav.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
  position?: 'top' | 'bottom'
  index: number
  onChange: (value: number) => void
}

export type AppNavProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

// eslint-disable-next-line react-refresh/only-export-components
const AppNav = React.forwardRef<HTMLDivElement, AppNavProps>((props, ref) => {
  const navBarRef = useDOMRef(ref)
  const {
    position = 'bottom',
    css = {},
    children,
    index: AppNavIndex,
    onChange: AppNavChange,
    ...delegated
  } = props

  const rootClasses = [styles.appNav, styles[position], 'cdg-appnav']
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={navBarRef}>
      <nav className={rootClasses} ref={navBarRef} {...delegated}>
        {React.Children.map(children, (child, childIndex) => {
          if (!React.isValidElement(child)) {
            return null
          }
          const childToClone = child as React.ReactElement<AppNavSectionProps>
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const {isActive, index, onChange, ...rest} = childToClone.props // filter out unnecessary props when using <AppNav.Section />
          const props = {} as AppNavSectionProps
          props.isActive = childIndex === AppNavIndex
          props.index = childIndex
          props.onChange = AppNavChange
          return React.cloneElement(childToClone, {
            ...props,
            ...rest,
          })
        })}
      </nav>
    </CssInjection>
  )
})

export default AppNav as typeof AppNav & {
  Section: typeof AppNavSection
}
