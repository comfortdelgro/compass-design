import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { StatusSize, StatusType } from './status.const';
interface Props {
    label?: boolean | string;
    css?: CSS;
    className?: string;
    size?: StatusSize;
    type?: StatusType;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}
export type StatusProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Status: any;
export default Status;
