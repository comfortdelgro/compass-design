/* eslint-disable prefer-const */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTransition} from './transitions.styles'

interface Props extends StyledComponentProps {
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
      css = {},
      children,
      speed = 0.3,
      collapsedSize = '1000px',
      orientation = 'vertical',
      slideDirection = 'bottom',
      isLazyMounted = true,
      ...delegated
    } = props
    const TransitionWrapperRef = useDOMRef<HTMLDivElement>(ref)
    const ChildrenRef = useDOMRef<HTMLDivElement>(null)
    const collapseDirection = orientation === 'vertical' ? 'height' : 'width'
    const determineSlideDirection = () => {
      if (slideDirection === 'left') return 'translateX(-100vh)'
      if (slideDirection === 'right') return 'translateX(100vh)'
      if (slideDirection === 'top') return 'translateY(-100vh)'
      return 'translateY(100vh)'
    }

    const [unMountedChildren, setUnMountedChildren] =
      React.useState<React.ReactNode>(children)

    const renderChildren = () => {
      if (show) {
        return children
      } else {
        return unMountedChildren
      }
    }

    React.useEffect(() => {
      if (isLazyMounted == false) return
      if (show) {
        setUnMountedChildren(children)
      } else {
        setTimeout(() => {
          setUnMountedChildren(null)
        }, speed * 1000)
      }
    }, [show, children, isLazyMounted])

    return (
      <>
        <StyledTransition
          css={{
            $$speed: `${speed}s`,
            $$collapsedSize: collapsedSize,
            $$collapseDirection: collapseDirection,
            $$slideDirection: determineSlideDirection(),
            ...css,
          }}
          ref={TransitionWrapperRef}
          effect={effect}
          show={show}
          orientation={effect === 'collapse' ? orientation : 'none'}
          {...delegated}
        >
          <div ref={ChildrenRef}>{renderChildren()}</div>
        </StyledTransition>
      </>
    )
  },
)

export default Transitions
