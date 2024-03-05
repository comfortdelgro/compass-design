import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  binarySearch,
  checkIfInteractive,
  getTranslateOffset,
  schd,
  setItemTransition,
  transformItem,
} from '.'
import DragAndDropListOutletItem from '../item/outlet'
import type {IItemProps, IProps, TEvent} from './types'

const AUTOSCROLL_ACTIVE_OFFSET = 200
const AUTOSCROLL_SPEED_RATIO = 10
const TRANSITION_DURATION = 200

const BASE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  boxSizing: 'border-box',
  position: 'relative',
} as React.CSSProperties

class List extends React.Component<IProps> {
  listRef = React.createRef<HTMLUListElement>()
  ghostRef = React.createRef<HTMLLIElement>()
  topOffsets: number[] = []
  itemTranslateOffsets: number[] = []
  initialYOffset = 0
  lastScroll = 0
  lastYOffset = 0
  lastListYOffset = 0
  dropTimeout?: number
  needle = -1
  afterIndex = -2
  override state = {
    itemDragged: -1,
    itemDraggedOutOfBounds: -1,
    selectedItem: -1,
    initialX: 0,
    initialY: 0,
    targetX: 0,
    targetY: 0,
    targetHeight: 0,
    targetWidth: 0,
    scrollingSpeed: 0,
    scrollWindow: false,
  }
  schdOnPointerMove: {(e: PointerEvent): void; cancel(): void}
  schdOnEnd: {(e: PointerEvent): void; cancel(): void}

  static defaultProps = {
    removableByMove: false,
  }

  constructor(props: IProps) {
    super(props)
    this.schdOnPointerMove = schd(this.onPointerMove)
    this.schdOnEnd = schd(this.onEnd)
  }

  override componentDidMount() {
    this.calculateOffsets()
    document.addEventListener('pointerdown', this.onPointerStart)
  }

  override componentDidUpdate(
    _prevProps: IProps,
    prevState: {scrollingSpeed: number},
  ) {
    if (
      prevState.scrollingSpeed !== this.state.scrollingSpeed &&
      prevState.scrollingSpeed === 0
    ) {
      this.doScrolling()
    }
  }

  override componentWillUnmount() {
    document.removeEventListener('pointerdown', this.onPointerStart)
    if (this.dropTimeout) {
      window.clearTimeout(this.dropTimeout)
    }
    this.schdOnPointerMove.cancel()
    this.schdOnEnd.cancel()
  }

  doScrolling = () => {
    const {scrollingSpeed, scrollWindow} = this.state
    const listEl = this.listRef.current!
    window.requestAnimationFrame(() => {
      if (scrollWindow) {
        window.scrollTo(
          window.pageXOffset,
          window.pageYOffset + scrollingSpeed * 1.5,
        )
      } else {
        listEl.scrollTop += scrollingSpeed
      }
      if (scrollingSpeed !== 0) {
        this.doScrolling()
      }
    })
  }

  getChildren = () => {
    if (this.listRef && this.listRef.current) {
      return Array.from(this.listRef.current.children)
    }
    return []
  }

  calculateOffsets = () => {
    this.topOffsets = this.getChildren().map(
      (item) => item.getBoundingClientRect().top,
    )
    this.itemTranslateOffsets = this.getChildren().map((item) =>
      getTranslateOffset(item),
    )
  }

  getTargetIndex = (e: TEvent) => {
    return this.getChildren().findIndex(
      (child) => child === e.target || child.contains(e.target as Node),
    )
  }

  onPointerStart = (event: PointerEvent) => {
    if (this.dropTimeout && this.state.itemDragged > -1) {
      window.clearTimeout(this.dropTimeout)
      this.finishDrop()
    }
    const index = this.getTargetIndex(event as unknown as TEvent)
    if (index === -1 || !this.props.values[index]) {
      if (this.state.selectedItem !== -1) {
        this.setState({selectedItem: -1})
        this.finishDrop()
      }
      return
    }
    const listItemTouched = this.getChildren()[index] as HTMLElement
    const handle = listItemTouched.querySelector('[data-handler]')
    if (handle && !handle.contains(event.target as Node)) {
      return
    }
    if (checkIfInteractive(event.target as HTMLElement, listItemTouched)) {
      return
    }
    event.preventDefault()
    document.addEventListener('pointermove', this.schdOnPointerMove)
    document.addEventListener('pointercancel', this.schdOnEnd)
    document.addEventListener('pointerup', this.schdOnEnd)
    this.onStart(listItemTouched, event.clientX, event.clientY, index)
  }

