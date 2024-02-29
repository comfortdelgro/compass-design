import {
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/natural-drawer.module.css'

export type DrawerContentProps = PropsWithChildren<{
  css?: unknown
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
        className={`${styles.naturalDrawer} natural-drawer`}
        ref={naturalDrawerRef}
      >
        {header}
        <div
          className={`${styles.naturalDrawerContent} natural-drawer-content`}
          {...htmlAttributes}
        >
          {children}
        </div>
      </div>
    </CssInjection>
  )
})
