import {
  faCheckCircle,
  faCircleExclamation,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import type {IconProp} from '../icon'

type Color = 'info' | 'success' | 'warning' | 'danger'

export const getIconFromColor = (color: Color) => {
  const icons: Record<typeof color, IconProp> = {
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faCircleExclamation,
    danger: faCircleExclamation,
  }
  return icons[color]
}
