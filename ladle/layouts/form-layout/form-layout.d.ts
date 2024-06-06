import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import FormLayoutExplaination from './form-layout-explaination';
import FormLayoutGroup from './form-layout-group';
import FormLayoutRow from './form-layout-row';
export interface Props {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> & {
    Row: typeof FormLayoutRow;
    Group: typeof FormLayoutGroup;
    Explaination: typeof FormLayoutExplaination;
};
export default _default;