  getYOffset = () => {
    const listScroll = this.listRef.current ? this.listRef.current.scrollTop : 0
    return window.pageYOffset + listScroll
  }

  onStart = (
    target: HTMLElement,
    clientX: number,
    clientY: number,
    index: number,
  ) => {
    if (this.state.selectedItem > -1) {
      this.setState({selectedItem: -1})
      this.needle = -1
    }
    const targetRect = target.getBoundingClientRect()
    const targetStyles = window.getComputedStyle(target)
    this.calculateOffsets()
    this.initialYOffset = this.getYOffset()
    this.lastYOffset = window.pageYOffset
    this.lastListYOffset = this.listRef.current!.scrollTop
    this.setState({
      itemDragged: index,
      targetX:
        targetRect.left -
        parseInt(targetStyles.getPropertyValue('margin-left'), 10),
      targetY:
        targetRect.top -
        parseInt(targetStyles.getPropertyValue('margin-top'), 10),
      targetHeight: targetRect.height,
      targetWidth: targetRect.width,
      initialX: clientX,
      initialY: clientY,
    })
  }

  onPointerMove = (event: PointerEvent) => {
    event.cancelable && event.preventDefault()
    this.onMove(event.clientX, event.clientY)
  }

  onWheel = (e: React.WheelEvent) => {
    if (this.state.itemDragged < 0) return
    this.lastScroll = this.listRef.current!.scrollTop += e.deltaY
    this.moveOtherItems()
  }

  onMove = (clientX: number, clientY: number) => {
    if (this.state.itemDragged === -1) return null
    transformItem(
      this.ghostRef.current!,
      clientY - this.state.initialY,
      clientX - this.state.initialX,
    )
    this.autoScrolling(clientY)
    this.moveOtherItems()
    return
  }

  moveOtherItems = () => {
    const targetRect = this.ghostRef.current!.getBoundingClientRect()
    const itemVerticalCenter = targetRect.top + targetRect.height / 2
    const child = this.getChildren()[this.state.itemDragged]
    if (!child) return
    const offset = getTranslateOffset(child)
    const currentYOffset = this.getYOffset()
    // adjust offsets if scrolling happens during the item movement
    if (this.initialYOffset !== currentYOffset) {
      this.topOffsets = this.topOffsets.map(
        (offset) => offset - (currentYOffset - this.initialYOffset),
      )
      this.initialYOffset = currentYOffset
    }
    if (this.isDraggedItemOutOfBounds() && this.props.removableByMove) {
      this.afterIndex = this.topOffsets.length + 1
    } else {
      this.afterIndex = binarySearch(this.topOffsets, itemVerticalCenter)
    }
    this.animateItems(
      this.afterIndex === -1 ? 0 : this.afterIndex,
      this.state.itemDragged,
      offset,
    )
  }

