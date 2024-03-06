/* eslint-disable react-hooks/exhaustive-deps */
import {HTMLAttributes, PropsWithChildren, useEffect, useMemo} from 'react'
import useDrag, {DraggableOptions} from '../utils/hooks/useDrag'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/drawer-expander.module.css'

type Props = PropsWithChildren<{
  drawerOpen: boolean
  onDragPositionYChange?: (yAxis: number) => void
  onDragStart?: DraggableOptions['onStart']
  onDrag?: DraggableOptions['onMove']
  onDragEnd?: DraggableOptions['onEnd']
}>

export type DrawerExpanderProps = Props & {css?: unknown} & Omit<
    HTMLAttributes<HTMLDivElement>,
    keyof Props
  >

/**
 * @note This component is draggable.
 *
 * On touch device, it will be re-render (to reflect with the user's drag actions)
 * many more times than when being 'dragged' by a mouse.
 */
const DrawerExpander = ({
  drawerOpen,
  className,
  children,
  css = {},
  onDragPositionYChange,
  onDragStart,
  onDrag,
  onDragEnd,
  ...htmlDivAttributes
}: DrawerExpanderProps) => {
  const dragHookOptions = useMemo<DraggableOptions<HTMLDivElement>>(
    () => ({
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

  const rootClasses = [styles.drawerExpander, className, 'cdg-drawer-expander']
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={drawerExpanderRef}>
      <div
        ref={drawerExpanderRef}
        className={rootClasses}
        {...htmlDivAttributes}
      >
        {children || (
          <div className={`${styles.expanderLine} cdg-drawer-expander-line`} />
        )}
      </div>
    </CssInjection>
  )
}

export default DrawerExpander
