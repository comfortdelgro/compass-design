import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    children?: React.ReactNode;
    effect?: 'collapse' | 'fade' | 'slide' | 'zoom';
    show?: boolean;
    speed?: number;
    collapsedSize?: string;
    orientation?: 'horizontal' | 'vertical';
    slideDirection?: 'left' | 'right' | 'top' | 'bottom';
    isLazyMounted?: boolean;
}
export type TransitionsProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Transitions: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Transitions;
