import {CSSProperties, useEffect, useState} from 'react'
import {Pointer, Position} from '../../utils/pointer'
import {GutterProps, GutterSide} from '../gutter'

export interface UseGutterReturnType {
  expand: () => void
  collapse: () => void
  toggleExpand: () => void
  isExpand: boolean | undefined
  width: CSSProperties['width'] | undefined
  setWidth: (width: CSSProperties['width']) => void
  handlePointerDown: (e: React.PointerEvent) => void
}

const useGutter = (
  props: GutterProps,
  ref: React.RefObject<HTMLDivElement> | null,
): UseGutterReturnType => {
  const {
    parentRef,
    isExpand: controlledExpand,
    side = GutterSide.RIGHT,
    minCollapse,
    maxExpand,
  } = props
  const [width, setWidth] = useState<CSSProperties['width']>(
    parentRef?.current?.clientWidth,
  )

  const [isExpand, setIsExpand] = useState(controlledExpand)

  useEffect(() => {
    setIsExpand(controlledExpand)
  }, [controlledExpand])

  useEffect(() => {
    if (isExpand === true) {
      expand()
    } else if (isExpand === false) {
      collapse()
    }
  }, [isExpand])

  const handlePointerDown = (event: React.PointerEvent) => {
    const captureSize = parentRef?.current?.clientWidth ?? 0
    const pointer = new Pointer()
    pointer.start(new Position(event.pageX, event.pageY))

    if (ref?.current) {
      ;(event.target as HTMLElement).setPointerCapture(event.pointerId)

      const handlePointerMove = (event: PointerEvent) => {
        event.preventDefault()
        pointer.update(new Position(event.pageX, event.pageY))
        let width =
          captureSize +
          (side === GutterSide.RIGHT ? pointer.distance.x : -pointer.distance.x)
        width = width < 0 ? 0 : width
        if (width === 0) {
          setIsExpand(false)
        }
        setWidth(width)
      }

      const handlePointerUp = () => {
        ref.current?.removeEventListener('pointermove', handlePointerMove)
      }

      ref.current.addEventListener('pointermove', handlePointerMove)
      ref.current.addEventListener('pointerup', handlePointerUp, {once: true})
      ref.current.addEventListener('pointercancel', handlePointerUp, {
        once: true,
      })
    }
  }

  const expand = () => {
    setWidth(maxExpand ?? '100%')
  }

  const collapse = () => {
    setWidth(minCollapse ?? 0)
  }

  const toggleExpand = () => {
    setIsExpand((isExpand) => !isExpand)
  }

  return {
    width,
    isExpand,
    setWidth,
    toggleExpand,
    expand,
    collapse,
    handlePointerDown,
  }
}

export default useGutter
