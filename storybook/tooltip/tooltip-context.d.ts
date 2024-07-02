import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface TooltipContextProps {
    tooltipRef?: (node: HTMLElement | null) => void;
    arrowRef?: React.RefObject<HTMLElement>;
    arrowStyle?: CSS;
    tooltipProps?: React.HTMLAttributes<HTMLElement>;
    withArrow?: boolean;
    handleTooltipClose?: () => void;
}
export declare const TooltipContext: React.Context<TooltipContextProps>;
export {};
