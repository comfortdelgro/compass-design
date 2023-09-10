import {
  faBackward,
  faForward,
  faLeftRight,
  faMagnifyingGlass,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
  faRotateLeft,
  faRotateRight,
  faUpDown,
} from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import Button from '../button'
import Icon from '../icon'
import {useColors} from '../theme'
import {ActionType} from './Icon'
import {StyledToolbar, StyledToolbarWrap} from './image-viewer.styles'
import {ToolbarConfig} from './types'

export interface ViewerToolbarProps {
  onAction: (config: ToolbarConfig) => void
  zoomable: boolean
  rotatable: boolean
  scalable: boolean
  changeable: boolean
  toolbars: ToolbarConfig[]
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
  {
    key: 'prev',
    actionType: ActionType.prev,
    icon: faBackward,
  },
  {
    key: 'next',
    actionType: ActionType.next,
    icon: faForward,
  },
  {
    key: 'rotateLeft',
    actionType: ActionType.rotateLeft,
    icon: faRotateLeft,
  },
  {
    key: 'rotateRight',
    actionType: ActionType.rotateRight,
    icon: faRotateRight,
  },
  {
    key: 'scaleX',
    actionType: ActionType.scaleX,
    icon: faLeftRight,
  },
  {
    key: 'scaleY',
    actionType: ActionType.scaleY,
    icon: faUpDown,
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

  const colors = useColors()

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
        {config.icon ? (
          <Icon icon={config.icon} color={colors.white} />
        ) : (
          <>{config.key}</>
        )}
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
    <StyledToolbarWrap>
      <StyledToolbar>
        {toolbars.map((item) => {
          return renderAction(item)
        })}
      </StyledToolbar>
    </StyledToolbarWrap>
  )
}