  autoScrolling = (clientY: number) => {
    const {top, bottom, height} = this.listRef.current!.getBoundingClientRect()
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight
    // autoscrolling for the window (down)
    if (
      bottom > viewportHeight &&
      viewportHeight - clientY < AUTOSCROLL_ACTIVE_OFFSET
    ) {
      this.setState({
        scrollingSpeed: Math.round(
          (AUTOSCROLL_ACTIVE_OFFSET - (viewportHeight - clientY)) /
            AUTOSCROLL_SPEED_RATIO,
        ),
        scrollWindow: true,
      })
      // autoscrolling for the window (up)
    } else if (top < 0 && clientY < AUTOSCROLL_ACTIVE_OFFSET) {
      this.setState({
        scrollingSpeed: Math.round(
          (AUTOSCROLL_ACTIVE_OFFSET - clientY) / -AUTOSCROLL_SPEED_RATIO,
        ),
        scrollWindow: true,
      })
    } else {
      if (this.state.scrollWindow && this.state.scrollingSpeed !== 0) {
        this.setState({scrollingSpeed: 0, scrollWindow: false})
      }
      // autoscrolling for containers with overflow
      if (height + 20 < this.listRef.current!.scrollHeight) {
        let scrollingSpeed = 0
        if (clientY - top < AUTOSCROLL_ACTIVE_OFFSET) {
          scrollingSpeed = Math.round(
            (AUTOSCROLL_ACTIVE_OFFSET - (clientY - top)) /
              -AUTOSCROLL_SPEED_RATIO,
          )
        } else if (bottom - clientY < AUTOSCROLL_ACTIVE_OFFSET) {
          scrollingSpeed = Math.round(
            (AUTOSCROLL_ACTIVE_OFFSET - (bottom - clientY)) /
              AUTOSCROLL_SPEED_RATIO,
          )
        }
        if (this.state.scrollingSpeed !== scrollingSpeed) {
          this.setState({scrollingSpeed})
        }
      }
    }
  }

  animateItems = (
    needle: number,
    movedItem: number,
    offset: number,
    animateMovedItem = false,
  ) => {
    this.getChildren().forEach((item, i) => {
      setItemTransition(item, TRANSITION_DURATION)
      if (movedItem === i && animateMovedItem) {
        if (movedItem === needle) {
          return transformItem(item, null)
        }
        transformItem(
          item,
          movedItem < needle
            ? this.itemTranslateOffsets
                .slice(movedItem + 1, needle + 1)
                .reduce((a, b) => a + b, 0)
            : this.itemTranslateOffsets
                .slice(needle, movedItem)
                .reduce((a, b) => a + b, 0) * -1,
        )
      } else if (movedItem < needle && i > movedItem && i <= needle) {
        transformItem(item, -offset)
      } else if (i < movedItem && movedItem > needle && i >= needle) {
        transformItem(item, offset)
      } else {
        transformItem(item, null)
      }
    })
  }

  isDraggedItemOutOfBounds = () => {
    const child = this.getChildren()[this.state.itemDragged]
    if (!child) return
    const initialRect = child.getBoundingClientRect()
    const targetRect = this.ghostRef.current!.getBoundingClientRect()
    if (Math.abs(initialRect.left - targetRect.left) > targetRect.width) {
      if (this.state.itemDraggedOutOfBounds === -1) {
        this.setState({itemDraggedOutOfBounds: this.state.itemDragged})
      }
      return true
    }
    if (this.state.itemDraggedOutOfBounds > -1) {
      this.setState({itemDraggedOutOfBounds: -1})
    }
    return false
  }

  onEnd = (event: PointerEvent) => {
    event.cancelable && event.preventDefault()
    document.removeEventListener('pointermove', this.schdOnPointerMove)
    document.removeEventListener('pointerup', this.schdOnEnd)
    document.removeEventListener('pointercancel', this.schdOnEnd)

    const removeItem =
      this.props.removableByMove && this.isDraggedItemOutOfBounds()
    if (!removeItem && TRANSITION_DURATION > 0 && this.afterIndex !== -2) {
      // animate drop
      schd(() => {
        setItemTransition(
          this.ghostRef.current!,
          TRANSITION_DURATION,
          'cubic-bezier(.2,1,.1,1)',
        )
        if (this.afterIndex < 1 && this.state.itemDragged === 0) {
          transformItem(this.ghostRef.current!, 0, 0)
        } else {
          transformItem(
            this.ghostRef.current!,
            // compensate window scroll
            -(window.pageYOffset - this.lastYOffset) +
              // compensate container scroll
              -(this.listRef.current!.scrollTop - this.lastListYOffset) +
              (this.state.itemDragged < this.afterIndex
                ? this.itemTranslateOffsets
                    .slice(this.state.itemDragged + 1, this.afterIndex + 1)
                    .reduce((a, b) => a + b, 0)
                : this.itemTranslateOffsets
                    .slice(
                      this.afterIndex < 0 ? 0 : this.afterIndex,
                      this.state.itemDragged,
                    )
                    .reduce((a, b) => a + b, 0) * -1),
            0,
          )
        }
      })()
    }
    this.dropTimeout = window.setTimeout(
      this.finishDrop,
      removeItem || this.afterIndex === -2 ? 0 : TRANSITION_DURATION,
    )
  }

