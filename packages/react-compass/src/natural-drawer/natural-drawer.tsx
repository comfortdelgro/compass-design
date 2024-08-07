'use client'

import {forwardRef, useCallback, useEffect, useRef, useState} from 'react'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {NaturalDrawerContent} from './natural-drawer-content'
import {NaturalDrawerHeader} from './natural-drawer-header'
import styles from './styles/natural-drawer.module.css'

export type DrawerType = 'drawer' | 'bottomSheet'

interface Props {
  type?: DrawerType
  children?: React.ReactNode
  header?: React.ReactChild
  fixedContent?: React.ReactChild
  className?: string
  fullscreen?: boolean
  expanded?: boolean
  pullDownToClose?: boolean
  visibleHeight?: number
  drawerScroll?: (event: React.UIEvent<HTMLDivElement>) => void
  onCollapsed: () => void
  onExpanded: () => void
  onReachBottom?: () => void
}

export type NaturalDrawerProps = Props &
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    keyof Props | 'tabIndex' | 'autoFocus'
  >

const SCROLL_COOLDOWN_TIME = 500

const NaturalDrawerWrapper = forwardRef<HTMLDivElement, NaturalDrawerProps>(
  (props, ref) => {
    const {
      type = 'drawer',
      children,
      className = '',
      expanded = false,
      fullscreen = true,
      header,
      fixedContent,
      visibleHeight,
      style,
      drawerScroll = () => {},
      onReachBottom = () => {},
      onCollapsed = () => {},
      onExpanded = () => {},
      ...rest
    } = props

    const [viewDidMount, setViewDidMount] = useState(false)
    const [lastTop, setLastTop] = useState(0)
    const [offsetTop, setOffsetTop] = useState(0)
    const [showing, setShowing] = useState(false)
    const wrapperRef = useDOMRef<HTMLDivElement>(ref)
    const contentRef = useRef<HTMLDivElement>(null)
    const spaceRef = useRef<HTMLDivElement>(null)
    const pullDownRef = useRef<HTMLDivElement>(null)

    const defaultVisibleHeight =
      visibleHeight || (wrapperRef.current?.clientHeight || 0) * 0.36
    const distance = Math.floor(offsetTop || 0)

    const getStopHeight = useCallback(() => {
      let height = ''
      if (!wrapperRef.current) {
        return height
      }
      const parentHeight = wrapperRef.current?.clientHeight
      height = 100 - (defaultVisibleHeight * 100) / parentHeight + '%'
      return height
    }, [defaultVisibleHeight, wrapperRef])

    const getBackgroundOpacity = () => {
      return (
        ((wrapperRef?.current?.scrollTop +
          (!fixedContent ? defaultVisibleHeight : 0)) /
          wrapperRef?.current?.scrollHeight || 0) * 0.8
      )
    }

    const scrollTo = useCallback(
      (top: number) => {
        if (wrapperRef.current && contentRef && contentRef.current) {
          wrapperRef.current.scrollTo({top: top, behavior: 'smooth'})
        }
      },
      [wrapperRef],
    )

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
      const top = (event.target as HTMLElement).scrollTop
      setLastTop(top)
      if (top >= distance) {
        onExpanded()
      } else if (top === 0) {
        onCollapsed()
      }

      if (showing && top <= 10) {
        onReachBottom()
      }

      drawerScroll(event)
    }

    const expand = useCallback(() => {
      scrollTo(contentRef?.current?.offsetTop || 0)
      onExpanded()
    }, [contentRef, onExpanded, scrollTo])

    const collapse = useCallback(() => {
      if (wrapperRef.current && contentRef && contentRef.current) {
        scrollTo(0)
        onCollapsed()
      }
    }, [onCollapsed, scrollTo, wrapperRef])

    useEffect(() => {
      expanded ? expand() : collapse()
    }, [collapse, expand, expanded])

    useEffect(() => {
      if (
        viewDidMount &&
        spaceRef &&
        spaceRef.current &&
        type === 'bottomSheet'
      ) {
        scrollTo(spaceRef.current.offsetTop)
        setTimeout(() => {
          setShowing(true)
          onExpanded()
        }, SCROLL_COOLDOWN_TIME)
      }

      if (
        viewDidMount &&
        contentRef &&
        contentRef.current &&
        type === 'drawer'
      ) {
        contentRef.current.style.scrollSnapAlign = 'start'
      }
    }, [onExpanded, scrollTo, type, viewDidMount])

    // To force the component rerender one time
    useEffect(() => {
      setViewDidMount(true)
    }, [expand, type])

    return (
      <div
        ref={wrapperRef}
        className={classNames(
          styles.naturalDrawerWrapper,
          styles[type],
          fullscreen ? styles.fullscreen : '',
          lastTop >= distance ? classNames('maximized', styles.maximized) : '',
          className,
          `cdg-natural-drawer`,
        )}
        onScroll={handleScroll}
        style={{
          backgroundColor:
            type === 'bottomSheet' || !fixedContent
              ? `rgba(0,0,0,${getBackgroundOpacity()})`
              : '',
          ...style,
        }}
        {...rest}
      >
        {fixedContent && (
          <div
            className={classNames(
              styles.fixedContent,
              'cdg-natural-drawer-fixed-content',
            )}
          >
            {fixedContent}
          </div>
        )}
        {type === 'bottomSheet' ? (
          <div
            ref={pullDownRef}
            className={classNames(
              styles.naturalDrawerStop,
              'cdg-natural-drawer-stop',
            )}
            style={{
              height: `calc(100% - ${getStopHeight()})`,
            }}
          ></div>
        ) : (
          ''
        )}
        {viewDidMount && (
          <>
            <div
              ref={spaceRef}
              className={classNames(
                styles.naturalDrawerStop,
                'cdg-natural-drawer-stop',
              )}
              style={{
                height: getStopHeight(),
              }}
            ></div>
            <NaturalDrawerContent
              ref={contentRef}
              header={header}
              setOffsetTop={setOffsetTop}
              style={{opacity: viewDidMount ? '' : 0}}
            >
              {children}
            </NaturalDrawerContent>
          </>
        )}
      </div>
    )
  },
)

export default NaturalDrawerWrapper as typeof NaturalDrawerWrapper & {
  Header: typeof NaturalDrawerHeader
  Content: typeof NaturalDrawerContent
}
