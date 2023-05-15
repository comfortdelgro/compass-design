import {TooltipTriggerState} from '@react-stately/tooltip'
import type {PlacementAxis} from '@react-types/overlays'
import React, {HTMLAttributes, RefObject} from 'react'
interface TooltipContextProps {
  state?: TooltipTriggerState
  ref?: RefObject<HTMLDivElement>
  placement?: PlacementAxis
  arrowProps?: HTMLAttributes<HTMLElement>
  style?: React.CSSProperties | undefined
}

export const TooltipContext = React.createContext<TooltipContextProps>({})
