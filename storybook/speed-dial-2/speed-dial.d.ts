import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    className?: string;
    children?: React.ReactNode;
    showing?: boolean;
    actions?: React.ReactNode;
    css?: CSS;
    style?: React.CSSProperties;
}
export type SpeedDial2Props = Props & Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props>;
declare const SpeedDial2: any;
export default SpeedDial2;
