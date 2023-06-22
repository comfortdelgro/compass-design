import {
  faMagnifyingGlass,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import Button from '../button'
import Icon from '../icon'
import Typography from '../typography'
import {ActionType} from './Icon'
import {StyledToolbar, StyledToolbarWrap} from './image-viewer.styles'
import {ToolbarConfig} from './types'

export interface ViewerToolbarProps {
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
    icon: faMagnifyingGlassPlus,
  },
  {
    key: 'reset',
    actionType: ActionType.reset,
    icon: faMagnifyingGlass,
  },
  {
    key: 'zoomOut',
    actionType: ActionType.zoomOut,
    icon: faMagnifyingGlassMinus,
  },
  // {
  //   key: 'prev',
  //   actionType: ActionType.prev,
  //   icon: faBackward,
  // },
  // {
  //   key: 'next',
  //   actionType: ActionType.next,
  //   icon: faForward,
  // },
  // {
  //   key: 'rotateLeft',
  //   actionType: ActionType.rotateLeft,
  //   icon: faRotateLeft,
  // },
  // {
  //   key: 'rotateRight',
  //   actionType: ActionType.rotateRight,
  //   icon: faRotateRight,
  // },
  // {
  //   key: 'scaleX',
  //   actionType: ActionType.scaleX,
  //   icon: faLeftRight,
  // },
  // {
  //   key: 'scaleY',
  //   actionType: ActionType.scaleY,
  //   icon: faUpDown,
  // },
  // {
  //   key: 'download',
  //   actionType: ActionType.download,
  // },
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
    return (
      <Button
        variant='ghost'
        key={config.key}
        onClick={() => {
          handleAction(config)
        }}
        data-key={config.key}
      >
        {config.icon ? (
          <Icon icon={config.icon} color='white' />
        ) : (
          <>{config.key}</>
        )}
      </Button>
    )
  }
  const attributeNode = props.attribute ? (
    <p>
      {props.alt && `${props.alt}`}
      {props.noImgDetails || (
        <span>{`(${props.width} x ${props.height})`}</span>
      )}
      {props.showTotal && (
        <span>
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
