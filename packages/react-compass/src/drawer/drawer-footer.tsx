import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/drawer.module.css'

export type DrawerFooterProps = PropsWithChildren<{css?: unknown}> &
  HTMLAttributes<HTMLElement>

const DrawerFooter = forwardRef<HTMLElement, DrawerFooterProps>(
  ({children, css = {}, ...htmlAttributes}, ref) => {
    const drawerFooterRef = useDOMRef<HTMLElement>(ref)

    return (
      <CssInjection css={css} childrenRef={drawerFooterRef}>
        <footer
          ref={drawerFooterRef}
          className={`${styles.drawerFooter} cdg-drawer-footer`}
          {...htmlAttributes}
        >
          {children}
        </footer>
      </CssInjection>
    )
  },
)

export default DrawerFooter