  finishDrop = () => {
    const removeItem =
      this.props.removableByMove && this.isDraggedItemOutOfBounds()
    if (
      removeItem ||
      (this.afterIndex > -2 && this.state.itemDragged !== this.afterIndex)
    ) {
      this.props.onChange({
        oldIndex: this.state.itemDragged,
        newIndex: removeItem ? -1 : Math.max(this.afterIndex, 0),
      })
    }
    this.getChildren().forEach((item) => {
      setItemTransition(item, 0)
      transformItem(item, null)
      ;(item as HTMLElement).style.touchAction = ''
    })
    this.setState({itemDragged: -1, scrollingSpeed: 0})
    this.afterIndex = -2
    // sometimes the scroll gets messed up after the drop, fix:
    if (this.lastScroll > 0) {
      this.listRef.current!.scrollTop = this.lastScroll
      this.lastScroll = 0
    }
  }

  onKeyDown = (e: React.KeyboardEvent) => {
    const index = this.getTargetIndex(e)
    if (checkIfInteractive(e.target as Element, e.currentTarget)) {
      return
    }
    if (index === -1) return
    if (
      e.key === 'ArrowDown' &&
      index > -1 &&
      this.needle < this.props.values.length - 1
    ) {
      e.preventDefault()
      const offset = getTranslateOffset(this.getChildren()[index]!)
      this.needle++
      this.animateItems(this.needle, index, offset, true)
    }
    if (e.key === 'ArrowUp' && index > -1 && this.needle > 0) {
      e.preventDefault()
      const offset = getTranslateOffset(this.getChildren()[index]!)
      this.needle--
      this.animateItems(this.needle, index, offset, true)
    }
  }

  override render() {
    const ghostStyle = {
      ...BASE_STYLE,
      margin: 0,
      listStyle: 'none',
      position: 'fixed',
      overflow: 'hidden',
      borderRadius: '4px',
      outline: '2px solid var(--cdg-color-cdgBlue)',
      boxShadow:
        '0px 8px 16px 0px rgba(0, 0, 0, 0.13), 0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      top: this.state.targetY,
      left: this.state.targetX,
      width: this.state.targetWidth,
      height: this.state.targetHeight,
    } as React.CSSProperties

    const draggedItem = this.props.collection.find(
      (item) => item.key === this.props.values[this.state.itemDragged],
    )

    return (
      <React.Fragment>
        <ul
          ref={this.listRef}
          style={{
            cursor: this.state.itemDragged > -1 ? 'grabbing' : undefined,
            background:
              this.state.itemDragged > -1 ? 'var(--colors-gray30)' : undefined,
          }}
        >
          {this.props.collection.map((item, index) => {
            const isHidden = index === this.state.itemDragged
            const isSelected = index === this.state.selectedItem
            const isDisabled = !this.props.values[index]
            const props: IItemProps = {
              key: index,
              tabIndex: isDisabled ? -1 : 0,
              onKeyDown: this.onKeyDown,
              style: {
                ...BASE_STYLE,
                visibility: isHidden ? 'hidden' : undefined,
                zIndex: isSelected ? 5000 : 0,
              } as React.CSSProperties,
            }
            return (
              <DragAndDropListOutletItem
                key={item.key}
                props={props}
                index={index}
                isSelected
                isDragged={false}
                isOutOfBounds={false}
              >
                {item}
              </DragAndDropListOutletItem>
            )
          })}
        </ul>
        {this.state.itemDragged > -1 &&
          draggedItem &&
          ReactDOM.createPortal(
            <DragAndDropListOutletItem
              isDragged
              isSelected={false}
              index={this.state.itemDragged}
              isOutOfBounds={this.state.itemDraggedOutOfBounds > -1}
              props={{
                ref: this.ghostRef,
                style: ghostStyle,
                onWheel: this.onWheel,
              }}
            >
              {draggedItem}
            </DragAndDropListOutletItem>,
            document.body,
          )}
      </React.Fragment>
    )
  }
}

export default List
