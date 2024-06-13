import {
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/natural-drawer.module.css'

export type DrawerContentProps = PropsWithChildren<{
  css?: CSS
  header?: React.ReactChild
  setOffsetTop: (offset: number) => void
}> &
  HTMLAttributes<HTMLDivElement>

export const NaturalDrawerContent = forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(({children, header, setOffsetTop, css = {}, ...htmlAttributes}, ref) => {
  const [viewDidMount, setViewDidMount] = useState(false)
  const naturalDrawerRef = useDOMRef<HTMLDivElement>(ref)

  useEffect(() => {
    if (viewDidMount) {
      setOffsetTop(naturalDrawerRef.current.offsetTop)
    }
  }, [naturalDrawerRef, setOffsetTop, viewDidMount])

  useEffect(() => {
    setViewDidMount(true)
  }, [])

  return (
    <CssInjection css={css} childrenRef={naturalDrawerRef}>
      <div
        className={classNames(styles.naturalDrawer, 'cdg-natural-drawer')}
        ref={naturalDrawerRef}
      >
        {header}
        <div
          {...htmlAttributes}
          className={classNames(
            styles.naturalDrawerContent,
            'cdg-natural-drawer-content',
          )}
        >
          {children}
        </div>
      </div>
    </CssInjection>
  )
})
