import React from 'react'
import {CSS} from '../utils/objectToCss'

interface TooltipContextProps {
  tooltipRef?: (node: HTMLElement | null) => void
  arrowRef?: React.RefObject<HTMLElement>
  arrowStyle?: CSS
  tooltipProps?: React.HTMLAttributes<HTMLElement>
  withArrow?: boolean
  handleTooltipClose?: () => void
}

export const TooltipContext = React.createContext<TooltipContextProps>({})
