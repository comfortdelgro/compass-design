import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { StatusSize, StatusType } from './status.const';
import Offline from './status/offline';
import Online from './status/online';
import Verified from './status/verified';
import Zig from './status/zig';
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
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Offline: typeof Offline;
    Online: typeof Online;
    Verified: typeof Verified;
    Zig: typeof Zig;
};
export default _default;
