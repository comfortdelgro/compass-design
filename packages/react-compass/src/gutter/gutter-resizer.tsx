import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useRef, useState} from 'react'
import Icon, {IconProp} from '../icon'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {useGutterContext} from './gutter-context'
import {
  StyledGutterCollapseButton,
  StyledGutterResizer,
} from './gutter-resizer.styles'
import {useResizer} from './useResizer'

interface Props extends StyledComponentProps {
  showCollapseButton?: boolean
  isCollapsed?: boolean
  minCollapseWidth?: CSS['width']
  maxCollapseWidth?: CSS['width']
  onCollapseChange?: (isCollapsed: boolean) => void
}

export type GutterResizerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const GutterResizer = React.forwardRef<HTMLDivElement, GutterResizerProps>(
  (props, ref) => {
    const {
      css = {},
      isCollapsed: isCollapsedProp = undefined,
      showCollapseButton,
      minCollapseWidth,
      maxCollapseWidth,
      onCollapseChange,
    } = props
    const domRef = useDOMRef(ref)
    const {
      isGutterLeftSide,
      gutterWidth,
      hasBothSides,
      gutterRef,
      setGutterWidth,
    } = useGutterContext()

    const [isCollapsed, setIsCollapsed] = useState<boolean | undefined>(
      isCollapsedProp,
    )

    const previousWidth = useRef(0)
    const isShrinking = useRef(false)
    const [hasReachEnd, setHasReachEnd] = useState(false)

    //Set collapsed state if the gutter resize reaches the end
    useEffect(() => {
      if (hasBothSides) {
        return
      }
      if (!gutterRef?.current) {
        return
      }
      if (gutterRef.current.clientWidth !== previousWidth.current) {
        setHasReachEnd(false)
        if (gutterRef.current.clientWidth > previousWidth.current) {
          isShrinking.current = false
        } else {
          isShrinking.current = true
        }
        previousWidth.current = gutterRef.current.clientWidth
      } else {
        setHasReachEnd(true)
        if (isShrinking.current) {
          setIsCollapsed(true)
        } else {
          setIsCollapsed(false)
        }
      }
    }, [gutterWidth])

    useEffect(() => {
      setIsCollapsed(isCollapsedProp)
    }, [isCollapsedProp])

    // Change gutter width when isCollapse state change
    useEffect(() => {
      if (isCollapsed) {
        setGutterWidth?.(hasReachEnd ? '0px' : minCollapseWidth ?? '0px')
      } else if (isCollapsed === false) {
        setGutterWidth?.(hasReachEnd ? '100%' : maxCollapseWidth ?? '100%')
      }

      if (isCollapsed !== undefined) {
        onCollapseChange?.(isCollapsed)
      }
    }, [isCollapsed])

    const renderCollapseSymbol = () => {
      let icon: IconProp = faChevronLeft
      if (isGutterLeftSide) {
        icon = isCollapsed ? faChevronLeft : faChevronRight
      } else {
        icon = isCollapsed ? faChevronRight : faChevronLeft
      }

      return <Icon icon={icon} style={{width: '14px', height: '14px'}} />
    }

    const {startResizing} = useResizer(domRef)
    return (
      <StyledGutterResizer
        css={css}
        position={isGutterLeftSide ? 'left' : 'right'}
        ref={domRef}
        onPointerDown={startResizing}
      >
        {showCollapseButton ? (
          <StyledGutterCollapseButton
            onClick={() => {
              setIsCollapsed?.((previousState) => !previousState)
            }}
          >
            {renderCollapseSymbol()}
          </StyledGutterCollapseButton>
        ) : (
          <></>
        )}
      </StyledGutterResizer>
    )
  },
)

export default GutterResizer
