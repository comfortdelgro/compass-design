import type {Placement} from '@floating-ui/react'
import Tooltip, {TooltipProps} from './tooltip'
import TooltipTrigger, {TooltipTriggerProps} from './tooltip-trigger'

export type {TooltipProps, TooltipTriggerProps}
export {Tooltip, TooltipTrigger, Placement}

Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
