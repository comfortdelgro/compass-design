import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/drawer.module.css'

export type DrawerFooterProps = PropsWithChildren<{css?: CSS}> &
  HTMLAttributes<HTMLElement>

const DrawerFooter = forwardRef<HTMLElement, DrawerFooterProps>(
  ({children, css = {}, ...htmlAttributes}, ref) => {
    const drawerFooterRef = useDOMRef<HTMLElement>(ref)

    return (
      <CssInjection css={css} childrenRef={drawerFooterRef}>
        <footer
          {...htmlAttributes}
          ref={drawerFooterRef}
          className={classNames(styles.drawerFooter, 'cdg-drawer-footer')}
        >
          {children}
        </footer>
      </CssInjection>
    )
  },
)

export default DrawerFooter
