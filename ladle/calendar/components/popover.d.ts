import { AriaPopoverProps } from '@react-aria/overlays';
import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { OverlayTriggerState } from '../types';
interface Props {
    children?: React.ReactNode;
    popoverRef?: React.RefObject<Element>;
    state: OverlayTriggerState;
}
export type PopoverProps = Props & Omit<AriaPopoverProps, keyof Props>;
declare const Popover: React.ForwardRefExoticComponent<Props & Omit<AriaPopoverProps, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Popover;
