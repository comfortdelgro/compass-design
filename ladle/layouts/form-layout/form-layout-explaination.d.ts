import React, { CSSProperties } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
export interface Props {
    title?: React.ReactNode;
    css?: CSS;
    className?: string;
    description: string;
    style?: CSSProperties;
}
declare const FormLayoutExplaination: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default FormLayoutExplaination;
