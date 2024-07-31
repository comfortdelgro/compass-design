import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {DRAWER_CLASSES} from './constants'
import drawerClasses from './styles/drawer-shared.module.css'

export type DrawerFooterProps = PropsWithChildren<{css?: CSS}> &
  HTMLAttributes<HTMLElement>

const DrawerFooter = forwardRef<HTMLElement, DrawerFooterProps>(
  ({children, className = '', css, ...htmlAttributes}, ref) => {
    const drawerFooterRef = useDOMRef<HTMLElement>(ref)

    const renderDrawerFooter = (
      <footer
        {...htmlAttributes}
        ref={drawerFooterRef}
        className={classNames(
          drawerClasses.drawerFooter,
          DRAWER_CLASSES.FOOTER,
          className,
        )}
      >
        {children}
      </footer>
    )

    if (!css) {
      return renderDrawerFooter
    }

    return (
      <CssInjection css={css} childrenRef={drawerFooterRef}>
        {renderDrawerFooter}
      </CssInjection>
    )
  },
)

export default DrawerFooter
