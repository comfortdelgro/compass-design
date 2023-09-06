import React, {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useMemo,
} from 'react'
import useDrag, {DraggableOptions} from '../utils/hooks/useDrag'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDrawerExpander} from './drawer.styles'

type Props = PropsWithChildren<{
  drawerOpen: boolean
  onDragPositionYChange?: (yAxis: number) => void
  onDragStart?: DraggableOptions['onStart']
  onDrag?: DraggableOptions['onMove']
  onDragEnd?: DraggableOptions['onEnd']
}>

export type DrawerExpanderProps = Props &
  StyledComponentProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

/**
 * @note This component is draggable.
 *
 * On touch device, it will be re-render (to reflect with the user's drag actions)
 * many more times than when being 'dragged' by a mouse.
 */
const DrawerExpander = ({
  drawerOpen,
  children,
  css = {},
  onDragPositionYChange,
  onDragStart,
  onDrag,
  onDragEnd,
  ...delegated
}: DrawerExpanderProps) => {
  const dragHookOptions = useMemo<DraggableOptions<HTMLDivElement>>(
    () => ({
      // stepSize: 2,
      direction: 'vertical',
      setCSS: false,
      onStart(...params) {
        onDragStart?.(...params)
      },
      onMove(...params) {
        onDrag?.(...params)
      },
      onEnd(...params) {
        onDragEnd?.(...params)
      },
    }),
    [onDragStart, onDrag, onDragEnd],
  )

  const {
    target: drawerExpanderRef,
    position: {y},
    setPosition,
  } = useDrag(dragHookOptions)

  useEffect(() => {
    setPosition({x: 0, y: 0})
  }, [drawerOpen])

  useEffect(() => {
    onDragPositionYChange?.(y)
  }, [y])

  return (
    <StyledDrawerExpander css={css} ref={drawerExpanderRef} {...delegated}>
      {children || <div className='expander-line'></div>}
    </StyledDrawerExpander>
  )
}

export default DrawerExpander
