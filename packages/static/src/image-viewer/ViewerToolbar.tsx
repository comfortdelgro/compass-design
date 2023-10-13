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
import {useCallback} from 'react'
import Button from '../button'
import Icon from '../icon'
import {useColors} from '../theme'
import {ActionTypeEnum} from './Icon'
import styles from './styles/image-viewer.module.css'
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
    actionType: ActionTypeEnum.zoomIn,
    icon: faMagnifyingGlassPlus,
  },
  {
    key: 'reset',
    actionType: ActionTypeEnum.reset,
    icon: faMagnifyingGlass,
  },
  {
    key: 'zoomOut',
    actionType: ActionTypeEnum.zoomOut,
    icon: faMagnifyingGlassMinus,
  },
  {
    key: 'prev',
    actionType: ActionTypeEnum.prev,
    icon: faBackward,
  },
  {
    key: 'next',
    actionType: ActionTypeEnum.next,
    icon: faForward,
  },
  {
    key: 'rotateLeft',
    actionType: ActionTypeEnum.rotateLeft,
    icon: faRotateLeft,
  },
  {
    key: 'rotateRight',
    actionType: ActionTypeEnum.rotateRight,
    icon: faRotateRight,
  },
  {
    key: 'scaleX',
    actionType: ActionTypeEnum.scaleX,
    icon: faLeftRight,
  },
  {
    key: 'scaleY',
    actionType: ActionTypeEnum.scaleY,
    icon: faUpDown,
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
    <div className={styles.toolbarWrap}>
      <div className={styles.toolbar}>
        {toolbars.map((item) => {
          return renderAction(item)
        })}
      </div>
    </div>
  )
}
