import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {noop} from 'lodash'
import {useCallback, useEffect, useReducer, useRef} from 'react'
import Button from '../button'
import Icon from '../icon'
import CssInjection from '../utils/objectToCss/CssInjection'
import {ActionTypeEnum} from './Icon'
import ImageInformation from './ImageInformation'
import ViewerCanvas from './ViewerCanvas'
import ViewerNav from './ViewerNav'
import ViewerToolbar, {defaultToolbars} from './ViewerToolbar'
import * as constants from './constants'
import {Z_INDEX} from './constants'
import styles from './styles/image-viewer.module.css'
import {
  ActionEnum,
  ActionType,
  ImageDecorator,
  ImageViewerCoreState,
  ImageViewerProps,
  ToolbarConfig,
} from './types'

function createAction(
  type: ActionEnum,
  payload: Partial<ImageViewerCoreState>,
) {
  return {
    type,
    payload: payload || {},
  }
}

const ViewCore = (props: ImageViewerProps) => {
  const {
    visible = false,
    onClose = noop,
    images = [],
    activeIndex = 0,
    drag = true,
    zoomable = true,
    rotatable = true,
    scalable = true,
    onMaskClick = noop,
    changeable = true,
    customToolbar = (toolbars) => toolbars,
    zoomSpeed = 0.05,
    disableKeyboardSupport = false,
    noResetZoomAfterChange = false,
    noLimitInitializationSize = false,
    defaultScale = 1,
    loop = true,
    disableMouseZoom = false,
    isShowImageInformation = true,
    isShowToolbar = true,
    isShowPreview = true,
    totalName = 'of',
    minScale = 0.1,
  } = props

  const footerHeight = constants.FOOTER_HEIGHT
  const initialState: ImageViewerCoreState = {
    index: 0,
    visible: false,
    activeIndex: props.activeIndex ?? 0,
    width: 0,
    height: 0,
    top: 15,
    left: 0,
    rotate: 0,
    imageWidth: 0,
    imageHeight: 0,
    scaleX: defaultScale,
    scaleY: defaultScale,
    loading: false,
    loadFailed: false,
    startLoading: false,
  }

  const setContainerWidthHeight = useCallback(() => {
    let width = window.innerWidth
    let height = window.innerHeight
    if (props.container) {
      width = props.container.offsetWidth
      height = props.container.offsetHeight
    }
    return {
      width,
      height,
    }
  }, [props.container])

  const containerSize = useRef(setContainerWidthHeight())

  function reducer(
    s: ImageViewerCoreState,
    action: ActionType,
  ): typeof initialState {
    switch (action.type) {
      case ActionEnum.setVisible:
        return {
          ...s,
          visible: Boolean(action.payload.visible),
        }
      case ActionEnum.setActiveIndex:
        return {
          ...s,
          activeIndex: Number(action.payload.index),
          startLoading: true,
        }
      case ActionEnum.update:
        return {
          ...s,
          ...action.payload,
        }
      case ActionEnum.clear:
        return {
          ...s,
          width: 0,
          height: 0,
          scaleX: defaultScale,
          scaleY: defaultScale,
          rotate: 1,
          imageWidth: 0,
          imageHeight: 0,
          loadFailed: false,
          top: 0,
          left: 0,
          loading: false,
        }
      default:
        break
    }
    return s
  }

  const viewerCore = useRef<HTMLDivElement>(null)
  const init = useRef(false)
  const currentLoadIndex = useRef(0)

  const [state, dispatch] = useReducer<
    (s: ImageViewerCoreState, a: unknown) => ImageViewerCoreState
  >(reducer, initialState)

  useEffect(() => {
    init.current = true

    return () => {
      init.current = false
    }
  }, [])

  useEffect(() => {
    containerSize.current = setContainerWidthHeight()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.container])

  useEffect(() => {
    if (visible) {
      if (init.current) {
        dispatch(
          createAction(ActionEnum.setVisible, {
            visible: true,
          }),
        )
      }
    }
  }, [visible])

  useEffect(() => {
    if (!disableKeyboardSupport) {
      document.addEventListener('keydown', handleKeydown, true)
    }
    if (viewerCore.current) {
      viewerCore.current.addEventListener('wheel', handleMouseScroll, false)
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown, true)
      if (viewerCore!.current) {
        viewerCore!.current.removeEventListener(
          'wheel',
          handleMouseScroll,
          false,
        )
      }
    }
  })

  useEffect(() => {
    if (visible) {
      dispatch(
        createAction(ActionEnum.setActiveIndex, {
          index: activeIndex,
        }),
      )
    }
  }, [activeIndex, visible, images])

  const loadImg = (currentActiveIndex: number, isReset = false) => {
    dispatch(
      createAction(ActionEnum.update, {
        loading: true,
        loadFailed: false,
      }),
    )
    let activeImage: ImageDecorator = {
      src: '',
      alt: '',
    }
    if (images.length > 0) {
      activeImage = images[currentActiveIndex] as ImageDecorator
    }
    let loadComplete = false
    const img = new Image()
    img.onload = () => {
      if (!init.current) {
        return
      }
      if (!loadComplete) {
        loadImgSuccess(img.width, img.height, true)
      }
    }
    img.onerror = () => {
      if (!init.current) {
        return
      }
      if (props.defaultImg) {
        dispatch(
          createAction(ActionEnum.update, {
            loading: false,
            loadFailed: true,
            startLoading: false,
          }),
        )
        const defaultImgWidth =
          props.defaultImg.width || containerSize.current.width * 0.5
        const defaultImgHeight =
          props.defaultImg.height || containerSize.current.height * 0.5
        loadImgSuccess(defaultImgWidth, defaultImgHeight, false)
      } else {
        dispatch(
          createAction(ActionEnum.update, {
            loading: false,
            loadFailed: false,
            startLoading: false,
          }),
        )
      }
    }
    img.src = activeImage.src
    if (img.complete) {
      loadComplete = true
      loadImgSuccess(img.width, img.height, true)
    }
    function loadImgSuccess(
      imgWidth: number,
      imgHeight: number,
      success: boolean,
    ) {
      if (currentActiveIndex !== currentLoadIndex.current) {
        return
      }
      let realImgWidth = imgWidth
      let realImgHeight = imgHeight
      if (props.defaultSize) {
        realImgWidth = props.defaultSize.width
        realImgHeight = props.defaultSize.height
      }
      if (activeImage.defaultSize) {
        realImgWidth = activeImage.defaultSize.width
        realImgHeight = activeImage.defaultSize.height
      }
      const [width, height] = getImgWidthHeight(realImgWidth, realImgHeight)
      const left = (containerSize.current.width - width) / 2
      const top = (containerSize.current.height - height - footerHeight) / 2
      let scaleX = defaultScale
      let scaleY = defaultScale
      if (noResetZoomAfterChange && !isReset) {
        scaleX = state.scaleX
        scaleY = state.scaleY
      }
      dispatch(
        createAction(ActionEnum.update, {
          width: width,
          height: height,
          left: left,
          top: top,
          imageWidth: imgWidth,
          imageHeight: imgHeight,
          loading: false,
          rotate: 0,
          scaleX: scaleX,
          scaleY: scaleY,
          loadFailed: !success,
          startLoading: false,
        }),
      )
    }
  }

  useEffect(() => {
    if (state.startLoading) {
      currentLoadIndex.current = state.activeIndex
      loadImg(state.activeIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.startLoading, state.activeIndex])

  const getImgWidthHeight = (
    imgWidth: number,
    imgHeight: number,
  ): [number, number] => {
    let width = 0
    let height = 0
    const maxWidth = containerSize.current.width * 0.8
    const maxHeight = (containerSize.current.height - footerHeight) * 0.8
    width = Math.min(maxWidth, imgWidth)
    height = (width / imgWidth) * imgHeight
    if (height > maxHeight) {
      height = maxHeight
      width = (height / imgHeight) * imgWidth
    }
    if (noLimitInitializationSize) {
      width = imgWidth
      height = imgHeight
    }
    return [width, height]
  }

  const handleChangeImg = (newIndex: number) => {
    if (!loop && (newIndex >= images.length || newIndex < 0)) {
      return
    }
    if (newIndex >= images.length) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = images.length - 1
    }
    if (newIndex === state.activeIndex) {
      return
    }
    if (props.onChange) {
      const activeImage = getActiveImage(newIndex)
      props.onChange(activeImage, newIndex)
    }
    dispatch(
      createAction(ActionEnum.setActiveIndex, {
        index: newIndex,
      }),
    )
  }

  const getActiveImage = (activeIndex2?: number) => {
    let activeImg2: ImageDecorator = {
      src: '',
      alt: '',
    }

    let realActiveIndex = null
    if (activeIndex2 !== undefined) {
      realActiveIndex = activeIndex2
    } else {
      realActiveIndex = state.activeIndex
    }
    if (images.length > 0 && realActiveIndex >= 0) {
      activeImg2 = images[realActiveIndex] as ImageDecorator
    }

    return activeImg2
  }

  const handleScaleX = (newScale: 1 | -1) => {
    dispatch(
      createAction(ActionEnum.update, {
        scaleX: state.scaleX * newScale,
      }),
    )
  }

  const handleScaleY = (newScale: 1 | -1) => {
    dispatch(
      createAction(ActionEnum.update, {
        scaleY: state.scaleY * newScale,
      }),
    )
  }

  const handleRotate = (isRight = false) => {
    dispatch(
      createAction(ActionEnum.update, {
        rotate: state.rotate + 90 * (isRight ? 1 : -1),
      }),
    )
  }

  const handleDefaultAction = (type: ActionTypeEnum) => {
    switch (type) {
      case ActionTypeEnum.prev:
        handleChangeImg(state.activeIndex - 1)
        break
      case ActionTypeEnum.next:
        handleChangeImg(state.activeIndex + 1)
        break
      case ActionTypeEnum.zoomIn:
        // eslint-disable-next-line no-case-declarations
        const imgCenterXY = getImageCenterXY()
        handleZoom(imgCenterXY.x, imgCenterXY.y, 1, zoomSpeed)
        break
      case ActionTypeEnum.zoomOut:
        // eslint-disable-next-line no-case-declarations
        const imgCenterXY2 = getImageCenterXY()
        handleZoom(imgCenterXY2.x, imgCenterXY2.y, -1, zoomSpeed)
        break
      case ActionTypeEnum.rotateLeft:
        handleRotate()
        break
      case ActionTypeEnum.rotateRight:
        handleRotate(true)
        break
      case ActionTypeEnum.reset:
        loadImg(state.activeIndex, true)
        break
      case ActionTypeEnum.scaleX:
        handleScaleX(-1)
        break
      case ActionTypeEnum.scaleY:
        handleScaleY(-1)
        break
      default:
        break
    }
  }

  const handleAction = (config: ToolbarConfig) => {
    handleDefaultAction(config.actionType)

    if (config.onClick) {
      const activeImage = getActiveImage()
      config.onClick(activeImage)
    }
  }

  const handleChangeImgState = (
    width: number,
    height: number,
    top: number,
    left: number,
  ) => {
    dispatch(
      createAction(ActionEnum.update, {
        width: width,
        height: height,
        top: top,
        left: left,
      }),
    )
  }

  const handleResize = () => {
    containerSize.current = setContainerWidthHeight()
    if (visible) {
      const left = (containerSize.current.width - state.width) / 2
      const top =
        (containerSize.current.height - state.height - footerHeight) / 2
      dispatch(
        createAction(ActionEnum.update, {
          left: left,
          top: top,
        }),
      )
    }
  }

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    onMaskClick(e)
  }

  const handleKeydown = (e: KeyboardEvent) => {
    const keyCode = e.keyCode || e.which || e.charCode
    let isFeature = false
    switch (keyCode) {
      // key: esc
      case 27:
        onClose()
        isFeature = true
        break
      // key: ←
      case 37:
        if (e.ctrlKey) {
          handleDefaultAction(ActionTypeEnum.rotateLeft)
        } else {
          handleDefaultAction(ActionTypeEnum.prev)
        }
        isFeature = true
        break
      // key: →
      case 39:
        if (e.ctrlKey) {
          handleDefaultAction(ActionTypeEnum.rotateRight)
        } else {
          handleDefaultAction(ActionTypeEnum.next)
        }
        isFeature = true
        break
      // key: ↑
      case 38:
        handleDefaultAction(ActionTypeEnum.zoomIn)
        isFeature = true
        break
      // key: ↓
      case 40:
        handleDefaultAction(ActionTypeEnum.zoomOut)
        isFeature = true
        break
      // key: Ctrl + 1
      case 49:
        if (e.ctrlKey) {
          loadImg(state.activeIndex)
          isFeature = true
        }
        break
      default:
        break
    }
    if (isFeature) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const handleMouseScroll = (e: WheelEvent) => {
    if (disableMouseZoom) {
      return
    }
    if (state.loading) {
      return
    }
    e.preventDefault()
    let direct: 0 | 1 | -1 = 0
    const value = e.deltaY
    if (value === 0) {
      direct = 0
    } else {
      direct = value > 0 ? -1 : 1
    }
    if (direct !== 0) {
      let x = e.clientX
      let y = e.clientY
      if (props.container) {
        const containerRect = props.container.getBoundingClientRect()
        x -= containerRect.left
        y -= containerRect.top
      }
      handleZoom(x, y, direct, zoomSpeed)
    }
  }

  const getImageCenterXY = () => {
    return {
      x: state.left + state.width / 2,
      y: state.top + state.height / 2,
    }
  }

  const handleZoom = (
    targetX: number,
    targetY: number,
    direct: number,
    scale: number,
  ) => {
    const imgCenterXY = getImageCenterXY()
    const diffX = targetX - imgCenterXY.x
    const diffY = targetY - imgCenterXY.y
    let top = 0
    let left = 0
    let width = 0
    let height = 0
    let scaleX = 0
    let scaleY = 0
    if (state.width === 0) {
      const [imgWidth, imgHeight] = getImgWidthHeight(
        state.imageWidth,
        state.imageHeight,
      )
      left = (containerSize.current.width - imgWidth) / 2
      top = (containerSize.current.height - footerHeight - imgHeight) / 2
      width = state.width + imgWidth
      height = state.height + imgHeight
      scaleX = scaleY = 1
    } else {
      const directX = state.scaleX > 0 ? 1 : -1
      const directY = state.scaleY > 0 ? 1 : -1
      scaleX = state.scaleX + scale * direct * directX
      scaleY = state.scaleY + scale * direct * directY
      if (typeof props.maxScale !== 'undefined') {
        if (Math.abs(scaleX) > props.maxScale) {
          scaleX = props.maxScale * directX
        }
        if (Math.abs(scaleY) > props.maxScale) {
          scaleY = props.maxScale * directY
        }
      }
      if (Math.abs(scaleX) < minScale) {
        scaleX = minScale * directX
      }
      if (Math.abs(scaleY) < minScale) {
        scaleY = minScale * directY
      }
      top = state.top + ((-direct * diffY) / state.scaleX) * scale * directX
      left = state.left + ((-direct * diffX) / state.scaleY) * scale * directY
      width = state.width
      height = state.height
    }
    dispatch(
      createAction(ActionEnum.update, {
        width: width,
        scaleX: scaleX,
        scaleY: scaleY,
        height: height,
        top: top,
        left: left,
        loading: false,
      }),
    )
  }

  let activeImg: ImageDecorator = {
    src: '',
    alt: '',
  }

  if (
    visible &&
    state.visible &&
    !state.loading &&
    state.activeIndex !== null &&
    !state.startLoading
  ) {
    activeImg = getActiveImage()
  }

  return (
    <CssInjection>
      {visible && (
        <div className={styles.imageViewerWrap}>
          {props.noClose || (
            <Button
              variant='primary'
              style={{
                right: 15,
                top: 10,
                width: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px',
                borderRadius: 16,
                position: 'absolute',
                zIndex: Z_INDEX + 5,
              }}
              onClick={onClose}
            >
              <Icon icon={faXmark} color='white' />
            </Button>
          )}
          <div
            onTransitionEnd={() => {
              if (!visible) {
                dispatch(
                  createAction(ActionEnum.setVisible, {
                    visible: false,
                  }),
                )
              }
            }}
            ref={viewerCore}
          >
            <div style={{zIndex: Z_INDEX}} />

            <ViewerCanvas
              imgSrc={
                state.loadFailed
                  ? props?.defaultImg?.src || activeImg.src
                  : activeImg.src
              }
              visible={visible}
              width={state.width}
              height={state.height}
              top={state.top}
              left={state.left}
              rotate={state.rotate}
              onChangeImgState={handleChangeImgState}
              onResize={handleResize}
              zIndex={Z_INDEX + 5}
              scaleX={state.scaleX}
              scaleY={state.scaleY}
              loading={state.loading}
              drag={drag}
              container={props.container as HTMLElement}
              onCanvasMouseDown={handleCanvasMouseDown}
            />
            <div style={{zIndex: Z_INDEX + 5}}>
              {isShowToolbar && (
                <ViewerToolbar
                  onAction={handleAction}
                  zoomable={zoomable}
                  rotatable={rotatable}
                  scalable={scalable}
                  changeable={changeable}
                  toolbars={customToolbar(defaultToolbars)}
                />
              )}
              {isShowImageInformation && (
                <ImageInformation
                  onAction={handleAction}
                  alt={activeImg.alt ?? ''}
                  width={state.imageWidth}
                  height={state.imageHeight}
                  activeIndex={state.activeIndex}
                  count={images.length}
                  totalName={totalName}
                />
              )}
              {isShowPreview && (
                <ViewerNav
                  images={props.images as ImageDecorator[]}
                  activeIndex={state.activeIndex}
                  onChangeImg={handleChangeImg}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </CssInjection>
  )
}

export default ViewCore
