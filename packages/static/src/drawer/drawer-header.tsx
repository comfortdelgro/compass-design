import clsx from 'clsx'
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
          className={clsx(styles.drawerHeader, 'drawer-header')}
          {...htmlAttributes}
        >
          {children}
        </header>
      </CssInjection>
    )
  },
)

export default DrawerHeader
