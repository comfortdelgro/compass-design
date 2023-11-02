import React, {CSSProperties} from 'react'

interface TooltipContextProps {
  tooltipRef?: (node: HTMLElement | null) => void
  arrowRef?: React.RefObject<HTMLElement>
  arrowStyle?: CSSProperties
  tooltipProps?: React.HTMLAttributes<HTMLElement>
  withArrow?: boolean
  handleTooltipClose?: () => void
}

export const TooltipContext = React.createContext<TooltipContextProps>({})
