import {forwardRef, HTMLAttributes, PropsWithChildren} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/natural-drawer.module.css'

export type DrawerHeaderProps = PropsWithChildren<{
  useDrag: boolean
  css?: CSS
}> &
  HTMLAttributes<HTMLElement>

export const NaturalDrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(
  ({children, useDrag = false, css = {}, ...htmlAttributes}, ref) => {
    const drawerHeaderRef = useDOMRef<HTMLElement>(ref)

    return (
      <CssInjection css={css} childrenRef={drawerHeaderRef}>
        <header
          {...htmlAttributes}
          ref={drawerHeaderRef}
          className={classNames(
            styles.naturalDrawerHeader,
            'cdg-natural-drawer-header',
          )}
        >
          {useDrag && (
            <div
              className={classNames(
                styles.naturalDrawerDragger,
                'cdg-natural-drawer-dragger',
              )}
            >
              <span
                className={classNames(
                  styles.naturalDrawerHandle,
                  'cdg-natural-drawer-handle',
                )}
              />
            </div>
          )}
          {children}
        </header>
      </CssInjection>
    )
  },
)
