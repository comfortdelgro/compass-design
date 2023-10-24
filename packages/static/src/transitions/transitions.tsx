import React from 'react'
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

    /** State and Ref **/
    const TransitionWrapperRef = useDOMRef<HTMLDivElement>(ref)
    const ChildRef = useDOMRef<HTMLDivElement>(ref)
    const [mountedChilren, setMountedChilren] =
      React.useState<React.ReactNode>(null)
    const [childrenHeight, setChildrenHeight] = React.useState<number | null>(
      null,
    )
    const [styles, setStyles] = React.useState<React.CSSProperties>({})
    /** End of State and Ref **/

    // This function is used to unmount children when it doesn't show. Get called on transition end
    const childrenRender = () => {
      if (isLazyMounted == true && show == false) {
        setMountedChilren(null)
      }
    }

    // This effect is used to mount children when it show. Get called on show change
    React.useEffect(() => {
      if (show == true) {
        setMountedChilren(children)
      }
    }, [mountedChilren, show, children, effect])

    // This effect is used to get children height
    React.useLayoutEffect(() => {
      if (ChildRef.current && !childrenHeight) {
        console.log('get children height from ChildRef')
        const element = ChildRef.current?.querySelector(':first-child')
        if (element instanceof HTMLElement) {
          // Check if element is an instance of HTMLElement
          setChildrenHeight(element.offsetHeight)
        }
      } else if (TransitionWrapperRef.current && childrenHeight) {
        console.log('get children height from TransitionWrapperRef')
        const element =
          TransitionWrapperRef.current?.querySelector(':first-child')
        if (element instanceof HTMLElement) {
          // Check if element is an instance of HTMLElement
          setChildrenHeight(element.offsetHeight)
        }
      }
    }, [show, mountedChilren, ChildRef, TransitionWrapperRef, childrenHeight])

    // This effect is used to set transition styles
    React.useEffect(() => {
      const determineSlideDirection = () => {
        if (slideDirection === 'left') return 'translateX(-100vh)'
        if (slideDirection === 'right') return 'translateX(100vh)'
        if (slideDirection === 'top') return 'translateY(-100vh)'
        return 'translateY(100vh)'
      }

      const speedCss = `${speed}s`
      const collapsedSizeCss = collapsedSize ?? `${childrenHeight}px`
      const collapseDirectionCss =
        orientation === 'vertical' ? 'height' : 'width'
      const slideDirectionCss = determineSlideDirection()
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
        MozTransition: `${collapseDirectionCss} ${speedCss}` /* Firefox 4 */,
        WebkitTransition: `${collapseDirectionCss} ${speedCss}` /* Safari and Chrome */,
        OTransition: `${collapseDirectionCss} ${speedCss}` /* Opera */,
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
        opacity: '0',
        transition: `opacity ${speedCss}`,
      }

      const fadeCssShow = {
        opacity: '1',
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
          Styles = {...defaultCss, ...collapseCss}
          setStyles(Styles)
        }
        if (effect === 'fade') {
          Styles = {...defaultCss, ...fadeCss}
          setStyles(Styles)
        }
        if (effect === 'slide') {
          Styles = {...defaultCss, ...slideCss}
          setStyles(Styles)
        }
        if (effect === 'zoom') {
          Styles = {...defaultCss, ...zoomCss}
          setStyles(Styles)
        }
        if (orientation === 'horizontal' && effect === 'collapse') {
          Styles = {...Styles, ...horizontalCss}
        }
        if (orientation === 'vertical' && effect === 'collapse') {
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
      childrenHeight,
    ])

    return (
      <>
        {/* We need this to calculate childrenHeight on mount when mountedChilren is still null*/}
        {!childrenHeight ? (
          <div
            ref={ChildRef}
            style={{visibility: 'hidden', position: 'absolute'}}
          >
            {children}
          </div>
        ) : null}

        <div
          style={styles}
          ref={TransitionWrapperRef}
          onTransitionEnd={() => childrenRender()}
          {...htmlProps}
        >
          {mountedChilren}
        </div>
      </>
    )
  },
)

export default Transitions
