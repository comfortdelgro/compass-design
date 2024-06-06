import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import type AvatarGroup from './avatar-group';
import { AvatarSize } from './avatar.const';
interface Props {
    label?: string;
    icon?: React.ReactNode;
    image?: string;
    css?: CSS;
    size?: AvatarSize;
    className?: string;
    cutOffText?: boolean;
    status?: React.ReactElement;
}
export type AvatarProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Group: typeof AvatarGroup;
};
export default _default;
