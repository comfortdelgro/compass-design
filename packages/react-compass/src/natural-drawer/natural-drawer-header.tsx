import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/natural-drawer.module.css'

export type DrawerHeaderProps = PropsWithChildren<{
  useDrag: boolean
  css?: unknown
}> &
  HTMLAttributes<HTMLElement>

export const NaturalDrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(
  ({children, useDrag = false, css = {}, ...htmlAttributes}, ref) => {
    const drawerHeaderRef = useDOMRef<HTMLElement>(ref)

    return (
      <CssInjection css={css} childrenRef={drawerHeaderRef}>
        <header
          ref={drawerHeaderRef}
          className={`${styles.naturalDrawerHeader} natural-drawer-header`}
          {...htmlAttributes}
        >
          {useDrag && (
            <div className={styles.naturalDrawerDragger}>
              <span className={styles.naturalDrawerHandle} />
            </div>
          )}
          {children}
        </header>
      </CssInjection>
    )
  },
)
