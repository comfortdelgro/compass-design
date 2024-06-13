import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/drawer.module.css'

export type DrawerHeaderProps = PropsWithChildren<{css?: CSS}> &
  HTMLAttributes<HTMLElement>

const DrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(
  ({children, css = {}, ...htmlAttributes}, ref) => {
    const drawerHeaderRef = useDOMRef<HTMLElement>(ref)

    return (
      <CssInjection css={css} childrenRef={drawerHeaderRef}>
        <header
          {...htmlAttributes}
          ref={drawerHeaderRef}
          className={classNames(styles.drawerHeader, 'cdg-drawer-header')}
        >
          {children}
        </header>
      </CssInjection>
    )
  },
)

export default DrawerHeader
