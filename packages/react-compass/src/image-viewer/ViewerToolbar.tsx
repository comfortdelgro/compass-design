import {useCallback} from 'react'
import Button from '../button'
import styles from './styles/image-viewer.module.css'
import {ActionTypeEnum, ToolbarConfig} from './types'

export interface ViewerToolbarProps {
  onAction: (config: ToolbarConfig) => void
  zoomable: boolean
  rotatable: boolean
  scalable: boolean
  changeable: boolean
  toolbars: ToolbarConfig[]
}

// eslint-disable-next-line react-refresh/only-export-components
export const defaultToolbars: ToolbarConfig[] = [
  {
    key: 'zoomIn',
    actionType: ActionTypeEnum.zoomIn,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'reset',
    actionType: ActionTypeEnum.reset,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'zoomOut',
    actionType: ActionTypeEnum.zoomOut,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'prev',
    actionType: ActionTypeEnum.prev,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'next',
    actionType: ActionTypeEnum.next,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'rotateLeft',
    actionType: ActionTypeEnum.rotateLeft,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'rotateRight',
    actionType: ActionTypeEnum.rotateRight,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'scaleX',
    actionType: ActionTypeEnum.scaleX,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M504.3 273.6c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4s-14.4 12.5-14.4 22l0 56-192 0 0-56c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4l-112 104C2.8 243 0 249.3 0 256s2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22l0-56 192 0 0 56c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104z'
        ></path>
      </svg>
    ),
  },
  {
    key: 'scaleY',
    actionType: ActionTypeEnum.scaleY,
    icon: (
      <svg width={18} viewBox='0 0 512 512' color='#FFFFFF'>
        <path
          fill='currentColor'
          d='M145.6 7.7C141 2.8 134.7 0 128 0s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9S14.5 160 24 160H80V352H24c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9s-12.5-14.4-22-14.4H176V160h56c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112z'
        ></path>
      </svg>
    ),
  },
]

function deleteToolbarFromKey(toolbars: ToolbarConfig[], keys: string[]) {
  const targetToolbar = toolbars.filter((item) => keys.indexOf(item.key) < 0)

  return targetToolbar
}

export default function ViewerToolbar(props: ViewerToolbarProps) {
  const handleAction = useCallback(
    (config: ToolbarConfig) => {
      props.onAction(config)
    },
    [props],
  )

  function renderAction(config: ToolbarConfig) {
    return (
      <Button
        variant='ghost'
        key={config.key}
        onClick={() => {
          handleAction(config)
        }}
        data-key={config.key}
        css={{
          '&:hover': {
            background: '$cdgBlue100 !important',
          },
        }}
      >
        {config.icon ? <>{config.icon}</> : <>{config.key}</>}
      </Button>
    )
  }
  let toolbars = props.toolbars
  if (!props.zoomable) {
    toolbars = deleteToolbarFromKey(toolbars, ['zoomIn', 'zoomOut', 'reset'])
  }
  if (!props.changeable) {
    toolbars = deleteToolbarFromKey(toolbars, ['prev', 'next'])
  }
  if (!props.rotatable) {
    toolbars = deleteToolbarFromKey(toolbars, ['rotateLeft', 'rotateRight'])
  }
  if (!props.scalable) {
    toolbars = deleteToolbarFromKey(toolbars, ['scaleX', 'scaleY'])
  }
  return (
    <div className={styles.toolbarWrap}>
      <div className={styles.toolbar}>
        {toolbars.map((item) => {
          return renderAction(item)
        })}
      </div>
    </div>
  )
}
