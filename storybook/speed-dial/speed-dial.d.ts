import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    actions: Array<{
        name: string;
        icon: string;
        onClick: () => void;
    }>;
    position?: 'up' | 'right' | 'down' | 'left';
    className?: string;
    css?: CSS;
}
export type SpeedDialProps = Props & Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props>;
export declare const SpeedDialContextWrapper: React.ForwardRefExoticComponent<Props & Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
/**
 * @deprecate SpeedDial will be replaced by new SpeedDial2
 */
export default SpeedDialContextWrapper;
