import React from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    triggerRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    isEmpty: boolean;
    type: 'heading' | 'color' | 'alignment';
    handleKeyDown?: (e: KeyboardEvent) => void;
    onFocus: () => void;
    onBlur: () => void;
}
declare const Popover: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Popover;
