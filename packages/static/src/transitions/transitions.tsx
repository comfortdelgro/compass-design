import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props {
  children?: React.ReactNode
  effect?: 'collapse' | 'fade' | 'slide' | 'zoom'
  show?: boolean
  speed?: number
  collapsedSize?: string
  orientation?: 'horizontal' | 'vertical'
  slideDirection?: 'left' | 'right' | 'top' | 'bottom'
  isLazyMounted?: boolean
}

export type TransitionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Transitions = React.forwardRef<HTMLDivElement, TransitionsProps>(
  (props, ref) => {
    const {
      effect = 'collapse',
      show = false,
      children,
      speed = 0.3,
      collapsedSize,
      orientation = 'vertical',
      slideDirection = 'bottom',
      isLazyMounted = true,
      ...htmlProps
    } = props
    const TransitionWrapperRef = useDOMRef<HTMLDivElement>(ref)
    const [unMountedChildren, setUnMountedChildren] =
      React.useState<React.ReactNode>(children)
    const [childrenHeight, setChildrenHeight] = React.useState<number>(1000)
    const [styles, setStyles] = React.useState<React.CSSProperties>({})

    const renderChildren = () => {
      if (show) {
        return children
      } else {
        return unMountedChildren
      }
    }

    // CSS

    const determineSlideDirection = () => {
      if (slideDirection === 'left') return 'translateX(-100vh)'
      if (slideDirection === 'right') return 'translateX(100vh)'
      if (slideDirection === 'top') return 'translateY(-100vh)'
      return 'translateY(100vh)'
    }

    const speedCss = `${speed}s`
    const collapsedSizeCss = collapsedSize ?? `${childrenHeight}px`
    const collapseDirectionCss = orientation === 'vertical' ? 'height' : 'width'
    const slideDirectionCss = determineSlideDirection()

    // End of css

    React.useEffect(() => {
      if (isLazyMounted == false) return
      if (show) {
        setUnMountedChildren(children)
      } else {
        setTimeout(() => {
          setUnMountedChildren(null)
        }, speed * 1000)
      }
    }, [show, children, isLazyMounted, speed])

    React.useLayoutEffect(() => {
      if (show && TransitionWrapperRef.current) {
        const element =
          TransitionWrapperRef.current?.querySelector(':first-child')
        if (element instanceof HTMLElement) {
          // Check if element is an instance of HTMLElement
          setChildrenHeight(element.offsetHeight)
        }
      }
    }, [show, children, TransitionWrapperRef])

    React.useEffect(() => {
      const defaultCss = {
        // reset
        // boxSizing: 'border-box',
        background: 'transparent',
        border: 'none',
        margin: '0px',
        padding: '0px',
        outline: 'none',
        // custom
        transitionDuration: speedCss,
        transitionTimingFunction: 'ease',
        overflow: 'hidden',
      }

      const collapseCss = {
        overflow: 'hidden',
        transition: `${collapseDirectionCss} ${speedCss}`,
        '-moz-transition': `${collapseDirectionCss} ${speedCss}` /* Firefox 4 */,
        '-webkit-transition': `${collapseDirectionCss} ${speedCss}` /* Safari and Chrome */,
        '-o-transition': `${collapseDirectionCss} ${speedCss}` /* Opera */,
      }

      const horizontalCss = {
        width: '0px',
      }

      const verticalCss = {
        height: '0px',
      }

      const collapseHorizontalCssShow = {
        width: collapsedSizeCss,
      }

      const collapseVerticalCssShow = {
        height: collapsedSizeCss,
      }

      const fadeCss = {
        opacity: 0,
        transition: `opacity ${speedCss}`,
      }

      const fadeCssShow = {
        opacity: 1,
      }

      const slideCss = {
        position: 'absolute',
        transform: slideDirectionCss,
        transition: `transform ${speedCss}`,
      }

      const slideCssShow = {
        transform: 'translateX(0)',
        position: 'static',
      }

      const zoomCss = {
        transform: 'scale(0)',
        transition: `transform ${speedCss}`,
      }

      const zoomCssShow = {
        transform: 'scale(1)',
      }
      const transitionStylesHandler = () => {
        let Styles = {...defaultCss}

        if (effect === 'collapse') {
          Styles = {...Styles, ...collapseCss}
          setStyles(Styles)
        }
        if (effect === 'fade') {
          Styles = {...Styles, ...fadeCss}
          setStyles(Styles)
        }
        if (effect === 'slide') {
          Styles = {...Styles, ...slideCss}
          setStyles(Styles)
        }
        if (effect === 'zoom') {
          Styles = {...Styles, ...zoomCss}
          setStyles(Styles)
        }
        if (orientation === 'horizontal') {
          Styles = {...Styles, ...horizontalCss}
        }
        if (orientation === 'vertical') {
          Styles = {...Styles, ...verticalCss}
          setStyles(Styles)
        }
        if (effect === 'collapse' && orientation === 'horizontal' && show) {
          Styles = {...Styles, ...collapseHorizontalCssShow}
          setStyles(Styles)
        }
        if (effect === 'collapse' && orientation === 'vertical' && show) {
          Styles = {...Styles, ...collapseVerticalCssShow}
          setStyles(Styles)
        }
        if (effect === 'fade' && show) {
          Styles = {...Styles, ...fadeCssShow}
          setStyles(Styles)
        }
        if (effect === 'slide' && show) {
          Styles = {...Styles, ...slideCssShow}
          setStyles(Styles)
        }
        if (effect === 'zoom' && show) {
          Styles = {...Styles, ...zoomCssShow}
          setStyles(Styles)
        }
        return setStyles(Styles)
      }

      transitionStylesHandler()
    }, [
      show,
      children,
      TransitionWrapperRef,
      speed,
      effect,
      orientation,
      slideDirection,
      collapsedSize,
      speedCss,
      collapseDirectionCss,
      collapsedSizeCss,
      slideDirectionCss,
    ])

    return (
      <>
        <CssInjection css={styles}>
          <div {...htmlProps}>{renderChildren()}</div>
        </CssInjection>
      </>
    )
  },
)

export default Transitions
