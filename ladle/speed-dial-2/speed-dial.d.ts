import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { SpeedDialActions } from './speed-dial-actions';
import { SpeedDialButton } from './speed-dial-button';
interface Props {
    className?: string;
    children?: React.ReactNode;
    showing?: boolean;
    actions?: React.ReactNode;
    css?: CSS;
    style?: React.CSSProperties;
}
export type SpeedDial2Props = Props & Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Actions: typeof SpeedDialActions;
    Button: typeof SpeedDialButton;
};
export default _default;
