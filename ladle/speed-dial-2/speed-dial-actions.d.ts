import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    children?: React.ReactNode;
    position?: 'up' | 'right' | 'down' | 'left';
}
export type SpeedDialActionsProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
export declare const SpeedDialActions: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export {};
