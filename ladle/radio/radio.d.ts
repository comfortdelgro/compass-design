import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import RadioGroup from './radio-group';
interface Props {
    className?: string;
    label?: React.ReactNode;
    description?: string;
    rightLabel?: string;
    tooltip?: string;
    variant?: 'simple' | 'outlined' | 'h5';
    inputPosition?: 'left' | 'right';
    isDisabled?: boolean;
    value: string;
    id?: string;
    name?: string;
    css?: CSS;
}
export type RadioProps = Props;
declare const _default: React.FC<Props> & {
    Group: typeof RadioGroup;
};
export default _default;
