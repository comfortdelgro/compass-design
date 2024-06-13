import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import FormExplaination from './form-layout-explaination';
import FormGroup from './form-layout-group';
import FormRow from './form-layout-row';
export interface Props {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> & {
    Row: typeof FormRow;
    Group: typeof FormGroup;
    Explaination: typeof FormExplaination;
};
export default _default;
