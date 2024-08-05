import {
  useEffect,
  useRef,
  type CSSProperties,
  type PropsWithChildren,
} from 'react'
import {classNames} from '../utils/string'
import {DRAWER_CLASSES} from './constants'
import drawerMobileStyles from './styles/drawer-mobile.module.css'

const DrawerMobileContent = ({
  className = '',
  style,
  children,
}: PropsWithChildren<{className?: string; style?: CSSProperties}>) => {
  const contentRef = useRef<HTMLElement>(null)
  const contentStartTouchY = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !contentRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const targetEl = entries[0].target as HTMLElement
      const isScrollable = targetEl.scrollHeight > targetEl.clientHeight
      targetEl.classList.toggle(DRAWER_CLASSES.CONTENT_SCROLLABLE, isScrollable)
    })

    resizeObserver.observe(contentRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  return (
    <article
      ref={contentRef}
      className={classNames(
        drawerMobileStyles.drawerContent,
        DRAWER_CLASSES.CONTENT,
        className,
      )}
      onTouchStart={(e) => {
        const targetEl = e.currentTarget
        const isScrollable = targetEl.scrollHeight > targetEl.clientHeight
        if (!isScrollable) {
          return
        }

        contentStartTouchY.current = e.touches[0].clientY
        targetEl.style.removeProperty('touch-action')
      }}
      onTouchMove={(e) => {
        const isScrollable =
          e.currentTarget.scrollHeight > e.currentTarget.clientHeight
        if (!isScrollable) {
          return
        }

        const targetEl = e.currentTarget
        const positionY = e.touches[0].clientY
        if (positionY === contentStartTouchY.current) {
          return
        }
        const scrollY = e.currentTarget.scrollTop

        const isSwipeDown = positionY > contentStartTouchY.current
        const isScrolledToTop = scrollY === 0
        const isScrolledToBottom =
          scrollY + targetEl.clientHeight === targetEl.scrollHeight
        if (
          (isScrolledToTop && isSwipeDown) ||
          (isScrolledToBottom && !isSwipeDown)
        ) {
          targetEl.style.setProperty('touch-action', 'none')
          return
        }

        targetEl.style.removeProperty('touch-action')
      }}
      style={style}
    >
      {children}
    </article>
  )
}

export default DrawerMobileContent
