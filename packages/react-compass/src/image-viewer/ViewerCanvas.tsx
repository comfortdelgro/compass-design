/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import Box from '../box'
import Spinner from '../spinner'

export interface ViewerCanvasProps {
  imgSrc: string
  visible: boolean
  width: number
  height: number
  top: number
  left: number
  rotate: number
  onChangeImgState: (
    width: number,
    height: number,
    top: number,
    left: number,
  ) => void
  onResize: () => void
  zIndex: number
  scaleX: number
  scaleY: number
  loading: boolean
  drag: boolean
  container: HTMLElement
  onCanvasMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface ViewerCanvasState {
  isMouseDown?: boolean
  mouseX?: number
  mouseY?: number
}

export default function ViewerCanvas(props: ViewerCanvasProps) {
  const isMouseDown = React.useRef(false)
  const prePosition = React.useRef({
    x: 0,
    y: 0,
  })
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
  })

  React.useEffect(() => {
    return () => {
      bindEvent(true)
      bindWindowResizeEvent(true)
    }
  }, [])

  React.useEffect(() => {
    bindWindowResizeEvent()

    return () => {
      bindWindowResizeEvent(true)
    }
  })

  React.useEffect(() => {
    if (props.visible && props.drag) {
      bindEvent()
    }
    if (!props.visible && props.drag) {
      handleMouseUp()
    }
    return () => {
      bindEvent(true)
    }
  }, [props.drag, props.visible])

  React.useEffect(() => {
    const diffX = position.x - prePosition.current.x
    const diffY = position.y - prePosition.current.y
    prePosition.current = {
      x: position.x,
      y: position.y,
    }
    props.onChangeImgState(
      props.width,
      props.height,
      props.top + diffY,
      props.left + diffX,
    )
  }, [position])

  function handleResize() {
    props.onResize()
  }

  function handleCanvasMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    props.onCanvasMouseDown(e)
    handleMouseDown(e)
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (e.button !== 0) {
      return
    }
    if (!props.visible || !props.drag) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    isMouseDown.current = true
    prePosition.current = {
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown.current) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
  }

  function handleMouseUp() {
    isMouseDown.current = false
  }

  function bindWindowResizeEvent(remove?: boolean) {
    let funcName = 'addEventListener'
    if (remove) {
      funcName = 'removeEventListener'
    }
    // @ts-ignore
    window[funcName]('resize', handleResize, false)
  }

  function bindEvent(remove?: boolean) {
    let funcName = 'addEventListener'
    if (remove) {
      funcName = 'removeEventListener'
    }
    // @ts-ignore
    document[funcName]('click', handleMouseUp, false)
    // @ts-ignore
    document[funcName]('mousemove', handleMouseMove, false)
  }

  const imgStyle: React.CSSProperties = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    transform: `translateX(${
      props.left !== null ? `${props.left}px` : 'aoto'
    }) translateY(${props.top}px)
    rotate(${props.rotate}deg) scaleX(${props.scaleX}) scaleY(${props.scaleY})`,
  }

  let imgNode = null
  if (props.imgSrc !== '') {
    imgNode = (
      <img src={props.imgSrc} style={imgStyle} onMouseDown={handleMouseDown} />
    )
  }
  if (props.loading) {
    imgNode = (
      <Box
        css={{
          display: 'flex',
          height: `${window.innerHeight - 84}px`,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spinner size='2xl' />
      </Box>
    )
  }

  return (
    <Box onMouseDown={handleCanvasMouseDown} css={{zIndex: props.zIndex}}>
      {imgNode}
    </Box>
  )
}
