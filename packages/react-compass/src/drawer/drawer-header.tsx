import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/drawer.module.css'

export type DrawerHeaderProps = PropsWithChildren<{css?: unknown}> &
  HTMLAttributes<HTMLElement>

const DrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(
  ({children, css = {}, ...htmlAttributes}, ref) => {
    const drawerHeaderRef = useDOMRef<HTMLElement>(ref)

    return (
      <CssInjection css={css} childrenRef={drawerHeaderRef}>
        <header
          ref={drawerHeaderRef}
          className={`${styles.drawerHeader} cdg-drawer-header`}
          {...htmlAttributes}
        >
          {children}
        </header>
      </CssInjection>
    )
  },
)

export default DrawerHeader
