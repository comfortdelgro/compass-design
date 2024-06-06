import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { AvatarSize } from './avatar.const';
interface Props {
    display?: number;
    children?: React.ReactNode;
    size?: AvatarSize;
    disabledAnimation?: boolean;
    useAddMore?: boolean;
    css?: CSS;
    onAddMoreClick?: () => void;
}
export type AvatarGroupProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const AvatarGroup: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default AvatarGroup;
