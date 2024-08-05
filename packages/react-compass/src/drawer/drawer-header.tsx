import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {DRAWER_CLASSES} from './constants'
import drawerClasses from './styles/drawer-shared.module.css'

export type DrawerHeaderProps = PropsWithChildren<{css?: CSS}> &
  HTMLAttributes<HTMLElement>

const DrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(
  ({children, className = '', css, ...htmlAttributes}, ref) => {
    const drawerHeaderRef = useDOMRef<HTMLElement>(ref)

    const renderDrawerHeader = (
      <header
        {...htmlAttributes}
        ref={drawerHeaderRef}
        className={classNames(
          drawerClasses.drawerHeader,
          DRAWER_CLASSES.HEADER,
          className,
        )}
      >
        {children}
      </header>
    )

    if (!css) {
      return renderDrawerHeader
    }

    return (
      <CssInjection css={css} childrenRef={drawerHeaderRef}>
        {renderDrawerHeader}
      </CssInjection>
    )
  },
)

export default DrawerHeader
