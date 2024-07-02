import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
export interface Props {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
    columns?: 1 | 2 | 3;
    breaksOnSmall?: boolean;
    style?: React.CSSProperties;
}
declare const FormLayoutRow: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default FormLayoutRow;
