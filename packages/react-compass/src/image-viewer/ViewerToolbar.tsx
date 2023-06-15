import * as React from 'react'
import Button from '../button'
import Typography from '../typography'
import Icon, {ActionType} from './Icon'
import {StyledToolbar, StyledToolbarWrap} from './image-viewer.styles'
import {ToolbarConfig} from './types'

export interface ViewerToolbarProps {
  prefixCls: string
  onAction: (config: ToolbarConfig) => void
  alt: string
  width: number
  height: number
  attribute: boolean
  zoomable: boolean
  rotatable: boolean
  scalable: boolean
  changeable: boolean
  downloadable: boolean
  noImgDetails: boolean
  toolbars: ToolbarConfig[]
  activeIndex: number
  count: number
  showTotal: boolean
  totalName: string
}

export const defaultToolbars: ToolbarConfig[] = [
  {
    key: 'zoomIn',
    actionType: ActionType.zoomIn,
  },
  {
    key: 'zoomOut',
    actionType: ActionType.zoomOut,
  },
  {
    key: 'prev',
    actionType: ActionType.prev,
  },
  {
    key: 'reset',
    actionType: ActionType.reset,
  },
  {
    key: 'next',
    actionType: ActionType.next,
  },
  {
    key: 'rotateLeft',
    actionType: ActionType.rotateLeft,
  },
  {
    key: 'rotateRight',
    actionType: ActionType.rotateRight,
  },
  {
    key: 'scaleX',
    actionType: ActionType.scaleX,
  },
  {
    key: 'scaleY',
    actionType: ActionType.scaleY,
  },
  {
    key: 'download',
    actionType: ActionType.download,
  },
]

function deleteToolbarFromKey(toolbars: ToolbarConfig[], keys: string[]) {
  const targetToolbar = toolbars.filter((item) => keys.indexOf(item.key) < 0)

  return targetToolbar
}

export default function ViewerToolbar(props: ViewerToolbarProps) {
  function handleAction(config: ToolbarConfig) {
    props.onAction(config)
  }

  function renderAction(config: ToolbarConfig) {
    let content = null
    // default toolbar
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof ActionType[config.actionType] !== 'undefined') {
      content = <Icon type={config.actionType as ActionType} />
    }
    // extra toolbar
    if (config.render) {
      content = config.render
    }
    return (
      <Button
        key={config.key}
        onClick={() => {
          handleAction(config)
        }}
        data-key={config.key}
      >
        {config.key}
      </Button>
    )
  }
  const attributeNode = props.attribute ? (
    <p className={`${props.prefixCls}-attribute`}>
      {props.alt && `${props.alt}`}
      {props.noImgDetails || (
        <span className={`${props.prefixCls}-img-details`}>
          {`(${props.width} x ${props.height})`}
        </span>
      )}
      {props.showTotal && (
        <span className={`${props.prefixCls}-showTotal`}>
          {`${props.activeIndex + 1} ${props.totalName} ${props.count}`}
        </span>
      )}
    </p>
  ) : null
  let toolbars = props.toolbars
  if (!props.zoomable) {
    toolbars = deleteToolbarFromKey(toolbars, ['zoomIn', 'zoomOut'])
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
  if (!props.downloadable) {
    toolbars = deleteToolbarFromKey(toolbars, ['download'])
  }
  return (
    <StyledToolbarWrap>
      <Typography.Label css={{textAlign: 'center'}} variant='label1'>
        {attributeNode}
      </Typography.Label>
      <StyledToolbar>
        {toolbars.map((item) => {
          return renderAction(item)
        })}
      </StyledToolbar>
    </StyledToolbarWrap>
  )
}
