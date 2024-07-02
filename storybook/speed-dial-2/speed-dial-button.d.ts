import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    children?: React.ReactNode;
    isOpen?: boolean;
}
export type SpeedDialButtonProps = Props & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>;
export declare const SpeedDialButton: React.ForwardRefExoticComponent<Props & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props> & React.RefAttributes<HTMLButtonElement>>;
export {};
